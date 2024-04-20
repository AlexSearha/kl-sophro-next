'use client';
import React, { useEffect, useState } from 'react';
import ClientListItem from '@/app/ui/clients/ClientListItem';
import { lusitana } from '@/app/ui/fonts';
import { ClientProps } from '@/app/types';

export default function ClientsSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredClients, setFilteredClients] = useState<ClientProps[]>([]);

  {
    /**  TODO: Remplacer les datas en dur par un fetch */
  }
  const clients = [
    {
      id: 0,
      lastname: 'Marouf',
      firstname: 'Alexis',
      email: 'alexis.marouf@hotmail.fr',
      phone: '0626904074',
    },
    {
      id: 1,
      lastname: 'Smith',
      firstname: 'John',
      email: 'john.smith@example.com',
      phone: '1234567890',
    },
    {
      id: 2,
      lastname: 'Johnson',
      firstname: 'Emily',
      email: 'emily.johnson@example.com',
      phone: '0987654321',
    },
    {
      id: 3,
      lastname: 'Garcia',
      firstname: 'Maria',
      email: 'maria.garcia@example.com',
      phone: '5555555555',
    },
    {
      id: 4,
      lastname: 'Dubois',
      firstname: 'Sophie',
      email: 'sophie.dubois@example.com',
      phone: '9876543210',
    },
    {
      id: 5,
      lastname: 'Chen',
      firstname: 'Wei',
      email: 'wei.chen@example.com',
      phone: '1231231234',
    },
    {
      id: 6,
      lastname: 'Kumar',
      firstname: 'Amit',
      email: 'amit.kumar@example.com',
      phone: '6667778888',
    },
  ];

  useEffect(() => {
    const filteredClients = clients.filter(
      (client) =>
        client.lastname.toLowerCase().includes(searchText.toLowerCase()) ||
        client.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
        client.email.toLowerCase().includes(searchText.toLowerCase()) ||
        client.phone.includes(searchText)
    );
    setFilteredClients(filteredClients);
  }, [searchText]);

  return (
    <>
      <h1
        id="mainTitle"
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}
      >
        Dashboard
      </h1>
      <div className="mt-4">
        <div className="flex justify-between mx-2">
          <h2 className={`${lusitana.className} text-3xl mb-3`}>
            Liste des clients
          </h2>
          <input
            type="text"
            placeholder="Recherche"
            autoComplete="off"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            id="search"
            name="search"
            className="focus:ring-greena-400 focus:border-greena-400 rounded"
          />
        </div>
        <div className="flex justify-center mt-4">
          <table id="client-table" className="w-full">
            <thead>
              <tr className="text-greena-400 text-xl">
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">Email</th>
                <th scope="col">Télephone</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              {filteredClients.map((client) => (
                <ClientListItem
                  key={client.id}
                  id={client.id}
                  email={client.email}
                  firstname={client.firstname}
                  lastname={client.lastname}
                  phone={client.phone}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
