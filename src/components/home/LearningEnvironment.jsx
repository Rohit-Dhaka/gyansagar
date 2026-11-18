import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  MonitorPlay,
  Users,
  Target,
} from "lucide-react";


const learningExperiences = [
  {
    id: 1,
    number: "01",
    category: "Classroom Experience",
    title: "Learn Together. Grow Together.",
    description:
      "Experience an engaging classroom environment where students learn through interactive sessions, expert guidance and meaningful discussions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBdmVysrNHb5Sfg_UHJHmh-3f-BUYf50bBX5N2KDtpA&s=10",
      // "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=90",
    tag: "Interactive Learning",
    icon: Users,
  },
  {
    id: 2,
    number: "02",
    category: "Expert Guidance",
    title: "Guidance That Builds Confidence.",
    description:
      "Get structured academic support, concept clarity and focused preparation under experienced educators who understand competitive examinations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLK9DL98gd_31_WEqCI0exBoEiSH6eouk4a_jnzi4gxA&s=10",
      // "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=90",
    tag: "Expert Mentorship",
    icon: GraduationCap,
  },
  {
    id: 3,
    number: "03",
    category: "Digital Learning",
    title: "Education Beyond Boundaries.",
    description:
      "Learn through flexible online and offline learning options designed to make quality education accessible and convenient.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKt2s-bud25a1JxsVu-vnWjr0-wD1RpT0S3cyw5oL2ew&s=10",
      // "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=1600&q=90",
    tag: "Online + Offline",
    icon: MonitorPlay,
  },
  {
    id: 4,
    number: "04",
    category: "Study Resources",
    title: "Prepare With The Right Resources.",
    description:
      "Build strong concepts with structured study material, regular practice and exam-oriented learning resources.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4-q1pjfIRkkubcrafCpEP6vxJ7q50xtRrsxfSgRqAQ&s=10",
      // "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=90",
    tag: "Focused Preparation",
    icon: BookOpen,
  },
];

const highlights = [
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Active participation and classroom discussions",
  },
  {
    icon: Target,
    title: "Exam-Focused Approach",
    description: "Structured preparation for competitive exams",
  },
  {
    icon: BookOpen,
    title: "Concept Clarity",
    description: "Strong fundamentals and regular practice",
  },
];

const LearningEnvironment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExperience = learningExperiences[activeIndex];
  const ActiveIcon = activeExperience.icon;

  // const nextSlide = () => {
  //   setActiveIndex((prev) => (prev + 1) % learningExperiences.length);
  // };

  // const prevSlide = () => {
  //   setActiveIndex(
  //     (prev) =>
  //       (prev - 1 + learningExperiences.length) % learningExperiences.length,
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % learningExperiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#faf7f7] py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* SECTION HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#a51620]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#a51620]">
                The Gyan Sagar Experience
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              More Than Just A{" "}
              <span className="text-[#a51620]">Classroom.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black">
            An environment where knowledge meets guidance, ideas turn into
            understanding and students move closer to their academic goals.
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          {/* LEFT NAVIGATION */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between border-b border-red-200 pb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-black">
                Explore Our Environment
              </span>

              <span className="text-xs font-bold text-[#a51620]">
                0{activeIndex + 1} / 04
              </span>
            </div>

            <div className="flex flex-col">
              {learningExperiences.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group flex items-center gap-4 border-b border-red-100 py-5 text-left transition-all duration-300 ${
                      isActive ? "pl-2" : "hover:pl-2"
                    }`}
                  >
                    <span
                      className={`font-['Playfair_Display'] text-xl font-bold transition-colors ${
                        isActive ? "text-[#a51620]" : "text-black/70"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-sm font-extrabold transition-colors sm:text-base ${
                          isActive ? "text-[#850f18]" : "text-black"
                        }`}
                      >
                        {item.category}
                      </h3>

                      <p
                        className={`mt-1 text-xs leading-5 ${
                          isActive ? "text-black" : "text-black/65"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                        isActive
                          ? "bg-[#850f18] text-white"
                          : "bg-white text-black group-hover:bg-red-100"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* SMALL LEFT CTA */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#850f18] text-white">
                <GraduationCap size={22} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-black">
                  Your Learning Journey Starts Here
                </p>
                <p className="mt-1 text-xs text-black">
                  Discover the Gyan Sagar experience.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURED IMAGE */}
          <div className="relative min-w-0">
            <div className="relative min-h-[370px] overflow-hidden rounded-2xl bg-[#850f18] sm:min-h-[470px] lg:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExperience.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeExperience.image}
                    alt={activeExperience.category}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/10" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-white backdrop-blur-sm sm:left-7 sm:top-7">
                    <ActiveIcon size={16} />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">
                      {activeExperience.tag}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-9 lg:p-8">
                 

                    <h3 className="mt-3 max-w-xl font-['Playfair_Display'] text-xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                      {activeExperience.title}
                    </h3>

                    <p className=" max-w-lg text-[12px] sm:text-sm sm:leading-7 text-white/85">
                      {activeExperience.description}
                    </p>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* FLOATING INDEX */}
            <div className="absolute -right-2 -top-3 hidden rounded-lg bg-white px-4 py-3 shadow-lg sm:block lg:-right-3">
              <p className="font-['Playfair_Display'] text-2xl font-bold text-[#850f18]">
                0{activeIndex + 1}
              </p>
              <p className="text-[9px] font-extrabold uppercase tracking-wider text-black">
                Learning
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHTS */}
        <div className="sm:mt-9 grid grid-cols-1 gap-3 sm:gap-5 sm:border-t border-red-200 pt-7 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#850f18] text-white">
                  <Icon size={21} />
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-black">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-6 text-black">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

   
      </div>
    </section>
  );
};

export default LearningEnvironment;
