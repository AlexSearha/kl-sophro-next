import { lusitana } from "@/app/ui/fonts";

export default function CgvPage() {
    return (
        <>
            <div 
                id="cgv-container" 
                className="flex flex-col justify-center p-6 gap-6 w-full md:max-w-4xl mx-auto"
            >
                <div id="cgv-intro" className="flex flex-col gap-6">
                    <h1 className={`${lusitana.className} text-4xl text-center text-greena-400 md:text-5xl font-bold`}>Conditions Générales de Vente</h1>
                    <p className="text-justify">{`
                        SAS Katia Lemaire, représentée par Katia Lemaire, propose des prestations de service dont 
                        l’activité principale est la Sophrologie référencée sous le code APE 8690 F "Activité de 
                        santé humaine non classée ailleurs à ambition thérapeutique". Ci-après dénommée 
                        "Katia Lemaire" ou le Prestataire ; Et Le Client.La lecture attentive et l’acceptation 
                        de ces conditions générales de vente sont une obligation avant toute réservation de 
                        prestations de service. Celles-ci en définissent les conditions.`}
                    </p>
                </div>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                        Clause Générale
                    </h2>
                    <p className="text-justify">{`
                        Les présentes conditions générales de vente s’appliquent à tous services réservés lors 
                        de la prise de rendez-vous en ligne, de la prise de rendez-vous téléphonique, de l’inscription 
                        à un atelier ou après acceptation d’un devis. Tout client reconnaît avoir pris connaissance 
                        des présentes CGV avant d'avoir effectué sa prise de rendez-vous ou son inscription.

                        La prise de rendez-vous ou l’inscription entraîne l’adhésion du client aux CGV et 
                        leur acceptation sans réserve.`}
                    </p>
                </section>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                        ARTICLE 1 – Champs d’applications
                    </h2>
                    <p className="text-justify">{`
                        Les présentes conditions générales de vente s’appliquent, sans restriction ni réserve à l’ensemble 
                        des prestations proposées par Katia Lemaire par l’intermédiaire de Mme Katia Lemaire: Sophrologue.
                        
                        Les services individuels et collectifs suivants sont proposés par Katia Lemaire :
                        `}
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Séances individuelles, familiales ou de couple</li>
                        <li>Séances de sophrologie collectives</li>
                        <li>Ateliers de sophrologie sur différents thèmes dans le cadre de "La bulle des émotions"</li>
                        <li>Ateliers de sophrologie sur différents thèmes auprès des entreprises, collectivités, 
                        établissements scolaires publics ou privés sans que cela soit limitatif.</li>
                    </ul>
                </section>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                        ARTICLE 2 – Mentions légales
                    </h2>
                    <p className="text-justify">{`
                        Les différentes techniques proposées et pratiquées n’ont aucune visée médicale et ne sont assimilables 
                        ni aux actes réservés aux professions de santé réglementées par le Code de la Santé Publique et au 
                        décret n°96-879 du 8 octobre 1996.
                        `}
                    </p>
                </section>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                        ARTICLE 3 – Réservation
                    </h2>
                    <p className="text-justify">{`
                        Le client peut passer par le site Internet [lien du site] pour réserver une ou plusieurs prestations. 
                        Il doit alors obligatoirement suivre le processus de réservation suivant :
                        `}
                    </p>
                    <ul className="list-disc pl-6 my-2">
                        <li>Choix de la prestation et acceptation du prix</li>
                        <li>Choix de la date et de l’heure</li>
                        <li>Fournir nom, prénom, n° de téléphone, code postal et son e-mail personnel</li>
                    </ul>
                    {`Le client peut également prendre rendez-vous par téléphone en contactant Katia Lemaire au 
                    07.60.31.10.52`}
                </section>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                        ARTICLE 4 – Prix, moyens et conditions de paiement
                    </h2>
                    <p className="text-justify">{`
                        Les prix indiqués sur le site internet et en annexe sont exprimés en euros "TVA non applicable, 
                        Article 293 B-I du CGI" et correspondent à ceux en vigueur au jour de la commande. 
                        Le paiement se fera le jour de la prestation par les moyens suivants :
                        `}
                    </p>
                    <ul className="list-disc pl-6 my-2">
                        <li>Espèces</li>
                        <li>{`Chèque bancaire (Banque France Métropolitaine uniquement) à l’ordre de Katia Lemaire. 
                        L’encaissement est effectué à réception du chèque.`}</li>
                    </ul>
                </section>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                        ARTICLE 5 – Fourniture des prestations
                    </h2>
                    <p className="text-justify">{`
                        Les services commandés par le client seront fournis selon les indications du client 
                        (date, heure et lieu lors de la prise de RDV). En début de premier rendez-vous, 
                        Katia Lemaire informe systématiquement son client :
                        `}
                    </p>
                    <ul className="list-disc pl-6 my-2">
                        <li>Des tarifs appliqués en fonction de la demande spécifique du jour</li>
                        <li>{`De son droit au délai de rétractation de 14 jours en cas de visite à domicile 
                        et que l’exécution de la prestation ne peut avoir lieu avant le dit délai, sauf 
                        par le client à renoncer à son délai de rétractation conformément au Code 
                        de la Consommation.`}
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                        ARTICLE 6 – Report, annulation et modification d’un rendez-vous
                    </h2>
                    <p className="text-justify">{`
                        Dans le cas où la personne, sans cause réelle et justifiée, ne se présenterait pas au 
                        rendez-vous fixé sans avoir prévenu son sophrologue, les honoraires seront dus 
                        par la personne à moins que celui-ci n’ait annulé ou reporté son rendez-vous 
                        plus de 48 heures avant par tous moyens.
                        `}
                    </p>
                </section>
                <section>
                    <h2 className={`${lusitana.className} text-2xl text-start mb-2 text-greena-400 md:text-3xl font-bold`}>
                    ARTICLE 7 – Protection des informations personnelles & R.G.P.D.
                    </h2>
                    <p className="text-justify">{`
                        En application de la loi n° 78-17 du 6 janvier 1978 complétée par Le règlement général sur 
                        la protection des données (RGPD) entré en application le 25 Mai 2018. 
                        Cette obligation de transparence est définie aux articles 12, 13 et 14 du RGPD. 
                        Il est rappelé que les données nominatives qui sont demandées au client sont 
                        nécessaires au traitement de la gestion de la clientèle et sont destinées à un 
                        usage interne des données recueillies vous concernant par Mme Katia Lemaire qui 
                        se trouve être la déléguée à la protection des données. Les données collectées 
                        sont : nom / prénom / adresse / téléphone / mail. Les données sont conservées 
                        pendant 5 ans. Ces données nominatives ne sont jamais transmises à des tiers. 
                        Le client dispose d’un droit d’accès, de modification, de rectification 
                        et d’opposition s’agissant
                        `}
                    </p>
                </section>
            </div>
        </>
        )
  }