import React from 'react';
import Link from 'next/link';

function NavigationTwo({ lang = false, headerInfo }) {
  const links = lang ? headerInfo.linksAr : headerInfo.linksEn;

  return (
    <ul>
      {links.map((link) => (
        <li key={link.to || link.url}>
          {link.url ? (
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              {link.title}
              {link.badge && <span className='badge ms-1 bg-primary'>{link.badge}</span>}
            </a>
          ) : (
            <Link href={link.to}>
              {link.title}
              {link.badge && <span className='badge ms-1 bg-primary'>{link.badge}</span>}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavigationTwo;
