import { lusitana } from "@/app/ui/fonts"

export default function ClientSearchPage({
    params,
  }: {
    params: { slug: string }
  }) {
    return (
      <h1 
        id="mainTitle" 
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}>
          Clients Page
      </h1>
    )        
  }