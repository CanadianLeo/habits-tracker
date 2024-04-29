import { ReactNode } from "react";

export type LoaderContextType = {
  isLoading: boolean;
  incrementLoaderCounter: () => void;
  decrementLoaderCounter: () => void;
};

export type LoaderContextProvider = {
  children: ReactNode;
};