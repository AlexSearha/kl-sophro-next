import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DeleteModalProps {
  subTitle: string;
}

export default function DeleteModal({ subTitle }: DeleteModalProps) {
  return (
    <div id="delete-modal-content" className="flex flex-col grow p-2 gap-2 justify-around items-center">
      <p className="text-lg">{subTitle}</p>
      <div className="flex gap-2 text-white font-bold">
        <button className="flex justify-center items-center gap-2 h-auto w-auto p-2 bg-red-600 transition-colors hover:bg-red-800 rounded">
          <span>OUI</span>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="flex justify-center items-center gap-2 h-auto w-auto p-2 bg-green-600 transition-colors hover:bg-green-800 rounded">
          <span>NON</span>
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </div>
  );
}
