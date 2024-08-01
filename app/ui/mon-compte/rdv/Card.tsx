import { dateIsoToString } from '@/app/lib/date-format';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RdvCardProps {
  title: string;
  date: string;
}

export default function RdvCard({ title, date }: RdvCardProps) {
  const { date: formatDate, hour: formatHour } = dateIsoToString(date);

  const handleDelete = () => {
    console.log('handleDelete');
  };

  const handleEdit = () => {
    console.log('handleEdit');
  };

  return (
    <div className="flex justify-between items-center h-auto border-2 p-2 bg-greena-500/10 border-black/15 shadow-md">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">{formatDate}</h3>
        <p className="text-lg text-greena-400 italic">{formatHour}</p>
      </div>
      <div id="card-action" className="flex gap-2">
        <div className="flex justify-center items-center bg-greena-400 transition-colors hover:bg-greena-500 rounded-full h-10 w-10">
          <FontAwesomeIcon
            icon={faPen}
            size="sm"
            className="cursor-pointer p-4 text-white"
            onClick={handleEdit}
          />
        </div>
        <div className="flex justify-center items-center bg-red-600 rounded-full transition-colors hover:bg-red-800 h-10 w-10">
          <FontAwesomeIcon
            icon={faTrash}
            size="sm"
            className=" cursor-pointer p-2 text-white"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
