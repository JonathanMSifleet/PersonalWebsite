import { createAWSErr } from '../utils/createAWSErr';
import cors from '@middy/http-cors';
import type { IHttpRes } from '../interfaces/httpRes';
import middy from '@middy/core';

const regex = /<div class='fl_name'>/g;

type Film = {
  title: string;
  year: number;
  rating: number;
};

const scrape = async (): Promise<IHttpRes> => {
  let body = '';
  let films: Film[] = [];

  let i = 1;
  try {
    while (!body.includes("<span class='fl_nav_deadlink'>next</span>")) {
      const response = await fetch(
        `https://www.criticker.com/ratings/jonwashere/?p=${i}`
      );
      body = await response.text();

      films = [...films, ...formatFilm(body)];

      console.log(`Finished scraping page ${i}`);
      i++;
    }

    return {
      statusCode: 200,
      body: JSON.stringify(films),
    };
  } catch (error) {
    if (error instanceof Error) return createAWSErr(500, error.message);
  }

  return createAWSErr(500, 'Unhandled Exception');
};

const formatFilm = (body: string): Film[] => {
  let match;
  const films: Film[] = [];

  while ((match = regex.exec(body)) !== null) {
    const film = body
      .substring(match.index, match.index + 1000)
      .split('\n')
      .slice(1, 7)
      .join(' ')
      .replace(/<[^>]*>/g, '')
      .trim();

    let yearMatch = RegExp(/\(\d{4}\)/).exec(film);
    const title = film.split(yearMatch![0])[0].trim();
    const rating = film.split(yearMatch![0])[1].trim();

    const year = yearMatch![0].toString().replace('(', '').replace(')', '');

    films.push({
      rating: Number(rating),
      title,
      year: Number(year),
    });
  }

  return films;
};

export const handler = middy(scrape).use(cors());
