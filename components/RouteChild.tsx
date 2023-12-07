import Link from 'next/link';
import React from 'react';

type LinkProps = {
  children: React.ReactNode;
  url: string;
};

export default function RouteChild({ children, url }: LinkProps) {
  return (
    <Link className=' text-sm mt-10' href={url}>
      {children}
    </Link>
  );
}

