import Logo from '../assets/img/logo.png';
import React, { useEffect, useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';

gsap.registerPlugin(SplitText); // register the plugin

const HomePage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, { type: 'chars' });
    gsap.from(split.chars, {
      duration: 1,
      y: 50,
      opacity: 0,
      rotationX: 70,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
    });
  }, []);

  return (
    <div
      className=" flex flex-col 
    px-8"
    >
      <img
        src={Logo}
        alt="Logo Bialy lotos ciechanow"
        className="w-52 mx-auto py-6"
      />
      <div ref={textRef} className="bg-white p-4 mx-auto rounded-2xl ">
        <h1 className="text-lg font-dmserif font-black">
          Nowa Strona Internetowa w Budowie
        </h1>
        <p className="pb-2">Witamy na naszej nowej stronie internetowej!</p>
        <p className="pb-2">
          Z radością informujemy, że Salon Biały Lotos pracuje nad uruchomieniem
          nowej platformy.
        </p>
        <p className="pb-2">
          Chcemy, aby była ona intuicyjna, nowoczesna i pełna inspiracji dla
          naszych klientów. Obecnie strona jest w trakcie budowy, ale zapraszamy
          do zapoznania się z naszymi ofertami na listopad!
        </p>
        <p>
          Poniżej znajdziesz najnowsze propozycje, które przygotowaliśmy
          specjalnie dla Ciebie.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
