import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,  
  BookOpen,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";


const differences = [
  {
    number: "01",
    label: "Concept Clarity",
    title: "Learn The Concept. Understand The Subject.",
    description:
      "We believe strong preparation starts with clear concepts. Our focus is on helping students understand topics in depth instead of simply memorising information.",
    highlight: "Understanding Before Memorising",
    detail: "Build a strong foundation through concept-focused learning.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Teacher explaining a lesson in a classroom",
  },
  {
    number: "02",
    label: "Exam-Focused Strategy",
    title: "Preparation With A Clear Direction.",
    description:
      "Competitive examinations need a focused approach. We emphasise relevant topics, organised preparation and practice to help students work towards their examination goals.",
    highlight: "Focused Preparation",
    detail:
      "Study with a structured approach designed around exam requirements.",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Student preparing for an examination",
  },
  {
    number: "03",
    label: "Personal Guidance",
    title: "Every Student Deserves The Right Guidance.",
    description:
      "Every learner has a different pace and learning journey. We aim to create a supportive environment where students can ask questions, clear doubts and improve with guidance.",
    highlight: "Guidance That Supports Growth",
    detail: "Get academic support throughout your preparation journey.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Students and teacher interacting during a class",
  },
  {
    number: "04",
    label: "Regular Practice",
    title: "Turn Preparation Into Progress.",
    description:
      "Consistent practice plays an important role in exam preparation. We encourage regular revision, question-solving and self-assessment to help students strengthen their understanding.",
    highlight: "Practice. Improve. Progress.",
    detail: "Develop confidence through consistent learning and revision.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Books and study material arranged on a desk",
  },
];

const GyanSagarDifference = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = differences[activeIndex];
  

  return (
    <section className="w-full overflow-hidden  py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 lg:mb-14 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a51620]" />
              <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#850f18]">
                Why Gyan Sagar
              </span>
            </div>

            <h2 className="max-w-2xl font-['Playfair_Display'] text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
              What Makes Us
              <span className="block text-[#850f18]">Different?</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
            Our approach is built around meaningful learning, focused
            preparation and the guidance students need throughout their
            educational journey.
          </p>
        </motion.div>

        {/* HORIZONTAL INTERACTIVE SHOWCASE */}

        <div className="mt-10">
          {/* FEATURE NAVIGATION */}
          <div className="grid grid-cols-2 border-y border-black/10 sm:grid-cols-4">
            {differences.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex min-h-[95px] flex-col justify-center gap-2 border-b border-r border-black/10 px-4 py-4 text-left transition duration-300 sm:min-h-[110px] sm:border-b-0 sm:px-5 lg:px-7 ${
                    index === 1 ? "sm:border-r" : ""
                  } ${index === 3 ? "sm:border-r-0" : ""} ${
                    isActive
                      ? "bg-[#850f18] text-white"
                      : "bg-transparent text-black hover:bg-[#f8eeee]"
                  }`}
                >
                  <span
                    className={`text-xs font-extrabold tracking-[2px] ${
                      isActive ? "text-white/60" : "text-[#850f18]/50"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span className="font-['Playfair_Display'] text-base font-bold sm:text-lg lg:text-xl">
                    {item.label}
                  </span>

                  {/* ACTIVE INDICATOR */}
                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#d99a9e]"
                  />
                </button>
              );
            })}
          </div>

          {/* ACTIVE FEATURE CONTENT */}
          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {/* LEFT IMAGE */}
            <div className="relative min-w-0">
              <div className="relative h-[270px] overflow-hidden bg-[#eee5e0] sm:h-[390px] lg:h-[430px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeItem.image}
                    src={activeItem.image}
                    alt={activeItem.imageAlt}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* IMAGE LABEL */}
                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-5 sm:p-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/70">
                      Gyan Sagar NET Classes
                    </span>

                    <h3 className="mt-2 font-['Playfair_Display'] text-2xl font-bold text-white sm:text-3xl">
                      {activeItem.label}
                    </h3>
                  </div>

                  <span className="font-['Playfair_Display'] text-5xl font-bold text-white/30 sm:text-6xl">
                    {activeItem.number}
                  </span>
                </div>
              </div>

              {/* IMAGE BOTTOM LINE */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-black/45">
                  Our Approach To Learning
                </span>

                <div className="flex gap-1.5">
                  {differences.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      aria-label={`Show ${item.label}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 transition-all duration-300 ${
                        activeIndex === index
                          ? "w-9 bg-[#850f18]"
                          : "w-3 bg-[#850f18]/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex min-w-0 flex-col justify-center py-2 lg:py-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* LABEL */}
                  <div className="flex items-center gap-3">
                    <span className="h-px w-9 bg-[#a51620]" />
                    <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#850f18]">
                      {activeItem.label}
                    </span>
                  </div>

                  {/* HEADING */}
                  <h3 className="mt-6 font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    {activeItem.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-6 text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
                    {activeItem.description}
                  </p>

                  {/* HIGHLIGHT */}
                  <div className="mt-8 border-y border-black/10 py-5">
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#850f18] text-white">
                        {(() => {
                          const Icon = activeItem.icon;
                          return <Icon size={21} />;
                        })()}
                      </span>

                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#850f18]">
                          Our Commitment
                        </span>

                        <p className="mt-1 font-['Playfair_Display'] text-lg font-bold text-black sm:text-xl">
                          {activeItem.highlight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FEATURE COUNTER */}
                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs font-bold text-black/45">
                      FEATURE {activeItem.number} OF 04
                    </span>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            (activeIndex - 1 + differences.length) %
                              differences.length,
                          )
                        }
                        aria-label="Previous feature"
                        className="flex h-10 w-10 items-center justify-center border border-black/15 text-[#850f18] transition hover:bg-[#850f18] hover:text-white"
                      >
                        <ArrowUpRight className="rotate-[225deg]" size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((activeIndex + 1) % differences.length)
                        }
                        aria-label="Next feature"
                        className="flex h-10 w-10 items-center justify-center bg-[#850f18] text-white transition hover:bg-[#650910]"
                      >
                        <ArrowUpRight size={18} />
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

export default GyanSagarDifference;
