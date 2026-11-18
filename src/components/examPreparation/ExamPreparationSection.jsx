import { useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowUpRight,
  MoveRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section
      id="exam-programs"
      className="w-full overflow-hidden  px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-10 2xl:px-12"
    >
      {/* SECTION HEADING */}
        <div className="flex justify-between w-full items-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#a51620]"
            >
              <span className="h-[2px] w-8 bg-[#a51620]" />
              Explore Our Programs
            </motion.span>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-sm font-bold text-[#850f18]"
            >
              <span>{examPreparationData.length} Preparation Programs</span>
              <GraduationCap size={22} />
            </motion.div>
          </div>
      <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
        
        <div className="max-w-2xl">
        

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-[#211416] sm:text-4xl lg:text-5xl"
          >
            Choose Your Exam.
            <span className="block text-[#a51620]">Shape Your Future.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base"
          >
            Explore our exam preparation programs and find the right academic
            guidance to move closer to your career goals.
          </motion.p>
        </div>

        
        <div className="mt-2 flex items-center justify-between gap-4">
       
          <div className="flex shrink-0 items-center gap-2">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous exam"
              className="flex h-10 w-10 items-center justify-center border border-[#850f18]/20 bg-white text-[#850f18] transition hover:bg-[#850f18] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              ref={nextRef}
              type="button"
              aria-label="Next exam"
              className="flex h-10 w-10 items-center justify-center border border-[#850f18]/20 bg-white text-[#850f18] transition hover:bg-[#850f18] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* SLIDER */}
     
<div className="relative">
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    slidesPerView={1}
    spaceBetween={16}
    speed={700}
    loop={examPreparationData.length > 4}
    watchOverflow
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    navigation={{
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    }}
    pagination={{
      clickable: true,
      el: paginationRef.current,
    }}
    onBeforeInit={(swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.pagination.el = paginationRef.current;
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }}
    className="exam-preparation-swiper !pb-12"
  >
    {examPreparationData.map((exam, index) => {
      const Icon = iconMap[exam.icon] || BookOpen;

      return (
        <SwiperSlide key={exam.id} className="h-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="h-full"
          >
            <Link
              to={exam.path}
              className="group relative flex h-[390px] flex-col overflow-hidden border border-[#e9dfdc] bg-[#faf8f5] p-6 transition-all duration-300 hover:border-[#a51620] hover:shadow-xl sm:p-7"
            >
              {/* TOP */}
              <div className="mb-6 flex shrink-0 items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center bg-[#f8eeee] text-[#a51620] transition-colors duration-300 group-hover:bg-[#850f18] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <span className="font-['Playfair_Display'] text-3xl font-bold text-[#eee5e2] transition-colors group-hover:text-[#ead0d0]">
                  {exam.id}
                </span>
              </div>

              {/* CONTENT */}
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <span className="mb-3 block shrink-0 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#a51620]">
                  {exam.category}
                </span>

                <h3 className="shrink-0 font-['Playfair_Display'] text-2xl font-bold text-[#211416] transition-colors group-hover:text-[#850f18]">
                  {exam.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {exam.description}
                </p>

                {/* EXAM TAGS */}
                <div className="mt-4 flex flex-wrap gap-2 overflow-hidden">
                  {exam.exams?.map((item) => (
                    <span
                      key={item}
                      className="border border-[#eee4e1] bg-[#faf8f5] px-2.5 py-1 text-[10px] font-bold text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM */}
              <div className="mt-auto flex shrink-0 items-center justify-between border-t border-[#eee8e5] pt-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#850f18]">
                  Explore Program
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8eeee] text-[#a51620] transition-all duration-300 group-hover:bg-[#850f18] group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          </motion.div>
        </SwiperSlide>
      );
    })}
  </Swiper>
</div>


      {/* BOTTOM CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col items-start justify-between gap-5 bg-[#850f18] p-6 sm:p-8 md:flex-row md:items-center"
      >
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white sm:text-3xl">
            Not Sure Which Exam to Choose?
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/75">
            Connect with our academic team for the right guidance.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-3 bg-white px-6 py-3 text-sm font-extrabold text-[#850f18] transition-colors hover:bg-[#f5e9e9]"
        >
          Talk to Our Team
          <MoveRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
};

export default ExamPreparationSection;
