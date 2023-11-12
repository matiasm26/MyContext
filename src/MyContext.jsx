import { useState, createContext } from "react";
import { photos } from './photos.json';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [fotos, setFotos] = useState(photos);
  const globalState = { fotos, setFotos };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
