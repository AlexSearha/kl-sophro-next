import WhoIAm from '@/app/ui/home/Sections/WhoIAm';
import Sophrology from '@/app/ui/home/Sections/Sophrology';
import HowASessionWorks from '@/app/ui/home/Sections/HowASessionWorks';
import Prices from '@/app/ui/home/Sections/Prices';
import Banner from '@/app/ui/home/Sections/Banner';

export default function Home() {
  return (
    <main className="flex w-full flex-col grow text-neutral-800">
      {/* Section banner */}
      <Banner />

      {/* Section How I am */}
      <WhoIAm />

      {/* Section The sophrology*/}
      <Sophrology />

      {/* Section How a session works? */}
      <HowASessionWorks />

      {/* Price section */}
      <Prices />
    </main>
  );
}
