'use client';
import { AdminProvider } from '@/app/lib/providers';
import DashboardSideNav from '@/app/ui/dashboard/dashboardSideNav';
import '@/app/ui/globals.css';
import { ConfigProvider } from 'antd';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#06752e',
            borderRadius: 2,
          },
        }}
      >
        <html lang="fr">
          <body
            className={`h-screen bg-bgcolor-400`}
            suppressHydrationWarning={true}
          >
            <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
              <div className="w-full flex-col h-full bg-greena-500 md:w-64 md:p-12">
                <DashboardSideNav />
              </div>
              <div className="flex-grow p-6 md:p-12 md:overflow-auto">
                {children}
              </div>
            </div>
          </body>
        </html>
      </ConfigProvider>
    </AdminProvider>
  );
}
