/*

src/context/LoadingContext.js

*/

// loading context, calls Loader every time there's a change of state on setIsLoading

import { createContext, useState } from 'react';
import Loader from '../components/common/Loader/Loader';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Loader />
      {children}
    </LoadingContext.Provider>
  );
};
