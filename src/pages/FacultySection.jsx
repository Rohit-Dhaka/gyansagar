
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
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import facultyData from "../data/facultyData";

const FacultySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!facultyData?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#f5f0e9] py-12 sm:py-14 lg:py-16">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#850f18]/5 blur-3xl" />

      <div className="relative grid w-full grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.6fr] lg:items-center lg:gap-12 px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* LEFT CONTENT */}
        <div className="relative">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a51620]" />
            <span className="font-['Lato'] text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#a51620]">
              The Minds Behind Success
            </span>
          </div>

          <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-[1.12] text-[#241b1b] sm:text-5xl xl:text-[3.7rem]">
            Great
            <span className="block italic text-[#a51620]">
              Teachers.
            </span>
            <span className="block">Greater</span>
            <span className="block">Futures.</span>
          </h2>

          <p className="mt-5 max-w-[370px] font-['Lato'] text-sm leading-7 text-[#766967]">
            Behind every confident learner is a mentor who inspires,
            supports and guides. Meet the educators who make learning
            meaningful at Gyan Sagar.
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
          <div className="mb-4 flex items-center justify-between">

            <div>
              <p className="font-['Lato'] text-[10px] font-extrabold uppercase tracking-[2px] text-[#850f18]">
                Meet Our Faculty
              </p>
              <p className="mt-1 font-['Playfair_Display'] text-lg font-bold text-[#241b1b]">
                Inspiring Every Step
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                ref={prevRef}
                aria-label="Previous faculty"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cdbbb4] text-[#850f18] transition-all hover:bg-[#850f18] hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                ref={nextRef}
                aria-label="Next faculty"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#850f18] text-white transition-all hover:bg-[#a51620]"
              >
                <ChevronRight size={19} />
              </button>
            </div>

          </div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            speed={700}
            loop={facultyData.length > 1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              el: ".faculty-showcase-pagination",
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="faculty-showcase-swiper"
          >

            {facultyData.map((faculty, index) => (
              <SwiperSlide key={faculty.id}>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="grid min-h-[320px] grid-cols-1 overflow-hidden rounded-2xl bg-[#850f18] shadow-[0_18px_45px_rgba(70,15,20,0.13)] sm:min-h-[350px] sm:grid-cols-[0.85fr_1.15fr]"
                >

                  {/* FACULTY IMAGE */}
                  <div className="relative min-h-[230px] overflow-hidden bg-[#6f1018] sm:min-h-[350px]">

                    {faculty.image ? (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full min-h-[230px] items-center justify-center">
                        <GraduationCap size={70} className="text-white/30" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#30070b]/65 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 font-['Playfair_Display'] text-5xl font-bold text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/20 px-3 py-1 font-['Lato'] text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      Faculty
                    </span>

                  </div>

                  {/* FACULTY DETAILS */}
                  <div className="relative flex flex-col justify-center p-5 text-white sm:p-7 lg:p-8">

                    <div className="absolute right-5 top-5 opacity-10">
                      <GraduationCap size={65} />
                    </div>

                    <span className="mb-3 font-['Lato'] text-[10px] font-extrabold uppercase tracking-[2px] text-[#f1c6bd]">
                      {faculty.role}
                    </span>

                    <h3 className="max-w-[300px] font-['Playfair_Display'] text-2xl font-bold leading-tight sm:text-3xl">
                      {faculty.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 font-['Lato'] text-xs leading-6 text-white/70">
                      {faculty.description}
                    </p>

                    <div className="my-5 h-px w-full bg-white/20" />

                    <div className="space-y-4">

                      <div className="flex items-start gap-3">
                        <GraduationCap size={17} className="mt-0.5 shrink-0 text-[#f1c6bd]" />
                        <div>
                          <p className="font-['Lato'] text-[9px] font-bold uppercase tracking-wider text-white/50">
                            Qualification
                          </p>
                          <p className="mt-1 font-['Lato'] text-xs font-semibold text-white">
                            {faculty.qualification}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <BookOpen size={17} className="mt-0.5 shrink-0 text-[#f1c6bd]" />
                        <div>
                          <p className="font-['Lato'] text-[9px] font-bold uppercase tracking-wider text-white/50">
                            Subject
                          </p>
                          <p className="mt-1 font-['Lato'] text-xs font-semibold text-white">
                            {faculty.subject}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award size={17} className="mt-0.5 shrink-0 text-[#f1c6bd]" />
                        <div>
                          <p className="font-['Lato'] text-[9px] font-bold uppercase tracking-wider text-white/50">
                            Experience
                          </p>
                          <p className="mt-1 font-['Lato'] text-xs font-semibold text-white">
                            {faculty.experience}
                          </p>
                        </div>
                      </div>

                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                      <span className="font-['Lato'] text-[9px] font-bold uppercase tracking-[1.5px] text-white/60">
                        Gyan Sagar NET Classes
                      </span>

                      <ArrowUpRight size={19} className="text-[#f1c6bd]" />
                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>
            ))}

          </Swiper>

          {/* PAGINATION */}
          <div className="faculty-showcase-pagination mt-5 flex justify-center" />

        </div>

      </div>

    </section>
  );
};

export default FacultySection;
