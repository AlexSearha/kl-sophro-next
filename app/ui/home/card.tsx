import Image from 'next/image';
import { lusitana } from '../fonts';
import { CardProps } from '@/app/types';

export default function Card({ ...props }: CardProps) {
  const { title, step, description, alt, staticImage, IconImage } = props;
  return (
    <>
      <div
        id="cards"
        className="flex flex-col flex-wrap items-center text-white mt-8 md:flex-row"
      >
        <div id="card-container" className="md:w-1/2 xl:w-1/4">
          <div
            id="card"
            className="flex flex-col items-center py-6 px-2 max-h-68 w-60 border-2 bg-black/40 backdrop-blur-sm border-white/25 rounded shadow-black shadow-md"
          >
            <h3 className="font-bold text-2xl">{`- ${step} -`}</h3>
            {staticImage && (
              <Image
                className="mt-4"
                src={staticImage}
                alt={alt}
                height={80}
                width={80}
              />
            )}
            {IconImage ? IconImage : null}
            <h4
              className={`${lusitana.className} text-greena-400 font-bold text-xl mt-4`}
            >
              {title}
            </h4>
            <p className="mt-4 text-center italic">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
