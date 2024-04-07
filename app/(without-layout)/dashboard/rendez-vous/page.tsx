'use client';

import { lusitana } from '@/app/ui/fonts';
import { ThemeProvider, createTheme } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import AdminCalendarForm from '@/app/ui/forms/adminCalendarForm/adminCalendarForm';
import 'dayjs/locale/fr';

export default function RendezVousPage() {
  const theme = createTheme({
    palette: {
      primary: { main: tailwindConfig.theme?.extend?.colors.greena[400] },
    },
  });
  return (
    <>
      <h1
        id="mainTitle"
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}
      >
        Rendez-Vous Page
      </h1>
      <div className="flex justify-center items-center h-full ">
        <div className="bg-white shadow max-w-[320px] w-auto rounded">
          <ThemeProvider theme={theme}>
            <AdminCalendarForm />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
