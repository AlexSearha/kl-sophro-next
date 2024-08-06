'use client';
import CardLink from '@/app/ui/mon-compte/parametres/CardLink';
import { faBell, faPassport, faUserEdit, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function SecurityPage() {
  const urlPathName = usePathname();
  return (
    <div className="md:max-w-7xl grow flex flex-col h-full -mt-10 justify-center items-center gap-2">
      <CardLink icon={faPassport} href={`${urlPathName}/mes-informations`} title="Mes Informations" />
      <CardLink icon={faBell} href={`${urlPathName}/notifications`} title="Notifications" />
      <CardLink icon={faUserGear} href={`${urlPathName}/securite`} title="Sécurité" />
    </div>
  );
}
