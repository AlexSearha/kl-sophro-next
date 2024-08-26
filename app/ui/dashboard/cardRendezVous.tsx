'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CarRendezVousProps } from '@/app/types';
import { useModal } from '@/app/lib/providers/modalProvider';
import DeleteModal from '../modals/DeleteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CardRendezVous({ ...props }: CarRendezVousProps) {
  const { dispatch } = useModal();
  const { date, fullName, address, id, setOpenModal } = props;
  const pathName = usePathname();

  const handleDelete = () => {
    dispatch({
      type: 'update_modal',
      payload: {
        title: 'Suppression',
        content: (
          <DeleteModal
            subTitle={`Voulez-vous vraiment supprimer le rendez-vous du ${date} avec ${fullName} ?`}
          />
        ),
      },
    });
  };

  return (
    <>
      <div className="flex border-2 border-black/15 h-[100px] bg-white shadow px-4 py-2 m-2">
        <div className="flex justify-between items-center w-full">
          <div id="card-infos">
            <h3 id="card-infos__date" className="text-xl text-greena-400 font-bold italic">
              {date}
            </h3>
            <div id="card-infos__client" className="ml-3 text-lg mt-2">
              <div id="card-infos__client-name" className="flex gap-3">
                <div className="text-gray-500 font-bold w-16">Client</div>
                <Link
                  className="transition hover:text-greena-400 hover:underline hover: underline-offset-2"
                  href={`${pathName}/clients/${id}`}
                >
                  {fullName}
                </Link>
              </div>
              <div id="card-infos__client-name" className="flex gap-3">
                <div className="text-gray-500 font-bold w-16">Lieu</div>
                <p>{address}</p>
              </div>
            </div>
          </div>
          <div id="card-crud" className="flex flex-col gap-2">
            {/* <button onClick={handleChange}>
            <PencilSquareIcon
              width={25}
              className="transition-all hover:text-greena-400"
            />
          </button> */}
            <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} size="xl" className="transition-colors hover:text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
