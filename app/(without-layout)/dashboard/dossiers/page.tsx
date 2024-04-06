import { lusitana } from "@/app/ui/fonts"

export default function DossiersPage({
    params,
  }: {
    params: { slug: string }
  }) {
    return (
      <>
        <h1 
          id="mainTitle" 
          className={`${lusitana.className} text-4xl text-greena-500 font-bold`}>
            Dossiers Page
        </h1>
      </>
    )
  }
