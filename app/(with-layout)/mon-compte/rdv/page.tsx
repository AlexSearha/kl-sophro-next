'use client';
import useScreenDetect from '@/app/lib/hooks/screen-detect';
import { lusitana } from '@/app/ui/fonts';
import AdminCalendarForm from '@/app/ui/forms/adminCalendarForm/adminCalendarForm';
import RdvCard from '@/app/ui/mon-compte/rdv/Card';
import 'dayjs/locale/fr';

export default function RendezVousPage() {
  const isMobileVue = useScreenDetect();
  return (
    <div
      className={`flex md:flex-row flex-col-reverse gap-10 justify-evenly items-center md:items-start h-full rounded py-4 md:max-w-7xl w-full ${
        isMobileVue ? 'mb-16' : ''
      }`}
    >
      <div className="flex flex-col gap-4">
        <h2 className={`text-3xl ${lusitana.className} text-greena-500`}>Reserver votre rendez-vous</h2>
        <div className="bg-white shadow max-w-[320px] w-auto rounded">
          <AdminCalendarForm />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className={`text-3xl ${lusitana.className} text-greena-500`}>Vos prochains rendez-vous</h2>
        <RdvCard title="coucou" date="2024-09-01T16:30:00Z" />
      </div>
    </div>
  );
}
