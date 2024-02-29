import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/app/lib/icons";
import Link from "next/link";

export function Footer() {
    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className="bg-greena-600 text-white px-6 py-10">
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-col-reverse items-center gap-6 mb-10 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:w-1/2">
                    <h4 className="text-center">{`Besoin d'un rendez-vous?`}</h4>
                    <button className="font-bold text-sm p-4 max-w-44 bg-greena-400 rounded hover:bg-greena-500 transition-colors duration-300">
                        <Link href="/dashboard">JE PRENDS LE MIENS</Link>
                    </button>
                </div>
                <p className="text-center italic md:w-1/2">{`"Sophrologue sur Noyal-Muzillac(Peripherie de Vannes), j'accompagne les particuliers et les entreprises en présentiel ou distanciel"`}</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4">
                <p className="text-center text-sm md:w-1/2">{`© KATIA LEMAIRE SOPHROLOGUE - ${year}`} <br /> {`Mentions légales - Politique de confidentialité - CGV`}</p>
                <div id="socials-medias" className="flex justify-center md:w-1/2">
                    <Link href="https://www.facebook.com/KL-Sophrologue-100112158925622">
                        <FacebookIcon className="w-8 h-8 mr-4" aria-hidden="true" />
                    </Link>
                    <Link href="https://www.facebook.com/KL-Sophrologue-100112158925622">
                        <YouTubeIcon className="w-8 h-8 mr-4" aria-hidden="true" />
                    </Link>
                    <Link href="https://www.facebook.com/KL-Sophrologue-100112158925622">
                        <InstagramIcon className="w-8 h-8 mr-4 " aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
}

