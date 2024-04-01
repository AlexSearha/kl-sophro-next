import { lusitana } from "@/app/ui/fonts";

export default function DashboardPage() {
  return (
    <>
      <h1 
        id="mainTitle" 
        className={`${lusitana.className} text-3xl text-greena-500 font-bold`}>
          Dashboard
      </h1>
    </>
  );
}