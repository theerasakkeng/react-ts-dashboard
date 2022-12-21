import { useState, ReactNode } from "react";
import { LoadingContext } from "../context/loading";

import Loading from "../components/loading/Loading.js";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        loading: loading,
        show: () => setLoading(true),
        hide: () => setLoading(false),
      }}
    >
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};
