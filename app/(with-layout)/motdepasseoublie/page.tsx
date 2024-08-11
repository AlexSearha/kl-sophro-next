'use client';

import { lusitana } from '@/app/ui/fonts';
import ForgottenPasswordForm from '@/app/ui/motdepasseoublie/forgottenPasswordForm';

export default function ForgottenPassword() {
  return (
    <div
      id="contact-form"
      className="flex flex-col grow py-6 md:flex-row w-full md:max-w-6xl mx-auto"
    >
      <div
        id="contact-form__desc"
        className="flex flex-col items-center justify-center gap-6 px-6 md:w-1/2 md:items-start"
      >
        <h1
          className={`${lusitana.className} text-4xl text-greena-400 md:text-5xl font-bold`}
        >
          Mot de passe oublié ?
        </h1>
        <p className="text-justify">{`Veuillez saisir votre email associé a votre compte, si ce compte existe, un email vous sera envoyé avec une procédure de réinitatilisation de votre mot de passe`}</p>
      </div>
      <ForgottenPasswordForm />
    </div>
  );
}
