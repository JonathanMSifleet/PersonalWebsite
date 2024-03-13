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

  const fetchSql = async () => {
    let db;
    // initialise indexeddb
    const request = indexedDB.open('MyTestDatabase', 3);

    request.onerror = () => {
      console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event) => {
      db = event!.target!.result!;
    };
  };

  const displayData = () => {
    switch (true) {
      case isLoading:
        console.log('loading');
        return <Spinner />;
      case data === undefined:
        return;
      case !data:
        return <p>Error</p>;
      default:
        return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }
  };

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold underline">
        Under construction for now!
      </h1>
      <p className="text-[12rem]">🏗️</p>
      <Toggle enabled={localDb} onChange={onToggle} />
      <button onClick={scrape}>Fetch films</button>
      <button onClick={fetchSql}>Store sql package locally</button>
      {displayData()}
    </PageWrapper>
  );
};
