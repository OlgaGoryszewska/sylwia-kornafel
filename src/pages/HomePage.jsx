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
        className="relative"
        src={Face}
        alt="bialy lotos ciechanow main picture of a women face
        "
      />
      <div className=" flex flex-col px-8 pt-12 ">
        <div ref={textRef} className="card">
          <h1 className="text-lg font-dmserif font-black">
            Nowa Strona Internetowa w Budowie
          </h1>
          <p className="pb-2">Witamy na naszej nowej stronie internetowej!</p>
          <p className="pb-2">
            Z radością informujemy, że Salon Biały Lotos pracuje nad
            uruchomieniem nowej platformy.
          </p>
          <p className="pb-2">
            Chcemy, aby była ona intuicyjna, nowoczesna i pełna inspiracji dla
            naszych klientów. Obecnie strona jest w trakcie budowy, ale
            zapraszamy do zapoznania się z naszymi ofertami na listopad!
          </p>
          <p>
            Poniżej znajdziesz najnowsze propozycje, które przygotowaliśmy
            specjalnie dla Ciebie.
          </p>
        </div>
      </div>
      <div className="pt-6">
        <div className="card relative z-20 mt-8 m-8">
          <p>
            W PAŹDZIERNIKU -10% NA ZABIEGI NA TWARZ U GABRIELI GOTAB! Chcesz
            zadbać o swoją cerę i poczuć się wyjątkowo? Skorzystaj z
            październikowej promocji na wybrane zabiegi kosmetyczne! Z jakich
            zabiegów możesz skorzystać? • Przekłuwanie uszu - elegancja i
            subtelność na wyciągnięcie ręki. • Oczyszczanie wodorowe twarzy –
            świeża i promienna skóra bez niedoskonałości. • Zabiegi
            pielęgnacyjne na twarz – terapia przeciwzmarszczkowa, na rozszerzone
            naczynka i przebarwienia – dla młodego i zdrowego wyglądu. •
            Stylizacja rzęs metodami 1:1, 2:1 – długie, gęste rzęsy na co dzień.
            • Henna brwi i rzęs – podkreśl swoje spojrzenie w naturalny sposób.
            • Depilacja twarzy i ciała woskiem – gładka skóra na długo. Gabriela
            posiada wykształcenie kosmetyczne, doświadczenie w pracy w salonie
            kosmetologicznym, a do każdego klienta podchodzi indywidualnie, z
            pełnym profesjonalizmem. Zapisz się już dziś i poczuj różnicę! Nie
            przegap okazji, by zadbać o siebie w wyjątkowy sposób.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
