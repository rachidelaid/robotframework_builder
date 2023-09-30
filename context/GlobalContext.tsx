"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  url: "",
  setUrl: (url: string) => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [url, setUrl] = useState("");

  return (
    <GlobalContext.Provider value={{ url, setUrl }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
