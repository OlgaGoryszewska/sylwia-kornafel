import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
gsap.registerPlugin(ScrambleTextPlugin);

import logo from '../assets/img/menuLogo.png';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const linkRef = useRef(null);

  const handleClickAnimation = () => {
    gsap.fromTo(
      logoRef.current,
      { rotation: 0, scale: 1 },
      { rotation: 360, scale: 1.2, duration: 1, ease: 'power2.inOut' }
    );
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    gsap.to(linkRef.current, {
      duration: 1,
      scrambleText: { text: 'Umów' },
      chars: 'X0',
      ease: 'power3',
    });
  });

  return (
    <div className="flex flex-col max-w-full  ">
      <button
        ref={menuRef}
        className="flex flex-row justify-end bg-primary w-full"
      >
        <img
          alt="menu"
          src={logo}
          className="w-11 m-2"
          ref={logoRef}
          onClick={handleClickAnimation}
        />
      </button>
      {showMenu && (
        <div
          className=" rounded-bl-md flex flex-col bg-primary z-40 px-16 pt-4 font-bochan
        "
        >
          <Link className="w-full text-center text-gold pb-4" to="/">
            Umów
          </Link>
          <Link className="w-full text-center text-gold pb-4" to="/">
            Zabiegi
          </Link>
          <Link className="w-full text-center text-gold pb-4" to="/">
            O nas
          </Link>
          <Link className="w-full text-center text-gold pb-4" to="/">
            Kontakt
          </Link>
        </div>
      )}
    </div>
  );
};
