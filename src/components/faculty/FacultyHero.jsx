
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Home,
  GraduationCap,

} from "lucide-react";



const FacultyHero = () => {
  return (
    <section
      className="
        relative flex h-[calc(100svh-76px)] w-full flex-col
        overflow-hidden bg-[#faf8f5]
        md:h-[calc(100svh-118px)]
      "
    >
      {/* MAIN HERO CONTENT */}
      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

        {/* LEFT EDITORIAL CONTENT */}
        <div className="relative flex min-h-0 flex-col justify-center py-5 sm:py-7 lg:py-5  px-5 sm:px-8 lg:px-14 xl:px-24">

          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3 text-xs font-medium text-black/45 lg:mb-7"
          >
            <Link
              to="/"
              className="flex items-center gap-2 transition hover:text-[#850f18]"
            >
              <Home size={14} />
              Home
            </Link>

            <span>/</span>

            <span className="font-bold text-[#850f18]">
              Our Faculty
            </span>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 flex items-center gap-3 lg:mb-5"
          >
            <span className="h-px w-10 bg-[#850f18]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#850f18] sm:text-xs">
              The People Who Inspire
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-['Playfair_Display'] text-4xl font-bold leading-[1.13] text-black sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Knowledge
            <span className="block text-[#850f18]">
              Meets
            </span>
            Inspiration.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-lg text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:mt-6"
          >
            Behind every confident learner is a dedicated educator.
            Discover the teaching minds who bring subject knowledge,
            guidance and purpose to every learning journey at
            Gyan Sagar NET Classes.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-5 lg:mt-7"
          >
            <Link
              to="/teachers#faculty-team"
              className="group inline-flex min-h-12 items-center gap-7 bg-[#850f18] px-6 text-sm font-bold text-white transition hover:bg-[#a51620] sm:min-h-14"
            >
              Meet Our Faculty

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <span className="text-xs font-bold uppercase tracking-[1.5px] text-black/45">
              Since 2018
            </span>
          </motion.div>

 
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div className="relative hidden min-h-0 overflow-hidden bg-[#e9dfd7] lg:block">

          {/* MAIN IMAGE */}
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            // src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=90"
            src="https://www.gyansagarclasses.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-25-at-2.13.59-PM.jpeg"
            alt="Educators guiding students in a classroom"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* TOP IMAGE LABEL */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute left-5 top-5 bg-white px-4 py-3 sm:left-8 sm:top-8"
          >
            <span className="block text-[9px] font-extrabold uppercase tracking-[2px] text-[#850f18]">
              Gyan Sagar
            </span>

            <span className="mt-1 block font-['Playfair_Display'] text-lg font-bold text-black">
              Our Faculty
            </span>
          </motion.div>

          {/* RED SIDE PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-5 right-5 flex min-h-[150px] w-[105px] flex-col items-center justify-center bg-[#850f18] px-3 text-white sm:bottom-8 sm:right-8 sm:min-h-[190px] sm:w-[130px]"
          >
            <GraduationCap size={28} strokeWidth={1.4} />

            <span className="mt-5 text-[9px] font-bold uppercase tracking-[2px] text-white/65">
              Established
            </span>

            <span className="mt-1 font-['Playfair_Display'] text-3xl font-bold">
              2018
            </span>
          </motion.div>

          {/* IMAGE BOTTOM CAPTION */}
          <div className="absolute bottom-6 left-5 max-w-[55%] text-white sm:bottom-9 sm:left-8">
            <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/65">
              Learning With Purpose
            </p>

            <h2 className="mt-2 font-['Playfair_Display'] text-xl font-bold sm:text-2xl lg:text-3xl">
              The Power Of Great Teaching.
            </h2>
          </div>
        </div>
      </div>


    </section>
  );
};

export default FacultyHero;
