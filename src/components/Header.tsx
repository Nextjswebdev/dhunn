import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Image src="/logo.png" alt="Spotify Logo" width={50} height={50}   />
      <nav className="space-x-4">
        <a href="#" className="hover:text-gray-300">Magic</a>
       
      </nav>
    </header>
  );
};

export default Header;
