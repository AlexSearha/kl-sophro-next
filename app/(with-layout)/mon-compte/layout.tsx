import MyAccountNav from '@/app/ui/mon-compte/myAccountNav';

export default function MyaccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full grow">
      <div className="w-full md:p-12">
        <MyAccountNav />
      </div>
      <div className="grow p-6 md:p-12 md:overflow-auto flex justify-center">{children}</div>
    </section>
  );
}
