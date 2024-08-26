'use client';
import { lusitana } from '@/app/ui/fonts';
import { useParams } from 'next/navigation';

export default function SingleClientFolder({ test: [folderId, fullname] }: { test: [number, string] }) {
  return (
    <>
      <h1 id="mainTitle" className={`${lusitana.className} text-4xl text-greena-500 font-bold`}>
        Dossiers
      </h1>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row justify-between mx-2">
          <h2 className={`${lusitana.className} text-3xl mb-3`}>Liste des protocoles de {fullname} </h2>
        </div>
      </div>
    </>
  );
}
