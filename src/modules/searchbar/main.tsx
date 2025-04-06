import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../index.css';

const App = () => {
  return (
    <div className="flex w-full bg-blue-950 p-8">
      <h1 className="text-3xl font-bold">Searchbar</h1>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
