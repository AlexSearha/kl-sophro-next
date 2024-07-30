'use client';

import { lusitana } from '@/app/ui/fonts';
import AdminCalendarForm from '@/app/ui/forms/adminCalendarForm/adminCalendarForm';
import 'dayjs/locale/fr';

export default function RendezVousPage() {
  return (
    <>
      <h1>Page de Rendez-vous</h1>
      {/* <h1
        id="mainTitle"
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}
      >
        Rendez-Vous Page
      </h1>
      <div className="flex justify-center items-center h-full ">
        <div className="bg-white shadow max-w-[320px] w-auto rounded">
          <AdminCalendarForm />
        </div>
      </div> */}
    </>
  );
}
