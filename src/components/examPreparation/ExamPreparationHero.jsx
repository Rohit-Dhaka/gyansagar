
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Award,
  Target,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const examPrograms = [
  {
    number: "01",
    title: "UGC NET",
    subtitle: "National Level Examination",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "CSIR NET",
    subtitle: "Research & Lectureship",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "HTET / CTET",
    subtitle: "Teaching Eligibility",
    icon: Award,
  },
  {
    number: "04",
    title: "PGT / TGT / PRT",
    subtitle: "Teaching Recruitment",
    icon: Target,
  },
];

const examCategories = [
  "UGC NET",
  "CSIR NET",
  "HTET / CTET",
  "PGT / TGT",
  "DSSSB",
  "UPSC / HCS",
];

const ExamPreparationHero = () => {
  return (
    <section
      className="
        relative isolate flex w-full flex-col overflow-hidden
        bg-[#f8f6f2]
        min-h-[calc(100svh-76px)]
        md:h-[calc(100svh-118px)]
        md:min-h-[620px]
        px-5 sm:px-8 lg:px-14 xl:px-24
      "
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#ead9d6]/40 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#e9dfd1]/50 blur-[90px]" />

      {/* MAIN CONTENT */}
      <div className="relative grid flex-1 grid-cols-1 md:min-h-0 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex flex-col justify-center px-4 py-7 sm:px-6 sm:py-9 md:px-7 md:py-6 lg:px-9 xl:px-12">

          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 flex items-center gap-2 text-[11px] font-semibold text-[#241416]/45"
          >
            <Link to="/" className="transition hover:text-[#a51620]">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#a51620]">Exam Preparation</span>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#a51620]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#a51620]">
              Learn Today. Lead Tomorrow.
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              font-['Playfair_Display']
              text-[clamp(2.8rem,5vw,4.8rem)]
              font-bold leading-[1.06] tracking-tight text-[#241416]
            "
          >
            Your Dreams.
            <br />
            Your Dedication.
            <br />
            <span className="relative inline-block italic text-[#a51620]">
              Our Guidance.
              <span className="absolute -bottom-1 left-0 h-[2px] w-2/3 bg-[#a51620]/25" />
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-md text-sm leading-7 text-[#514648]/75"
          >
            Discover focused exam preparation, expert guidance and
            structured learning to move confidently towards your
            academic and professional goals.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-5"
          >
            <Link
              to="/contact"
              className="
                group inline-flex items-center gap-3 rounded-lg
                bg-[#850f18] px-5 py-3 text-xs font-bold text-white
                shadow-md shadow-[#850f18]/15 transition
                hover:-translate-y-1 hover:bg-[#6f0b13]
              "
            >
              Start Your Journey
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <a
              href="#exam-programs"
              className="group inline-flex items-center gap-2 text-xs font-bold text-[#850f18]"
            >
              Explore Programs
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* TRUST POINTS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#850f18]/15 pt-4"
          >
            {[
              "Focused Learning",
              "Expert Guidance",
              "Exam Practice",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="shrink-0 text-[#a51620]" />
                <span className="text-[10px] font-bold text-black/60">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

       
        </div>

        {/* RIGHT PROGRAM PANEL */}
        <div
          id="exam-programs"
          className="
            relative flex flex-col justify-center overflow-hidden
            bg-[#850f18] px-4 py-8 text-white
            sm:px-7 sm:py-9
            md:min-h-0 md:px-6 md:py-6
            lg:px-8 xl:px-10
          "
        >
          {/* PANEL DECORATION */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,white_49%,transparent_50%)] bg-[length:38px_38px]" />
          </div>

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative z-10 mx-auto w-full max-w-xl">

            {/* PANEL HEADER */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-red-200" />
                <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-red-100">
                  Find Your Direction
                </span>
              </div>

              <span className="text-[10px] font-semibold text-white/45">
                01 — 04
              </span>
            </motion.div>

            {/* PANEL TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-5"
            >
              <h2 className="font-['Playfair_Display'] text-2xl font-bold leading-tight sm:text-3xl">
                Prepare For
                <br />
                <span className="italic text-red-200">
                  What Comes Next.
                </span>
              </h2>

              <p className="mt-2 max-w-sm text-xs leading-5 text-white/60">
                Choose the right preparation path for your career.
              </p>
            </motion.div>

            {/* PROGRAM CARDS */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3">
              {examPrograms.map((program, index) => {
                const Icon = program.icon;

                return (
                  <motion.div
                    key={program.number}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.35 + index * 0.08,
                    }}
                    className="
                      group relative flex min-h-[112px] flex-col
                      overflow-hidden rounded-lg border border-white/10
                      bg-white/[0.07] p-3.5
                      transition duration-300
                      hover:-translate-y-1 hover:border-white/30
                      hover:bg-white/[0.13]
                      sm:min-h-[130px] sm:p-4
                    "
                  >
                    <span className="absolute right-3 top-3 text-[9px] font-bold tracking-wider text-white/30">
                      {program.number}
                    </span>

                    <div className="
                      flex h-8 w-8 items-center justify-center
                      rounded-lg bg-white/10 text-red-100
                      transition group-hover:bg-white
                      group-hover:text-[#850f18]
                    ">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    <div className="mt-3">
                      <h3 className="text-xs font-extrabold sm:text-sm">
                        {program.title}
                      </h3>

                      <p className="mt-1 text-[9px] text-white/50 sm:text-[10px]">
                        {program.subtitle}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="absolute bottom-3 right-3 text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* PANEL FOOTER */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-5 flex items-center justify-between border-t border-white/15 pt-4"
            >
              <div>
                <p className="text-[11px] font-extrabold">
                  Gyan Sagar NET Classes
                </p>
                <p className="mt-0.5 text-[9px] text-white/50">
                  Hisar, Haryana
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-red-100 transition hover:text-white"
              >
                Enquire Now
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default ExamPreparationHero;
