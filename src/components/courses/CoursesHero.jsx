

// const CoursesHero = () => {
//   return (
//     <div>CoursesHero</div>
//   )
// }

// export default CoursesHero


import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Target,
  Award,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const CoursesHero = () => {
  const highlights = [
    "UGC NET & CSIR NET",
    "HTET & CTET",
    "DSSSB, TGT & PGT",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#faf8f5]">

      {/* MAIN HERO */}
      <div className="grid min-h-[520px] w-full lg:min-h-[590px] lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT CONTENT */}
        <div className="relative flex flex-col justify-center px-3 py-9 sm:px-5 sm:py-12 lg:px-10 lg:py-14 xl:px-14">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 flex items-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link to="/" className="transition hover:text-[#850f18]">
              Home
            </Link>

            <ChevronRight size={14} />

            <span className="text-[#850f18]">Our Courses</span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#850f18]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#850f18] sm:text-xs">
              Learn Today, Lead Tomorrow
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-2xl font-['Playfair_Display'] text-4xl font-bold leading-[1.15] text-[#1c1717] sm:text-5xl lg:text-6xl xl:text-[68px]"
          >
            Prepare With
            <span className="block text-[#850f18]">
              Purpose.
            </span>
            Succeed With
            <span className="block">Confidence.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
          >
            Explore career-focused coaching programs at Gyan Sagar NET
            Classes. Get expert guidance, structured preparation and
            exam-oriented learning for your teaching career.
          </motion.p>

          {/* Course Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 border border-[#850f18]/10 bg-white px-3 py-2 text-[10px] font-bold text-slate-700 sm:text-xs"
              >
                <CheckCircle2 size={14} className="text-[#850f18]" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#850f18] px-5 py-3.5 text-xs font-bold text-white shadow-lg shadow-red-900/15 transition duration-300 hover:-translate-y-1 hover:bg-[#a51620] sm:px-6 sm:text-sm"
            >
              Enquire for Admission

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            <a
              href="#available-courses"
              className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3.5 text-xs font-bold text-slate-700 transition hover:border-[#850f18] hover:text-[#850f18] sm:px-6 sm:text-sm"
            >
              Explore Courses
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-black/10 pt-5"
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={19} className="text-[#850f18]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Expert Guidance
              </span>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-[#850f18]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Structured Learning
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Target size={18} className="text-[#850f18]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Exam Focused
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL PANEL */}
        <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#850f18] px-5 py-10 sm:min-h-[450px] lg:min-h-full lg:px-8">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10" />

          {/* Background text */}
          <span className="pointer-events-none absolute right-5 top-2 font-['Playfair_Display'] text-[160px] font-bold leading-none text-white/[0.045] sm:text-[210px]">
            GS
          </span>

          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 w-full max-w-[440px]"
          >
            {/* Top Label */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/60">
                Gyan Sagar NET Classes
              </span>

              <Award size={21} className="text-white/70" />
            </div>

            {/* Main Card */}
            <div className="relative overflow-hidden border border-white/15 bg-white/[0.08] p-5 backdrop-blur-sm sm:p-7">

              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center bg-white text-[#850f18]">
                  <GraduationCap size={30} />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[3px] text-white/60">
                  Your Learning Journey
                </p>

                <h2 className="mt-3 max-w-sm font-['Playfair_Display'] text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Knowledge Is Your
                  <span className="block text-white/65">
                    Greatest Strength.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-xs leading-6 text-white/65 sm:text-sm">
                  Build strong concepts, strengthen your preparation
                  and move closer to your teaching career goals.
                </p>

                {/* Course List */}
                <div className="mt-7 space-y-3 border-t border-white/15 pt-5">
                  {[
                    "UGC NET & CSIR NET",
                    "HTET & CTET",
                    "DSSSB, TGT & PGT",
                  ].map((course, index) => (
                    <div
                      key={course}
                      className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-['Playfair_Display'] text-sm font-bold text-white/40">
                          0{index + 1}
                        </span>

                        <span className="text-xs font-bold text-white sm:text-sm">
                          {course}
                        </span>
                      </div>

                      <ArrowUpRight size={16} className="text-white/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Badge */}
            <div className="mt-4 flex items-center justify-between border border-white/15 bg-white/10 px-4 py-3">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/55">
                  Established
                </p>
                <p className="mt-1 font-['Playfair_Display'] text-xl font-bold text-white">
                  2015
                </p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div className="text-right">
                <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/55">
                  Our Commitment
                </p>
                <p className="mt-1 text-xs font-bold text-white">
                  Learn. Prepare. Succeed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
