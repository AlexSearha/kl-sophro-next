import CardRendezVous from "@/app/ui/dashboard/cardRendezVous";
import { lusitana } from "@/app/ui/fonts";

export default function DashboardPage() {
  return (
    <>
      <h1 
        id="mainTitle" 
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}>
          Dashboard
      </h1>
      <div className="mt-4">
        <div className="flex justify-between mr-2">
          <h2 className={`${lusitana.className} text-3xl mb-3`}>Mes prochains rendez-vous</h2>
          <div className="flex flex-col">
            <label>Recherche</label>
            <input type="text" id="search" name="search"   />
          </div>
        </div>
          <div id="card-container" className="flex flex-col w-full">
            <CardRendezVous />
            <CardRendezVous />
            <CardRendezVous />
            <CardRendezVous />
          </div>
        <div>

        </div>
      </div>
    </>
  );
}