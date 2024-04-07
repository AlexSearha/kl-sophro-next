'use client';
import ClientListItem from '@/app/ui/clients/ClientListItem';
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';

export default function ClientsSearchPage() {
  const [searchText, setSearchText] = useState('');

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
              <ClientListItem
                lastname="Marouf"
                firstname="Alexis"
                email="alexis.marouf@hotmail.fr"
                phone="0626904074"
                id={2}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
