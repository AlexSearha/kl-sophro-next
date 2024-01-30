import Image from "next/image";
import chene from "@/public/arbre2w.webp";
import photoKatia from "@/public/katia-plage-redux2-e1679909092745.webp";
import photoBrain from "@/public/brain2.webp";
import photoPlante from "@/public/plantes-600x362.webp";
import photoFamille from "@/public/famille2.webp";
import photoArosage from "@/public/businessman.webp";
import discussion from '@/public/talkaftertherapy.webp'
import { WindIcon } from "./lib/icons";
import { SofaIcon } from "./lib/icons";
import { TalkIcon } from "./lib/icons";
import { Footer } from "./ui/home/footer";
import { Header } from "./ui/home/header";
import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col grow text-neutral-800">
        {/* Section banner */}
        <section id="home-tree" className="mt-4 px-4 flex justify-center">
          <div className="flex flex-col items-center max-w-6xl justify-between gap-10 md:flex-row-reverse ">
            <Image src={chene} width={450} height={450} alt="Image d'un chêne"/>
            <div className="flex flex-col items-center">
              <h1 className={`text-center ${lusitana.className} text-4xl font-bold mb-3 md:text-5xl`}>Cultivez votre bien-être</h1>
              <p className="text-xl font-bold italic text-greena-400">et récoltez la sérénité...</p>
            </div>
          </div>
        </section>
        {/* Section qui suis-je */}
        <section id="who-i-am" className="mx-auto my-16 mx-6">
          <div className="flex flex-col items-center gap-6 max-w-5xl xl:flex-row xl:items-start">
            <Image className="rounded shadow-black shadow-md" src={photoKatia} width={450} height={450} alt="Photo de Katia Lemaire"/>
              <div className="flex flex-col gap-4 sm:max-w-2xl px-4">
                <h2 className={`${lusitana.className} text-greena-400`}>Qui suis-je ?</h2>
                <h3 className="text-3xl font-bold">Katia Lemaire</h3>
                <p className="text-justify">
                  Intéressée depuis toujours par le développement personnel, j’ai toujours eu la conviction qu’une de mes missions était d’aider les autres. 
                  Les chemins étant vastes et nombreux dans le domaine du bien-être, j’ai choisi après avoir exploré quelques pistes de me tourner vers la 
                  méditation. Je l’ai pratiqué pendant des années et la pratique encore aujourd’hui quotidiennement. J’ai créé ma chaine pour proposer à 
                  tous des méditations guidées afin de retrouver un minimum de sérénité.
                  <br /> 
                  <br /> 
                  Lorsque j’ai ressenti le besoin de devenir thérapeute, je me suis intéressée à la sophrologie car elle était pour moi une méthode qui 
                  combinait ce que j’aime apporter aux autres : la détente émotionnelle et donc corporelle. Pour moi tout est lié de façon intrinsèque. 
                  Quand ont se sent angoissé, triste, inquiet, le corps nous envoi des signaux. Inversement quand le corps souffre, le mental s’en ressens.
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
        {/* Section La Sophrologie*/}
        <section className="mx-auto my-16 mx-6 px-4 sm:max-w-2xl xl:max-w-5xl">
          <h2 className={`text-center text-3xl font-bold ${lusitana.className} mb-8`}>{`Qu'est ce que la Sophrologie ?`}</h2>
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
            <Image className="rounded mt-6" src={photoBrain} width={300} height={300} alt="Photo de Katia Lemaire"/>
          </div>

          <div className="flex flex-col items-center mt-12 xl:gap-20 xl:flex-row-reverse sm:gap-4">
            <div className="flex flex-col gap-2">
              <h3 className={`text-start text-2xl font-bold ${lusitana.className} text-greena-400`}>Les bienfaits</h3>
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
            <Image className="rounded mt-6" src={photoPlante} width={350} height={350} alt="Photo de Katia Lemaire"/>
          </div>

          <div className="flex flex-col items-center mt-12 xl:gap-20 xl:flex-row sm:gap-4">
            <div className="flex flex-col gap-2">
              <h3 className={`text-start text-2xl font-bold ${lusitana.className} text-greena-400`}>Pour qui ?</h3>
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
            <Image className="rounded mt-6" src={photoFamille} width={300} height={300} alt="Photo de Katia Lemaire"/>
          </div>

          <div className="flex flex-col items-center mt-12 xl:gap-20 xl:flex-row-reverse sm:gap-4">
            <div className="flex flex-col gap-2">
              <h3 className={`text-start text-2xl font-bold ${lusitana.className} text-greena-400`}>Pour qui ?</h3>
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
            <Image className="rounded mt-6" src={photoArosage} width={350} height={350} alt="Photo de Katia Lemaire"/>
          </div>
        </section>
        {/* Section deroulement de la séance */}
        <section className="bg-monstera bg-no-repeat bg-center bg-cover">
          <div className="w-full h-full flex flex-col justify-center items-center py-6 px-2">
            <h2 className={`${lusitana.className} text-white text-center text-3xl w-3/4`}>Comment se déroule une séance ?</h2>
            {/*Premiere étape */}
            <div id="cards" className="flex flex-col flex-wrap items-center text-white mt-8 md:flex-row">
              <div id="card-container" className="md:w-1/2 xl:w-1/4">
                <div id="card" className="flex flex-col items-center py-6 px-2 max-h-68 w-60 border-2 bg-black/40 backdrop-blur-sm border-white/25 rounded shadow-black shadow-md">
                    <h3 className="font-bold text-2xl">- 1 -</h3>
                    <Image className="mt-4" src={discussion} alt="logo de discution entre le therapeute et le client" height={80} width={80} />
                    <h4 className={`${lusitana.className} text-greena-400 font-bold text-xl mt-4`}>Échanges</h4>
                    <p className="mt-4 text-center italic">
                      {`Nous faisons connaissance ou nous faisons un point sur votre évolution.`}
                    </p>
                </div>
              </div>
            {/*Deuxième étape */}
            <div id="card-container" className="md:w-1/2 xl:w-1/4">
              <div id="card" className="flex flex-col items-center py-6 px-2 max-h-68 w-60 border-2 bg-black/40 backdrop-blur-sm border-white/25 rounded shadow-black shadow-md">
                <h3 className="font-bold text-2xl">- 2 -</h3>
                <WindIcon className="w-20 h-20 mt-4" ariaHidden="true" />
                <h4 className={`${lusitana.className} text-greena-400 text-center font-bold text-xl mt-4`}>Exercices de réspirations</h4>
                <p className="mt-4 text-center italic">
                  {`Mouvements doux accompagnés de respirations pour détendre le corps.`}
                </p>
              </div>
            </div>

            {/*Troisieme étape */}
            <div id="card-container" className="md:w-1/2 xl:w-1/4">
              <div id="card" className="flex flex-col items-center py-6 px-2 max-h-68 w-60 border-2 bg-black/40 backdrop-blur-sm border-white/25 rounded shadow-black shadow-md">
                <h3 className="font-bold text-2xl">- 3 -</h3>
                <SofaIcon className="w-20 h-20 mt-4" ariaHidden="true" />
                <h4 className={`${lusitana.className} text-greena-400 text-center font-bold text-xl mt-4`}>Lacher prise</h4>
                <p className="mt-4 text-center italic">
                  {`Instant de détente et lâcher prise, ou vous vous laissez guider par ma voix.`}
                </p>
              </div>
            </div>

            {/*Quatrieme étape */}
            <div id="card-container" className="md:w-1/2 xl:w-1/4">
              <div id="card" className="flex flex-col items-center py-6 px-2 max-h-68 w-60 border-2 bg-black/40 backdrop-blur-sm border-white/25 rounded shadow-black shadow-md">
                <h3 className="font-bold text-2xl">- 4 -</h3>
                <TalkIcon className="w-20 h-20 mt-4" ariaHidden="true" />
                <h4 className={`${lusitana.className} text-greena-400 text-center font-bold text-xl mt-4`}>Partage des ressentis</h4>
                <p className="mt-4 text-center italic">
                  {`Instant de détente et lâcher prise, ou vous vous laissez guider par ma voix.`}
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
