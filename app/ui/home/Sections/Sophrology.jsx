import Image from 'next/image';
import photoBrain from '@/public/brain2.webp';
import photoPlante from '@/public/plantes-600x362.webp';
import photoFamille from '@/public/famille2.webp';
import photoArosage from '@/public/businessman.webp';
import { lusitana } from '../../fonts';

export default function Sophrology() {
  return (
    <section id="sophrology" className="flex justify-center">
      <div className="my-16 mx-6 sm:max-w-2xl xl:max-w-5xl">
        <h2
          className={`text-center text-3xl font-bold ${lusitana.className} mb-8`}
        >{`Qu'est ce que la Sophrologie ?`}</h2>
        <div className="flex flex-col items-center mt-6 xl:gap-20 xl:flex-row sm:gap-4">
          <p className="text-justify">
            {`La sophrologie est ce qu'on appel une méthode psychocorporelle, Ce qui veut dire qu'elle agit à la fois sur 
                le corps et sur l'esprit. Cette méthode a été conçu dans les années 60 par le neuropsychiatre Alfonso Caycedo. 
                Elle s'appuie sur un ensemble de techniques qui permettent d'harmoniser nos pensées et nos ressentis.`}
            <br />
            <br />
            {`Commencer la sophrologie c’est entamer un chemin vers une quête de mieux être. C'est trouver en soit ses propres 
                ressources pour installer plus de détente et de paix intérieur face à une problématique qui nous est propre. 
                A l'aide d’exercices de respiration, de décontraction musculaire et de visualisation, la pratique de la sophrologie 
                permet de retrouver un équilibre de vie face à des maux physiques ou psychologiques.`}
          </p>
          <Image
            className="rounded mt-6"
            src={photoBrain}
            width={300}
            height={300}
            alt="Photo de Katia Lemaire"
          />
        </div>

        <div className="flex flex-col items-center mt-12 xl:gap-20 xl:flex-row-reverse sm:gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={`text-start text-2xl font-bold ${lusitana.className} text-greena-400`}>
              Les bienfaits
            </h3>
            <p className="text-justify">
              {`Dans une société ou tout va très vite, ou nous sommes énormément sollicités de façon quotidienne et ou le stress 
                est devenu omniprésent, ou la performance et la compétition sont monnaie courant, il est essentiel de trouver un moyen 
                de retrouver l’harmonie.`}
              <br />
              <br />
              {`Cette harmonie est possible si nous nous consacrons du temps pour nous occuper de nous-même, de notre bien-être physique et émotionnel. 
                En cela, la sophrologie constitue une thérapie complémentaire à notre médecine traditionnelle. C’est une méthode préventive qui nous 
                aide à trouver un état de santé optimal pour nous garantir de rester positif et de garder en nous les clés qui nous permettent d’affronter 
                les défis du quotidien.`}
              {`Ainsi la sophrologie est un outil de tous les jours pour nous apporter du calme, de la sérénité. Elle peut nous aider à appréhender 
                nos émotions, à les accueillir avec bienveillance. C’est aussi une méthode qui peut nous donner les clés pour amener une peur ou un 
                traumatisme vers un ressenti plus positif. La sophrologie peut également nous aider à gérer des douleurs physiques, en les rendant 
                moins difficiles à supporter au quotidien.`}
              <br />
              <br />
              {`Les bienfaits de la sophrologie sont en résumé très nombreux, car c’est une technique qui peut être utilisée tous les jours pour 
                presque toutes les sources d’angoisses ou de souffrances qui nous entravent parfois. Il est important de dire que la sophrologie 
                ne se substitue en aucun cas à un traitement médical, elle est un outil complémentaire pour aider l’être humain à trouver en lui 
                les ressources illimités qu’il ne soupçonne pas.`}
            </p>
          </div>
          <Image
            className="rounded mt-6"
            src={photoPlante}
            width={350}
            height={350}
            alt="Photo de Katia Lemaire"
          />
        </div>

        <div className="flex flex-col items-center mt-12 xl:gap-20 xl:flex-row sm:gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={`text-start text-2xl font-bold ${lusitana.className} text-greena-400`}>
              Pour qui ?
            </h3>
            <p className="text-justify">
              {`Dans une société ou tout va très vite, ou nous sommes énormément sollicités de façon quotidienne et ou le stress 
                est devenu omniprésent, ou la performance et la compétition sont monnaie courant, il est essentiel de trouver un moyen 
                de retrouver l’harmonie.`}
              <br />
              <br />
              {`La sophrologie s’adresse à tous ! Dès que nous sommes en âges d’exprimer nos ressentis et nos émotions, 
                la sophrologie peut nous aider. Technique simple et adaptable, la sophrologie pourra aider les adolescents, 
                les adultes et les personnes âgées en leur donnant des clés pour gérer ce qui génèrent en elles du stress 
                ou de la souffrance dans le quotidien.`}
            </p>
          </div>
          <Image
            className="rounded mt-6"
            src={photoFamille}
            width={300}
            height={300}
            alt="Photo de Katia Lemaire"
          />
        </div>

        <div className="flex flex-col items-center mt-12 xl:gap-20 xl:flex-row-reverse sm:gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={`text-start text-2xl font-bold ${lusitana.className} text-greena-400`}>
              Pour qui ?
            </h3>
            <p className="text-justify">
              {`Pour s’occuper de son bien être et pour entretenir son potentiel intérieur.`}
              <br />
              <br />
              {`La sophrologie peut entre autres aider les personnes avec des soucis de sommeil, mais aussi les personnes 
                stressées. C’est une technique qui pourra apporter aux personnes victimes d’un traumatisme ou d’une angoisse/phobie 
                profonde une détente certaine face à la situation qui est l’objet du trauma.`}
              <br />
              <br />
              {`C’est aussi un outil utile en complément d’un traitement médical, pour mieux vivre les effets secondaires, 
                ou pour diminuer les souffrances physiques. C’est aussi une méthode efficace pour développer son potentiel lors 
                de passage d’un examen, d’une prise de parole en public ou bien pour apprendre à canaliser son attention ou son 
                énergie pour des performances physiques.`}
              <br />
              <br />
              {`La sophrologie est une thérapie qui peut aider à gérer de multiples problématiques puisque son but est 
                d’apporter de la relaxation mais aussi à amener une dimension positive dans des problématique souvent douloureuses.`}
            </p>
          </div>
          <Image
            className="rounded mt-6"
            src={photoArosage}
            width={350}
            height={350}
            alt="Photo de Katia Lemaire"
          />
        </div>
      </div>
    </section>
  );
}
