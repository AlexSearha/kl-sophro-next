import { faCalendarDays, faFolderOpen, faHome, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'node:path/win32';

export default function FooterClient() {
  const urlPathName = usePathname();
  const activeCss = 'bg-greena-400 text-white';
  return (
    <footer
      id="foter-client"
      className="h-20 border-t-2 border-black/15 w-full fixed bottom-0 bg-white text-sm z-20"
    >
      <div id="menu-footer-client-mobile" className="h-full flex items-center">
        <Link
          href="/mon-compte"
          id="home-button "
          className={`flex flex-col h-full justify-center items-center w-1/4 ${
            urlPathName === '/mon-compte' ? activeCss : ''
          }`}
        >
          <FontAwesomeIcon icon={faHome} size="xl" />
          <p>Accueil</p>
        </Link>
        <Link
          href="/mon-compte/rdv"
          id="appointment-button "
          className={`flex flex-col items-center justify-center h-full w-1/4 ${
            urlPathName === '/mon-compte/rdv' ? activeCss : ''
          }`}
        >
          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
          <p>Consultations</p>
        </Link>
        <Link
          href="/mon-compte/dossier"
          id="folder-button "
          className={`flex flex-col h-full justify-center items-center w-1/4 ${
            urlPathName === '/mon-compte/dossier' ? activeCss : ''
          }`}
        >
          <FontAwesomeIcon icon={faFolderOpen} size="xl" />
          <p>Dossier</p>
        </Link>
        <Link
          href="/mon-compte/parametres"
          id="user-parameter-button "
          className={`flex flex-col items-center w-1/4 h-full justify-center ${
            urlPathName === '/mon-compte/parametres' ? activeCss : ''
          }`}
        >
          <FontAwesomeIcon icon={faUserGear} size="xl" />
          <p>Compte</p>
        </Link>
      </div>
    </footer>
  );
}
