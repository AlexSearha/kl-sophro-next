import RdvNavMenu from '@/app/ui/menu/rdv-nav-menu';

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex">
        <RdvNavMenu />
      </div>
      {children}
    </div>
  );
}
