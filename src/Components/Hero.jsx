import { motion } from 'framer-motion';
import LeftPanel1 from '../assets/LeftPanel1.png';
import LeftPanel2 from '../assets/LeftPanel2.png';
import RightPanel1 from '../assets/RightPanel1.png';
import RightPanel2 from '../assets/RightPanel2.png';

export default function Hero() {
  const heading = 'PulseMetrics is your modern analytics dashboard';
  const words = heading.split(' ');

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09, // Controls the delay between each child
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(8px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  };

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-black px-4 pt-16 pb-8 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="mr-12 ml-12 flex flex-wrap justify-center text-4xl leading-tight font-extrabold text-white md:mr-48 md:ml-48 md:text-6xl"
      >
        {words.map((word, i) => (
          <motion.span
            key={word + i}
            variants={childVariants}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={parentVariants}>
        <motion.p
          variants={childVariants}
          transition={{
            duration: 0.7,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2,
          }}
          className="mt-6 max-w-2xl text-lg text-gray-400 md:text-2xl"
        >
          Track, visualize, and optimize your website or app performance with
          real-time insights and startup-grade design.
        </motion.p>
      </motion.div>

      <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <a
          href="#"
          className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow transition-colors hover:bg-gray-100"
        >
          Get Started
        </a>
        <a
          href="#"
          className="rounded-lg border border-gray-700 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-gray-800"
        >
          View Demo
        </a>
      </div>
      <div className="relative mt-12 grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
        <motion.img
          src={LeftPanel1}
          initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
          className="w-64 rounded-xl shadow-lg md:w-80 lg:w-96"
          alt="Dashboard part 1"
        />
        <motion.img
          src={LeftPanel2}
          initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
          className="w-64 rounded-xl shadow-lg md:w-80 lg:w-96"
          alt="Dashboard part 1"
        />
        <motion.img
          src={RightPanel1}
          initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
          className="w-64 rounded-xl shadow-lg md:w-80 lg:w-96"
          alt="Dashboard part 1"
        />
        <motion.img
          src={RightPanel2}
          initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
          className="w-64 rounded-xl shadow-lg md:w-80 lg:w-96"
          alt="Dashboard part 1"
        />
        {/* Repeat for leftpanel2.png, rightpanel1.png, rightpanel2.png with different delays/rotations */}
      </div>
    </section>
  );
}
