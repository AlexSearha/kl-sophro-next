import { lusitana } from './fonts';

interface ModalProps {
  title: string;
  content: string;
  cancelAction: () => void;
}

export default function ModalGeneric({ ...props }: ModalProps) {
  const { title, content, cancelAction } = props;

  return (
    <>
      <div
        id="modal"
        className="absolute top-0 left-0 z-5 h-full w-full flex justify-center items-center"
      >
        <div className="flex flex-col gap-3 p-4 rounded-lg bg-white shadow-lg border-slate-300 border-2 z-10 m-4 w-full h-auto md:w-1/2 md:h-1/4">
          <h1 className={`text-3xl ${lusitana.className} text-greena-500 font-bold`}>{title}</h1>
          <p className="mb-1">{content}</p>
          <div className="flex gap-2">
            <button className="flex justify-center items-center transition p-2 rounded shadow ring-1 ring-slate-300 hover:bg-greena-400 hover:text-white">
              Oui
            </button>
            <button
              onClick={() => cancelAction()}
              className="flex justify-center items-center transition p-2 rounded shadow text-white bg-red-600 hover:bg-red-800"
            >
              Non
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-0 w-full h-full backdrop-blur-sm"></div>
    </>
  );
}
