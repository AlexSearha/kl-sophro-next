'use client';

import { AlertErrorNotification, AlertSuccessNotification } from "@/app/ui/alerte-notification";
import { useEffect, useRef } from "react"
import { lusitana } from "../fonts";
import { useLazyPostFetchData } from "@/app/lib/hooks";
import LoadingSubmitForm from "../contact/Loading";


export default function ForgottenPasswordForm() {
    const formRef = useRef(null);
    const {fetchData, isLoading, isError, data} = useLazyPostFetchData();

    async function createFormData(formData: FormData) {
      const rawFormData = {
        email: formData.get('email'),
      }
            
      if(rawFormData.email) {
        {/* TODO: Ajouter la bonne URL */}
        fetchData('http://localhost:3001/reset-password', rawFormData);
      }
    }

    useEffect(() => {
      if (data && formRef.current != null) {
        (formRef.current as HTMLFormElement).reset();
      }
    }, [data, isError]);
   
    return (
        <div className="w-full max-w-[500px] px-3 md:w-1/2">
      <form ref={formRef} action={createFormData} className="flex flex-col justify-center bg-white p-6 rounded-xl shadow-xl">
        <div className="mb-4">
          <label htmlFor="email" className={`${lusitana.className} block font-bold text-xl`}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        
        <button type="submit" 
                className="px-4 py-2 mb-2 bg-greena-400 text-white font-semibold rounded transition-all hover:bg-greena-500 focus:outline-none focus:ring focus:border-greena-400">
                  {isLoading ? <LoadingSubmitForm /> : "Envoyer"}
        </button>
        { isError ? 
            <AlertErrorNotification 
                message="Une erreur s'est produite lors de l'envoi de votre email" 
            /> : null
        }
        { data ? 
            <AlertSuccessNotification 
                message="Votre email a bien été envoyé" 
            /> : null
        }
      </form>
    </div>
    )
    
  }