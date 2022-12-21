import React,{ useContext, createContext } from "react";
interface LoadingContextInterface {
  loading: boolean;
  show: () => void;
  hide: () => void;
}

export const LoadingContext = createContext<LoadingContextInterface | null>(
  null
);

export const useLoading = () => useContext(LoadingContext);
