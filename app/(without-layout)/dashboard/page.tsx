'use client';

import CardRendezVous from '@/app/ui/dashboard/cardRendezVous';
import { lusitana } from '@/app/ui/fonts';
import PaginationElement from '@/app/ui/pagination';
import { useEffect, useState } from 'react';

const appointments = [
  {
    id: 1,
    date: 'Lundi 14 Mai 2024',
    fullname: 'Alexis Marouf',
    address: '22 rue des tisserands, 56190 Noyal Muzillac',
  },
  {
    id: 2,
    date: 'Mercredi 16 Mai 2024',
    fullname: 'Emily Johnson',
    address: '10 rue de la Liberté, 75001 Paris',
  },
  {
    id: 3,
    date: 'Vendredi 18 Mai 2024',
    fullname: 'John Smith',
    address: '45 Main Street, Anytown, USA',
  },
  {
    id: 4,
    date: 'Mardi 22 Mai 2024',
    fullname: 'Maria Garcia',
    address: '123 Calle Principal, Ciudad de México',
  },
  {
    id: 5,
    date: 'Jeudi 24 Mai 2024',
    fullname: 'Wei Chen',
    address: '88 Nanjing Road, Shanghai, China',
  },
  {
    id: 6,
    date: 'Vendredi 25 Mai 2024',
    fullname: 'Sophie Dupont',
    address: '15 avenue des Champs-Élysées, 75008 Paris',
  },
  {
    id: 7,
    date: 'Samedi 26 Mai 2024',
    fullname: 'Liam Brown',
    address: '1234 Elm Street, Springfield, USA',
  },
  {
    id: 8,
    date: 'Dimanche 27 Mai 2024',
    fullname: 'Ana Silva',
    address: '456 Rua das Flores, São Paulo, Brazil',
  },
  {
    id: 9,
    date: 'Lundi 28 Mai 2024',
    fullname: 'Oliver Müller',
    address: '789 Hauptstraße, Berlin, Germany',
  },
  {
    id: 10,
    date: 'Mardi 29 Mai 2024',
    fullname: 'Aisha Hassan',
    address: '10 Sheikh Zayed Road, Dubai, UAE',
  },
  {
    id: 11,
    date: 'Mercredi 30 Mai 2024',
    fullname: 'Hiroshi Tanaka',
    address: '100 Shibuya Crossing, Tokyo, Japan',
  },
  {
    id: 12,
    date: 'Jeudi 31 Mai 2024',
    fullname: 'Amelie Leclerc',
    address: '20 rue de la République, 69002 Lyon',
  },
];

export default function DashboardPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);
  const [openModal, setOpenModal] = useState(false);
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get current posts
  const indexOfLastAppointments = currentPage * postsPerPage;
  const indexOfFirstAppointments = indexOfLastAppointments - postsPerPage;
  const currentAppointments = filteredAppointments.slice(
    indexOfFirstAppointments,
    indexOfLastAppointments
  );

  useEffect(() => {
    const filtered = appointments.filter((appointment) => {
      return (
        appointment.fullname.toLowerCase().includes(searchText.toLowerCase()) ||
        appointment.address.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredAppointments(filtered);
  }, [searchText]);

  return (
    <>
      <h1
        id="mainTitle"
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}
      >
        Dashboard
      </h1>
      <div className="mt-4">
        <div className="flex justify-between mx-2">
          <h2 className={`${lusitana.className} text-3xl mb-3`}>
            Mes prochains rendez-vous
          </h2>
          <input
            id="search"
            name="search"
            type="text"
            autoComplete="off"
            value={searchText}
            placeholder="Recherche"
            onChange={(event) => setSearchText(event.target.value)}
            className="focus:ring-greena-400 focus:border-greena-400 rounded"
          />
        </div>
        <div id="card-container" className="flex flex-col w-full">
          {currentAppointments.map((appointment) => (
            <CardRendezVous
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              fullName={appointment.fullname}
              address={appointment.address}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
        <PaginationElement
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={filteredAppointments.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
