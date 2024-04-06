import { lusitana } from "@/app/ui/fonts"
import ResetPasswordForm from "@/app/ui/reinitialiser-mot-de-passe/page"

export default function ResetPasswordPage({
    params,
  }: {
    params: { token: string }
  }) {
    return (
        <div 
           id="contact-form" 
           className="flex flex-col grow py-6 md:flex-row w-full md:max-w-6xl mx-auto"
         >
         <div id="contact-form__desc" className="flex flex-col gap-6 px-6 md:w-1/2">
           <h1 className={`${lusitana.className} text-4xl text-greena-400 md:text-5xl font-bold`}>
                Réinitialisation du mot de passe
            </h1>
           <p className="text-justify">{`
                Veuillez entrer votre nouveau mot de passe dans le formulaire ci-joint
                `}
           </p>
         </div>
         <ResetPasswordForm token={params.token} />
        </div>
       )
  }