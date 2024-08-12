'use client';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type AppointmentCardType = { date: Date; title: string; id: number };

const AppointmentCard = ({ ...props }: AppointmentCardType) => {
  const { date, title, id } = props;
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center w-full h-auto border-2 p-2 bg-white border-black/15 shadow-sm rounded-sm">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">{moment(date).format('ddd DD/MM/YYYY')}</h3>
        {/* <p className="text-lg text-greena-400 italic">Truc</p> */}
      </div>
      <div id="card-action" className="flex gap-2">
        <div className="flex justify-center items-center bg-greena-400 transition-colors hover:bg-greena-500 rounded-full h-10 w-10">
          <Tooltip title="Consulter">
            <Link href={`${pathName}/1`}>
              <FontAwesomeIcon icon={faEye} size="sm" className="cursor-pointer p-4 text-white" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
