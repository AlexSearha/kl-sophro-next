import { useLazyPostFetchData } from '@/app/lib/hooks';
import { LoginFormResponse } from '@/app/types';
import { useEffect, useRef } from 'react';
import { lusitana } from '../fonts';
import Link from 'next/link';
import LoadingSubmitForm from '../contact/Loading';
import {
  AlertErrorNotification,
  AlertSuccessNotification,
} from '../alerte-notification';

export default function SignupForm() {
  const formRef = useRef(null);
  const { fetchData, isLoading, isError, data } =
    useLazyPostFetchData<LoginFormResponse>();

  async function loginUser(formData: FormData) {
    const rowFormData = {
      lastname: formData.get('lastname'),
      firstname: formData.get('firstname'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    if (rowFormData.email && rowFormData.password) {
      fetchData('http://localhost:3001/client', rowFormData);
    }
  }

  useEffect(() => {
    if (data && formRef.current != null) {
      (formRef.current as HTMLFormElement).reset();
    }
  }, [data, isError]);

  {
    /* TODO: Ajouter le AccessToken au headers */
  }
  useEffect(() => {
    if (data && !isLoading) {
      const accessToken = data.accessToken;

      // redirect('/dashboard');
    }
  }, [data, isLoading]);

  return (
    <div className="w-full max-w-[500px] px-3 md:w-1/2">
      <h1
        className={`${lusitana.className} text-4xl font-bold mb-6 flex justify-center`}
      >{`S'enregistrer`}</h1>

      <form
        ref={formRef}
        action={loginUser}
        className="flex flex-col justify-center bg-white p-6 rounded-xl shadow-xl"
      >
        <div className="flex gap-2">
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className={`${lusitana.className} block font-bold text-xl`}
            >
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="(ex: Durand)"
              required
              className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className={`${lusitana.className} block font-bold text-xl`}
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="(ex: Marie)"
              required
              className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className={`${lusitana.className} block font-bold text-xl`}
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(ex: 06123456789)"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className={`${lusitana.className} block font-bold text-xl`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="(ex: marie.durand@gmail.com)"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className={`${lusitana.className} block font-bold text-xl`}
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="(ex: ******)"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 mb-2 bg-greena-400 text-white font-semibold rounded transition-all hover:bg-greena-500 focus:outline-none focus:ring focus:border-greena-400"
        >
          {isLoading ? <LoadingSubmitForm /> : 'Créer un compte'}
        </button>
        {isError ? (
          <AlertErrorNotification message="Une erreur s'est produite lors de la connexion" />
        ) : null}
        {data ? (
          <AlertSuccessNotification message="Vous êtes connecté !" />
        ) : null}
      </form>
    </div>
  );
}
