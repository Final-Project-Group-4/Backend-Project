import { createContext, useReducer, useEffect } from 'react';
import Reducer from './Reducer';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoading: false,
  isError: false,
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        isError: state.isError,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
