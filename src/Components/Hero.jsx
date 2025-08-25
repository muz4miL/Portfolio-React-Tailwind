import { motion } from 'framer-motion';
import LeftPanel1 from '../assets/LeftPanel1.png';
import LeftPanel2 from '../assets/LeftPanel2.png';

export default function Hero() {
  const heading = 'PulseMetrics is your modern analytics dashboard';
  const words = heading.split(' ');

  // Linear-style smooth easing curve
  const linearEase = [0.16, 1, 0.3, 1];

  // Container variants for orchestrated animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  // Word animation variants (Linear-style reveal - more subtle)
  const wordVariants = {
    hidden: {
      y: 12,
      opacity: 0,
      filter: 'blur(2px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: linearEase,
      },
    },
  };

  // Text content variants
  const textVariants = {
    hidden: {
      y: 16,
      opacity: 0,
      filter: 'blur(3px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.0,
        ease: linearEase,
        delay: 0.4,
      },
    },
  };

  // Button container variants
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  // Individual button variants
  const buttonVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: linearEase,
      },
    },
  };

  // Image grid container variants
  const imageGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  // Individual image variants with different entrance styles
  const getImageVariants = (index) => ({
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 15,
      rotateY: index % 2 === 0 ? -8 : 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: linearEase,
        delay: index * 0.1,
      },
    },
  });

  const images = [
    { src: LeftPanel1, alt: 'Analytics Dashboard Overview' },
    { src: LeftPanel2, alt: 'User Metrics Panel' },
    // { src: RightPanel1, alt: 'Performance Charts' },
    // { src: RightPanel2, alt: 'Real-time Data View' },
  ];

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20 pb-12 text-center">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />

      {/* Main heading with staggered word animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-4 flex flex-wrap justify-center text-4xl leading-tight font-bold text-white md:mx-12 md:text-6xl lg:mx-24 lg:text-7xl"
      >
        {words.map((word, i) => (
          <motion.span
            key={word + i}
            variants={wordVariants}
            className="mr-3 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="relative z-10 mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl"
      >
        Track, visualize, and optimize your website or app performance with
        real-time insights and startup-grade design.
      </motion.p>

      {/* Buttons with staggered animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonContainerVariants}
        className="relative z-10 mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center"
      >
        <motion.a
          variants={buttonVariants}
          href="#"
          className="group rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          whileHover={{
            boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)',
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        </motion.a>

        <motion.a
          variants={buttonVariants}
          href="#"
          className="group rounded-xl border border-gray-600 bg-gray-900/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-500 hover:bg-gray-800/70"
          whileHover={{
            scale: 1.05,
            y: -2,
            borderColor: 'rgb(156, 163, 175)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          View Demo
        </motion.a>
      </motion.div>

      {/* Enhanced image showcase with better layout and loading states */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageGridVariants}
        className="relative z-10 mt-20 w-full max-w-7xl px-4"
      >
        {/* Main featured image */}
        <motion.div
          variants={getImageVariants(0)}
          className="group relative mb-8 flex justify-center"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.4, ease: linearEase },
          }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-2 shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900" />
            <motion.img
              src={images[0].src}
              alt={images[0].alt}
              className="relative w-full max-w-4xl rounded-2xl bg-gray-800 shadow-xl"
              style={{
                aspectRatio: '16/10',
                objectFit: 'cover',
                backgroundColor: '#1f2937', // Prevents white flash
              }}
              loading="eager"
              onLoad={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            />

            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/3 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
            </div>
          </div>
        </motion.div>

        {/* Secondary images grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {images.slice(1).map((image, index) => (
            <motion.div
              key={index + 1}
              variants={getImageVariants(index + 1)}
              className="group relative"
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: 0.4, ease: linearEase },
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-1.5 shadow-xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700/30 to-gray-900/60" />
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="relative w-full rounded-xl bg-gray-800 shadow-lg"
                  style={{
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    backgroundColor: '#1f2937', // Prevents white flash
                  }}
                  loading="lazy"
                  onLoad={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                />

                {/* Hover shimmer */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <div className="absolute inset-0 -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/2 to-transparent transition-transform duration-800 ease-out group-hover:translate-x-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Theme-matched floating ambient elements - Much more visible */}
      <motion.div
        className="absolute top-16 left-8 h-2 w-2 rounded-full bg-white/60 blur-sm"
        animate={{
          y: [0, -12, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-24 right-12 h-3 w-3 rounded-full bg-gray-300/50 blur-sm"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      />

      <motion.div
        className="absolute top-40 left-1/4 h-1.5 w-1.5 rounded-full bg-white/70 blur-sm"
        animate={{
          y: [0, -8, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute top-36 right-1/3 h-2 w-2 rounded-full bg-gray-400/45 blur-sm"
        animate={{
          y: [0, 14, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-52 left-16 h-1.5 w-1.5 rounded-full bg-white/55 blur-sm"
        animate={{
          y: [0, -6, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute top-44 right-20 h-2.5 w-2.5 rounded-full bg-gray-300/40 blur-sm"
        animate={{
          y: [0, 12, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      />
    </section>
  );
}
