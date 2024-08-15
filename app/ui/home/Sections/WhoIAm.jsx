import photoKatia from '@/public/katia-plage-redux2-e1679909092745.webp';
import Image from 'next/image';
import { lusitana } from '../../fonts';

export default function WhoIAm() {
  return (
    <section id="who-i-am" className="mx-auto my-16">
      <div className="flex flex-col items-center gap-6 max-w-5xl xl:flex-row xl:items-start">
        <Image
          className="rounded shadow-black shadow-md"
          src={photoKatia}
          width={450}
          height={450}
          alt="Photo de Katia Lemaire"
        />
        <div className="flex flex-col gap-4 sm:max-w-2xl px-4">
          <h2 className={`${lusitana.className} text-greena-400`}>Qui suis-je ?</h2>
          <h3 className="text-3xl font-bold">Katia Lemaire</h3>
          <p className="text-justify">
            Intéressée depuis toujours par le développement personnel, j’ai toujours eu la conviction qu’une
            de mes missions était d’aider les autres. Les chemins étant vastes et nombreux dans le domaine du
            bien-être, j’ai choisi après avoir exploré quelques pistes de me tourner vers la méditation. Je
            l’ai pratiqué pendant des années et la pratique encore aujourd’hui quotidiennement. J’ai créé ma
            chaine pour proposer à tous des méditations guidées afin de retrouver un minimum de sérénité.
            <br />
            <br />
            Lorsque j’ai ressenti le besoin de devenir thérapeute, je me suis intéressée à la sophrologie car
            elle était pour moi une méthode qui combinait ce que j’aime apporter aux autres : la détente
            émotionnelle et donc corporelle. Pour moi tout est lié de façon intrinsèque. Quand ont se sent
            angoissé, triste, inquiet, le corps nous envoi des signaux. Inversement quand le corps souffre, le
            mental s’en ressens.
          </p>
        </div>
      </div>
      <p className="max-w-5xl mt-6 px-4 text-justify sm:max-w-2xl xl:pr-4 xl:pl-0 xl:max-w-5xl">
        {`J'ai donc choisi de me former en sophrologie à l'école Sup de sophrologie. Une fois mon diplôme obtenu,
           j'ai eu envie de commencer à aider autour de moi les gens en souffrance en leur apportant des outils pour 
           se sentir mieux dans leurs corps et dans leur tête.
          `}
        <br />
        {`En effet, le travail d’un sophrologue est de démontrer au consultant, qu'il possède en 
          lui déjà toutes les ressources pour aller mieux et que nous ne sommes qu’une boussole pour lui indiquer 
          la direction et pour développer cette capacité à ramener le calme en soi, le bien-être et l'harmonie.`}
      </p>
    </section>
  );
}
