import { useModal } from '../lib/providers/modalProvider';
import { lusitana } from './fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function ModalGeneric() {
  const { Modal, dispatch } = useModal();
  const { title, content, isShow, width } = Modal;

  const handleCloseModal = () => {
    dispatch({
      type: 'clean_and_close_modal',
    });
  };

  if (isShow) {
    return (
      <>
        <div id="modal" className="absolute top-0 left-0 z-5 h-full w-full flex justify-center items-center">
          <div
            className={`flex flex-col gap-3 rounded-lg bg-white shadow-lg border-greena-500/50 border-2 z-10 m-4 h-auto w-${width} md:h-1/4`}
          >
            <div
              id="modal-menu"
              className="flex justify-between items-center h-12 p-3 border-b-2 border-greena-500/50"
            >
              <h1 className={`text-2xl font-bold capitalize ${lusitana.className} text-greena-500`}>
                {title}
              </h1>
              <FontAwesomeIcon icon={faX} size="xl" className="cursor-pointer" onClick={handleCloseModal} />
            </div>
            {content}
          </div>
        </div>
        <div className="fixed top-0 left-0 z-0 w-full h-full backdrop-blur-sm"></div>
      </>
    );
  }
}
