'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link 
            href={link.href} 
            key={link.name} 
            passHref
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            <a>{link.name}</a>
          </Link>
        );
      })}
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
