import adulteImg from '@/public/adulte_faceless-e1669810596397.webp';
import adoImg from '@/public/teen-e1669811659157.webp';
import studentImg from '@/public/Etudiant-e1669810949103.webp';
import PriceCard from '../price-card';
import { lusitana } from '../../fonts';

export default function Prices() {
  return (
    <section id="prices" className="mx-auto h-auto w-full my-16 px-4 sm:max-w-2xl xl:max-w-5xl">
      <h2 className={`text-center text-3xl font-bold ${lusitana.className} mb-8`}>Tarifs</h2>
      <div
        id="price-card-container"
        className="flex flex-wrap w-full justify-center md:justify-between gap-3 md:gap-0"
      >
        <PriceCard
          image={adulteImg}
          title="Adulte"
          price={50}
          description="Séance individuelle et/ou collectif de sophrologie"
          alt="Image d'un adulte"
        />
        <PriceCard
          image={adoImg}
          title="Adolescent"
          price={50}
          description="Séance individuelle de sophrologie"
          alt="Image d'un adolescent"
        />
        <PriceCard
          image={studentImg}
          title="Étudiant"
          price={50}
          description="Séance individuelle de sophrologie"
          alt="Image d'un adolescent"
        />
      </div>
    </section>
  );
}
