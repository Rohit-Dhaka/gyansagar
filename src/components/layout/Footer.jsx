
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,  
  FaHeart,
} from "react-icons/fa";

import Logo from "../../assets/image/Logo.png";

const Footer = () => {
  

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },    
    { name: "Contact Us", path: "/contact" },
  ];

  const courses = [
    { name: "UGC NET", path: "/courses/ugc-net" },
    { name: "CSIR NET", path: "/courses/csir-net" },
    { name: "HTET", path: "/courses/htet" },
    { name: "CTET", path: "/courses/ctet" },
    { name: "DSSSB", path: "/courses/dsssb" },
    { name: "TGT / PGT", path: "/courses/tgt-pgt" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/gyansagarnetclasseshisar/",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/gyansagarnetclasses/",
      label: "Instagram",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@Gyansagarnetclasses",
      label: "YouTube",
    },
  ];

  return (
    <>
      <footer className="w-full overflow-hidden bg-[#850f18] text-white">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[30%_70%]">
          {/* LEFT CLEAN IMAGE */}
          <div className="relative h-[230px] overflow-hidden sm:h-[280px] lg:h-full lg:min-h-[400px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6QGaDkrHaEHeT81Qk59q1ToMzIpwyNCxl_BJBUMKSw&s=10"
              alt="Students at an educational institution"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* RIGHT FOOTER CONTENT */}
          <div className="flex min-w-0 flex-col justify-between px-5 py-7 sm:px-8 lg:px-8 xl:px-10">
            {/* BRAND HEADER */}
            <div className="flex items-center gap-4 border-b border-white/20 pb-5">
              <img
                src={Logo}
                alt="Gyan Sagar NET Classes Logo"
                className="h-16 w-16 shrink-0 rounded-full bg-white object-contain p-1 shadow-md sm:h-[70px] sm:w-[70px]"
              />

              <div>
                <h2 className="text-xl font-bold leading-tight sm:text-2xl">
                  Gyan Sagar NET Classes
                </h2>

                <p className="mt-1 text-xs text-white/75 sm:text-sm">
                  Empowering Students. Building Futures.
                </p>
              </div>
            </div>

            {/* FOOTER COLUMNS */}
            <div className="grid grid-cols-1 gap-7 py-7 sm:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.9fr] xl:gap-6">
              {/* CONTACT */}
              <div>
                <h3 className="mb-4 text-lg font-bold">Got A Question?</h3>

                <div className="space-y-3 text-[13px] leading-5 text-white/85">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-yellow-300" />

                    <p>
                      DSS 67, Rajgarh Road, Near Gulab Restaurant, Old Courts
                      Commercial Complex, Lajpat Nagar, Hisar, Haryana - 125004
                    </p>
                  </div>

                  <a
                    href="tel:+919728306888"
                    className="flex items-center gap-3 transition hover:text-yellow-300"
                  >
                    <FaPhoneAlt className="shrink-0 text-yellow-300" />
                    <span>+91 97283-06888</span>
                  </a>

                  <a
                    href="mailto:gyansagar02102018@gmail.com"
                    className="flex items-start gap-3 break-all transition hover:text-yellow-300"
                  >
                    <FaEnvelope className="mt-1 shrink-0 text-yellow-300" />
                    <span>gyansagar02102018@gmail.com</span>
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3  pt-5">
                  <span className="mr-1 text-xs font-semibold text-white/80">
                    Follow Us:
                  </span>

                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:text-[#850f18]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h3 className="mb-4 text-lg font-bold">Quick Links</h3>

                <ul className="space-y-2.5 text-[13px] text-white/85">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="inline-block transition hover:translate-x-1 hover:text-yellow-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COURSES */}
              <div>
                <h3 className="mb-4 text-lg font-bold">Our Courses</h3>

                <ul className="space-y-2.5 text-[13px] text-white/85">
                  {courses.map((course) => (
                    <li key={course.name}>
                      <Link
                        to={course.path}
                        className="inline-block transition hover:translate-x-1 hover:text-yellow-300"
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COPYRIGHT AND LEGAL LINKS */}
            <div className="mt-5 flex flex-col gap-3 border-t border-white/20 pt-5 text-xs text-white/80">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-2">
                  <p className="text-[11px] text-white/70">
                     © {new Date().getFullYear()} Gyan Sagar NET Classes.
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <Link
                      to="/privacy-policy"
                      className="transition hover:text-yellow-300"
                    >
                      Privacy Policy
                    </Link>
                    <span className="text-white/40">|</span>
                    <Link
                      to="/terms-and-conditions"
                      className="transition hover:text-yellow-300"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>

                <p className="flex flex-wrap items-center gap-1">
                  Designed with
                  <FaHeart className="mx-1 text-red-300" />
                  by
                  <a
                    href="https://noshinfotech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 font-bold text-yellow-300 transition hover:text-white"
                  >
                    Nosh Infotech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    <motion.a
      href="https://wa.me/919728306888?text=Hello%2C%20I%20want%20to%20know%20about%20your%20courses."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-xl"
      animate={{
        scale: [1, 1, 1.15, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp />
    </motion.a>
    </>
  );
};

export default Footer;
