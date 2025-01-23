import React from 'react';
import SylwiaJola from '../assets/img/sylwiaJola.jpg';

export function AboutUs() {
  return (
    <div className=" text-center">
      <h2 className="m-4 font-dmserif text-2xl text-center">
        Witaj w Białym Lotosie
      </h2>
      <p className="m-4">
        Nasz salon piękności to miejsce, gdzie pasja spotyka profesjonalizm,
        tworząc wyjątkowe doświadczenie dla każdego, kto nas odwiedza. Oferujemy
        szeroki zakres usług, aby zaspokoić potrzeby naszych klientów i
        podkreślić ich naturalne piękno.
      </p>
      <img src={SylwiaJola} alt="" />
    </div>
  );
}
