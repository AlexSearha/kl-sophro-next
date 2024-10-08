import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

export default function ConnexionBtnMenu({ connected }: { connected: boolean }) {
  const router = useRouter();

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center px-2 py-3">
            <UserCircleIcon
              className={`h-7 w-7 ${
                connected ? 'text-greena-400 hover:text-greena-500' : 'text-black/75 hover:text-black/40'
              }`}
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
          <Menu.Items className="absolute right-0 mt-1 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={connected ? () => router.push('/dashboard') : () => router.push('/auth/login')}
                    className={`${
                      active ? 'bg-greena-400 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {connected ? 'Mon Compte' : 'Connexion'}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={connected ? () => router.push('/logout') : () => router.push('/auth/register')}
                    className={`${
                      active ? 'bg-greena-400 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {connected ? 'Déconnexion' : `S'inscrire`}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
