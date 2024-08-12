import { lusitana } from '@/app/ui/fonts';

type AppointmentClientItemType = { appointmentId: number };

const AppointmentClientItem = ({ params }: { params: AppointmentClientItemType }) => {
  const { appointmentId } = params;
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

export default AppointmentClientItem;
