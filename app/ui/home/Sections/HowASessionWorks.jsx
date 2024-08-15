import discussion from '@/public/talkaftertherapy.webp';
import { lusitana } from '../../fonts';
import { SofaIcon, TalkIcon, WindIcon } from '@/app/lib/icons';
import Card from '../card';

export default function HowASessionWorks() {
  return (
    <section className="bg-monstera bg-no-repeat bg-center bg-cover">
      <div className="w-full h-full flex flex-col justify-center items-center py-6 px-2">
        <h2 className={`${lusitana.className} text-white text-center text-3xl w-3/4`}>
          Comment se déroule une séance ?
        </h2>
        {/*Fist step */}
        <div
          id="cards"
          className="flex flex-col flex-wrap w-full max-w-6xl justify-around items-center text-white my-8 md:flex-row"
        >
          <Card
            title="Échanges"
            description="Nous faisons connaissance ou nous faisons un point sur votre évolution."
            step={1}
            staticImage={discussion}
            alt="discussion entre le thérapeute et le client"
          />
          {/*Second step */}
          <Card
            title="Exercices de réspirations"
            description="Mouvements doux accompagnés de respirations pour détendre le corps."
            step={2}
            IconImage={<WindIcon className="w-20 h-20 mt-4" aria-hidden="true" />}
            alt="Icone représentant le vent"
          />
          {/*Third step */}
          <Card
            title="Lacher prise"
            description="Instant de détente et lâcher prise, ou vous vous laissez guider par ma voix."
            step={3}
            IconImage={<SofaIcon className="w-20 h-20 mt-4" aria-hidden="true" />}
            alt="Icone représentant un canapé"
          />
          {/*Fourth step */}
          <Card
            title="Partage des ressentis"
            description="Instant de détente et lâcher prise, ou vous vous laissez guider par ma voix."
            step={4}
            IconImage={<TalkIcon className="w-20 h-20 mt-4" aria-hidden="true" />}
            alt="Icone représentant une discussion"
          />
        </div>
      </div>
    </section>
  );
}
