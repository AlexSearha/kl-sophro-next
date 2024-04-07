import { ClientListItemProps } from '@/app/types';
import { useRouter } from 'next/navigation';

export default function ClientListItem({ ...props }: ClientListItemProps) {
  const { lastname, firstname, email, phone, id } = props;
  const router = useRouter();

  return (
    <>
      <tr
        className="transition-all cursor-pointer hover:bg-slate-200 text-center hover:ring-1 hover:ring-slate-300"
        onClick={() => router.push(`/dashboard/clients/${id}`)}
      >
        <td>{lastname}</td>
        <td>{firstname}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    </>
  );
}
