import React from 'react';
import Logo from '../assets/img/logo.png';

const HomePage = () => {
  return (
    <div
      className=" flex flex-col 
    px-8  "
    >
      <img
        src={Logo}
        alt="Logo Bialy lotos ciechanow"
        className="w-52 mx-auto py-6"
      />
      <div className="bg-white p-4 mx-auto rounded-2xl ">
        <h1 className="text-lg font-dmserif font-black">
          Nowa Strona Internetowa w Budowie
        </h1>
        <p>
          Witamy na naszej nowej stronie internetowej! Z radością informujemy,
          że Salon Biały Lotos pracuje nad uruchomieniem nowej platformy.
          Chcemy, aby była ona intuicyjna, nowoczesna i pełna inspiracji dla
          naszych klientów. Obecnie strona jest w trakcie budowy, ale zapraszamy
          do zapoznania się z naszymi ofertami na listopad! Poniżej znajdziesz
          najnowsze propozycje, które przygotowaliśmy specjalnie dla Ciebie.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
