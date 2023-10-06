import React, { createContext, useContext, useState } from "react";

const IdContext = createContext();

export const useIdContext = () => {
  return useContext(IdContext);
};

export const IdProvider = ({ children }) => {
  const [id, setId] = useState(14);

  return (
    <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>
  );
};
