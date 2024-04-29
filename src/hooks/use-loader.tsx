import { useContext } from "react";
import { LoaderContext } from "components/loader/loader-context";

export const useLoader = () => {
  const context = useContext(LoaderContext);

  const withLoader = async (func: Promise<any>) => {
    if (context) {
      try {
        context.incrementLoaderCounter();
        await func;
      } catch (e) {
        // TODO: Add error
      } finally {
        context.decrementLoaderCounter();
      }
    }
  }

  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return { withLoader, isLoading: context.isLoading };
};
