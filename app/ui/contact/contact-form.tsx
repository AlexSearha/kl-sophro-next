'use client';

import {
  AlertErrorNotification,
  AlertSuccessNotification,
} from '@/app/ui/alerte-notification';
import { useEffect, useRef } from 'react';
import { lusitana } from '../fonts';
import { useLazyPostFetchData } from '@/app/lib/hooks';
import LoadingSubmitForm from './Loading';

export default function ContactForm() {
  const formRef = useRef(null);
  const { fetchData, isLoading, isError, data } = useLazyPostFetchData();

  async function createFormData(formData: FormData) {
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      serviceType: formData.get('serviceType'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    if (
      rawFormData.name &&
      rawFormData.email &&
      rawFormData.serviceType &&
      rawFormData.message
    ) {
      fetchData('http://localhost:3001/contact', rawFormData);
    }
  }

  useEffect(() => {
    if (data && formRef.current != null) {
      (formRef.current as HTMLFormElement).reset();
    }
  }, [data, isError]);

  return (
    <div className="flex flex-col w-full max-w-[500px] px-3 md:w-1/2">
      <form
        ref={formRef}
        action={createFormData}
        className="flex flex-col justify-center bg-white p-6 rounded-xl shadow-xl"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`${lusitana.className} block font-bold text-xl`}
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className={`${lusitana.className} block font-bold text-xl`}
          >
            Télephone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            maxLength={10}
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="serviceType"
            className={`${lusitana.className} block font-bold text-xl`}
          >
            Type de prestation
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md italic focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400 "
          >
            <option value="">Sélectionnez le type de prestation</option>
            <option className="not-italic" value="adulte">
              Adulte
            </option>
            <option className="not-italic" value="student">
              Étudiant
            </option>
            <option className="not-italic" value="adolescent">
              Adolescent
            </option>
            <option className="not-italic" value="entreprise">
              Entreprise
            </option>
            <option className="not-italic" value="other">
              Autre...
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className={`${lusitana.className} block font-bold text-xl`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 mb-2 bg-greena-400 text-white font-semibold rounded transition-all hover:bg-greena-500 focus:outline-none focus:ring focus:border-greena-400"
        >
          {isLoading ? <LoadingSubmitForm /> : 'Envoyer'}
        </button>
        {isError ? (
          <AlertErrorNotification message="Une erreur s'est produite lors de l'envoi de votre email" />
        ) : null}
        {data ? (
          <AlertSuccessNotification message="Votre email a bien été envoyé" />
        ) : null}
      </form>
    </div>
  );
}
