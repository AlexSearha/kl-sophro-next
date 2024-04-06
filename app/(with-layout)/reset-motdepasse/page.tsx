'use client';

import { lusitana } from "@/app/ui/fonts";
import ResetPasswordForm from "@/app/ui/reset-motdepasse/resetPasswordForm";

export default function PageContact() {
     
    return (
     <div 
        id="contact-form" 
        className="flex flex-col grow py-6 md:flex-row-reverse w-full md:max-w-6xl mx-auto"
      >
      <ResetPasswordForm />
      <div id="contact-form__desc" className="flex flex-col gap-6 px-6 md:w-1/2">
        <h1 className={`${lusitana.className} text-4xl text-greena-400 md:text-5xl font-bold`}>Réinitialisation du mot de passe</h1>
        <p className="text-justify">{`Veuillez saisir votre email associé a votre compte, si ce compte existe, un email vous sera envoyé avec une procédure de réinitatilisation de votre mot de passe`}</p>
      </div>
     </div>
    )
    
  }