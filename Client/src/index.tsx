import { render } from 'preact';
import './index.css';
import { useEffect } from 'preact/hooks';
import { detect } from 'detect-browser';

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('HAS_SHOWN_BROWSER_WARNING')) return;

    const browser = detect()!.name;
    if (!(browser === 'chrome' || browser === 'edge-chromium'))
      alert(
        'This website may not work properly on your browser. Please use Chrome or Edge if possible.'
      );

    localStorage.setItem('HAS_SHOWN_BROWSER_WARNING', 'true');
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Under construction for now!
      </h1>
      <p className="text-[12rem]">🏗️</p>
    </>
  );
};

render(<App />, document.getElementById('app')!);
