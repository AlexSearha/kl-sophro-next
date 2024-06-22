import MyAccountNav from '@/app/ui/mon-compte/myAccountNav';

export default function MyaccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <div className="w-full h-full md:p-12">
        <MyAccountNav />
      </div>
      <div className="flex-grow p-6 md:p-12 md:overflow-auto">{children}</div>
    </section>
  );
}
