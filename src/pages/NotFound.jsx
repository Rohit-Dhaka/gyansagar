
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Home,
} from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-[#faf8f5] px-3 py-12 sm:px-4 md:min-h-[calc(100svh-118px)] lg:px-8">
      
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#850f18]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#850f18]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#850f18]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#850f18]">
                Page Not Found
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-7xl font-bold leading-none text-[#850f18] sm:text-8xl lg:text-[130px]">
              404
            </h1>

            <h2 className="mt-6 max-w-lg font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Looks Like You've Taken A
              <span className="text-[#850f18]"> Wrong Turn.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-black/60 sm:text-base">
              The page you're looking for may have been moved, removed,
              or doesn't exist. Don't worry, your learning journey is
              still on the right track.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-[#850f18] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#a51620]"
              >
                <Home size={16} />
                Back To Home
                <ArrowUpRight size={16} />
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-3 border border-black/15 px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-black transition hover:border-[#850f18] hover:text-[#850f18]"
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden border border-[#850f18]/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
              
              <div className="absolute right-0 top-0 h-24 w-24 bg-[#850f18]/5" />

              <div className="relative flex items-center justify-between border-b border-black/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#850f18] text-white">
                    <GraduationCap size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-black">
                      Gyan Sagar
                    </p>
                    <p className="text-[10px] font-semibold text-black/45">
                      NET Classes
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold tracking-widest text-[#850f18]">
                  EST. 2015
                </span>
              </div>

              <div className="relative py-12 text-center sm:py-16">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#850f18]/15 bg-[#850f18]/5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#850f18] text-white shadow-xl shadow-[#850f18]/20">
                    <BookOpen size={43} />
                  </div>
                </div>

                <p className="mt-7 font-['Playfair_Display'] text-2xl font-bold text-black">
                  Every Journey Has A
                  <span className="block text-[#850f18]">
                    New Beginning.
                  </span>
                </p>

                <p className="mt-3 text-xs leading-6 text-black/50">
                  Explore our courses and take the next step
                  towards your teaching career.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-black/10 pt-5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">
                  Learn · Grow · Achieve
                </span>

                <Link
                  to="/courses"
                  className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-[#850f18]"
                >
                  Explore Courses
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-3 -z-10 h-full w-full border-2 border-[#850f18]/20 sm:-right-5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
