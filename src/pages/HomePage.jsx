import React, { useEffect, useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';
import Face from '../assets/img/faceTwo.png';
import { Nav } from '../components/Nav';

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
    <>
      <Nav className=" absolute" />
      <img
        className="relative hidden"
        src={Face}
        alt="bialy lotos ciechanow main picture of a women face
        "
      />
    </>
  );
};

export default HomePage;
