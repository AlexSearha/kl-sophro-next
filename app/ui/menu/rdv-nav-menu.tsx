export default function RdvNavMenu() {
  return (
    <nav className="flex flex-col list-none gap-2">
      <li>
        <button className="w-[120px] h-auto bg-greena-400 rounded p-2 shadow text-white font-bold">
          Réservation
        </button>
      </li>
      <li>
        <button className="w-[120px] h-auto bg-greena-400 rounded p-2 shadow text-white font-bold">
          Prohchains
        </button>
      </li>
      <li>
        <button className="w-[120px] h-auto bg-greena-400 rounded p-2 shadow text-white font-bold">
          Passés
        </button>
      </li>
    </nav>
  );
}
