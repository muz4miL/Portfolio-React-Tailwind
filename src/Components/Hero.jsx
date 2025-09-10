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
      <section
        id="hero"
        className="hidden min-h-[600px] w-full flex-row items-center justify-center bg-black pt-20 md:min-h-[680px] lg:flex xl:min-h-[80vh]"
      >
        <div className="mr-4 ml-8 flex h-[600px] flex-shrink-0 items-center justify-center">
          <img
            src={myImage2}
            alt="Muzamil Shiraz"
            className="h-[600px] w-auto max-w-[400px] rounded-2xl object-contain shadow-xl lg:h-[650px] xl:h-[70vh] xl:max-w-[450px]"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center px-6 text-left lg:max-w-xl xl:ml-8 xl:max-w-2xl">
          <span className="font-poppins mb-4 text-sm font-semibold tracking-widest text-yellow-400 uppercase xl:mb-6 xl:text-base">
            HELLO!
          </span>
          <h1 className="font-poppins mb-6 text-4xl font-extrabold text-white lg:mb-8 lg:text-6xl xl:mb-8 xl:text-7xl">
            I'm{' '}
            <span className="text-4xl text-[#ffbd39] lg:text-6xl xl:text-7xl">
              Muzamil
            </span>
            <br />
            <span className="text-4xl text-[#ffbd39] lg:text-6xl xl:text-7xl">
              Shiraz
            </span>
          </h1>
          <h2 className="font-poppins mb-6 min-h-[2.5rem] text-lg font-bold text-white lg:mb-8 lg:text-2xl xl:mb-8 xl:text-3xl">
            <span>{displayedText}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="font-poppins mb-8 text-lg text-white lg:mb-10 lg:text-xl xl:mb-10 xl:text-2xl">
            Aspiring Computer Scientist
          </p>
          <a
            href="https://linkedin.com/in/your-profile" // Replace with actual LinkedIn URL
            className="inline-block w-fit transform rounded-full bg-yellow-400 px-8 py-3 font-bold text-black uppercase shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 lg:px-10 lg:py-4 lg:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </section>

      {/* Medium and small screens: background image, centered text */}
      <section
        className="relative flex min-h-[600px] w-full flex-col items-center justify-center bg-black bg-center bg-no-repeat pt-20 md:min-h-[680px] lg:hidden"
        style={{
          backgroundImage: `url(${myImage2})`,
          backgroundSize: 'contain',
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div
          className={`relative z-10 flex w-full flex-1 items-center justify-center transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex w-full flex-col items-center justify-center px-4 text-center sm:px-8">
            <span className="font-poppins mb-4 text-sm font-semibold tracking-widest text-yellow-400 uppercase sm:text-base">
              HELLO!
            </span>
            <h1 className="font-poppins mb-6 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              I'm{' '}
              <span className="text-4xl text-[#ffbd39] sm:text-5xl md:text-6xl">
                Muzamil
              </span>
              <br />
              <span className="text-4xl text-[#ffbd39] sm:text-5xl md:text-6xl">
                Shiraz
              </span>
            </h1>
            <h2 className="font-poppins mb-6 min-h-[2.5rem] text-lg font-bold text-white sm:text-xl md:text-2xl">
              <span>{displayedText}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="font-poppins mb-8 text-lg text-white sm:text-xl md:text-2xl">
              Aspiring Computer Scientist
            </p>
            <a
              href="https://linkedin.com/in/your-profile" // Replace with actual LinkedIn URL
              className="inline-block transform rounded-full bg-yellow-400 px-8 py-3 font-bold text-black uppercase shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 sm:px-10 sm:py-4 sm:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
