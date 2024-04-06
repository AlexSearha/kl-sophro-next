'use client';
import CardRendezVous from "@/app/ui/dashboard/cardRendezVous";
import { lusitana } from "@/app/ui/fonts";
import { useState } from "react";

export default function DashboardPage() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <>
      <h1 
        id="mainTitle" 
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}>
          Dashboard
      </h1>
      <div className="mt-4">
        <div className="flex justify-between mx-2">
          <h2 className={`${lusitana.className} text-3xl mb-3`}>Mes prochains rendez-vous</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Recherche"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              id="search" name="search" 
              className="focus:ring-greena-400 focus:border-greena-400 rounded"
            />
          </div>
        </div>
          <div id="card-container" className="flex flex-col w-full">
            <CardRendezVous date="Lundi 14 Mai 2024" fullname="Alexis Marouf" address="22 rue des tisserands, 56190 Noyal Muzillac" id={1} />
            <CardRendezVous date="Lundi 14 Mai 2024" fullname="Alexis Marouf" address="22 rue des tisserands, 56190 Noyal Muzillac" id={2} />
            <CardRendezVous date="Lundi 14 Mai 2024" fullname="Alexis Marouf" address="22 rue des tisserands, 56190 Noyal Muzillac" id={3} />
            <CardRendezVous date="Lundi 14 Mai 2024" fullname="Alexis Marouf" address="22 rue des tisserands, 56190 Noyal Muzillac" id={4} />
          </div>
        <div>

        </div>
      </div>
    </>
  );
}