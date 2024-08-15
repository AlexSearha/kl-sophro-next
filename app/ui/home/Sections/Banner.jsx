import Image from 'next/image';
import { lusitana } from '../../fonts';
import chene from '@/public/arbre2w.webp';

export default function Banner() {
  return (
    <section id="home-tree" className="mt-4 px-4 flex justify-center">
      <div className="flex flex-col items-center max-w-6xl justify-between gap-10 md:flex-row-reverse ">
        <Image src={chene} width={450} height={450} alt="Image d'un chêne" />
        <div className="flex flex-col items-center">
          <h1 className={`text-center ${lusitana.className} text-4xl font-bold mb-3 md:text-5xl`}>
            Cultivez votre bien-être
          </h1>
          <p className="text-xl font-bold italic text-greena-400">et récoltez la sérénité...</p>
        </div>
      </div>
    </section>
  );
}
