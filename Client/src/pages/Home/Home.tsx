import { useState } from 'react';
import { PageWrapper } from '../../hoc/PageWrapper/PageWrapper';
import { SCRAPE } from '../../constants/endpoints';

export const Home = (): JSX.Element => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const scrape = async () => {
    setIsLoading(true);
    const res = await fetch(SCRAPE, {
      method: 'GET',
    });
    const data = await res.json();
    console.log(data);
    setData(data);

    setIsLoading(false);
  };

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold underline">
        Under construction for now!
      </h1>
      <p className="text-[12rem]">🏗️</p>

      <button onClick={scrape}>Scrape</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </PageWrapper>
  );
};
