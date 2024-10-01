import { Link } from 'react-router-dom';
import { useState } from 'react';
import { gsap } from 'gsap';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickAnimation = () => {
    gsap.fromTo(
      palmRef.current,
      { rotation: 0, scale: 1 },
      { rotation: 360, scale: 1.2, duration: 1, ease: 'power2.inOut' }
    );
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <button>
        <img alt="menu" className="w-12 h-12" onClick={handleClickAnimation} />
      </button>
    </div>
  );
};
