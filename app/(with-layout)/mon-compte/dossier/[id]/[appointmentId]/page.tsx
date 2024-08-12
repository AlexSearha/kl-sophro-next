import { lusitana } from '@/app/ui/fonts';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AppointmentClientItemType = { appointmentId: number };

const AppointmentClientItem = ({ params }: { params: AppointmentClientItemType }) => {
  const { appointmentId } = params;
  return (
    <div id="appointment-list" className="w-full flex flex-col justify-center items-center">
      <h1 className={`text-5xl text-center ${lusitana.className} text-greena-500 my-8`}>
        Rapport de rendez-vous
      </h1>
      <div id="appointment-list__content" className="w-full">
        <div className="flex flex-col gap-4">
          <h2 className={`text-3xl ${lusitana.className} text-greena-500`}>Détails du rendez-vous</h2>
          <div className="flex gap-4">
            <h3 className="text-xl font-bold">Date</h3>
            <p className="text-lg text-greena-400 italic">01/09/2024</p>
          </div>
          <div className="flex gap-4">
            <h3 className="text-xl font-bold">Heure</h3>
            <p className="text-lg text-greena-400 italic">16:30</p>
          </div>

          <div className="flex gap-4">
            <h3 className="text-xl font-bold">Durée</h3>
            <p className="text-lg text-greena-400 italic">30 minutes</p>
          </div>
          <div className="flex gap-4">
            <h3 className="text-xl font-bold">Lieu</h3>
            <p className="text-lg text-greena-400 italic">Cabinet</p>
          </div>
          <div className="flex gap-4">
            <h3 className="text-xl font-bold">Praticien</h3>
            <p className="text-lg text-greena-400 italic">Katia Lemaire</p>
          </div>
          <div className="flex gap-4">
            <h3 className="text-xl font-bold">Rapport</h3>
            <p className="text-lg text-greena-400 italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero rerum asperiores assumenda
              perferendis perspiciatis adipisci praesentium quae dicta impedit? Voluptatum totam sed ratione
              recusandae nulla nesciunt nisi et beatae harum. Nostrum, maiores quisquam obcaecati laborum
              repellendus, eveniet itaque est sint ratione animi praesentium? Sunt, modi. Minus praesentium
              odio cum ipsum quos, veritatis assumenda quaerat porro, nam temporibus debitis expedita
              voluptates?
            </p>
          </div>
          <div className="flex gap-4">
            <h3 className="text-xl font-bold">Compte rendu</h3>
            <FontAwesomeIcon
              icon={faFilePdf}
              size="xl"
              className="text-greena-400 transition-colors hover:text-greena-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentClientItem;
