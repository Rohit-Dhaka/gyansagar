
import { motion } from "motion/react";
import {
  BookOpen,
  ClipboardCheck,
  Target,
  RefreshCw,
  CheckCircle2,
  GraduationCap,
  ArrowDown,
} from "lucide-react";

const preparationSteps = [
  {
    number: "01",
    title: "Concept Learning",
    subtitle: "Build Your Foundation",
    description:
      "Build a strong foundation through clear explanations, subject-focused teaching and a deeper understanding of important topics.",
    icon: BookOpen,
    points: ["Understand core concepts", "Subject-focused classes"],
  },
  {
    number: "02",
    title: "Practice & Assessment",
    subtitle: "Strengthen Your Knowledge",
    description:
      "Strengthen your preparation with regular question practice, topic-wise exercises and performance assessments.",
    icon: ClipboardCheck,
    points: ["Topic-wise question practice", "Regular assessments"],
  },
  {
    number: "03",
    title: "Mock Tests",
    subtitle: "Experience Real Exam Practice",
    description:
      "Experience exam-oriented practice through mock tests and develop effective time management skills.",
    icon: Target,
    points: ["Exam-oriented mock tests", "Time management practice"],
  },
  {
    number: "04",
    title: "Revision & Improvement",
    subtitle: "Move Towards Your Goals",
    description:
      "Revise important topics, identify areas that need improvement and work towards stronger preparation.",
    icon: RefreshCw,
    points: ["Important topic revision", "Focus on weak areas"],
  },
];

const ExamPreparationApproach = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#faf8f5] px-3 py-12 sm:px-4 sm:py-14 lg:px-6 lg:py-16 xl:px-8 2xl:px-10">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#850f18]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#a51620]/5 blur-3xl" />

      <div className="relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            {/* <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#850f18]/15 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#850f18] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#a51620]" />
              Our Preparation Approach
            </span> */}

            <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-[#291719] sm:text-4xl lg:text-5xl">
              Every Step Takes You
              <span className="block text-[#850f18]">
                Closer to Success.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#75696b] sm:text-base">
              A guided learning journey that takes you from understanding
              concepts to building confidence for competitive examinations.
            </p>
          </div>

          <div className="flex items-center gap-3 border-l-2 border-[#850f18] pl-4">
            <GraduationCap
              size={34}
              className="shrink-0 text-[#850f18]"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-['Playfair_Display'] text-xl font-bold text-[#291719]">
                4 Learning Stages
              </p>
              <p className="mt-1 text-xs text-[#75696b]">
                One focused preparation journey
              </p>
            </div>
          </div>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">

          {/* Timeline Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[35px] h-px bg-[#d9bfc0]" />

          <div className="grid grid-cols-4 gap-5">
            {preparationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="relative flex flex-col"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 mb-8 flex h-[70px] items-center justify-center">
                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#850f18]/20 bg-[#faf8f5] transition-all duration-300 hover:border-[#850f18]">
                      <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#850f18] text-white shadow-lg shadow-[#850f18]/15">
                        <Icon size={25} strokeWidth={1.6} />
                      </div>
                    </div>
                  </div>

                  {/* Step Content - No Card */}
                  <div className="px-2">
                    <span className="font-['Playfair_Display'] text-4xl font-bold text-[#850f18]/20">
                      {step.number}
                    </span>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a51620]">
                      {step.subtitle}
                    </p>

                    <h3 className="mt-2 font-['Playfair_Display'] text-xl font-bold leading-snug text-[#291719]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#75696b]">
                      {step.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#a51620]"
                          />
                          <span className="text-xs font-semibold leading-5 text-[#57484a]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="relative lg:hidden">

          {/* Vertical Line */}
          <div className="absolute bottom-8 left-[27px] top-8 w-px bg-[#d9bfc0]" />

          <div className="space-y-10 sm:space-y-12">
            {preparationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative flex gap-5 sm:gap-7"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#850f18]/20 bg-[#faf8f5]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#850f18] text-white shadow-md">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 pb-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-['Playfair_Display'] text-3xl font-bold text-[#850f18]/25">
                        {step.number}
                      </span>

                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a51620]">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-2 font-['Playfair_Display'] text-xl font-bold text-[#291719] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#75696b]">
                      {step.description}
                    </p>

                    <div className="mt-4 space-y-2.5">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#a51620]"
                          />
                          <span className="text-xs font-semibold leading-5 text-[#57484a]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Journey Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#e8dcda] pt-6 sm:flex-row sm:items-center lg:mt-16"
        >
          <div>
            <p className="font-['Playfair_Display'] text-lg font-bold text-[#291719]">
              Learn. Practise. Improve. Progress.
            </p>
            <p className="mt-1 text-xs leading-6 text-[#75696b] sm:text-sm">
              Every stage is an important part of your preparation journey.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#850f18]">
            Your Journey Starts Here
            <ArrowDown size={16} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExamPreparationApproach;
