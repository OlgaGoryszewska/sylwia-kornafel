import React from 'react';
import { useEffect, useRef } from 'react';
import Sylwia from '../assets/img/sylwiaAndJola.jpg';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
gsap.registerPlugin(ScrambleTextPlugin);

const HomePage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 3,
      scrambleText: {
        text: 'Czas na zmiany, czas na siebie',
      },
      chars: 'X0',
      ease: 'power3',
    });
  }, []);

  return (
    <div className=" flex flex-col ">
      <img
        className="absolute"
        src={Sylwia}
        alt="Master Sylwia Kornafel, permanentny makijaz"
      />
      <p
        className="font-bochan text-4xl relative z-10 mt-80 text-white p-10 text-shadow-lg leading-normal text-center
         "
        ref={textRef}
      >
        Czas na zmiany, czas na siebie
      </p>
    </div>
  );
};

export default HomePage;
