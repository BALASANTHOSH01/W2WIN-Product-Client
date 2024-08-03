import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowToRight } from './Icons';

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  return (
    <nav className=" py-3 px-5 rounded-lg text-[15px] ">
      <ol className="list-reset flex text-gray-800">
        <li>
          <Link href="/" legacyBehavior>
            <a className=" hover:underline">Home</a>
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const isLast = index === pathArray.length - 1;
          const routePath = `/${pathArray.slice(0, index + 1).join('/')}`;
          const displayName = decodeURIComponent(path).replace('-', ' ');

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">
                <ArrowToRight/>
              </span>
              {isLast ? (
                <span className="text-gray-500 capitalize">{displayName}</span>
              ) : (
                <Link href={routePath} legacyBehavior>
                  <a className=" hover:underline capitalize">{displayName}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
