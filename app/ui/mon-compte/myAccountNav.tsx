'use client';
import Image from 'next/image';
import Logo from '@/public/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MyAccountNav() {
  const [isFocus, setIsFocus] = useState(false);
  const urlPathName = usePathname();
  const pathName = () => {
    const [firstElem, secondElem, thridElem] = urlPathName.split('/');
    if (thridElem === undefined) {
      return `/${secondElem}`;
    }
    return `/${secondElem}/${thridElem}`;
  };
  const handleMouseEnter = () => {
    setIsFocus(true);
  };
  const handleMouseLeave = () => {
    setIsFocus(false);
  };
  const handleClick = () => {
    console.log('handleclick');
  };

  return (
    <div className="flex-grow">
      <div id="nav-menu" className="flex justify-center">
        <nav>
          <ul className="flex gap-4 items-center text-xl ">
            <li
              className={`transition-all ${
                pathName() === '/mon-compte'
                  ? 'bg-greena-500 p-1 text-white rounded font-bold'
                  : 'hover:text-greena-400'
              }`}
            >
              <Link href="/mon-compte" className="h-10 w-full p-1">
                Accueil
              </Link>
            </li>
            <li
              className={`transition-all ${
                pathName() === '/mon-compte/rdv'
                  ? 'bg-greena-500 p-1 text-white rounded font-bold'
                  : 'hover:text-greena-400'
              }`}
            >
              <Link href="/mon-compte/rdv" className="h-10 w-full p-1">
                Rendez-vous
              </Link>
            </li>
            <li
              className={`transition-all ${
                pathName() === '/mon-compte/clients'
                  ? 'bg-greena-500 p-1 text-white rounded font-bold'
                  : 'hover:text-greena-400'
              }`}
            >
              <Link href="/mon-compte/clients" className="h-10 w-full p-1">
                Sécurité
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
