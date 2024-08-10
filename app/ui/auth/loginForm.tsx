'use client';

import { AlertErrorNotification, AlertSuccessNotification } from '@/app/ui/alerte-notification';
import { useContext, useEffect, useRef } from 'react';
import { lusitana } from '../fonts';
import LoadingSubmitForm from '../contact/Loading';
import Link from 'next/link';
import { LoginFormResponse } from '@/app/types';
import { authContext } from '@/app/(with-layout)/authentification/page';
import { useLazyPostFetchData } from '@/app/lib/hooks/fetching-hooks';

export default function LoginForm() {
  const { state, dispatch } = useContext(authContext);
  const formRef = useRef(null);
  const { fetchData, isLoading, isError, data } = useLazyPostFetchData<LoginFormResponse>();

  async function loginUser(formData: FormData) {
    const rowFormData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    if (rowFormData.email && rowFormData.password) {
      fetchData('http://localhost:3001/login', rowFormData);
    }
  }

  useEffect(() => {
    if (data && formRef.current != null) {
      (formRef.current as HTMLFormElement).reset();
    }
  }, [data, isError]);

  return (
    <div className="w-full max-w-[500px] px-3 md:w-1/2">
      <h1 className={`${lusitana.className} text-4xl font-bold mb-6 flex justify-center`}>Connexion</h1>

      <form
        ref={formRef}
        action={loginUser}
        className="flex flex-col justify-center bg-white p-6 rounded-xl shadow-xl"
      >
        <div className="mb-4">
          <label htmlFor="email" className={`${lusitana.className} block font-bold text-xl`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.loginRowFormData.email}
            onChange={(event) =>
              dispatch({
                type: 'PUT-LOGIN-DATA',
                payload: { value: event.target.value },
                fieldName: 'email',
              })
            }
            placeholder="(ex: marie.durand@gmail.com)"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className={`${lusitana.className} block font-bold text-xl`}>
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.loginRowFormData.password}
            onChange={(event) =>
              dispatch({
                type: 'PUT-LOGIN-DATA',
                payload: { value: event.target.value },
                fieldName: 'password',
              })
            }
            placeholder="(ex: ********)"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
          <p>
            <Link className="text-xs transition-all hover:text-greena-400" href="/motdepasseoublie">
              Mot de passe oublié ?
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 mb-2 bg-greena-400 text-white font-semibold rounded transition-all hover:bg-greena-500 focus:outline-none focus:ring focus:border-greena-400"
        >
          {isLoading ? <LoadingSubmitForm /> : 'Se connecter'}
        </button>
        {isError ? <AlertErrorNotification message="Une erreur s'est produite lors de la connexion" /> : null}
        {data ? <AlertSuccessNotification message="Vous êtes connecté !" /> : null}
      </form>
    </div>
  );
}
