import MyAccountNav from '@/app/ui/mon-compte/myAccountNav';

export default function MyaccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="w-full flex-col h-full md:w-64 md:p-12">
        <MyAccountNav />
      </div>
      <div className="flex-grow p-6 md:p-12">{children}</div>
    </section>
  );
}
