import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface CardLinkProps {
  href: string;
  title: string;
  icon: IconProp;
}

export default function CardLink({ href, title, icon }: CardLinkProps) {
  return (
    <Link
      href={href}
      className="flex justify-between items-center text-xl h-16 w-[250px] p-2 gap-2 border-black/20 border-2 hover:border-greena-500 hover:text-white rounded shadow transition-colors hover:bg-greena-500"
    >
      {title}
      <FontAwesomeIcon icon={icon} size="lg" />
    </Link>
  );
}
