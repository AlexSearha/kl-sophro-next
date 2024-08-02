import React, { createContext, useReducer, ReactNode, Dispatch, useContext } from 'react';

type ModalWidth = 'full' | '1/2';

interface ModalState {
  isShow?: boolean;
  title: string;
  content?: null | ReactNode;
  width?: ModalWidth;
}

type ModalAction = { type: 'update_modal'; payload: ModalState } | { type: 'clean_and_close_modal' };

interface ModalContextProps {
  Modal: ModalState;
  dispatch: Dispatch<ModalAction>;
}

export const initialState: ModalState = {
  isShow: false,
  title: '',
  content: null,
  width: 'full',
};

const ModalContext = createContext<ModalContextProps>({
  Modal: initialState,
  dispatch: () => {},
});

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'update_modal':
      return {
        ...state,
        isShow: true,
        title: action.payload.title,
        content: action.payload.content,
        width: action.payload.width ? action.payload.width : initialState.width,
      };
    case 'clean_and_close_modal':
      return initialState;
    default:
      console.log('Unknown action');
      return state;
  }
};

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [Modal, dispatch] = useReducer(modalReducer, initialState);

  return <ModalContext.Provider value={{ Modal, dispatch }}>{children}</ModalContext.Provider>;
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export { useModal, ModalProvider, ModalContext };
