import { useState } from 'react';
import { PageWrapper } from '../../hoc/PageWrapper/PageWrapper';
import { SCRAPE } from '../../constants/endpoints';

export const Home = (): JSX.Element => {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const scrape = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(SCRAPE, {
        method: 'GET',
      });
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch {
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const displayData = () => {
    if (isLoading) return <p>Loading...</p>;
    if (data === undefined) return;
    if (!data) return <p>Error</p>;

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold underline">
        Under construction for now!
      </h1>
      <p className="text-[12rem]">🏗️</p>
      <button onClick={scrape}>Scrape</button>
      {displayData()}{' '}
    </PageWrapper>
  );
};
