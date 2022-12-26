import React,{ useContext, createContext } from "react";
interface LoadingContextInterface {
  loading: boolean;
  show: () => void;
  hide: () => void;
}

export const LoadingContext = createContext<LoadingContextInterface>({} as LoadingContextInterface);

export const useLoading = () => useContext(LoadingContext);
