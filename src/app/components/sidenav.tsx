'use client';
/* CLient vs Server compnonents */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Contacts', path: '/contactsTable' },
    { name: 'Templates', path: '/templatesPage' },
    { name: 'ContactOut', path: '/contactOutPage'},
  ];

  return (
    <>
      <nav 
        className={`fixed left-0 h-[calc(100vh-4rem)] bg-transparent text-white top-16 transition-all duration-300 
          ${isOpen ? 'w-64' : 'w-16'}
          md:sticky`}
      >
        {/* Moved button slightly inward from the right edge */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-4 top-4 p-2 rounded-lg bg-slate-950 text-white hover:bg-slate-700"
        >
          {isOpen ? '←' : '→'}
        </button>

        <div className={`p-4 space-y-6 ${!isOpen && 'hidden'}`}>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.path
                      ? 'bg-slate-950 text-white'
                      : 'hover:bg-slate-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
} 