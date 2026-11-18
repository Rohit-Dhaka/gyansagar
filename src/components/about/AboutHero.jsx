import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section
      className="
        relative isolate flex w-full items-center overflow-hidden
        h-[calc(100svh-76px)]
        md:h-[calc(100svh-118px)]
        bg-[#16090b]
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      
      <div className="absolute inset-0 -z-20 bg-black/45" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black via-black/85 to-black/25" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#650b12]/65 via-transparent to-black/20" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-14 xl:px-24">
        <div className="grid items-center lg:grid-cols-[1fr_auto] lg:gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* BREADCRUMB */}
            <div className="mb-10 flex items-center gap-2 text-xs font-semibold text-white/55">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-red-300">About Us</span>
            </div>

            {/* LABEL */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-red-400" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-red-300">
                The Story Behind Us
              </span>
            </div>

            {/* HEADING */}
            <h1 className="font-['Playfair_Display'] text-5xl font-bold leading-[1.12] text-white sm:text-6xl md:text-7xl xl:text-[88px]">
              Education
              <br />
              With A<span className="italic text-red-300">Purpose.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Since 2018, Gyan Sagar NET Classes has been helping aspiring
              educators turn their teaching dreams into meaningful careers
              through knowledge and guidance.
            </p>

            {/* BUTTON */}
            <Link
              to="/courses"
              className="group mt-9 inline-flex items-center gap-4 border-b border-red-400 pb-3 text-sm font-bold text-white transition hover:text-red-300"
            >
              Discover Our Journey
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex lg:items-center lg:justify-center"
          >
            <div className="border-l border-white/30 py-8 pl-7">
              <p className="text-[11px] font-bold uppercase tracking-[5px] text-white/60">
                Gyan Sagar
              </p>

              <p
                className="mt-4 font-['Playfair_Display'] text-5xl font-bold tracking-[8px] text-white/15 xl:text-6xl"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                OUR STORY
              </p>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[3px] text-red-300">
                EST. 2018
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 right-5 hidden text-xs font-bold tracking-[3px] text-white/50 sm:block lg:right-14">
        HISAR, HARYANA
      </div>
    </section>
  );
};

export default AboutHero;