import { useState } from "react";
import { motion } from "motion/react";
import {
  
  GraduationCap,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import facultyData from "../../data/facultyData";

const FacultyTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalFaculty = facultyData.length;

  if (!totalFaculty) return null;

  return (
    <section
      id="faculty-team"
      className="w-full overflow-hidden bg-[#faf8f5] py-8 sm:py-10 lg:py-12"
    >
      <div className="px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-2 sm:gap-6 sm:border-b border-black/10 sm:pb-7 md:flex-row md:items-end lg:pb-9">
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
              <span className="block text-[#850f18]">Faculty Members.</span>
            </motion.h2>
          </div>

             {totalFaculty > 1 && (
            <div className="sm:mt-6 max-sm:ms-auto flex items-center justify-between gap-4">          
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  aria-label="Previous faculty"
                  className="faculty-team-prev flex h-8 sm:h-11 w-8 sm:w-11 items-center justify-center border border-black/15 text-black transition hover:border-[#850f18] hover:bg-[#850f18] hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  aria-label="Next faculty"
                  className="faculty-team-next flex h-8 sm:h-11 w-8 sm:w-11 items-center justify-center bg-[#850f18] text-white transition hover:bg-[#a51620]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>
          )}

        </div>

        {/* SWIPER SLIDER */}
        <div className="relative mt-6 sm:mt-8 lg:mt-10">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            speed={700}
            loop={totalFaculty > 3}
            watchOverflow
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".faculty-team-prev",
              nextEl: ".faculty-team-next",
            }}
            pagination={{
              clickable: true,
              el: ".faculty-team-pagination",
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="faculty-team-swiper !pb-2"
          >
            {facultyData.map((faculty, index) => (
              <SwiperSlide key={faculty.id} className="h-auto">
                <motion.article
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group h-full bg-white"
                >
                  {/* FACULTY IMAGE */}
                  <div className="relative aspect-[4/4.2] overflow-hidden bg-[#e9dfd7]">
                    {faculty.image && (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

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
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FacultyTeam;
