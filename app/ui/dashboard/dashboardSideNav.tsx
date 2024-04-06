'use client';

import Image from 'next/image';
import Logo from '@/public/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DashboardSideNav() {
  const [isFocus, setIsFocus] = useState(false);
  const pathName = usePathname();
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
    <div className="flex flex-col justify-between h-full">
      <Link href="/">
        <Image
          src={Logo}
          width={250}
          height={250}
          alt="Logo de Katia Lemaire Sophrologue"
        />
      </Link>
      <div id="nav-menu w-full">
        <nav>
          <ul className="flex flex-col gap-2 items-center text-xl text-white">
            <li className={`transition-all hover:text-slate-300 ${pathName === "/dashboard" ? "underline underline-offset-4" : ""}`}>
              <Link href="/dashboard" className="h-10 w-full p-1">
                Dashboard
              </Link>
            </li>
            <li className={`transition-all hover:text-slate-300 ${pathName === "/dashboard/dossiers" ? "underline underline-offset-4" : ""}`}>
              <Link href="/dashboard/dossiers" className="h-10 w-full p-1">
                Dossiers
              </Link>
            </li>
            <li className={`transition-all hover:text-slate-300 ${pathName === "/dashboard/clients" ? "underline underline-offset-4" : ""}`}>
              <Link href="/dashboard/clients" className="h-10 w-full p-1">
                Clients
              </Link>
            </li>
            <li className={`transition-all hover:text-slate-300 ${pathName === "/dashboard/rendez-vous" ? "underline underline-offset-4" : ""}`}>
              <Link href="/dashboard/rendez-vous" className="h-10 w-full p-1">
                Rendez-vous
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center h-10 w-full relative">
        <PowerIcon
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="h-7 w-7 text-white/75 hover:text-white/40 cursor-pointer"
          aria-hidden="true"
        />
        <div
          id="popover-logout"
          className={`absolute -bottom-6 left-0 h-6 text-sm w-full text-white flex justify-center items-center transition-opacity transition-height duration-300 ${
            isFocus ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Se déconnecter
        </div>
      </div>
    </div>
  );
}
