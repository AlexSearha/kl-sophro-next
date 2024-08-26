'use client';
import { ClientDossierProps } from '@/app/types';
import { lusitana } from '@/app/ui/fonts';
import PaginationElement from '@/app/ui/pagination';
import { useEffect, useState } from 'react';
import ClientFolderItem from '@/app/ui/clients/ClientFolderItem';

export default function DossiersPage({ params }: { params: { slug: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredClients, setFilteredClients] = useState<ClientDossierProps[]>([]);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

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
  const currentClients = filteredClients.slice(indexOfFirstClients, indexOfLastClients);
  const handleAddNewFolder = () => {
    console.log('add new folder');
  };

  useEffect(() => {
    const filteredClients = clients.filter(
      (client) =>
        client.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        client.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        client.protocol.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setFilteredClients(filteredClients);
  }, [searchText]);

  return (
    <>
      <h1 id="mainTitle" className={`${lusitana.className} text-4xl text-greena-500 font-bold`}>
        Dossiers
      </h1>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row justify-between mx-2">
          <h2 className={`${lusitana.className} text-3xl mb-3`}>Liste des dossiers</h2>
          <input
            type="text"
            placeholder="Recherche"
            autoComplete="off"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            id="search"
            name="search"
            className="focus:ring-greena-400 focus:border-greena-400 rounded h-10"
          />
        </div>
        <div className="flex flex-col justify-center mt-4 gap-2">
          {currentClients.map((client) => (
            <ClientFolderItem
              key={client.id}
              id={client.id}
              firstname={client.firstName}
              lastname={client.lastName}
            />
          ))}
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
