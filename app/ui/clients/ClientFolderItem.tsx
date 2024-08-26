import { ClientListItemProps } from '@/app/types';
import { useRouter, usePathname } from 'next/navigation';
import { lusitana } from '../fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';

export default function ClientFolderItem({ ...props }: ClientListItemProps) {
  const { lastname, firstname, email, phone, id } = props;
  const router = useRouter();
  const pathName = usePathname();

  return (
    <>
      <div className="flex h-auto justify-between bg-white rounded border-2 p-2 border-black/15 shadow">
        <div>
          <h2
            id="client-name"
            className={`text-2xl ${lusitana.className} text-greena-500`}
          >{`${firstname} ${lastname}`}</h2>
          <p id="client-email">{email}</p>
          <p id="client-phone" className="italic">
            {phone}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Tooltip title={`Dossier de ${firstname} ${lastname}`}>
            <FontAwesomeIcon
              icon={faFolderOpen}
              size="xl"
              className="transition-colors hover:text-greena-400 cursor-pointer"
              onClick={() => router.push(`${pathName}/${id}/${firstname}${lastname}`)}
            />
          </Tooltip>
          <Tooltip title={`Informations sur ${firstname} ${lastname}`}>
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              className="transition-colors hover:text-greena-400 cursor-pointer"
              onClick={() => router.push(`clients/${id}`)}
            />
          </Tooltip>
        </div>
      </div>
    </>
  );
}
