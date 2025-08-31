import myImage2 from '../assets/myImage2.png';
import { useEffect, useState, useRef } from 'react';

const words = [
  'Frontend Developer',
  'React Developer',
  'Programmer',
  'Teacher',
];

const Hero = () => {
  // Typing animation
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [show, setShow] = useState(false); // Fade-in state
  const typingSpeed = useRef(80); // ms per character
  const pauseTime = useRef(900); // ms pause at end of word

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  useEffect(() => {
    let timer;
    const word = words[currentWord];
    if (!isDeleting && displayedText.length < word.length) {
      timer = setTimeout(() => {
        setDisplayedText(word.slice(0, displayedText.length + 1));
      }, typingSpeed.current);
    } else if (!isDeleting && displayedText.length === word.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime.current);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(word.slice(0, displayedText.length - 1));
      }, typingSpeed.current);
    } else if (isDeleting && displayedText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 400);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWord]);

  return (
    <>
      {/* Large screens: inline image left, text right */}
      <section className="hidden min-h-[600px] w-full flex-row items-center justify-center bg-black md:min-h-[680px] lg:flex xl:min-h-[80vh]">
        <div className="mr-2 ml-8 flex h-[600px] flex-shrink-0 items-center justify-center">
          <img
            src={myImage2}
            alt="Muzamil Shiraz"
            className="h-[600px] w-auto max-w-[400px] rounded-2xl object-contain shadow-xl lg:mr-18 lg:h-[700px] xl:h-[100vh] xl:max-w-[500px]"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 px-4 text-left lg:max-w-xl xl:ml-8 xl:max-w-2xl">
          <span className="mb-4 font-semibold tracking-widest text-yellow-400 font-poppins text-md xl:mb-6">
            HELLO!
          </span>
          <h1 className="mb-8 text-4xl font-extrabold text-white font-poppins lg:mb-10 lg:text-7xl xl:mb-10">
            I'm{' '}
            <span className="text-4xl text-[#ffbd39] lg:text-7xl">
              Muzamil <br />
              <span className="block mt-4">Shiraz</span>
            </span>
          </h1>
          <h2 className="font-poppins mb-8 min-h-[2.5rem] text-lg font-bold text-white lg:mb-10 lg:text-3xl xl:mb-10">
            <span>{displayedText}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="mb-6 text-xl text-white font-poppins lg:mb-10 lg:text-4xl xl:mb-10">
            Aspiring Computer Scientist
          </p>
          <button className="font-poppins w-[145px] rounded-full bg-[#FFBD39] px-6 py-3 text-base font-bold tracking-wide text-black hover:bg-[#FFC300] active:bg-[#FFB000]">
            LINKEDIN
          </button>
        </div>
      </section>

      {/* Medium and small screens: background image, centered text */}
      <section
        className="relative flex min-h-[600px] w-full flex-col items-center justify-center bg-black bg-center bg-no-repeat md:min-h-[680px] lg:hidden"
        style={{
          backgroundImage: `url(${myImage2})`,
          backgroundSize: 'contain',
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 z-0 bg-black/40" />
        <div
          className={`relative z-10 flex w-full flex-1 items-center justify-center transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col items-center justify-center w-full px-4 text-center sm:px-8">
            <span className="mb-4 font-semibold tracking-widest text-yellow-400 font-poppins text-md">
              HELLO!
            </span>
            <h1 className="mb-8 text-4xl font-extrabold text-white font-poppins sm:text-5xl md:text-6xl">
              I'm{' '}
              <span className="text-4xl text-[#ffbd39] sm:text-5xl md:text-6xl">
                Muzamil <br />
                <span className="block mt-4">Shiraz</span>
              </span>
            </h1>
            <h2 className="font-poppins mb-8 min-h-[2.5rem] text-lg font-bold text-white sm:text-xl md:text-2xl">
              <span>{displayedText}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="mb-6 text-xl text-white font-poppins sm:text-2xl md:text-3xl">
              Aspiring Computer Scientist
            </p>
            <button className="font-poppins w-[145px] rounded-full bg-[#FFBD39] px-6 py-3 text-base font-bold tracking-wide text-black hover:bg-[#FFC300] active:bg-[#FFB000]">
              LINKEDIN
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
