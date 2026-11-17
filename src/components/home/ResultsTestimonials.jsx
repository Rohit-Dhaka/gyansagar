
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  
  Quote,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const results = [
  {
    id: 1,
    name: "UGC NET",
    subtitle: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    position: "left",
  },
  {
    id: 2,
    name: "CSIR NET",
    subtitle: "Research & Lectureship",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    position: "right",
  },
  {
    id: 3,
    name: "HTET / CTET",
    subtitle: "Teaching Eligibility",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
    position: "bottom",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Student Name 01",
    course: "UGC NET Preparation",
    review:
      "The guidance and structured learning helped me understand difficult concepts better. The faculty members are supportive and always ready to clear doubts.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85",
  },
  {
    id: 2,
    name: "Student Name 02",
    course: "HTET Preparation",
    review:
      "The teaching approach is clear and focused on exam preparation. Regular practice and doubt-solving sessions made my learning experience better.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85",
  },
  {
    id: 3,
    name: "Student Name 03",
    course: "CSIR NET Preparation",
    review:
      "I found the learning environment supportive and motivating. The concepts were explained in a simple way, which helped me improve my preparation.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=85",
  },
];

const ResultsTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#faf7f7] py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-24">

        {/* MAIN RESULTS AREA */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-9 bg-[#a51620]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#a51620]">
                Our Achievements
              </span>
            </div>

            <h2 className="max-w-xl font-['Playfair_Display'] text-4xl font-bold leading-[1.15] text-black sm:text-5xl xl:text-6xl">
              Turning Hard Work Into{" "}
              <span className="text-[#a51620]">Success Stories.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-black sm:text-base">
              At Gyan Sagar NET Classes, we believe every student's success
              begins with the right guidance, consistent practice and
              dedication. We work towards helping aspiring educators achieve
              their academic goals.
            </p>

            {/* HIGHLIGHT LINE */}
            <div className="mt-6 flex items-center gap-3 border-l-[3px] border-[#a51620] py-2 pl-4">
              <Trophy size={22} className="shrink-0 text-[#a51620]" />
              <p className="text-sm font-bold text-black">
                Guiding future educators towards their dreams since 2018.
              </p>
            </div>

            {/* NUMBERS */}
            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-red-200 pt-6 sm:grid-cols-3">
              <div>
                <h3 className="text-3xl font-black text-[#850f18] sm:text-4xl">
                  2018
                </h3>
                <p className="mt-1 text-xs font-bold text-black">
                  Established
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#850f18] sm:text-4xl">
                  1000+
                </h3>
                <p className="mt-1 text-xs font-bold text-black">
                  Students Guided
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-3xl font-black text-[#850f18] sm:text-4xl">
                  2 Modes
                </h3>
                <p className="mt-1 text-xs font-bold text-black">
                  Online & Offline
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE COLLAGE */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border-[16px] border-red-100/80" />

            <div className="relative grid grid-cols-2 gap-3">

              {/* LARGE IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative row-span-2 h-[340px] overflow-hidden rounded-tl-[90px] rounded-br-2xl sm:h-[420px]"
              >
                <img
                  src={results[0].image}
                  alt="Student achievement"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-200">
                    Success Story
                  </span>
                  <h3 className="mt-1 text-xl font-black">
                    {results[0].name}
                  </h3>
                  <p className="text-xs text-white/80">
                    {results[0].subtitle}
                  </p>
                </div>
              </motion.div>

              {/* TOP RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative h-[165px] overflow-hidden rounded-tr-[55px] sm:h-[205px]"
              >
                <img
                  src={results[1].image}
                  alt="Student success"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-sm font-black">{results[1].name}</h3>
                  <p className="text-[10px] text-white/80">
                    {results[1].subtitle}
                  </p>
                </div>
              </motion.div>

              {/* BOTTOM RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-[162px] overflow-hidden rounded-bl-[55px] sm:h-[202px]"
              >
                <img
                  src={results[2].image}
                  alt="Teaching exam achievement"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-sm font-black">{results[2].name}</h3>
                  <p className="text-[10px] text-white/80">
                    {results[2].subtitle}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-red-100 bg-white px-5 py-3 shadow-xl sm:left-5 sm:translate-x-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#850f18] text-white">
                <Award size={21} />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-xs font-black text-black">
                  Learning With Purpose
                </p>
                <p className="text-[10px] text-black">
                  Excellence Through Guidance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SECTION */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-[#850f18] px-6 py-8 text-white sm:px-10 sm:py-10 lg:mt-20 lg:px-14">
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
                Words That <br />
                <span className="text-red-200">Motivate Us.</span>
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                Every student's experience inspires us to keep delivering
                quality education and guidance.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <Users size={18} className="text-red-200" />
                <span className="text-xs font-bold text-white/90">
                  Voices of Our Learners
                </span>
              </div>
            </div>

            {/* QUOTE SLIDER */}
            <div className="min-w-0">
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
                    “{activeTestimonial.review}”
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
                        className="h-12 w-12 rounded-full border-2 border-white/50 object-cover"
                      />

                      <div>
                        <h4 className="text-sm font-black text-white">
                          {activeTestimonial.name}
                        </h4>
                        <p className="mt-1 text-xs text-white/70">
                          {activeTestimonial.course}
                        </p>
                      </div>

                      <div className="ml-2 flex gap-0.5 text-yellow-300">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            size={13}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="mr-2 text-xs font-bold text-white/75">
                        0{activeIndex + 1} / 0{testimonials.length}
                      </span>

                      <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-[#850f18]"
                      >
                        <ArrowLeft size={17} />
                      </button>

                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#850f18] transition hover:bg-red-100"
                      >
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsTestimonials;