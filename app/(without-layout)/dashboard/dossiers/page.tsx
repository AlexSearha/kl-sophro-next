'use client';
import { lusitana } from '@/app/ui/fonts';
import { PlusIcon } from '@heroicons/react/20/solid';
import Search from 'antd/es/transfer/search';
import { useState } from 'react';

export default function DossiersPage({ params }: { params: { slug: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleAddNewFolder = () => {
    console.log('add new folder');
  };
  return (
    <>
      <h1
        id="mainTitle"
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}
      >
        Dossiers Page
      </h1>
      <div id="folder-container" className="h-full mt-10">
        <div id="folder-crudBar" className="flex justify-between w-full">
          <input
            type="text"
            placeholder="Recherche"
            autoComplete="off"
            // value={searchText}
            // onChange={(e) => setSearchText(e.target.value)}
            id="search"
            name="search"
            className="focus:ring-greena-400 focus:border-greena-400 rounded"
          />
          <button
            onClick={() => handleAddNewFolder()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-end items-center border-2 border-black p-2 rounded transition-colors hover:bg-greena-500"
          >
            <PlusIcon className={`h-7 w-7 ${isHovered ? 'text-white' : ''}`} />
            <p className={`font-bold ${isHovered ? 'text-white' : ''}`}>
              Ajouter
            </p>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <table id="client-table" className="w-full">
            <thead>
              <tr className="text-greena-400 text-xl">
                <th scope="col">ID</th>
                <th scope="col">Client</th>
                <th scope="col">Dossier</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              <tr className="transition-all cursor-pointer hover:bg-slate-200 text-center hover:ring-1 hover:ring-slate-300">
                <td>1</td>
                <td>Alexis Marouf</td>
                <td>Peur des couilles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
