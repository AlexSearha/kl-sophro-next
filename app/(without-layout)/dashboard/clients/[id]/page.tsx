'use client';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import NoAvatar from '@/public/no-profile-picture-icon.webp';
import { useRouter } from 'next/navigation';
import { FolderIcon } from '@heroicons/react/20/solid';

export default function SingleClientPage({
  params,
  image,
}: {
  params: { id: number };
  image: string;
}) {
  const router = useRouter();

  if (isNaN(params.id)) {
    router.push('/dashboard/client');
  }

  return (
    <>
      <h1
        className={`${lusitana.className} text-3xl text-greena-500 font-bold`}
      >
        Single Client
      </h1>
      <div
        id="single-client-container"
        className="grow h-full mt-2 w-full flex justify-center items-center"
      >
        <div
          id="user-grid-container"
          className="flex justify-center items-center border border-black/10 shadow-lg bg-white h-full w-full md:max-h-96"
        >
          <div id="img-container" className="flex justify-center w-1/2">
            <div>
              {image ? (
                <Image
                  className="rounded-full"
                  src={image}
                  width={250}
                  height={250}
                  alt="Avatar client"
                />
              ) : (
                <Image
                  className="rounded-full"
                  src={NoAvatar}
                  width={250}
                  height={250}
                  alt="Avatar absent"
                />
              )}
            </div>
          </div>
          <div
            id="client-infos-container"
            className="flex flex-col gap-4 items-center w-1/2"
          >
            <div>
              <h3
                className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}
              >
                Nom
              </h3>
              <p className="italic">Alexis Marouf</p>
            </div>
            <div>
              <h3
                className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}
              >
                Adresse
              </h3>
              <p className="italic">
                22 rue des tisserands, 56190 Noyal-Muzillac
              </p>
            </div>
            <div>
              <h3
                className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}
              >
                Téléphone
              </h3>
              <p className="italic">06 26 90 40 74</p>
            </div>
            <div>
              <h3
                className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}
              >
                Email
              </h3>
              <a
                href="mailto:alexis.marouf@hotmail.fr"
                className="italic transition-all hover:text-greena-400 hover:underline hover:underline-offset-4"
              >
                alexis.marouf@hotmail.fr
              </a>
            </div>
            <div>
              <h3
                className={`${lusitana.className} font-bold text-center text-xl text-greena-500`}
              >
                Dossier
              </h3>
              <button
                type="button"
                className="flex gap-2 items-center w-auto h-10 px-4 text-white font-bold rounded transition-all bg-greena-400 hover:bg-greena-500"
                onClick={() => router.push('/dashboard/client/2/dossier')}
              >
                <FolderIcon
                  height={20}
                  width={20}
                  className="text-white/75 hover:text-white/40"
                />
                <p>Accès au dossier</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
