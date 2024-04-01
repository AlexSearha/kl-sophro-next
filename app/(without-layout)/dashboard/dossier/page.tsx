import { lusitana } from "@/app/ui/fonts"

export default function DossierPage({
    params,
  }: {
    params: { slug: string }
  }) {
    return <h1 className={`${lusitana.className} text-4xl text-greena-500 font-bold`}>Dossier</h1>
  }