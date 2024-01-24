'use client';

import { Fragment } from "react";
import Link from "next/link";
import Logo from "@/public/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png"
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { EditActiveIcon, EditInactiveIcon } from "@/app/lib/icons";
import { UserCircleIcon } from "@heroicons/react/20/solid";

export function Header() {
    return (
    <header className="flex w-full justify-between items-center py-5 px-4 md:py-10 md:px-24">
      
      <Link href="/">
        <Image src={Logo} 
          width={205}
          alt="Logo de Katia Lemaire Sophrologue" 
        />
      </Link>
      
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <button className="inline-flex w-full font-bold justify-center rounded-md bg-greena-400 px-4 py-2 text-sm text-white hover:bg-greena-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <Link href="/dashboard">
              Prendre RDV
            </Link>
          </button>
        </Menu>
        
        <div>
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <UserCircleIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
        </div>
      </div>       
    </header>
    )
}