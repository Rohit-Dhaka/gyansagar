
import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { examPreparationData } from "../../data/examPreparationData";

const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  users: Users,
  award: Award,
};

const ExamPreparationSection = () => {
  return (
    <section
      id="exam-preparation"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-50/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-50/60 blur-3xl" />

      <div className="relative w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 flex flex-col items-center text-center sm:mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#a51620]" />

            <span className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-[#a51620]">
              EXPLORE OUR PROGRAMS
            </span>

            <span className="h-[2px] w-9 bg-[#a51620]" />
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Exam{" "}
            <span className="italic text-[#a51620]">
              Preparation
            </span>
          </h2>

          <p className="mt-4 max-w-2xl font-['Lato'] text-sm leading-7 text-black sm:text-base">
            Explore our examination preparation programs designed to
            help students strengthen their knowledge, develop concepts
            and prepare confidently for their academic and career goals.
          </p>
        </motion.div>

        {/* SWIPER SLIDER */}
        <div className="relative">

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            speed={700}
            loop={examPreparationData.length > 4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".exam-prev",
              nextEl: ".exam-next",
            }}
            pagination={{
              clickable: true,
              el: ".exam-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="exam-preparation-swiper !pb-14"
          >
            {examPreparationData.map((program, index) => {
              const Icon = iconMap[program.icon] || GraduationCap;

              return (
                <SwiperSlide key={program.id} className="!h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 4) * 0.08,
                    }}
                    whileHover={{ y: -7 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white p-6 shadow-[0_5px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#a51620]/40 hover:shadow-[0_15px_40px_rgba(133,15,24,0.10)]"
                  >
                    {/* CARD TOP */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-[#a51620] transition-all duration-300 group-hover:bg-[#a51620] group-hover:text-white">
                        <Icon size={27} strokeWidth={1.7} />
                      </div>

                      <span className="font-['Playfair_Display'] text-3xl font-bold text-black/35 transition-colors group-hover:text-[#a51620]">
                        {program.id}
                      </span>
                    </div>

                    {/* CATEGORY */}
                    <span className="mb-3 font-['Lato'] text-[9px] font-extrabold tracking-[1.7px] text-[#a51620]">
                      {program.category}
                    </span>

                    {/* TITLE */}
                    <h3 className="min-h-[58px] font-['Playfair_Display'] text-xl font-bold leading-snug text-black transition group-hover:text-[#a51620]">
                      {program.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 font-['Lato'] text-sm leading-7 text-black">
                      {program.description}
                    </p>

                    {/* EXAMS INCLUDED */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {program.exams.map((exam) => (
                        <span
                          key={exam}
                          className="inline-flex items-center gap-1.5 rounded-md bg-[#faf7f7] px-2.5 py-1.5 font-['Lato'] text-[10px] font-bold text-black"
                        >
                          <CheckCircle2
                            size={12}
                            className="shrink-0 text-[#a51620]"
                          />
                          {exam}
                        </span>
                      ))}
                    </div>

                    {/* BOTTOM LINK */}
                    <div className="mt-auto pt-7">
                      <Link
                        to={program.path}
                        aria-label={`Explore ${program.title} preparation`}
                        className="flex items-center justify-between border-t border-black/20 pt-4 font-['Lato'] text-sm font-bold text-[#850f18] transition-colors hover:text-[#5f0a11] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850f18]"
                      >
                        <span>Explore Program</span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a51620]/30 transition-all duration-300 group-hover:border-[#a51620] group-hover:bg-[#a51620] group-hover:text-white">
                          <ArrowUpRight size={18} />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* SLIDER CONTROLS */}
          <div className="mt-2 flex items-center justify-between gap-4">

            {/* PAGINATION */}
            <div className="exam-pagination flex min-h-8 flex-1 items-center justify-center gap-1" />

            {/* NAVIGATION BUTTONS */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Previous exam programs"
                className="exam-prev flex h-10 w-10 items-center justify-center rounded-full border border-[#a51620]/30 text-[#850f18] transition hover:border-[#850f18] hover:bg-[#850f18] hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                aria-label="Next exam programs"
                className="exam-next flex h-10 w-10 items-center justify-center rounded-full border border-[#a51620]/30 text-[#850f18] transition hover:border-[#850f18] hover:bg-[#850f18] hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamPreparationSection;
