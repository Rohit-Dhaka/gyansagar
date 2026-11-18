
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const AboutHero = () => {
  return (
    <section
      className="
        relative isolate flex w-full items-center overflow-hidden
        sm:h-[calc(100svh-76px)]
        md:h-[calc(100svh-118px)]
        bg-[#16090b]
      "
    >
      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[#19090d]" />

      {/* MAROON GRADIENT */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#390b13] via-[#19090d] to-[#090709]" />

      {/* LEFT RED GLOW */}
      <div className="absolute -left-40 top-[-20%] -z-20 h-[550px] w-[550px] rounded-full bg-[#a51620]/25 blur-[130px]" />

      {/* RIGHT RED GLOW */}
      <div className="absolute -right-32 bottom-[-25%] -z-20 h-[500px] w-[500px] rounded-full bg-[#850f18]/30 blur-[120px]" />

      {/* CENTER LIGHT */}
      <div className="absolute left-[35%] top-[20%] -z-20 h-[300px] w-[300px] rounded-full bg-red-900/15 blur-[110px]" />

  

      {/* CIRCULAR OUTLINES */}
      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 hidden h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-white/[0.07] lg:block">
        <div className="absolute inset-16 rounded-full border border-white/[0.06]" />
        <div className="absolute inset-32 rounded-full border border-white/[0.05]" />
        <div className="absolute inset-48 rounded-full border border-white/[0.04]" />
      </div>

      {/* BOTTOM LIGHT */}
      <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-full bg-gradient-to-t from-[#850f18]/20 to-transparent" />

      {/* TOP RIGHT LINE */}
      <div className="absolute right-0 top-0 -z-10 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full py-12 sm:py-14 px-5 sm:px-8 lg:px-14 xl:px-24">

        {/* TOP NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center justify-between sm:mb-10"
        >
          <div className="flex items-center gap-3 text-xs font-semibold text-white/60">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-red-400">/</span>
            <span className="text-white">About Us</span>
          </div>

          <p className="hidden text-[10px] font-bold uppercase tracking-[4px] text-white/50 sm:block">
            Our Identity · Our Purpose
          </p>
        </motion.div>

        {/* HERO CONTENT */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_350px]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap
                size={20}
                className="text-red-300"
              />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-red-300 sm:text-xs">
                The Gyan Sagar Story
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1 className=" font-['Playfair_Display'] text-5xl font-bold leading-[1.12] text-white sm:text-6xl md:text-7xl xl:text-[86px]">
              Where Learning
              <span className=" block italic text-red-300">
                 Meets Ambition.
              </span>                            
              
              
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              We believe every aspiring educator deserves the right
              knowledge, guidance and opportunity to achieve their goals.
            </p>

            {/* BUTTON */}
            <Link
              to="/courses"
              className="group mt-9 inline-flex items-center gap-5 bg-[#a51620] px-7 py-4 text-xs font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-white hover:text-[#850f18]"
            >
              Explore Our Courses

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden min-h-[350px] flex-col justify-center border-l border-white/25 pl-9 lg:flex"
          >
            <span className="text-[10px] font-bold uppercase tracking-[5px] text-white/45">
              Our Belief
            </span>

            <h2 className="mt-8 font-['Playfair_Display'] text-5xl font-bold leading-[1.2] text-white xl:text-6xl">
              Learn
              <br />
              <span className="italic text-red-300">
                Today.
              </span>
              <br />
              Lead
              <br />
              Tomorrow.
            </h2>

            <div className="mt-9 flex items-center gap-4">
              <BookOpen
                size={19}
                className="text-red-300"
              />

              <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/55">
                Knowledge Creates Possibilities
              </p>
            </div>

            {/* VERTICAL TYPOGRAPHY */}
            <span
              className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 font-['Playfair_Display'] text-8xl font-bold text-white/[0.06]"
              style={{ writingMode: "vertical-rl" }}
            >
              ABOUT
            </span>
          </motion.div>
        </div>

     
      </div>
    </section>
  );
};

export default AboutHero;
