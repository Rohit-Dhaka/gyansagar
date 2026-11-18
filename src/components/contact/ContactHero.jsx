import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Home,
  Phone,
  MessageCircle,  
  GraduationCap,  
  Sparkles,
} from "lucide-react";
import ContactImg from '../../assets/image/contact.webp'

const ContactHero = () => {
  return (
    <section className="relative isolate flex sm:h-[calc(100svh-76px)] w-full flex-col overflow-hidden bg-[#f8f6f2] md:h-[calc(100svh-118px)]">      
      <div className="grid min-h-0 flex-1 lg:grid-cols-[1.05fr_0.95fr]">        
        <div className="relative flex min-h-0 flex-col justify-center overflow-hidden py-5 sm:py-6  px-5 sm:px-8 lg:px-14 xl:px-24">          
          <div className="pointer-events-none absolute -left-28 top-20 h-64 w-64 rounded-full border border-[#850f18]/10" />
          <div className="pointer-events-none absolute -left-16 top-32 h-40 w-40 rounded-full border border-[#850f18]/10" />
          <div className="relative z-10">            
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 flex items-center gap-2 text-xs font-semibold text-black/40 lg:mb-7">
              <Link
                to="/"
                className="flex items-center gap-2 transition hover:text-[#850f18]"
              >
                <Home size={13} />
                Home
              </Link>

              <span>/</span>

              <span className="font-bold text-[#850f18]">Contact</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 flex items-center gap-3 lg:mb-5"
            >
              <span className="h-[2px] w-10 bg-[#850f18]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#850f18] sm:text-xs">
                We Are Here To Help
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl font-['Playfair_Display'] text-[39px] font-bold leading-[1.08] text-[#201719] sm:text-5xl lg:text-5xl xl:text-[66px]"
            >
              Let's Talk
              <span className="block italic text-[#850f18]">About Your</span>
              Future.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 max-w-lg text-xs leading-6 text-black/55 sm:text-sm sm:leading-7 lg:mt-6"
            >
              Every successful journey begins with the right conversation. Talk
              to our team about your exam preparation, courses and admission
              guidance.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-4 lg:mt-7"
            >
              <Link
                to="/contact#contact-details"
                className="group inline-flex items-center gap-4 bg-[#850f18] px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-wider text-white transition duration-300 hover:bg-[#a51620] sm:px-6"
              >
                Get In Touch
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+919728306888"
                className="group inline-flex items-center gap-3 text-sm font-bold text-[#850f18]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#850f18]/20 transition group-hover:bg-[#850f18] group-hover:text-white">
                  <Phone size={15} />
                </span>
                Call Our Team
              </a>
            </motion.div>

            {/* Editorial note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-7 flex items-center gap-4 border-t border-black/10 pt-4 lg:mt-8 lg:pt-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#850f18]/10 text-[#850f18]">
                <GraduationCap size={22} />
              </div>

              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-black">
                  Gyan Sagar NET Classes
                </p>

                <p className="mt-1 text-[9px] font-semibold tracking-wide text-black/45 sm:text-[10px]">
                  Helping Aspirants Move Forward Since 2015
                </p>
              </div>
            </motion.div>
          </div>

          {/* Small corner label */}
          <div className="absolute bottom-3 right-5 hidden items-center gap-2 text-[8px] font-extrabold uppercase tracking-[2px] text-black/25 xl:flex">
            <Sparkles size={12} />
            Your Next Chapter Starts Here
          </div>
        </div>

        {/* RIGHT VISUAL SECTION */}
        <div className="relative flex min-h-0 items-center justify-center overflow-hidden bg-[#850f18] px-4 py-5 sm:px-8 lg:px-8 xl:px-12">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-white/10" />

          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 w-full max-w-[620px]"
          >
            {/* Top label */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[9px] font-extrabold uppercase tracking-[3px] text-white/60">
                Connect With Gyan Sagar
              </span>

              <span className="text-[10px] font-bold text-white/50">
                01 / 01
              </span>
            </div>

            
            <div className="relative h-[190px] w-full overflow-hidden sm:h-[250px] lg:h-[min(43vh,360px)]">
              <img src={ContactImg}
                
                alt="Students learning together in a classroom"
                className="h-full w-full object-fit object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#16090b]/80 via-transparent to-black/10" />

         
            </div>

            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="relative mx-3 -mt-5 bg-white p-4 shadow-2xl sm:mx-6 sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <div>
                  <p className="text-[8px] font-extrabold uppercase tracking-[2px] text-[#850f18]">
                    Let's Connect
                  </p>

                  <h3 className="mt-1 font-['Playfair_Display'] text-lg font-bold text-[#201719] sm:text-xl">
                    We're Just A Call Away.
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#850f18]/10 text-[#850f18] sm:h-10 sm:w-10">
                  <MessageCircle size={20} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <a
                  href="tel:+919728306888"
                  className="flex min-w-0 items-center gap-2 border border-black/10 p-2.5 transition hover:border-[#850f18]/40 hover:bg-[#850f18]/5 sm:gap-3 sm:p-3"
                >
                  <Phone size={16} className="shrink-0 text-[#850f18]" />

                  <div className="min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-black/40">
                      Call Us
                    </p>
                    <p className="mt-1 truncate text-[10px] font-extrabold text-black sm:text-[11px]">
                      +91 97283-06888
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919728306888"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 items-center gap-2 border border-black/10 p-2.5 transition hover:border-[#850f18]/40 hover:bg-[#850f18]/5 sm:gap-3 sm:p-3"
                >
                  <MessageCircle
                    size={17}
                    className="shrink-0 text-[#850f18]"
                  />

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-black/40">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-[10px] font-extrabold text-black sm:text-[11px]">
                      Message Us
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Vertical side text */}
          <div className="absolute bottom-8 right-4 hidden rotate-180 [writing-mode:vertical-rl] lg:block">
            <span className="text-[8px] font-extrabold uppercase tracking-[3px] text-white/40">
              Education · Excellence · Opportunity
            </span>
          </div>

          {/* Top corner */}
          <div className="absolute left-7 top-5 hidden items-center gap-3 lg:flex">
            <span className="h-2 w-2 rounded-full bg-[#f0b9bc]" />
            <span className="text-[8px] font-extrabold uppercase tracking-[2px] text-white/60">
              Hisar, Haryana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
