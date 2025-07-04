import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const useLoadingContext = () => useContext(LoadingContext);

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
