'use client';
import { lusitana } from "@/app/ui/fonts"
import Image from "next/image";
import NoAvatar from "@/public/no-profile-picture-icon.webp";
import { useRouter } from "next/navigation"

export default function SingleClientPage({
    params,
    image
  }: {
    params: { id: number }
    image: string
  }) {
    const router = useRouter();

    if(isNaN(params.id)){
            router.push('/dashboard/client');
    }

    return (
        <>
            <h1 className={`${lusitana.className} text-3xl text-greena-500 font-bold`}>Single Client</h1>
            <div id="single-client-container" className="border-2 border-black h-full max-w-4xl w-full mx-auto">
                <div id="user-grid-container" className="grid grid-cols-6 gap-4 h-full justify-items-center items-center">
                    <div id="user-photo" className="col-start-2 col-span-4">
                        <Image className="rounded-full" src={image ? null : NoAvatar} width={250} height={250} alt='test' />
                    </div>
                    <div id="user-fullname" className="col-start-1 col-end-4">
                        <h3 className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}>Nom</h3>
                        <p className="italic">Alexis Marouf</p>
                    </div>
                    <div id="user-address" className="col-end-7 col-span-3">
                        <h3 className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}>Adresse</h3>
                        <p className="italic">22 rue des tisserands, 56190 Noyal-Muzillac</p>
                    </div>
                    <div id="user-phone" className="col-start-1 col-end-4">
                        <h3 className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}>Téléphone</h3>
                        <p className="italic">06 26 90 40 74</p>
                    </div>
                    <div id="user-email" className="col-end-7 col-span-3">
                        <h3 className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}>Email</h3>
                        <a href="mailto:alexis.marouf@hotmail.fr" className="italic transition-all hover:text-greena-400 hover:underline hover:underline-offset-4">alexis.marouf@hotmail.fr</a>
                    </div>
                </div>
            </div>
        </>
    )
  }