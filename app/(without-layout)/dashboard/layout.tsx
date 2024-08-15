'use client';
import { ReactNode } from 'react';
import MainProvider from '@/app/lib/providers/mainProvider';
import DashboardSideNav from '@/app/ui/dashboard/dashboardSideNav';
import ModalGeneric from '@/app/ui/modal';
import '@/app/ui/globals.css';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <MainProvider>
      <html lang="fr">
        <body className={`h-screen bg-bgcolor-400`} suppressHydrationWarning={true}>
          <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
            <div
              className={`flex flex-col w-full h-full max-h-[250px] md:h-full md:max-h-full bg-greena-500 md:w-64 md:p-12 relative`}
            >
              <DashboardSideNav />
            </div>
            <div className="flex-grow p-6 md:p-12 md:overflow-auto flex flex-col justify-start">
              {children}
            </div>
          </div>
          <ModalGeneric />
        </body>
      </html>
    </MainProvider>
  );
}
