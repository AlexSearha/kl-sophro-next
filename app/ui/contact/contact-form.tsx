'use client';

import { AlertErrorNotification } from "@/app/ui/alerte-notification";
import { useState } from "react"
import { lusitana } from "../fonts";

export default function ContactForm() {
    const [isFullfilled, setIsFullfilled] = useState<boolean | null>(null)

    async function createInvoice(formData: FormData) {
   
      const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        serviceType: formData.get('serviceType'),
        message: formData.get('message'),
      }
      
      if(!rawFormData.name || !rawFormData.email || !rawFormData.serviceType || !rawFormData.message) {
        setIsFullfilled(false);
      } else {
        setIsFullfilled(true);
      }
    }
   
    return (
        <div className="w-full max-w-[500px] px-3 md:w-1/2">
      <form action={createInvoice} className="flex flex-col justify-center bg-white p-6 rounded-xl shadow-xl">
        <div className="mb-4">
          <label htmlFor="name" className={`${lusitana.className} block font-bold text-xl text-greena-400`}>Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={`${lusitana.className} block font-bold text-xl text-greena-400`}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="serviceType" className={`${lusitana.className} block font-bold text-xl text-greena-400`}>Type de prestation</label>
          <select
            id="serviceType"
            name="serviceType"
            required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md italic focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400 "
          >
            {/* TODO: changer le background en vert lors de la navigation du select */}
            <option value="">Sélectionnez le type de prestation</option>
            <option className="not-italic" value="adulte">Adulte</option>
            <option className="not-italic" value="etudiant">Étudiant</option>
            <option className="not-italic" value="adolescent">Adolescent</option>
            <option className="not-italic" value="entreprise">Entreprise</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className={`${lusitana.className} block font-bold text-xl text-greena-400`}>Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            // required
            className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-greena-400 focus:border-greena-400"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-greena-400 text-white font-semibold rounded transition-all hover:bg-greena-500 focus:outline-none focus:ring focus:border-greena-400">Envoyer</button>
        {isFullfilled === false ? 
            <AlertErrorNotification 
                message="veuillez entrer tous les champs obligatoires" 
            /> : null
        }
      </form>
    </div>
    )
    
  }