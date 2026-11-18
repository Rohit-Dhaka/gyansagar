import { useRef } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Users,
  Quote,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import facultyData from "../data/facultyData";

const FacultySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!facultyData?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#f5f0e9] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#850f18]/5 blur-3xl" />

      <div className="relative grid w-full grid-cols-1 gap-8 px-3 sm:px-4 lg:grid-cols-[0.75fr_1.6fr] lg:items-center lg:gap-12 lg:px-6 xl:px-8 2xl:px-10">
        {/* LEFT CONTENT */}
        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a51620]" />
            <span className="font-['Lato'] text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#a51620]">
              The Minds Behind Success
            </span>
          </div>

          <h2 className="font-['Playfair_Display'] text-[2.25rem] leading-[1.15] font-bold text-[#241b1b] sm:text-5xl lg:text-6xl xl:text-[3.7rem]">
            Great Teachers. Greater Futures.
          </h2>

          <p className="mt-5 max-w-[370px] font-['Lato'] text-sm leading-7 text-[#766967]">
            Behind every confident learner is a mentor who inspires, supports
            and guides. Meet the educators who make learning meaningful at Gyan
            Sagar.
          </p>

          {/* FACULTY COUNT */}
          <div className="mt-7 flex items-center gap-4 border-y border-[#dfd2c9] py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#850f18] text-white">
              <Users size={20} />
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-2xl font-bold text-[#850f18]">
                {String(facultyData.length).padStart(2, "0")}+
              </p>
              <p className="font-['Lato'] text-[10px] font-bold uppercase tracking-[1.5px] text-[#766967]">
                Dedicated Educators
              </p>
            </div>
          </div>

          {/* BOTTOM QUOTE */}
          <div className="mt-6 flex gap-3">
            <Quote size={24} className="shrink-0 text-[#a51620]" />

            <p className="max-w-[280px] font-['Playfair_Display'] text-sm italic leading-6 text-[#594846]">
              "Education is not just about learning, it is about becoming."
            </p>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative min-w-0">
          {/* TOP LABEL */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="font-['Lato'] text-[10px] font-extrabold uppercase tracking-[2px] text-[#850f18]">
                Meet Our Faculty
              </p>
              <p className="mt-1 font-['Playfair_Display'] text-lg font-bold text-[#241b1b]">
                Inspiring Every Step
              </p>
            </div>

            {/* SLIDER ARROWS */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous faculty"
                className="flex h-10 w-10 items-center justify-center  border border-[#cdbbb4] text-[#850f18] transition-all hover:bg-[#850f18] hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                ref={nextRef}
                type="button"
                aria-label="Next faculty"
                className="flex h-10 w-10 items-center justify-center  bg-[#850f18] text-white transition-all hover:bg-[#a51620]"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

      <Swiper
  modules={[Autoplay, Navigation]}
  slidesPerView={1}
  spaceBetween={20}
  speed={700}
  loop={facultyData.length > 1}
  watchOverflow
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  className="faculty-showcase-swiper"
>
  {facultyData.map((faculty, index) => (
    <SwiperSlide key={faculty.id} className="h-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="
          grid sm:h-[700px] grid-cols-1 overflow-hidden rounded-2xl
          bg-[#850f18]
          shadow-[0_18px_45px_rgba(70,15,20,0.13)]
          sm:h-[420px]
          sm:grid-cols-[0.85fr_1.15fr]
          lg:h-[410px]
          xl:h-[430px]
        "
      >
        {/* FACULTY IMAGE */}
        <div className="relative h-[370px] min-h-0 overflow-hidden bg-[#6f1018] sm:h-full">
          {faculty.image ? (
            <img
              src={faculty.image}
              alt={faculty.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <GraduationCap size={65} className="text-white/30" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#30070b]/65 via-transparent to-transparent" />

          <span className="absolute bottom-3 left-4 font-['Playfair_Display'] text-5xl font-bold text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="absolute right-3 top-3 rounded-full border border-white/40 bg-black/20 px-3 py-1 font-['Lato'] text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            Faculty
          </span>
        </div>

        {/* FACULTY DETAILS */}
        <div className="relative flex min-h-0 flex-col overflow-hidden p-4 text-white sm:justify-center sm:p-5 lg:p-6">
          <div className="pointer-events-none absolute right-4 top-4 opacity-10">
            <GraduationCap size={48} />
          </div>

          <span className="mb-1 shrink-0 font-['Lato'] text-[9px] font-extrabold uppercase tracking-[1.5px] text-[#f1c6bd]">
            {faculty.role}
          </span>

          <h3 className="shrink-0 font-['Playfair_Display'] text-xl font-bold leading-tight sm:text-2xl lg:text-[1.75rem]">
            {faculty.name}
          </h3>

          <p className="mt-1.5 line-clamp-2 font-['Lato'] text-[10px] leading-[1.5] text-white/70 sm:mt-2 sm:text-[11px] sm:leading-5">
            {faculty.description}
          </p>

          <div className="my-2.5 h-px w-full shrink-0 bg-white/20 sm:my-3" />

          {/* FACULTY INFORMATION */}
          <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
            <div className="flex min-w-0 items-center gap-2">
              <GraduationCap
                size={15}
                className="shrink-0 text-[#f1c6bd]"
              />

              <div className="min-w-0">
                <p className="font-['Lato'] text-[8px] font-bold uppercase tracking-wider text-white/50">
                  Qualification
                </p>
                <p className="mt-0.5 line-clamp-1 font-['Lato'] text-[10px] font-semibold leading-4 text-white sm:text-[11px]">
                  {faculty.qualification}
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <BookOpen
                size={15}
                className="shrink-0 text-[#f1c6bd]"
              />

              <div className="min-w-0">
                <p className="font-['Lato'] text-[8px] font-bold uppercase tracking-wider text-white/50">
                  Subject
                </p>
                <p className="mt-0.5 line-clamp-1 font-['Lato'] text-[10px] font-semibold leading-4 text-white sm:text-[11px]">
                  {faculty.subject}
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <Award
                size={15}
                className="shrink-0 text-[#f1c6bd]"
              />

              <div className="min-w-0">
                <p className="font-['Lato'] text-[8px] font-bold uppercase tracking-wider text-white/50">
                  Experience
                </p>
                <p className="mt-0.5 line-clamp-1 font-['Lato'] text-[10px] font-semibold leading-4 text-white sm:text-[11px]">
                  {faculty.experience}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM BRANDING */}
          <div className="mt-auto flex shrink-0 items-center justify-between border-t border-white/20 pt-2">
            <span className="font-['Lato'] text-[8px] font-bold uppercase tracking-[1px] text-white/60">
              Gyan Sagar NET Classes
            </span>

            <ArrowUpRight size={17} className="text-[#f1c6bd]" />
          </div>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
