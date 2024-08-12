'use client';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type CardDossierType = {
  title: string;
  lastUpdate: Date;
  id: number;
};

const CardDossier = ({ ...props }: CardDossierType) => {
  const { title, lastUpdate, id } = props;
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center w-full h-auto border-2 p-2 bg-white border-black/15 shadow-sm rounded-sm">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-lg text-greena-400 italic">{moment(lastUpdate).format('DD/MM/YYYY')}</p>
      </div>
      <div id="card-action" className="flex gap-2">
        <div className="flex justify-center items-center bg-greena-400 transition-colors hover:bg-greena-500 rounded-full h-10 w-10">
          <Tooltip title="Consulter">
            <Link href={`${pathName}/${id}`}>
              <FontAwesomeIcon icon={faFolder} size="sm" className="cursor-pointer p-4 text-white" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CardDossier;
