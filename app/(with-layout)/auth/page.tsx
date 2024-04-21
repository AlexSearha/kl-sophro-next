'use client';

import LoginForm from '@/app/ui/auth/loginForm';
import SignupForm from '@/app/ui/auth/signupForm';
import { lusitana } from '@/app/ui/fonts';
import { Dispatch, createContext, useReducer, useState } from 'react';

type AuthContextType = {
  state: counterState;
  dispatch: Dispatch<counterAction>;
};

type counterState = {
  isAuthenticated: boolean;
  loginRowFormData: {
    email: string;
    password: string;
  };
  signupRowFormData: {
    lastname: string;
    firstname: string;
    phone: string;
    email: string;
    password: string;
  };
};

type counterAction = {
  type: 'LOGIN' | 'LOGOUT' | 'PUT-LOGIN-DATA' | 'PUT-SIGNUP-DATA';
  payload: { value: any };
  fieldName?: string;
};

const initialState = {
  isAuthenticated: false,
  loginRowFormData: {
    email: '',
    password: '',
  },
  signupRowFormData: {
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
    password: '',
  },
};

export const authContext = createContext<AuthContextType>({
  state: initialState,
  dispatch: () => {},
});

const authReducer = (state: counterState, action: counterAction) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    case 'PUT-LOGIN-DATA':
      if (action.fieldName) {
        return {
          ...state,
          loginRowFormData: {
            ...state.loginRowFormData,
            [action.fieldName]: action.payload.value,
          },
        };
      }
    case 'PUT-SIGNUP-DATA':
      if (action.fieldName) {
        return {
          ...state,
          signupRowFormData: {
            ...state.signupRowFormData,
            [action.fieldName]: action.payload.value,
          },
        };
      }

    default:
      return state;
  }
};

export default function LoginPage() {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isLogin, setIsLogin] = useState(true);

  const buttonClass1 = isLogin
    ? ' bg-greena-400 text-white '
    : ' text-greena-400 hover:bg-slate-200';
  const buttonClass2 = isLogin
    ? ' text-greena-400 hover:bg-slate-200'
    : ' bg-greena-400 text-white';

  return (
    <authContext.Provider value={{ state, dispatch }}>
      <div className="flex flex-col items-center my-4 h-auto">
        <div className="flex justify-center bg-white gap-4 shadow p-2 mb-10 rounded ">
          <button
            onClick={() => setIsLogin(true)}
            className={`${lusitana.className} text-2xl font-bold transition-all rounded px-2 py-1 ${buttonClass1}`}
          >
            Connexion
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`${lusitana.className} text-2xl font-bold transition-all rounded px-2 py-1 ${buttonClass2}`}
          >
            Inscription
          </button>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </authContext.Provider>
  );
}
