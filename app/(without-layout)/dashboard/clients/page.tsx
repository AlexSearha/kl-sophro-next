'use client';
import React, { useEffect, useState } from 'react';
import ClientListItem from '@/app/ui/clients/ClientListItem';
import { lusitana } from '@/app/ui/fonts';
import { ClientProps } from '@/app/types';
import PaginationElement from '@/app/ui/pagination';

export default function ClientsSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredClients, setFilteredClients] = useState<ClientProps[]>([]);
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  {
    /**  TODO: Remplacer les datas en dur par un fetch */
  }
  const clients = [
    {
      id: 0,
      lastname: 'Marouf',
      firstname: 'Alexis',
      email: 'alexis.marouf@hotmail.fr',
      phone: '0626904074',
    },
    {
      id: 1,
      lastname: 'Smith',
      firstname: 'John',
      email: 'john.smith@example.com',
      phone: '1234567890',
    },
    {
      id: 2,
      lastname: 'Johnson',
      firstname: 'Emily',
      email: 'emily.johnson@example.com',
      phone: '0987654321',
    },
    {
      id: 3,
      lastname: 'Garcia',
      firstname: 'Maria',
      email: 'maria.garcia@example.com',
      phone: '5555555555',
    },
    {
      id: 4,
      lastname: 'Dubois',
      firstname: 'Sophie',
      email: 'sophie.dubois@example.com',
      phone: '9876543210',
    },
    {
      id: 5,
      lastname: 'Chen',
      firstname: 'Wei',
      email: 'wei.chen@example.com',
      phone: '1231231234',
    },
    {
      id: 6,
      lastname: 'Kumar',
      firstname: 'Amit',
      email: 'amit.kumar@example.com',
      phone: '6667778888',
    },
    {
      id: 7,
      lastname: 'Lee',
      firstname: 'Ming',
      email: 'ming.lee@example.com',
      phone: '7778889999',
    },
    {
      id: 8,
      lastname: 'Gonzalez',
      firstname: 'Carlos',
      email: 'carlos.gonzalez@example.com',
      phone: '1112223333',
    },
    {
      id: 9,
      lastname: 'Brown',
      firstname: 'Liam',
      email: 'liam.brown@example.com',
      phone: '4445556666',
    },
    {
      id: 10,
      lastname: 'Martinez',
      firstname: 'Isabella',
      email: 'isabella.martinez@example.com',
      phone: '9998887777',
    },
    {
      id: 11,
      lastname: 'Wilson',
      firstname: 'James',
      email: 'james.wilson@example.com',
      phone: '1234567899',
    },
    {
      id: 12,
      lastname: 'Moore',
      firstname: 'Ella',
      email: 'ella.moore@example.com',
      phone: '9876543211',
    },
    {
      id: 13,
      lastname: 'Taylor',
      firstname: 'Sophia',
      email: 'sophia.taylor@example.com',
      phone: '5556667777',
    },
    {
      id: 14,
      lastname: 'Anderson',
      firstname: 'David',
      email: 'david.anderson@example.com',
      phone: '1113335555',
    },
    {
      id: 15,
      lastname: 'Thomas',
      firstname: 'Olivia',
      email: 'olivia.thomas@example.com',
      phone: '4446668888',
    },
    {
      id: 16,
      lastname: 'Jackson',
      firstname: 'Mia',
      email: 'mia.jackson@example.com',
      phone: '2224446666',
    },
    {
      id: 17,
      lastname: 'White',
      firstname: 'William',
      email: 'william.white@example.com',
      phone: '9991113333',
    },
    {
      id: 18,
      lastname: 'Harris',
      firstname: 'Emily',
      email: 'emily.harris@example.com',
      phone: '8882224444',
    },
    {
      id: 19,
      lastname: 'Martin',
      firstname: 'Noah',
      email: 'noah.martin@example.com',
      phone: '7773335555',
    },
    {
      id: 20,
      lastname: 'Thompson',
      firstname: 'Lucas',
      email: 'lucas.thompson@example.com',
      phone: '6664445555',
    },
    {
      id: 21,
      lastname: 'Garcia',
      firstname: 'Emma',
      email: 'emma.garcia@example.com',
      phone: '5553334444',
    },
    {
      id: 22,
      lastname: 'Martinez',
      firstname: 'Ethan',
      email: 'ethan.martinez@example.com',
      phone: '4442223333',
    },
    {
      id: 23,
      lastname: 'Robinson',
      firstname: 'Ava',
      email: 'ava.robinson@example.com',
      phone: '3331112222',
    },
    {
      id: 24,
      lastname: 'Clark',
      firstname: 'Michael',
      email: 'michael.clark@example.com',
      phone: '1119998888',
    },
    {
      id: 25,
      lastname: 'Rodriguez',
      firstname: 'Sophia',
      email: 'sophia.rodriguez@example.com',
      phone: '8887776666',
    },
    {
      id: 26,
      lastname: 'Lewis',
      firstname: 'Alexander',
      email: 'alexander.lewis@example.com',
      phone: '7776665555',
    },
    {
      id: 27,
      lastname: 'Lee',
      firstname: 'Charlotte',
      email: 'charlotte.lee@example.com',
      phone: '6665554444',
    },
    {
      id: 28,
      lastname: 'Walker',
      firstname: 'James',
      email: 'james.walker@example.com',
      phone: '5554443333',
    },
    {
      id: 29,
      lastname: 'Hall',
      firstname: 'Benjamin',
      email: 'benjamin.hall@example.com',
      phone: '4443332222',
    },
    {
      id: 30,
      lastname: 'Allen',
      firstname: 'Liam',
      email: 'liam.allen@example.com',
      phone: '3332221111',
    },
    {
      id: 31,
      lastname: 'Young',
      firstname: 'Olivia',
      email: 'olivia.young@example.com',
      phone: '2221110000',
    },
    {
      id: 32,
      lastname: 'Hernandez',
      firstname: 'Lucas',
      email: 'lucas.hernandez@example.com',
      phone: '1110009999',
    },
    {
      id: 33,
      lastname: 'King',
      firstname: 'Emma',
      email: 'emma.king@example.com',
      phone: '0009998888',
    },
    {
      id: 34,
      lastname: 'Wright',
      firstname: 'Mason',
      email: 'mason.wright@example.com',
      phone: '9998887777',
    },
    {
      id: 35,
      lastname: 'Lopez',
      firstname: 'Isabella',
      email: 'isabella.lopez@example.com',
      phone: '8887776666',
    },
    {
      id: 36,
      lastname: 'Hill',
      firstname: 'Elijah',
      email: 'elijah.hill@example.com',
      phone: '7776665555',
    },
    {
      id: 37,
      lastname: 'Scott',
      firstname: 'Sophia',
      email: 'sophia.scott@example.com',
      phone: '6665554444',
    },
    {
      id: 38,
      lastname: 'Green',
      firstname: 'Lucas',
      email: 'lucas.green@example.com',
      phone: '5554443333',
    },
    {
      id: 39,
      lastname: 'Adams',
      firstname: 'Olivia',
      email: 'olivia.adams@example.com',
      phone: '4443332222',
    },
    {
      id: 40,
      lastname: 'Baker',
      firstname: 'Ethan',
      email: 'ethan.baker@example.com',
      phone: '3332221111',
    },
    {
      id: 41,
      lastname: 'Gonzalez',
      firstname: 'James',
      email: 'james.gonzalez@example.com',
      phone: '2221110000',
    },
    {
      id: 42,
      lastname: 'Nelson',
      firstname: 'Emma',
      email: 'emma.nelson@example.com',
      phone: '1110009999',
    },
    {
      id: 43,
      lastname: 'Carter',
      firstname: 'Mason',
      email: 'mason.carter@example.com',
      phone: '0009998888',
    },
    {
      id: 44,
      lastname: 'Mitchell',
      firstname: 'Sophia',
      email: 'sophia.mitchell@example.com',
      phone: '9998887777',
    },
    {
      id: 45,
      lastname: 'Perez',
      firstname: 'Lucas',
      email: 'lucas.perez@example.com',
      phone: '8887776666',
    },
  ];

  // Get current clients
  const indexOfLastClients = currentPage * postsPerPage;
  const indexOfFirstClients = indexOfLastClients - postsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClients,
    indexOfLastClients
  );

  useEffect(() => {
    const filteredClients = clients.filter(
      (client) =>
        client.lastname.toLowerCase().includes(searchText.toLowerCase()) ||
        client.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
        client.email.toLowerCase().includes(searchText.toLowerCase()) ||
        client.phone.includes(searchText)
    );
    setFilteredClients(filteredClients);
  }, [searchText]);

  return (
    <>
      <h1
        id="mainTitle"
        className={`${lusitana.className} text-4xl text-greena-500 font-bold`}
      >
        Clients
      </h1>
      <div className="mt-4">
        <div className="flex justify-between mx-2">
          <h2 className={`${lusitana.className} text-3xl mb-3`}>
            Liste des clients
          </h2>
          <input
            type="text"
            placeholder="Recherche"
            autoComplete="off"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            id="search"
            name="search"
            className="focus:ring-greena-400 focus:border-greena-400 rounded"
          />
        </div>
        <div className="flex justify-center mt-4">
          <table id="client-table" className="w-full mb-2">
            <thead>
              <tr className="text-greena-400 text-xl">
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">Email</th>
                <th scope="col">Télephone</th>
              </tr>
            </thead>
            <tbody className="mt-2 [&>*:nth-child(2n)]:bg-greena-400/10">
              {currentClients.map((client) => (
                <ClientListItem
                  key={client.id}
                  id={client.id}
                  email={client.email}
                  firstname={client.firstname}
                  lastname={client.lastname}
                  phone={client.phone}
                />
              ))}
            </tbody>
          </table>
        </div>
        <PaginationElement
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={filteredClients.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
