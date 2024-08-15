'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModal } from '@/app/lib/providers/modalProvider';
import DeleteModal from '../modals/DeleteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { lusitana } from '../fonts';

type CarRendezVousProps = {
  id: number;
  title: string;
  firstSubtitle?: string;
  secondSubtitle?: string;
  thirdSubtitle?: string;
  firstIcon?: IconDefinition;
  secondIcon?: IconDefinition;
  thirdIconModal?: IconDefinition;
  firstIconAction?: () => void;
  secondIconAction?: () => void;
  thirdIconLModalAction?: () => void;
};

export default function CardRendezVous({ ...props }: CarRendezVousProps) {
  const { dispatch } = useModal();
  const {
    id,
    title,
    firstIcon,
    firstIconAction,
    firstSubtitle,
    secondIcon,
    secondIconAction,
    secondSubtitle,
    thirdIconModal,
    thirdIconLModalAction,
    thirdSubtitle,
  } = props;
  const isSubtitle = firstSubtitle || secondSubtitle || thirdSubtitle;
  const pathName = usePathname();

  const handleModalAction = () => {
    dispatch({
      type: 'update_modal',
      payload: {
        title: 'Suppression',
        content: (
          <DeleteModal
            // subTitle={`Voulez-vous vraiment supprimer le rendez-vous du ${date} avec ${fullName} ?`}
            subTitle={`Voulez-vous vraiment supprimer le rendez-vous du XX avec XXX ?`}
          />
        ),
      },
    });
  };

  return (
    <>
      <div className="flex flex-col bg-white p-4 rounded shadow-md border-2 border-black/15">
        <div className="flex justify-between items-center">
          <h3 className={`text-2xl text-greena-400 ${lusitana.className}`}>{title}</h3>
          <div className="flex gap-2">
            {firstIcon && (
              <button>
                <FontAwesomeIcon
                  icon={firstIcon}
                  size="lg"
                  className="transition-colors hover:text-greena-400"
                  onClick={firstIconAction}
                />
              </button>
            )}
            {secondIcon && (
              <button>
                <FontAwesomeIcon
                  icon={secondIcon}
                  size="lg"
                  className="transition-colors hover:text-greena-400"
                  onClick={secondIconAction}
                />
              </button>
            )}
            {thirdIconModal && (
              <button>
                <FontAwesomeIcon
                  icon={faEye}
                  size="lg"
                  className="transition-colors hover:text-greena-400"
                  onClick={handleModalAction}
                />
              </button>
            )}
          </div>
        </div>
        {isSubtitle ? (
          <div className="flex justify-between items-center mt-4">
            {firstSubtitle && <p>{firstSubtitle}</p>}
          </div>
        ) : null}
      </div>
    </>
  );
}
