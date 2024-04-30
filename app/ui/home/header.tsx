'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import Logo from '@/public/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import Image from 'next/image';
import { Menu } from '@headlessui/react';
import NavigationBtnMenu from '../menu/navigation-btn-menu';
import ConnexionBtnMenu from '../menu/connexion-btn-menu';

export function Header() {
  const connected = true;

  return (
    <header className="flex w-full justify-between items-center py-5 px-5 md:max-w-7xl md:py-10 md:px-14 ">
      <Link href="/">
        <Image src={Logo} width={205} alt="Logo de Katia Lemaire Sophrologue" />
      </Link>

      <div className="flex flex-col">
        <Menu as="div" className="relative inline-block text-left">
          <button className="inline-flex w-full font-bold justify-center rounded-md transition-colors duration-300 bg-greena-400 px-4 py-2 text-sm text-white hover:bg-greena-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <Link href="/dashboard">Prendre RDV</Link>
          </button>
        </Menu>

        {/* First profil icon */}
        <div className="flex justify-between">
          <ConnexionBtnMenu connected={connected} />
          <NavigationBtnMenu connected={connected} />
        </div>
      </div>
    </header>
  );
}
