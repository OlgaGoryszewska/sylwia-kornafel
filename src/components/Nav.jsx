import React from 'react';
import { Menu } from './Menu';

export const Nav = () => {
  return (
    <div className="bg-transparent absolute z-40">
      <header className="bg-transparent">
        <Menu />
      </header>
    </div>
  );
};
