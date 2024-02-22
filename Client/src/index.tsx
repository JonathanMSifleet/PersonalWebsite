import './index.css';
import { createRoot } from 'react-dom/client';
import { detect } from 'detect-browser';
import { StrictMode, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes as router } from './routes';

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
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
