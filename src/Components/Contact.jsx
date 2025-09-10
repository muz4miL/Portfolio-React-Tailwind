const contactItems = [
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: 'ADDRESS',
    value: 'Peshawar, Pakistan',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    title: 'CONTACT NUMBER',
    value: '+92 311-0533665',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    title: 'EMAIL ADDRESS',
    value: 'shirazmuzamil2@gmail.com',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </svg>
    ),
    title: 'DOWNLOAD RESUME',
    value: 'resumelink',
    isLink: true,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    url: 'https://github.com/muz4miL', // Replace with your GitHub URL
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    url: 'https://www.linkedin.com/in/muz4mil9/', // Replace with your LinkedIn URL
  },
  {
    name: 'Twitter',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    url: 'https://x.com/muzamil_sh74488', // Replace with your Twitter URL
  },
  {
    name: 'Facebook',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    url: 'https://www.facebook.com/muzamil.shiraz.3', // Replace with your Facebook URL
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    url: 'https://www.instagram.com/muz4mil9/', // Replace with your Instagram URL
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-4 py-16 text-white"
    >
      {/* Header Section */}
      <div className="relative mb-16 flex flex-col items-center justify-center">
        {/* Watermark background text */}
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-6xl font-extrabold text-white opacity-10 select-none sm:text-8xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
          CONTACT
        </span>

        {/* Main heading */}
        <div className="relative z-10 mt-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Contact Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Below are the details to reach out to me!
          </p>
        </div>
      </div>

      {/* Contact Cards Grid */}
      <div className="container mx-auto mb-16 max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-center transition-all duration-300 hover:border-yellow-400/30"
            >
              {/* Icon Circle */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-sm font-bold tracking-widest text-gray-300 uppercase">
                {item.title}
              </h3>

              {/* Value */}
              {item.isLink ? (
                <a
                  href="#" // Replace with actual resume link
                  className="font-medium text-white transition-colors duration-300 hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium text-white">{item.value}</p>
              )}

              {/* Subtle gradient border effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mb-12 text-center">
        <h3 className="mb-4 text-2xl font-bold text-white">Have a Question?</h3>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdPZgCiJvBSrnAMkgdPa2sFFSliTE-KQKRwI9lEtTCf_Ci1zw/viewform?fbzx=7645418644569380481&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform rounded-full bg-yellow-400 px-8 py-3 font-bold text-black uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
        >
          CLICK HERE
        </a>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <p className="mb-6 text-gray-400">Find me on</p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              className="flex h-10 w-10 transform items-center justify-center rounded-full bg-gray-800 text-yellow-400 transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500">
        <p>Copyright ©2025 All rights reserved | Muzamil Shiraz</p>
      </div>
    </section>
  );
}
