import { useState } from 'react';
import { PageWrapper } from '../../hoc/PageWrapper/PageWrapper';
import { SCRAPE } from '../../constants/endpoints';
import { Toggle } from '../../components/Toggle/Toggle';
import { Spinner } from '../../components/Spinner/Spinner';

export const Home = (): JSX.Element => {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [localDb, setLocalDb] = useState(true);

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

  const onToggle = () => setLocalDb(!localDb);

  const displayData = () => {
    if (isLoading) return <Spinner />;
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
      <Toggle enabled={localDb} onChange={onToggle} />
      <button onClick={scrape}>Fetch films</button>
      {displayData()}
    </PageWrapper>
  );
};
