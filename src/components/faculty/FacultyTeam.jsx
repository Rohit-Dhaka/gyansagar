
import { useEffect, useState } from "react";
import {  motion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import facultyData from "../../data/facultyData";

const FacultyTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const totalFaculty = facultyData.length;

  // RESPONSIVE VISIBLE CARDS
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  // MAXIMUM SLIDER INDEX
  const maxIndex = Math.max(0, totalFaculty - visibleCards);

  // KEEP INDEX VALID AFTER RESIZE
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  // PREVIOUS SLIDE
  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  // AUTOPLAY
  useEffect(() => {
    if (isPaused || totalFaculty <= visibleCards) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, totalFaculty, visibleCards]);

  if (!totalFaculty) return null;

  // SLIDER PROGRESS
  const totalSlides = maxIndex + 1;

  return (
    <section
      id="faculty-team"
      className="w-full overflow-hidden bg-[#faf8f5] py-8 sm:py-10 lg:py-12"
    >
      <div className="px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-7 md:flex-row md:items-end lg:pb-9">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#850f18]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#850f18] sm:text-xs">
                The Minds Behind The Mission
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Meet Our Expert
              <span className="block text-[#850f18]">
                Faculty Members.
              </span>
            </motion.h2>
          </div>

          <div className="flex items-end justify-between gap-5 md:max-w-sm">
            <p className="text-sm leading-7 text-black/55 sm:text-base">
              Dedicated educators bringing knowledge, experience and
              inspiration to every classroom.
            </p>

            <div className="shrink-0 text-right">
              <span className="block font-['Playfair_Display'] text-3xl font-bold text-[#850f18]">
                {String(totalFaculty).padStart(2, "0")}
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-[1.5px] text-black/45">
                Educators
              </span>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="relative mt-8 lg:mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >

          {/* CARD TRACK */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / visibleCards)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 20,
              }}
            >
              {facultyData.map((faculty, index) => (
                <div
                  key={faculty.id}
                  className="shrink-0 px-2"
                  style={{
                    width: `${100 / visibleCards}%`,
                  }}
                >
                  <article className="group h-full bg-white">

                    {/* FACULTY IMAGE */}
                    <div className="relative aspect-[4/4.2] overflow-hidden bg-[#e9dfd7]">

                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />

                      {/* NUMBER */}
                      <span className="absolute left-4 top-4 font-['Playfair_Display'] text-4xl font-bold text-white/75">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* ROLE */}
                      <span className="absolute right-3 top-4 max-w-[65%] bg-white px-3 py-2 text-[9px] font-extrabold uppercase tracking-[1px] text-[#850f18]">
                        {faculty.role}
                      </span>

                      {/* NAME */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="mb-2 flex items-center gap-2 text-white/70">
                          <GraduationCap size={16} />
                          <span className="text-[9px] font-bold uppercase tracking-[1.5px]">
                            Gyan Sagar NET Classes
                          </span>
                        </div>

                        <h3 className="font-['Playfair_Display'] text-xl font-bold text-white sm:text-2xl">
                          {faculty.name}
                        </h3>

                        <p className="mt-1 text-xs text-white/75">
                          {faculty.subject}
                        </p>
                      </div>

                      {/* HOVER ARROW */}
                      <div className="absolute bottom-5 right-4 flex h-9 w-9 translate-y-3 items-center justify-center bg-[#850f18] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* FACULTY DETAILS */}
                    <div className="flex flex-col border-b border-black/10 px-4 py-5 sm:px-5">

                      <div className="flex items-start gap-3">
                        <BookOpen
                          size={18}
                          className="mt-1 shrink-0 text-[#850f18]"
                        />

                        <div className="min-w-0">
                          <span className="text-[9px] font-extrabold uppercase tracking-[1.5px] text-black/40">
                            Qualification
                          </span>

                          <p className="mt-1 text-xs font-bold leading-5 text-black sm:text-sm">
                            {faculty.qualification}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 min-h-[72px] text-xs leading-6 text-black/55">
                        {faculty.description}
                      </p>

                      {/* SUBJECT TAGS */}
                      <div className="mt-3 flex min-h-[54px] flex-wrap content-start gap-2 border-t border-black/10 pt-3">
                        {faculty.subjects?.map((subject) => (
                          <span
                            key={subject}
                            className="bg-[#850f18]/5 px-2 py-1.5 text-[9px] font-bold text-[#850f18]"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="mt-4 inline-flex w-fit items-center gap-3 text-[10px] font-extrabold uppercase tracking-[1px] text-black transition hover:text-[#850f18]"
                      >
                        Connect With Us
                        <ArrowUpRight
                          size={16}
                          className="text-[#850f18]"
                        />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* SLIDER NAVIGATION */}
          {totalFaculty > visibleCards && (
            <div className="mt-6 flex items-center justify-between gap-4">

              {/* PROGRESS */}
              <div className="flex flex-1 items-center gap-3">
                <span className="text-xs font-extrabold text-[#850f18]">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>

                <div className="h-[3px] flex-1 overflow-hidden bg-black/10">
                  <motion.div
                    className="h-full bg-[#850f18]"
                    animate={{
                      width: `${((currentIndex + 1) / totalSlides) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <span className="text-xs font-bold text-black/40">
                  {String(totalSlides).padStart(2, "0")}
                </span>
              </div>

              {/* ARROWS */}
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous faculty"
                  className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition hover:border-[#850f18] hover:bg-[#850f18] hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next faculty"
                  className="flex h-11 w-11 items-center justify-center bg-[#850f18] text-white transition hover:bg-[#a51620]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-8 flex flex-col  justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl font-['Playfair_Display'] text-lg font-bold leading-relaxed text-black sm:text-xl">
            Behind every successful learner is a teacher who believes in them.
          </p>
          

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-4 text-xs font-extrabold uppercase tracking-[1px] text-[#850f18]"
          >
            Talk To Our Team
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FacultyTeam;
