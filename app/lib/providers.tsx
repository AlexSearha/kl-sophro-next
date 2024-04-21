import { createContext, useReducer, Dispatch, ReactNode } from 'react';
import {
  adminAction,
  adminReducer,
  adminReducerInitialValues,
  adminReducerState,
} from './reducers';

type AdminContextType = {
  state: adminReducerState;
  dispatch: Dispatch<adminAction>;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminContext = createContext<AdminContextType>({
  state: adminReducerInitialValues,
  dispatch: () => {},
});
export const AdminProvider = ({ children }: AdminProviderProps) => {
  const [state, dispatch] = useReducer(adminReducer, adminReducerInitialValues);

  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
