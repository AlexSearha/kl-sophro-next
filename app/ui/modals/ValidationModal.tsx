import { useModal } from '@/app/lib/providers/modalProvider';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ValidationModalProps {
  subTitle: string;
}

export default function ValidationModal({ subTitle }: ValidationModalProps) {
  const { dispatch } = useModal();

  const handleCloseModal = () => {
    dispatch({
      type: 'clean_and_close_modal',
    });
  };

  return (
    <div id="validation-modal-content" className="flex flex-col grow p-2 gap-2 justify-around items-center">
      <p className="text-lg">{subTitle}</p>
      <div className="flex gap-2 text-white font-bold">
        <button className="flex justify-center items-center gap-2 h-auto w-auto p-2 bg-red-600 transition-colors hover:bg-red-800 rounded">
          <span>OUI</span>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          className="flex justify-center items-center gap-2 h-auto w-auto p-2 bg-green-600 transition-colors hover:bg-green-800 rounded"
          onClick={handleCloseModal}
        >
          <span>NON</span>
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </div>
  );
}
