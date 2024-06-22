'use client';
import { ClientDossierProps } from '@/app/types';
import { lusitana } from '@/app/ui/fonts';
import PaginationElement from '@/app/ui/pagination';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

export default function DossiersPage({ params }: { params: { slug: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredClients, setFilteredClients] = useState<ClientDossierProps[]>(
    []
  );

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const clients = [
    {
      id: 1,
      lastName: 'Marouf',
      firstName: 'Alexis',
      protocol: 'Peur du vide',
    },
    {
      id: 2,
      lastName: 'Lemaire',
      firstName: 'Micheline',
      protocol: 'Gyoza acros',
    },
    {
      id: 3,
      lastName: 'Dubois',
      firstName: 'Sophie',
      protocol: 'Thérapie par le son',
    },
    {
      id: 4,
      lastName: 'Durand',
      firstName: 'Jean',
      protocol: 'Gestion du stress',
    },
    {
      id: 5,
      lastName: 'Petit',
      firstName: 'Marie',
      protocol: 'Relaxation profonde',
    },
    {
      id: 6,
      lastName: 'Moreau',
      firstName: 'Luc',
      protocol: 'Acupuncture',
    },
    {
      id: 7,
      lastName: 'Lefevre',
      firstName: 'Claire',
      protocol: 'Réflexologie',
    },
    {
      id: 8,
      lastName: 'Martinez',
      firstName: 'Carlos',
      protocol: 'Yoga thérapeutique',
    },
    {
      id: 9,
      lastName: 'Gonzalez',
      firstName: 'Ana',
      protocol: 'Méditation guidée',
    },
    {
      id: 10,
      lastName: 'Bernard',
      firstName: 'Paul',
      protocol: 'Massothérapie',
    },
    {
      id: 11,
      lastName: 'Richard',
      firstName: 'Laura',
      protocol: 'Aromathérapie',
    },
    {
      id: 12,
      lastName: 'Petit',
      firstName: 'Antoine',
      protocol: 'Naturopathie',
    },
    {
      id: 13,
      lastName: 'Durand',
      firstName: 'Elodie',
      protocol: 'Sophrologie',
    },
    {
      id: 14,
      lastName: 'Morel',
      firstName: 'Lucas',
      protocol: 'Kinésiologie',
    },
    {
      id: 15,
      lastName: 'Roux',
      firstName: 'Emma',
      protocol: 'Shiatsu',
    },
    {
      id: 16,
      lastName: 'Blanc',
      firstName: 'Nicolas',
      protocol: 'Hypnose',
    },
    {
      id: 17,
      lastName: 'Guerin',
      firstName: 'Amandine',
      protocol: 'Thérapie cranio-sacrée',
    },
    {
      id: 18,
      lastName: 'Muller',
      firstName: 'Yves',
      protocol: 'Chiropractie',
    },
    {
      id: 19,
      lastName: 'Perrin',
      firstName: 'Isabelle',
      protocol: 'Bioénergie',
    },
    {
      id: 20,
      lastName: 'Fournier',
      firstName: 'Hugo',
      protocol: 'Thérapie des chakras',
    },
  ];

  // Get current clients
  const indexOfLastClients = currentPage * postsPerPage;
  const indexOfFirstClients = indexOfLastClients - postsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClients,
    indexOfLastClients
  );
  const handleAddNewFolder = () => {
    console.log('add new folder');
  };

  useEffect(() => {
    const filteredClients = clients.filter(
      (client) =>
        client.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        client.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        client.protocol
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
    );
    setFilteredClients(filteredClients);
  }, [searchText]);

  return (
    <>
      <h1
        id="mainTitle"
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}
      >
        Dossiers Page
      </h1>
      <div id="folder-container" className="h-full mt-6">
        <div id="folder-crudBar" className="flex justify-between w-full">
          <button
            onClick={() => handleAddNewFolder()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-end items-center border-2 border-greena-500 text-greena-500 p-2 rounded transition-colors hover:bg-greena-500"
          >
            <PlusIcon className={`h-7 w-7 ${isHovered ? 'text-white' : ''}`} />
            <p className={`font-bold ${isHovered ? 'text-white' : ''}`}>
              Ajouter
            </p>
          </button>
          <input
            type="text"
            placeholder="Recherche"
            autoComplete="off"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            id="search"
            name="search"
            className="focus:ring-greena-400 focus:border-greena-400 rounded"
          />
        </div>
        <div className="flex justify-center mt-4">
          <table id="client-table" className="w-full mb-2">
            <thead>
              <tr className="text-greena-400 text-xl">
                <th scope="col">ID</th>
                <th scope="col">Client</th>
                <th scope="col">Protocole</th>
              </tr>
            </thead>
            <tbody className="mt-2 [&>*:nth-child(2n)]:bg-greena-400/10">
              {currentClients.map((client) => (
                <tr className="transition-all cursor-pointer hover:bg-slate-200 text-center hover:ring-1 hover:ring-slate-300">
                  <td>{client.id}</td>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.protocol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PaginationElement
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={filteredClients.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
