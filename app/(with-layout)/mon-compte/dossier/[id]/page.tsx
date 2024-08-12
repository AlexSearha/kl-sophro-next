import { lusitana } from '@/app/ui/fonts';

type DossierParamsType = { id: number };

const DossierAppointmentList = ({ params }: { params: DossierParamsType }) => {
  const { id } = params;
  return (
    <div id="appointment-list" className="w-full flex flex-col justify-center items-center">
      <h1 className={`text-5xl text-center ${lusitana.className} text-greena-500 my-8`}>
        Liste des Rendez-vous
      </h1>
      <div id="appointment-list__content" className="">
        coucou
      </div>
    </div>
  );
};

export default DossierAppointmentList;
