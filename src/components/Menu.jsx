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
    <div>
      <button>
        <img
          alt="menu"
          src={logo}
          className="w-12 m-4"
          ref={logoRef}
          onClick={handleClickAnimation}
        />
      </button>
    </div>
  );
};
