'use client';
import Image from 'next/image';
import Logo from '@/public/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import useScreenDetect from '@/app/lib/hooks/screen-detect';

export default function DashboardSideNav() {
  const [isFocus, setIsFocus] = useState(false);
  const isMobileSize = useScreenDetect();
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
    <div className="flex flex-col h-full ">
      <Link className="w-full flex justify-center items-center my-4" href="/">
        <Image src={Logo} priority={true} width={250} height={250} alt="Logo de Katia Lemaire Sophrologue" />
      </Link>
      <nav className="my-4 grow flex justify-center items-center">
        <ul className="flex md:flex-col gap-3 justify-center items-center text-xl text-white">
          <li
            className={`transition-all ${
              pathName() === '/dashboard'
                ? 'bg-white p-1 text-greena-500 rounded font-bold'
                : 'hover:text-slate-300'
            }`}
          >
            <Link href="/dashboard" className="h-10 w-full p-1">
              Dashboard
            </Link>
          </li>
          <li
            className={`transition-all ${
              pathName() === '/dashboard/dossiers'
                ? 'bg-white p-1 text-greena-500 rounded font-bold'
                : 'hover:text-slate-300'
            }`}
          >
            <Link href="/dashboard/dossiers" className="h-10 w-full p-1">
              Dossiers
            </Link>
          </li>
          <li
            className={`transition-all ${
              pathName() === '/dashboard/clients'
                ? 'bg-white p-1 text-greena-500 rounded font-bold'
                : 'hover:text-slate-300'
            }`}
          >
            <Link href="/dashboard/clients" className="h-10 w-full p-1">
              Clients
            </Link>
          </li>
        </ul>
      </nav>
      <Tooltip title="Se déconnecter">
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          size="xl"
          className={`absolute ${
            isMobileSize ? 'top-0' : 'bottom-0'
          } right-0  p-4 text-white transition-colors hover:text-slate-300 cursor-pointer`}
        />
      </Tooltip>
    </div>
  );
}
