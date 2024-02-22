import { createAWSErr } from '../utils/createAWSErr';
import cors from '@middy/http-cors';
import type { IHttpRes } from '../interfaces/httpRes';
import middy from '@middy/core';

const scrape = async (): Promise<IHttpRes> => {
  const regex = /<ul class='fl_titlelist' id='fl_titlelist_3'>/g;
  let filmHtml = '';
  let currentFilmHtml = '';

  let i = 1;
  try {
    while (
      !currentFilmHtml.includes("<a class='page-link' href='#'>Next</a></li>")
    ) {
      const response = await fetch(
        `https://www.criticker.com/ratings/jonwashere/?p=${i}`
      );
      const body: any = await response.text();
      if (body instanceof Error) return createAWSErr(500, body.toString());

      let match;
      while ((match = regex.exec(body)) !== null) {
        currentFilmHtml = body.substring(match.index);
      }

      filmHtml += currentFilmHtml.substring(
        0,
        currentFilmHtml.indexOf('</ul>')
      );

      console.log(`Finished scraping page ${i}`);

      i++;
    }

    return {
      statusCode: 200,
      body: JSON.stringify(currentFilmHtml),
    };
  } catch (error) {
    if (error instanceof Error) return createAWSErr(404, error.message);
  }

  return createAWSErr(500, 'Unhandled Exception');
};

export const handler = middy(scrape).use(cors());
