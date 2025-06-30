import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../index.css';
import { SEARCHBAR_ROOT_ID } from '../../utils/env';

const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <input
      type="text"
      {...props}
      className="h-12 w-full rounded-full bg-white px-4 text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  );
};

const App = () => {
  return (
    <form method="GET" className="flex w-full flex-col items-center justify-center gap-8 bg-blue-950 p-8 text-white">
      <p className="text-3xl font-semibold">Rechercher un produit</p>

      <div className="flex gap-4">
        <Input placeholder="Marque" name="brand" />
        <Input placeholder="Modèle" name="model" />
        <Input placeholder="Série" name="serial" />
        <Input placeholder="Service ou produit" name="service" />
      </div>

      <button
        type="submit"
        className="mt-4 flex h-12 w-72 cursor-pointer items-center justify-center rounded-full bg-blue-500 font-bold text-white transition duration-200 hover:bg-blue-600"
      >
        Rechercher
      </button>
    </form>
  );
};

createRoot(document.getElementById(SEARCHBAR_ROOT_ID || 'root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
