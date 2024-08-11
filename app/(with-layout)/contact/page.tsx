'use client';
import ContactForm from '@/app/ui/contact/contact-form';
import { lusitana } from '@/app/ui/fonts';

export default function PageContact() {
  return (
    <div
      id="contact-form"
      className="flex flex-col grow py-6 md:flex-row-reverse w-full md:max-w-6xl mx-auto"
    >
      <div id="contact-form__desc" className="flex flex-col gap-6 px-6 md:w-1/2">
        <h1 className={`${lusitana.className} text-4xl text-greena-400 md:text-5xl font-bold`}>
          Contactez-moi
        </h1>
        <p className="text-justify">{`Vous avez une question ? Vous souhaitez en savoir plus sur mes services ? N'hésitez pas à me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dans les plus brefs délais.`}</p>
      </div>
      <ContactForm />
    </div>
  );
}
