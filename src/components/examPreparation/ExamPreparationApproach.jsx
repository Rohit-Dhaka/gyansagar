
import { motion } from "motion/react";
import {
  BookOpen,
  ClipboardCheck,
  Target,
  RefreshCw,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const preparationSteps = [
  {
    number: "01",
    title: "Concept Learning",
    description:
      "Build a strong foundation with clear explanations, subject-focused teaching and a better understanding of important topics.",
    icon: BookOpen,
    points: ["Understand core concepts", "Subject-focused classes"],
  },
  {
    number: "02",
    title: "Practice & Assessment",
    description:
      "Strengthen your preparation through regular question practice, topic-wise exercises and performance assessment.",
    icon: ClipboardCheck,
    points: ["Topic-wise question practice", "Regular assessments"],
  },
  {
    number: "03",
    title: "Mock Tests",
    description:
      "Get familiar with the examination experience through mock tests and learn to manage time effectively.",
    icon: Target,
    points: ["Exam-oriented mock tests", "Time management practice"],
  },
  {
    number: "04",
    title: "Revision & Improvement",
    description:
      "Revise important topics, identify areas that need improvement and work towards better preparation.",
    icon: RefreshCw,
    points: ["Important topic revision", "Focus on weak areas"],
  },
];

const ExamPreparationApproach = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#faf8f5] py-12 sm:py-14 lg:py-16 px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#850f18]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#850f18]/5 blur-3xl" />

      <div className="relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center lg:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#850f18]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#850f18]">
            <span className="h-2 w-2 rounded-full bg-[#850f18]" />
            Our Preparation Approach
          </span>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-[#241719] sm:text-4xl lg:text-5xl">
            A Structured Approach to
            <span className="text-[#850f18]"> Exam Success.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#716467] sm:text-base">
            At Gyan Sagar NET Classes, we follow a focused learning approach
            that helps students strengthen concepts, practise regularly and
            prepare with confidence for competitive examinations.
          </p>
        </motion.div>

        {/* Preparation Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {preparationSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfdb] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#850f18]/30 hover:shadow-[0_18px_45px_rgba(69,25,29,0.09)] sm:p-7"
              >
                {/* Number */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-4xl font-bold text-[#850f18]/15 transition-colors duration-300 group-hover:text-[#850f18]/30">
                    {step.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#850f18]/7 text-[#850f18] transition-all duration-300 group-hover:bg-[#850f18] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#291b1d] sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75696b]">
                  {step.description}
                </p>

                {/* Points */}
                <div className="mt-6 space-y-3 border-t border-[#eee6e3] pt-5">
                  {step.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#850f18]"
                      />
                      <span className="text-xs font-semibold leading-5 text-[#57484a]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#850f18] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#850f18] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:mt-10"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
              Learn With The Right Direction
            </span>

            <h3 className="mt-2 font-['Playfair_Display'] text-2xl font-bold text-white sm:text-3xl">
              Your Preparation Starts Here.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
              Take the next step towards your academic and teaching career
              with focused preparation and proper guidance.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#850f18] transition-all duration-300 hover:bg-[#f7eae7] sm:self-center"
          >
            Enquire Now
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExamPreparationApproach;
