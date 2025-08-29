import myImage2 from '../assets/myImage2.png';

import { useEffect, useState, useRef } from 'react';

const words = ['Programmer', 'Teacher', 'Student'];

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
    <div className="relative flex flex-col lg:flex-row-reverse">
      {/* Image: right for large, background for md/sm */}
      <div className="absolute inset-0 z-0 h-[350px] w-full md:h-[400px] lg:static lg:mt-10 lg:mr-50 lg:h-[650px] lg:w-[600px]">
        <img
          src={myImage2}
          alt="Muzamil Shiraz"
          className="h-full w-full scale-120 object-cover object-center opacity-60 lg:opacity-100"
        />
      </div>

      <div
        className={`relative z-10 ml-4 flex flex-1 items-center justify-center transition-opacity duration-700 md:ml-14 lg:ml-46 ${show ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="mt-25 flex flex-1 flex-col justify-center pl-12">
          <span className="font-poppins text-md mb-2 font-semibold tracking-widest text-yellow-400">
            HELLO!
          </span>

          <h1 className="font-poppins mb-10 text-6xl font-extrabold text-white">
            I'm{' '}
            <span className="text-6xl text-[#ffbd39] md:text-7xl">
              Muzamil <br />
              <span className="mt-4 block">Shiraz</span>
            </span>
          </h1>

          <h2 className="font-poppins mb-10 min-h-[2.5rem] text-2xl font-bold text-white md:text-3xl">
            <span>{displayedText}</span>
            <span className="animate-blink">|</span>
          </h2>

          <p className="font-poppins mb-5 text-4xl text-white">
            Aspiring Computer Scientist
          </p>
          <button className="font-poppins w-[145px] rounded-full bg-[#FFBD39] px-6 py-3 text-center text-base font-bold tracking-wide text-black hover:bg-[#FFC300] active:bg-[#FFB000]">
            LINKEDIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
