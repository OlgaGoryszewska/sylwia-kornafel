import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';

import logo from '../assets/img/menuLogo.png';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const logoRef = useRef(null);

  const handleClickAnimation = () => {
    gsap.fromTo(
      logoRef.current,
      { rotation: 0, scale: 1 },
      { rotation: 360, scale: 1.2, duration: 1, ease: 'power2.inOut' }
    );
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col max-w-full ">
      <button className="flex flex-row justify-end">
        <img
          alt="menu"
          src={logo}
          className="w-12 m-4"
          ref={logoRef}
          onClick={handleClickAnimation}
        />
      </button>
      <ul className="flex flex-col mx-auto">
        <li>{showMenu && <Link to="/">Home</Link>}</li>
      </ul>
    </div>
  );
};
