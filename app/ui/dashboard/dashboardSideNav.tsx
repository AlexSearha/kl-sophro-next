'use client';

import Image from 'next/image';
import Logo from '@/public/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function DashboardSideNav() {
  const [isFocus, setIsFocus] = useState(false);
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
      <div id="nav-menu">
        <nav>
          <Link href="/dashboard" className="h-10 w-full p-1">
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="flex justify-center items-center h-10 w-full relative">
        <PowerIcon
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="h-7 w-7 text-black/75 hover:text-black/40 cursor-pointer"
          aria-hidden="true"
        />
        <div
          id="popover-logout"
          className={`absolute -bottom-3 left-0 h-6 text-sm w-full flex justify-center items-center transition-opacity transition-height duration-300 ${
            isFocus ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Se déconnecter
        </div>
      </div>
    </div>
  );
}
