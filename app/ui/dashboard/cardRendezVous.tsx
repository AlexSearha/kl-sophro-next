'use client';
import { CarRendezVousProps } from '@/app/types';
import { TrashIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon } from '@heroicons/react/20/solid';

export default function CardRendezVous({ ...props }: CarRendezVousProps) {
  const { date, fullname, address, id } = props;

  const handleDelete = () => {
    console.log('handleDelete');
  };

  const handleChange = () => {
    console.log('handleChange');
  };

  return (
    <div className="flex border-2 border-black/15 h-[100px] shadow px-4 py-2 m-2">
      <div className="flex justify-between items-center w-full">
        <div id="card-infos">
          <h3
            id="card-infos__date"
            className="text-xl text-greena-400 font-bold italic"
          >
            {date}
          </h3>
          <div id="card-infos__client" className="ml-3 text-lg mt-2">
            <div id="card-infos__client-name" className="flex gap-3">
              <div className="text-gray-500 font-bold w-16">Client</div>
              <p>{fullname}</p>
            </div>
            <div id="card-infos__client-name" className="flex gap-3">
              <div className="text-gray-500 font-bold w-16">Lieu</div>
              <p>{address}</p>
            </div>
          </div>
        </div>
        <div id="card-crud" className="flex flex-col gap-2">
          <button onClick={handleChange}>
            <PencilSquareIcon
              width={25}
              className="transition-all hover:text-greena-400"
            />
          </button>
          <button onClick={handleDelete}>
            <TrashIcon
              width={25}
              className="transition-all hover:text-greena-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
