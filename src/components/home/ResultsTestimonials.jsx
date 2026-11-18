
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Quote,
  Trophy,
  Users,
  GraduationCap,
} from "lucide-react";

import studentsData from "../../data/resultsTestimonialsData";

const ResultsTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);  
  const testimonialStudents = studentsData.filter(
    (student) => student.testimonial?.trim()
  );

  const activeTestimonial = testimonialStudents[activeIndex];  
  const featuredStudents = studentsData.slice(0, 3);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      testimonialStudents.length
        ? (prev + 1) % testimonialStudents.length
        : 0
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      testimonialStudents.length
        ? (prev - 1 + testimonialStudents.length) %
          testimonialStudents.length
        : 0
    );
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [testimonialStudents.length]);

  
  useEffect(() => {
    if (testimonialStudents.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % testimonialStudents.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialStudents.length]);

  const formatNumber = (number) =>
    String(number).padStart(2, "0");

  return (
    <section className="w-full overflow-hidden py-8 sm:py-10 lg:py-12">
      <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-10">

        {/* MAIN RESULTS AREA */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-9 bg-[#a51620]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#a51620]">
                Our Achievements
              </span>
            </div>

            <h2 className="max-w-xl font-['Playfair_Display'] text-4xl font-bold leading-[1.15] text-[#241b1b] sm:text-5xl xl:text-6xl">
              Every Student Has a{" "}
              <span className="text-[#a51620]">
                Success Story.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-black/70 sm:text-base">
              Every achievement represents a student's dedication,
              consistent effort and commitment towards their goals.
              Explore the journeys and experiences of our students.
            </p>

            <div className="mt-6 flex items-center gap-3 border-l-[3px] border-[#a51620] py-2 pl-4">
              <Trophy
                size={22}
                className="shrink-0 text-[#a51620]"
              />

              <p className="text-sm font-bold text-[#241b1b]">
                Celebrating the hard work and achievements of our students.
              </p>
            </div>

            {/* STUDENT STATISTICS */}
            <div className="sm:mt-9 grid   max-sm:gap-2 sm:gap-x-5 sm:gap-y-6 border-t border-red-200 pt-6 grid-cols-3">
              <div>
                <h3 className="text-3xl font-black text-[#850f18] sm:text-4xl">
                  {formatNumber(studentsData.length)}
                </h3>

                <p className="mt-1 text-xs font-bold text-black/70">
                  Student Stories
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#850f18] sm:text-4xl">
                  {formatNumber(testimonialStudents.length)}
                </h3>

                <p className="mt-1 text-xs font-bold text-black/70">
                  Student Experiences
                </p>
              </div>

              <div className=" sm:col-span-1">
                <h3 className="text-3xl font-black text-[#850f18] sm:text-4xl">
                  2015
                </h3>

                <p className="mt-1 text-xs font-bold text-black/70">
                  Established
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT STUDENT IMAGE COLLAGE */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border-[16px] border-red-100/80" />

            {featuredStudents.length > 0 ? (
              <div className="relative grid grid-cols-2 gap-3">
                {featuredStudents.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{
                      opacity: 0,
                      y: index === 0 ? 20 : 0,
                      x: index === 0 ? 0 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className={`group relative overflow-hidden bg-[#850f18]/10 ${
                      index === 0
                        ? "row-span-2 h-[340px] rounded-tl-[75px] rounded-br-2xl sm:h-[420px]"
                        : index === 1
                          ? "h-[165px] rounded-tr-[50px] sm:h-[205px]"
                          : "h-[162px] rounded-bl-[50px] sm:h-[202px]"
                    }`}
                  >
                    {student.image ? (
                      <img
                        src={student.image}
                        alt={`${student.name} - ${student.achievement}`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <GraduationCap
                          size={45}
                          className="text-[#850f18]/40"
                        />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div
                      className={`absolute text-white ${
                        index === 0
                          ? "bottom-5 left-5 right-5"
                          : "bottom-3 left-3 right-3"
                      }`}
                    >
                      <span
                        className={`font-extrabold uppercase tracking-widest text-red-200 ${
                          index === 0 ? "text-[10px]" : "text-[9px]"
                        }`}
                      >
                        {student.examYear || "Student Achievement"}
                      </span>

                      <h3
                        className={`mt-1 font-black ${
                          index === 0 ? "text-xl" : "text-sm"
                        }`}
                      >
                        {student.name}
                      </h3>

                      <p
                        className={`mt-1 text-white/80 ${
                          index === 0 ? "text-xs" : "text-[10px]"
                        }`}
                      >
                        {student.achievement}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[340px] items-center justify-center rounded-2xl border border-dashed border-red-200 bg-red-50/50 p-8 text-center">
                <div>
                  <GraduationCap
                    size={42}
                    className="mx-auto text-[#a51620]"
                  />

                  <p className="mt-3 text-sm font-bold text-black">
                    Student achievements will appear here.
                  </p>
                </div>
              </div>
            )}

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-red-100 bg-white px-4 py-3 shadow-xl sm:left-5 sm:translate-x-0 sm:px-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#850f18] text-white">
                <Award size={21} />
              </div>

              <div className="whitespace-nowrap">
                <p className="text-xs font-black text-black">
                  Student Achievements
                </p>

                <p className="text-[10px] text-black/60">
                  Every Success Matters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SECTION */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-[#850f18] px-5 py-7 text-white sm:px-8 sm:py-9 lg:mt-20 lg:px-12">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.06]" />

          <div className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full border-[30px] border-white/[0.05]" />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">

            {/* TESTIMONIAL INTRO */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-8 bg-white/70" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">
                  Student Testimonials
                </span>
              </div>

              <h3 className="font-['Playfair_Display'] text-3xl font-bold leading-tight sm:text-4xl">
                Words That
                <br />
                <span className="text-red-200">
                  Inspire Us.
                </span>
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                Read what our students have to say about their learning
                experiences and preparation journey.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <Users size={18} className="text-red-200" />

                <span className="text-xs font-bold text-white/90">
                  Voices of Our Students
                </span>
              </div>
            </div>

            {/* TESTIMONIAL SLIDER */}
            <div className="min-w-0">
              {activeTestimonial ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Quote
                      size={38}
                      className="mb-4 text-red-200/70"
                      fill="currentColor"
                    />

                    <p className="min-h-[100px] text-base font-medium leading-8 text-white sm:text-lg lg:text-xl">
                      “{activeTestimonial.testimonial}”
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5">
                      {/* STUDENT DETAILS */}
                      <div className="flex items-center gap-3">
                        {activeTestimonial.image ? (
                          <img
                            src={activeTestimonial.image}
                            alt={activeTestimonial.name}
                            loading="lazy"
                            className="h-12 w-12 rounded-full border-2 border-white/50 object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-white/10">
                            <GraduationCap size={22} />
                          </div>
                        )}

                        <div>
                          <h4 className="text-sm font-black text-white">
                            {activeTestimonial.name}
                          </h4>

                          <p className="mt-1 text-xs text-white/70">
                            {activeTestimonial.course}
                            {activeTestimonial.subject
                              ? ` • ${activeTestimonial.subject}`
                              : ""}
                          </p>
                        </div>
                      </div>

                      {/* SLIDER CONTROLS */}
                      <div className="flex items-center gap-2">
                        <span className="mr-2 text-xs font-bold text-white/75">
                          {formatNumber(activeIndex + 1)} /{" "}
                          {formatNumber(testimonialStudents.length)}
                        </span>

                        <button
                          type="button"
                          onClick={prevSlide}
                          disabled={testimonialStudents.length <= 1}
                          aria-label="Previous testimonial"
                          className="flex h-10 w-10 items-center justify-center rounded border border-white/40 text-white transition hover:bg-white hover:text-[#850f18] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <ArrowLeft size={17} />
                        </button>

                        <button
                          type="button"
                          onClick={nextSlide}
                          disabled={testimonialStudents.length <= 1}
                          aria-label="Next testimonial"
                          className="flex h-10 w-10 items-center justify-center rounded bg-white text-[#850f18] transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <ArrowRight size={17} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="flex min-h-[180px] flex-col justify-center">
                  <Quote
                    size={38}
                    className="mb-4 text-red-200/70"
                  />

                  <p className="text-sm leading-7 text-white/80">
                    Student testimonials will appear here once actual
                    student feedback is added to the data file.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsTestimonials;

