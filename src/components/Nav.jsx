import React from 'react';
import { Menu } from './Menu';
import logoText from '../assets/img/logoText.png';

export const Nav = () => {
  return (
    <header className="flex justify-between h-11">
      <img className="w-17 m-1.5 ml-2   " src={logoText} alt="Logo Text" />
      <Menu />
    </header>
  );
};
