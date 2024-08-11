import { useModal } from '@/app/lib/providers/modalProvider';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

interface DeleteModalProps {
  subTitle: string;
}

export default function DeleteModal({ subTitle }: DeleteModalProps) {
  const { dispatch } = useModal();

  const handleCloseModal = () => {
    dispatch({
      type: 'clean_and_close_modal',
    });
  };

  return (
    <div id="delete-modal-content" className="flex flex-col grow p-2 gap-2 justify-around items-center">
      <p className="italic mb-4">{subTitle}</p>
      <div className="flex gap-2 text-white">
        <Button danger type="primary" icon={<DeleteOutlined />} iconPosition="end">
          Oui
        </Button>
        <Button type="primary" icon={<CloseOutlined />} iconPosition="end" onClick={handleCloseModal}>
          Non
        </Button>
      </div>
    </div>
  );
}
