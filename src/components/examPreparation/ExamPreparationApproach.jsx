
import { motion } from "motion/react";
import {
  BookOpen,
  ClipboardCheck,
  Target,
  RefreshCw,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="relative isolate overflow-hidden bg-[#faf8f5] px-3 py-8 sm:px-4 sm:py-10 lg:px-6 lg:py-12 xl:px-8 2xl:px-10">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#850f18]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#850f18]/5 blur-3xl" />

      <div className="relative">
        {/* Left Aligned Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-3xl lg:mb-10"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#850f18]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#850f18]">
            <span className="h-2 w-2 rounded-full bg-[#850f18]" />
            Our Preparation Approach
          </span>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-[#241719] sm:text-4xl lg:text-5xl">
            A Structured Approach to
            <span className="text-[#850f18]"> Exam Success.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716467] sm:text-base">
            We follow a focused learning approach that helps students
            strengthen concepts, practise regularly and prepare with
            confidence for competitive examinations.
          </p>
        </motion.div>

        {/* Preparation Steps */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {preparationSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfdb] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#850f18]/30 hover:shadow-[0_18px_40px_rgba(69,25,29,0.08)] sm:p-6"
              >
                {/* Number and Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-4xl font-bold text-[#850f18]/20 transition-colors group-hover:text-[#850f18]/40">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#850f18]/7 text-[#850f18] transition-all duration-300 group-hover:bg-[#850f18] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#291b1d]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#75696b]">
                  {step.description}
                </p>

                {/* Points */}
                <div className="mt-5 space-y-3 border-t border-[#eee6e3] pt-4">
                  {step.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
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

    
      </div>
    </section>
  );
};

export default ExamPreparationApproach;
