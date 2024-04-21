'use client';

import CardRendezVous from '@/app/ui/dashboard/cardRendezVous';
import { lusitana } from '@/app/ui/fonts';
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
];

export default function DashboardPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const filteredAppointments = appointments.filter((appointment) => {
      return (
        appointment.fullname.toLowerCase().includes(searchText.toLowerCase()) ||
        appointment.address.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredAppointments(filteredAppointments);
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
            onChange={handleChange}
            className="focus:ring-greena-400 focus:border-greena-400 rounded"
          />
        </div>
        <div id="card-container" className="flex flex-col w-full">
          {filteredAppointments.map((appointment) => (
            <CardRendezVous
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              fullname={appointment.fullname}
              address={appointment.address}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
