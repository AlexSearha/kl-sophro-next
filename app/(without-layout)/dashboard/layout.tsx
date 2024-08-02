'use client';
import { ReactNode } from 'react';
import MainProvider from '@/app/lib/providers/mainProvider';
import DashboardSideNav from '@/app/ui/dashboard/dashboardSideNav';
import ModalGeneric from '@/app/ui/Modal';
import '@/app/ui/globals.css';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <MainProvider>
      <html lang="fr">
        <body className={`h-screen bg-bgcolor-400`} suppressHydrationWarning={true}>
          <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
            <div className="w-full flex-col h-full bg-greena-500 md:w-64 md:p-12">
              <DashboardSideNav />
            </div>
            <div className="flex-grow p-6 md:p-12 md:overflow-auto">{children}</div>
          </div>
          <ModalGeneric />
        </body>
      </html>
    </MainProvider>
  );
}
