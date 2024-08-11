'use client';
import { useRouter } from 'next/navigation';

export default function SingleClientFolder({ params }: { params: { id: number } }) {
  const route = useRouter();

  return <h1>Folder single client page</h1>;
}
