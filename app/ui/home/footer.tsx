import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-greena-600 text-white w-full flex justify-center px-6 py-10">
      <div className="max-w-6xl">
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
          <p className="text-center text-sm md:w-1/2">
            {`© KATIA LEMAIRE SOPHROLOGUE - ${year}`} <br />{' '}
            {`Mentions légales - Politique de confidentialité - CGV`}
          </p>
          <div id="socials-medias" className="flex gap-2 justify-center md:w-1/2">
            <Link
              href="https://www.facebook.com/KL-Sophrologue-100112158925622"
              id="social-fb"
              target="_blank"
              className="flex justify-center items-center w-9 h-9 bg-white transition-colors hover:bg-slate-400 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faFacebook} size="sm" className="text-blue-700 p-2" />
            </Link>
            <Link
              href="https://www.youtube.com/KL-Sophrologue-100112158925622"
              id="social-yt"
              target="_blank"
              className="flex justify-center items-center w-9 h-9 bg-white transition-colors hover:bg-slate-400 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faYoutube} size="sm" className="text-red-700 p-2" />
            </Link>
            <Link
              href="https://www.instagram.com/KL-Sophrologue-100112158925622"
              id="social-instagram"
              target="_blank"
              className="flex justify-center items-center w-9 h-9 bg-white transition-colors hover:bg-slate-400 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faInstagram} size="sm" className="text-pink-600 p-2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
