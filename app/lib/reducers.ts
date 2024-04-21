import { adminReducerInitialValuesProps } from '../types';

export const adminReducerInitialValues: adminReducerInitialValuesProps = {
  openModal: false,
};

export type adminAction = {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL';
  payload: { value: any };
};

export type adminReducerState = {
  openModal: boolean;
};

export const adminReducer = (state: adminReducerState, action: adminAction) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        openModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        openModal: false,
      };

    default:
      return state;
  }
};
