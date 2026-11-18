
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Award,
  Target,
  CheckCircle2,
  ChevronRight,
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

const ExamPreparationHero = () => {
  return (
    <section className="relative isolate flex min-h-[650px] w-full overflow-hidden bg-[#faf7f4] lg:min-h-[calc(100svh-118px)]">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative grid w-full grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex flex-col justify-center px-4 py-14 sm:px-8 sm:py-16 lg:px-10 xl:px-14 2xl:px-16">

          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-9 flex items-center gap-2 text-xs font-semibold text-black/50"
          >
            <Link to="/" className="transition hover:text-[#a51620]">
              Home
            </Link>

            <ChevronRight size={13} />

            <span className="text-[#a51620]">
              Exam Preparation
            </span>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-[#a51620]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#a51620] sm:text-xs">
              Your Journey To Success Begins Here
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl font-['Playfair_Display'] text-4xl font-bold leading-[1.15] text-[#1c1112] sm:text-5xl lg:text-5xl xl:text-6xl"
          >
            Prepare For
            <br />

            Your Dreams.

            <br />

            <span className="italic text-[#a51620]">
              Achieve Your Goals.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-sm leading-8 text-black/65 sm:text-base"
          >
            Discover examination preparation programs at Gyan Sagar
            NET Classes. Build strong concepts, develop subject
            knowledge and prepare for your academic and professional
            goals with focused guidance.
          </motion.p>

          {/* EXAM TAGS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {[
              "UGC NET",
              "CSIR NET",
              "HTET / CTET",
              "PGT / TGT",
              "DSSSB",
              "UPSC / HCS",
            ].map((exam) => (
              <span
                key={exam}
                className="rounded-md border border-[#850f18]/15 bg-white/80 px-3 py-2 text-[10px] font-bold text-[#850f18] sm:text-xs"
              >
                {exam}
              </span>
            ))}
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#850f18] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-950/15 transition duration-300 hover:-translate-y-1 hover:bg-[#6f0b13]"
            >
              Enquire Now

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1">
                <ArrowUpRight size={17} />
              </span>
            </Link>

            <a
              href="#exam-programs"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#850f18] transition hover:text-[#a51620]"
            >
              Explore Programs

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* TRUST POINTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#850f18]/15 pt-6"
          >
            {[
              "Focused Preparation",
              "Conceptual Learning",
              "Academic Guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-[#a51620]"
                />

                <span className="text-[11px] font-bold text-black/65">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT VISUAL PANEL */}
        <div className="relative flex min-h-[520px] flex-col justify-center overflow-hidden bg-[#850f18] px-5 py-14 text-white sm:px-10 lg:min-h-full lg:px-10 xl:px-14">

          {/* DECORATIVE CIRCLES */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-16 -top-16 h-[290px] w-[290px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-36 -left-32 h-[400px] w-[400px] rounded-full border-[45px] border-white/[0.04]" />

          {/* PANEL CONTENT */}
          <div className="relative z-10 mx-auto w-full max-w-xl">

            {/* PANEL HEADING */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-red-200">
                Explore Your Opportunities
              </span>

              <h2 className="mt-4 max-w-md font-['Playfair_Display'] text-3xl font-bold leading-tight sm:text-4xl">
                Choose Your Path.
                <br />

                <span className="italic text-red-200">
                  Shape Your Future.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                Find the preparation program that matches your
                academic interests and career aspirations.
              </p>
            </motion.div>

            {/* PROGRAM LIST */}
            <div className="mt-9 space-y-3">
              {examPrograms.map((program, index) => {
                const Icon = program.icon;

                return (
                  <motion.div
                    key={program.number}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.12,
                    }}
                    className="group flex items-center gap-4 border-b border-white/15 pb-4 transition hover:border-red-200/60"
                  >
                    <span className="font-['Playfair_Display'] text-sm font-bold text-red-200/60">
                      {program.number}
                    </span>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] transition group-hover:bg-white group-hover:text-[#850f18]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {program.title}
                      </h3>

                      <p className="mt-1 text-[10px] text-white/60 sm:text-xs">
                        {program.subtitle}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-200"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* BOTTOM NOTE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-xs font-bold text-white">
                  Gyan Sagar NET Classes
                </p>

                <p className="mt-1 text-[10px] text-white/55">
                  Hisar, Haryana
                </p>
              </div>

              <div className="text-right">
                <p className="font-['Playfair_Display'] text-2xl font-bold text-red-200">
                  2018
                </p>

                <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">
                  Established
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamPreparationHero;
