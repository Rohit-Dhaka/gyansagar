
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  ClipboardList,
  Target,
  CheckCircle2,
  ArrowUpRight,
  Lightbulb,
  ChevronRight,
  Award,
  Users,
  ChevronLeft,
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

const ExamDetailContent = ({ exam }) => {
  if (!exam) {
    return (
      <section className="flex min-h-[55vh] w-full items-center justify-center bg-[#faf8f5] px-4">
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#211416]">
            Exam Not Found
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            The exam you are looking for is not available.
          </p>

          <Link
            to="/exam-preparation"
            className="mt-6 inline-flex items-center gap-2 bg-[#850f18] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#a51620]"
          >
            Back to Exam Preparation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    );
  }

  const detailSections = [
    {
      number: "01",
      title: "About the Examination",
      description: exam.about,
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Eligibility Criteria",
      description: exam.eligibility,
      icon: GraduationCap,
    },
    {
      number: "03",
      title: "Examination Pattern",
      description: exam.examPattern,
      icon: ClipboardList,
    },
    {
      number: "04",
      title: "Our Preparation Approach",
      description: exam.preparationStrategy,
      icon: Target,
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#faf8f5]  py-12 sm:py-14 lg:py-16 px-5 sm:px-8 lg:px-14 xl:px-24">

      {/* Breadcrumb */}
      <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500">
        <Link to="/" className="transition-colors hover:text-[#a51620]">
          Home
        </Link>

        <ChevronRight size={14} />

        <Link
          to="/exam-preparation"
          className="transition-colors hover:text-[#a51620]"
        >
          Exam Preparation
        </Link>

        <ChevronRight size={14} />

        <span className="text-[#850f18]">{exam.title}</span>
      </div>

      {/* Exam Introduction */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#a51620]">
            <span className="h-[2px] w-8 bg-[#a51620]" />
            {exam.category}
          </span>

          <h1 className="font-['Playfair_Display'] text-4xl font-bold leading-tight text-[#211416] sm:text-5xl lg:text-6xl">
            {exam.title}
            <span className="mt-2 block text-[#a51620]">
              Exam Preparation
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-600 sm:text-base">
            {exam.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {exam.exams?.map((item) => (
              <span
                key={item}
                className="border border-[#ead8d5] bg-white px-4 py-2 text-xs font-bold text-[#850f18]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#850f18] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#a51620]"
            >
              Enquire Now
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/exam-preparation"
              className="inline-flex items-center gap-3 border border-[#850f18] px-6 py-4 text-sm font-bold text-[#850f18] transition-colors hover:bg-[#850f18] hover:text-white"
            >
              All Exams
            </Link>
          </div>
        </motion.div>

        {/* Information Panel */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden bg-[#850f18] p-7 text-white sm:p-9"
        >
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center bg-white/10 text-[#e6b9b9]">
              <GraduationCap size={30} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#e6b9b9]">
              Program Overview
            </p>

            <h2 className="mt-2 font-['Playfair_Display'] text-3xl font-bold">
              {exam.title}
            </h2>

            <div className="mt-8 space-y-5">
              {[
                ["Program Category", exam.category],
                ["Available Exams", exam.exams?.join(", ")],
                ["Learning Mode", exam.learningMode],
              ]
                .filter((item) => item[1])
                .map(([label, value]) => (
                  <div key={label} className="border-b border-white/15 pb-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                      {label}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white">
                      {value}
                    </p>
                  </div>
                ))}
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#e6b9b9]">
              <CheckCircle2 size={18} />
              Focused Academic Guidance
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detail Sections */}
      <div className="mt-16">
        <div className="mb-8">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a51620]">
            Know More
          </span>

          <h2 className="mt-3 font-['Playfair_Display'] text-3xl font-bold text-[#211416] sm:text-4xl">
            Everything About {exam.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {detailSections
            .filter((section) => section.description)
            .map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border border-[#e9dfdc] bg-white p-6 transition-all duration-300 hover:border-[#a51620] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#f8eeee] text-[#a51620]">
                      <Icon size={23} />
                    </div>

                    <span className="font-['Playfair_Display'] text-3xl font-bold text-[#eee5e2]">
                      {section.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-['Playfair_Display'] text-2xl font-bold text-[#211416]">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {section.description}
                  </p>
                </motion.div>
              );
            })}
        </div>
      </div>

      {/* Syllabus */}
      {exam.syllabus?.length > 0 && (
        <div className="mt-14 bg-white p-6 sm:p-9">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center bg-[#f8eeee] text-[#a51620]">
              <BookOpen size={24} />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#a51620]">
                Course Curriculum
              </span>

              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#211416] sm:text-3xl">
                Syllabus & Subjects
              </h2>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {exam.syllabus.map((subject, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-[#eee8e5] p-4"
              >
                <CheckCircle2 size={18} className="shrink-0 text-[#a51620]" />

                <span className="text-sm font-semibold text-gray-700">
                  {subject}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Preparation CTA */}
      <div className="mt-14 grid grid-cols-1 gap-6 bg-[#850f18] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex items-center gap-3 text-white/70">
            <Lightbulb size={22} />

            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Gyan Sagar NET Classes
            </span>
          </div>

          <h2 className="mt-4 font-['Playfair_Display'] text-2xl font-bold text-white sm:text-3xl">
            Begin Your {exam.title} Preparation Today.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
            Connect with our academic team and get guidance about your exam
            preparation journey.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-extrabold text-[#850f18] transition-colors hover:bg-[#f5e9e9]"
        >
          Contact Us
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Explore All Exams Slider */}
      <div className="mt-16 sm:mt-20">

        {/* Slider Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#a51620]">
              <span className="h-[2px] w-7 bg-[#a51620]" />
              Explore More
            </span>

            <h2 className="mt-3 font-['Playfair_Display'] text-3xl font-bold text-[#211416] sm:text-4xl">
              Explore All Exam Preparations
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
              Discover our range of exam preparation programs and find the
              right learning path for your academic goals.
            </p>
          </div>

          <Link
            to="/exam-preparation"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#850f18] transition-colors hover:text-[#a51620]"
          >
            View All Exams
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={18}
            slidesPerView={1}
            loop={examPreparationData.length > 3}
            speed={700}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".exam-slider-prev",
              nextEl: ".exam-slider-next",
            }}
            pagination={{
              clickable: true,
              el: ".exam-slider-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
            className="exam-preparation-swiper !pb-12"
          >
            {examPreparationData.map((item) => {
              const Icon = iconMap[item.icon] || BookOpen;
              const isActive = item.path === exam.path;

              return (
                <SwiperSlide key={item.id} className="h-auto">
                  <Link
                    to={item.path}
                    className={`group flex h-full min-h-[270px] flex-col border p-6 transition-all duration-300 sm:p-7 ${
                      isActive
                        ? "border-[#850f18] bg-[#850f18] text-white shadow-lg shadow-[#850f18]/15"
                        : "border-[#eadfdb] bg-white text-[#211416] hover:-translate-y-1 hover:border-[#850f18]/50 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-extrabold tracking-widest ${
                          isActive ? "text-white/60" : "text-[#a51620]/50"
                        }`}
                      >
                        {item.id}
                      </span>

                      <div
                        className={`flex h-12 w-12 items-center justify-center transition-colors ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-[#f8eeee] text-[#a51620] group-hover:bg-[#850f18] group-hover:text-white"
                        }`}
                      >
                        <Icon size={23} />
                      </div>
                    </div>

                    <span
                      className={`mt-6 text-[10px] font-extrabold uppercase tracking-[0.15em] ${
                        isActive ? "text-white/65" : "text-[#a51620]"
                      }`}
                    >
                      {item.category}
                    </span>

                    <h3 className="mt-2 font-['Playfair_Display'] text-xl font-bold sm:text-2xl">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 line-clamp-3 text-sm leading-6 ${
                        isActive ? "text-white/75" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span
                        className={`text-xs font-bold ${
                          isActive ? "text-white" : "text-[#850f18]"
                        }`}
                      >
                        {isActive ? "Currently Viewing" : "Explore Program"}
                      </span>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                          isActive
                            ? "bg-white text-[#850f18]"
                            : "bg-[#f8eeee] text-[#850f18] group-hover:bg-[#850f18] group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight size={17} />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Slider Controls */}
          <div className="mt-2 flex items-center justify-between gap-4">
            <div className="exam-slider-pagination flex items-center gap-2" />

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous exams"
                className="exam-slider-prev flex h-11 w-11 items-center justify-center border border-[#eadfdb] bg-white text-[#850f18] transition-all hover:border-[#850f18] hover:bg-[#850f18] hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                aria-label="Next exams"
                className="exam-slider-next flex h-11 w-11 items-center justify-center border border-[#eadfdb] bg-white text-[#850f18] transition-all hover:border-[#850f18] hover:bg-[#850f18] hover:text-white"
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

export default ExamDetailContent;
