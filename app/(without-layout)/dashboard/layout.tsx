import DashboardSideNav from "@/app/ui/dashboard/dashboardSideNav";
import "@/app/ui/globals.css";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="fr">
        <body className={`h-screen bg-bgcolor-400`} suppressHydrationWarning={true}>
          <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
          <div className="w-full flex-col h-screen md:w-64 md:p-12">
            <DashboardSideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
    )
  }
