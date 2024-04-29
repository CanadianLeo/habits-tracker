import React, { createContext, useState } from 'react';
import { Loader } from "components/loader";
import { LoaderContextProvider, LoaderContextType } from './types';


export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined
);

export const LoaderProvider: React.FC<LoaderContextProvider> = ({
  children,
}) => {
  const [isLoadingCounter, setIsLoadingCounter] = useState(0);
  let loadingCounter = 0;

  const contextValue: LoaderContextType = {
    isLoading: isLoadingCounter > 0,
    incrementLoaderCounter: () => {
      setIsLoadingCounter(++loadingCounter);
    },
    decrementLoaderCounter: () => {
      setIsLoadingCounter(--loadingCounter);
    },
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {isLoadingCounter > 0 && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};