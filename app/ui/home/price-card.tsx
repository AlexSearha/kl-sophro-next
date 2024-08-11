'use client';

import { PriceCardProps } from '@/app/types';
import Image from 'next/image';
import { lusitana } from '../fonts';
import { useRouter } from 'next/navigation';

export default function PriceCard({ ...props }: PriceCardProps) {
  const { title, price, description, alt, image } = props;
  const router = useRouter();

  return (
    <div
      id="card-price"
      className="flex flex-col justify-between gap-4 text-center w-80 shadow-lg border-4 rounded-md transition-all hover:border-greena-400 hover:shadow-greena-500/85 hover:scale-105 "
    >
      <div id="card-price__header" className="flex flex-col gap-2 mb-3">
        <Image src={image} alt={alt} width={500} height={500} />
        <div className="my-2">
          <h3
            className={`text-2xl ${lusitana.className} uppercase font-bold text-greena-400`}
          >
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          id="card-price__price"
          className={`flex ${lusitana.className} items-center justify-center`}
        >
          <span className={`text-xl font-bold text-greena-500`}>{price}€</span>
          &nbsp;la séance
        </div>
        <div
          id="card-price__divider"
          className="w-full max-w-56 border-b-2 mb-2 border-black/15 mx-auto"
        ></div>
        <div id="card-price__body" className="mb-6">
          <button
            className="bg-greena-400 text-white font-bold py-2 w-full max-w-48 rounded-md  transition-all hover:bg-greena-500 "
            onClick={() => router.push('/contact')}
          >
            Prendre RDV
          </button>
        </div>
      </div>
    </div>
  );
}
