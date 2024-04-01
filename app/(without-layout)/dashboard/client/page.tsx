import { lusitana } from "@/app/ui/fonts"

export default function ClientPage({
    params,
  }: {
    params: { slug: string }
  }) {
    return <h1 className={`${lusitana.className} text-3xl text-greena-500 font-bold`}>Client</h1>
  }