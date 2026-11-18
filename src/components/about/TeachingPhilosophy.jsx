
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Target,
  ClipboardCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

const teachingMethods = [
  {
    number: "01",
    title: "Concept-Based Learning",
    shortTitle: "Build Strong Concepts",
    description:
      "We believe that strong concepts create confident learners. Our teaching approach focuses on explaining every topic from its fundamentals to advanced levels.",
    points: [
      "Clear explanation of fundamental concepts",
      "Step-by-step topic understanding",
      "Focus on learning rather than memorisation",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMM6BSvZObxtyG0P4Q7PcYJAdsPAZoockCiDP8b-FgeQ&s=10",
    imageAlt: "Teacher explaining concepts to students",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Exam-Oriented Preparation",
    shortTitle: "Prepare With Purpose",
    description:
      "Our preparation approach is aligned with teaching examination requirements, helping students understand important topics, exam patterns and subject-specific expectations.",
    points: [
      "Syllabus-focused preparation",
      "Understanding of examination patterns",
      "Subject-wise preparation strategy",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9rc6uecHKsFYFqUQgeWJe5XJ2kuCHMY3p_JWyJOQmw&s=10",
    imageAlt: "Student preparing for competitive examinations",
    icon: Target,
  },
  {
    number: "03",
    title: "Practice & Assessment",
    shortTitle: "Learn Through Practice",
    description:
      "Consistent practice helps students strengthen their preparation. Questions, revision and assessments can help identify areas that need more attention.",
    points: [
      "Practice questions and mock tests",
      "Previous year question discussions",
      "Revision and performance improvement",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbr0ibPR8-eKW00uVbKfpiI1bIWT0wP7NRih_AxBMZg&s=10",
    imageAlt: "Student practising questions in a notebook",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Personal Guidance",
    shortTitle: "Guidance At Every Step",
    description:
      "Every learner has a different learning journey. We aim to provide a supportive learning environment where students can ask questions and work towards their academic goals.",
    points: [
      "Support with subject-related doubts",
      "Guidance throughout preparation",
      "A student-focused learning environment",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdD1PkPTi8A9LpUqIWTyjx_Sa4khuCsRgK_AHCRmWWA&s=10",
    imageAlt: "Teacher guiding students in a classroom",
    icon: Users,
  },
];

const TeachingPhilosophy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        return (prevIndex + 1) % teachingMethods.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeMethod = teachingMethods[activeIndex];
  const ActiveIcon = activeMethod.icon;

  return (
    <section className="w-full overflow-hidden bg-[#faf7f7] py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* SECTION HEADER */}
        <div className="mb-4 grid gap-4 sm:mb-9 lg:grid-cols-2 lg:items-end lg:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#850f18]" />

              <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#850f18]">
                How We Teach
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-[32px] font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Teaching{" "}
              <span className="text-[#850f18] sm:block">
                Philosophy.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-black/65 sm:text-base sm:leading-8 lg:justify-self-end">
            At Gyan Sagar NET Classes, we believe that effective education
            goes beyond textbooks. Our approach focuses on understanding,
            consistent practice and meaningful academic guidance.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* LEFT IMAGE */}
          <div className="relative min-w-0">
            <div className="relative h-[300px] overflow-hidden bg-[#f4eeee] sm:h-[420px] lg:h-[520px]">

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeMethod.image}
                  src={activeMethod.image}
                  alt={activeMethod.imageAlt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* IMAGE CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">
                <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-white/70">
                  Gyan Sagar NET Classes
                </span>

                <h3 className="mt-2 max-w-md font-['Playfair_Display'] text-2xl font-bold text-white sm:text-3xl">
                  Learning Today,
                  <br />
                  Leading Tomorrow.
                </h3>
              </div>

              {/* ACTIVE ICON */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMethod.number}
                  initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center border border-white/40 bg-white/15 text-white backdrop-blur-sm"
                >
                  <ActiveIcon size={25} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* IMAGE FOOTER */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-black/45">
                Our Approach To Education
              </span>

              <span className="text-xs font-bold text-[#850f18]">
                {activeMethod.number} / 04
              </span>
            </div>

            {/* AUTO PLAY PROGRESS */}
            <div className="mt-3 h-[3px] w-full overflow-hidden bg-[#850f18]/10">
              <motion.div
                key={activeMethod.number}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-[#850f18]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex min-w-0 flex-col justify-center">

            <div className="mb-5">
              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#850f18]">
                Our Core Principles
              </span>

              <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold text-black sm:text-3xl">
                Every Lesson Has
                <span className="text-[#850f18]"> A Purpose.</span>
              </h3>
            </div>

            {/* PRINCIPLE SELECTORS */}
            <div className="border-t border-black/10">
              {teachingMethods.map((method, index) => {
                const isActive = activeIndex === index;
                const MethodIcon = method.icon;

                return (
                  <button
                    key={method.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-4 border-b border-black/10 py-4 text-left transition-all duration-300 sm:py-5 ${
                      isActive
                        ? "bg-[#fcf7f7] px-3"
                        : "px-0 hover:px-2"
                    }`}
                  >
                    {/* ICON */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#850f18] text-white"
                          : "bg-[#f5eeee] text-[#850f18] group-hover:bg-[#850f18] group-hover:text-white"
                      }`}
                    >
                      <MethodIcon size={19} />
                    </span>

                    {/* TITLE */}
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-extrabold tracking-[2px] text-[#850f18]/65">
                        {method.number}
                      </span>

                      <span
                        className={`mt-1 block font-['Playfair_Display'] text-base font-bold sm:text-lg ${
                          isActive ? "text-[#850f18]" : "text-black"
                        }`}
                      >
                        {method.title}
                      </span>
                    </span>

                    {/* ARROW */}
                    <ArrowUpRight
                      size={19}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "rotate-45 text-[#850f18]"
                          : "text-black/70 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#850f18]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* ACTIVE DESCRIPTION */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMethod.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="pt-6"
              >
                <h4 className="font-['Playfair_Display'] text-xl font-bold text-black">
                  {activeMethod.shortTitle}
                </h4>

                <p className="mt-3 text-sm leading-7 text-black/65">
                  {activeMethod.description}
                </p>

                {/* POINTS */}
                <div className="mt-5 space-y-3">
                  {activeMethod.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#850f18]"
                      />

                      <span className="text-sm leading-6 text-black/75">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingPhilosophy;
