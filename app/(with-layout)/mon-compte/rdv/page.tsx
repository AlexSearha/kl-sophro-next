'use client';

import { lusitana } from '@/app/ui/fonts';
import AdminCalendarForm from '@/app/ui/forms/adminCalendarForm/adminCalendarForm';
import 'dayjs/locale/fr';

export default function RendezVousPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white shadow max-w-[320px] w-auto rounded">
        <AdminCalendarForm />
      </div>
    </div>
  );
}
