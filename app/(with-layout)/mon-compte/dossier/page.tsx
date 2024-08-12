import { lusitana } from '@/app/ui/fonts';
import CardDossier from '@/app/ui/mon-compte/dossier/Card';

export default function DossierPage() {
  return (
    <>
      <h1 className={`text-5xl text-center ${lusitana.className} text-greena-500 my-8`}>Dossier</h1>
      <div className="flex flex-col gap-2">
        <CardDossier lastUpdate={new Date()} title="Peur du noir" id={1} />
        <CardDossier lastUpdate={new Date()} title="Peur du noir" id={2} />
        <CardDossier lastUpdate={new Date()} title="Peur du noir" id={3} />
        <CardDossier lastUpdate={new Date()} title="Peur du noir" id={4} />
        <CardDossier lastUpdate={new Date()} title="Peur du noir" id={5} />
        <CardDossier lastUpdate={new Date()} title="Peur du noir" id={6} />
      </div>
    </>
  );
}
