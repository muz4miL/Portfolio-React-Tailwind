import Education from './Education';

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-black px-4 py-16 text-white"
    >
      {/* Watermark and heading flex container */}
      <div className="relative mb-12 flex flex-col items-center justify-center">
        {/* Watermark background text */}
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-6xl font-extrabold text-white opacity-10 select-none sm:text-8xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
          RESUME
        </span>
        {/* Small heading above watermark */}
        <span className="relative z-10 text-center text-3xl font-bold tracking-widest text-yellow-500 uppercase lg:mt-6">
          Resume
        </span>
      </div>
      <div className="container mx-auto px-4">
        <Education />
      </div>
    </section>
  );
}
