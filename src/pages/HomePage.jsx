import Face from '../assets/img/faceNoice.jpg';
import { Nav } from '../components/Nav';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HomePage = () => {
  const textRef1 = useRef(null); // Reference for the first text element
  const textRef2 = useRef(null); // Reference for the second text element

  useEffect(() => {
    const textWidth = textRef1.current.offsetWidth; // Get the width of the text element

    // Animate both text elements to move continuously
    gsap.fromTo(
      [textRef1.current, textRef2.current],
      { x: 0 }, // Start position
      {
        x: `-${textWidth}px`, // End position (move by the width of the text)
        duration: 30, // Duration of one full cycle
        repeat: -1, // Infinite loop
        ease: 'linear', // Linear movement (constant speed)
      }
    );
  }, []);

  return (
    <>
      <Nav className="absolute" />
      <div className="overflow-hidden w-full relative">
        <div className="absolute flex whitespace-nowrap z-20 mt-40 ">
          {/* First text element */}
          <p
            ref={textRef1}
            className="font-bochanstyled text-gold text-5xl inline-block text-shadow-lg"
          >
            • PMU • Podologia • Zabiegi Na Twarz • Lasery • PMU • Podologia •
            Zabiegi Na Twarz • Lasery • PMU • Podologia • Zabiegi Na Twarz •
            Lasery
          </p>
          {/* Second text element (duplicate of the first) */}
          <p
            ref={textRef2}
            className="font-bochanstyled text-gold text-5xl inline-block text-shadow-lg"
          >
            • PMU • Podologia • Zabiegi Na Twarz • Lasery • PMU • Podologia •
            Zabiegi Na Twarz • Lasery
          </p>
        </div>
        <img
          className="relative"
          src={Face}
          alt="bialy lotos ciechanow main picture of a women face"
        />
      </div>
    </>
  );
};

export default HomePage;
