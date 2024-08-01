import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

interface RdvCardProps {
  title: string;
  date: string;
}

export default function RdvCard({ title, date }: RdvCardProps) {
  const formatDate = moment(date).format('D, MMM YYYY');

  const handleDelete = () => {
    console.log('handleDelete');
  };

  const handleEdit = () => {
    console.log('handleEdit');
  };

  return (
    <div className="flex justify-between items-center h-auto border-2 p-2 border-black/15 shadow-md">
      <h3>{formatDate}</h3>
      <div id="card-action" className="flex gap-2">
        <FontAwesomeIcon
          icon={faPen}
          size="lg"
          className="hover:text-green-700 cursor-pointer"
          onClick={handleEdit}
        />
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          className="hover:text-red-700 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
