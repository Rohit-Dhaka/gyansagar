
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowUpRight,
  GraduationCap,
  Target,
  BookOpen,
  Monitor,
  Users,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Experienced Academic Guidance",
    description:
      "Get the right academic direction and guidance to prepare for your teaching career.",
    tag: "RIGHT GUIDANCE",
    leftEyebrow: "EXPERT ACADEMIC GUIDANCE",
    leftHeading: "Learn With The",
    leftHighlight: "Right",
    leftEnding: "Guidance.",
    leftDescription:
      "At Gyan Sagar NET Classes, students receive focused academic guidance to understand their subjects, improve their preparation and move confidently towards their teaching career goals.",
    leftHighlightTitle: "Guidance That Makes A Difference",
    leftHighlightDescription:
      "Get the right direction to make your learning journey more focused and meaningful.",
  },
  {
    number: "02",
    icon: Target,
    title: "Focused Exam Preparation",
    description:
      "A structured learning approach focused on competitive teaching examinations.",
    tag: "SMART PREPARATION",
    leftEyebrow: "FOCUSED EXAM PREPARATION",
    leftHeading: "Prepare Smart,",
    leftHighlight: "Aim",
    leftEnding: "Higher.",
    leftDescription:
      "Move towards your goals with a structured preparation approach. Focus on important topics, understand examination requirements and make your preparation more effective.",
    leftHighlightTitle: "Preparation With A Purpose",
    leftHighlightDescription:
      "Stay focused on your examination goals with a planned learning approach.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Strong Conceptual Foundation",
    description:
      "Understand difficult topics through clear explanations and concept-based learning.",
    tag: "CONCEPT CLARITY",
    leftEyebrow: "CONCEPT-BASED LEARNING",
    leftHeading: "Build Strong",
    leftHighlight: "Concepts",
    leftEnding: "For Success.",
    leftDescription:
      "Strong fundamentals are the foundation of effective exam preparation. Focus on understanding concepts clearly instead of simply memorising information.",
    leftHighlightTitle: "Knowledge Beyond Memorisation",
    leftHighlightDescription:
      "Develop better subject understanding through clear and meaningful learning.",
  },
  {
    number: "04",
    icon: Monitor,
    title: "Flexible Learning Options",
    description:
      "Choose online or offline classes according to your convenience and learning needs.",
    tag: "ONLINE & OFFLINE",
    leftEyebrow: "LEARN YOUR WAY",
    leftHeading: "Learning That",
    leftHighlight: "Fits",
    leftEnding: "Your Needs.",
    leftDescription:
      "Every student has a different learning preference. Choose online or offline classes according to your convenience and continue your preparation with flexibility.",
    leftHighlightTitle: "Flexible Learning Experience",
    leftHighlightDescription:
      "Choose the learning mode that works best for your schedule and preparation.",
  },
  {
    number: "05",
    icon: Users,
    title: "Preparation for Multiple Exams",
    description:
      "One learning destination for UGC NET, CSIR NET, HTET, CTET, DSSSB, TGT and PGT.",
    tag: "MULTIPLE EXAMS",
    leftEyebrow: "MULTIPLE EXAM PREPARATION",
    leftHeading: "One Destination,",
    leftHighlight: "Many",
    leftEnding: "Opportunities.",
    leftDescription:
      "Prepare for various teaching and eligibility examinations at one learning destination. Explore preparation opportunities for UGC NET, CSIR NET, HTET, CTET, DSSSB, TGT and PGT.",
    leftHighlightTitle: "Explore More Opportunities",
    leftHighlightDescription:
      "Choose the examination that matches your academic and professional goals.",
  },
  {
    number: "06",
    icon: Lightbulb,
    title: "Learning That Builds Confidence",
    description:
      "Focus on understanding, continuous improvement and confidence throughout your preparation.",
    tag: "STUDENT FIRST",
    leftEyebrow: "STUDENT-CENTRED LEARNING",
    leftHeading: "Learn Better,",
    leftHighlight: "Grow",
    leftEnding: "Confidently.",
    leftDescription:
      "Consistent learning and better understanding help students develop confidence. Our approach focuses on supporting your preparation and encouraging continuous improvement.",
    leftHighlightTitle: "Your Growth Matters",
    leftHighlightDescription:
      "Keep learning, keep improving and take confident steps towards your career.",
  },
];

const exams = ["UGC NET", "CSIR NET", "HTET", "CTET", "DSSSB", "TGT / PGT"];

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = features[activeFeature];

  return (
    <section className="relative w-full overflow-hidden bg-[#faf7f7] py-8 sm:py-10 lg:py-12">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border border-[#a51620]/[0.06]" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#a51620]/[0.06]" />

      <div className="relative grid w-full grid-cols-1 gap-10 sm:gap-12  lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          {/* LABEL */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#a51620]" />

            <AnimatePresence mode="wait">
              <motion.span
                key={currentFeature.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-[#a51620]"
              >
                {currentFeature.leftEyebrow}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* CHANGING HEADING AND DESCRIPTION */}
          <div className="relative min-h-[290px] sm:min-h-[310px] lg:min-h-[330px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.number}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-[1.15] text-black sm:text-5xl lg:text-[58px]">
                  {currentFeature.leftHeading}
                  <br />

                  <span className="italic text-[#a51620]">
                    {currentFeature.leftHighlight}
                  </span>

                  <br />

                  {currentFeature.leftEnding}
                </h2>

                <p className="mt-6 max-w-lg font-['Lato'] text-sm leading-8 text-black sm:text-base">
                  {currentFeature.leftDescription}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FEATURE HIGHLIGHT */}
          <div className="mt-5 flex items-center gap-5 border-y border-black/10 py-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#a51620]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature.number + "-icon"}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  {(() => {
                    const Icon = currentFeature.icon;
                    return <Icon size={27} />;
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.number + "-highlight"}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-['Lato'] text-sm font-extrabold text-black">
                  {currentFeature.leftHighlightTitle}
                </p>

                <p className="mt-1 font-['Lato'] text-xs leading-5 text-black">
                  {currentFeature.leftHighlightDescription}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* EXAM TAGS */}
          <div className="mt-7">
            <p className="mb-3 font-['Lato'] text-[10px] font-extrabold tracking-[2px] text-black">
              EXAMS WE PREPARE YOU FOR
            </p>

            <div className="flex flex-wrap gap-2">
              {exams.map((exam) => (
                <span
                  key={exam}
                  className="rounded-md border border-black/10 bg-white px-3 py-2 font-['Lato'] text-[11px] font-bold text-black shadow-sm transition hover:border-[#a51620] hover:bg-red-50 hover:text-[#850f18]"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/about"
            className="group mt-8 inline-flex w-fit items-center gap-3 font-['Lato'] text-sm font-extrabold text-[#a51620] transition hover:text-[#650b12]"
          >
            Discover Our Story

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a51620]/40 transition group-hover:bg-[#a51620] group-hover:text-white">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </motion.div>

        {/* RIGHT SIDE - FEATURE LIST */}
        <div className="relative">
          <div>
            {features.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeFeature === index;

              return (
                <motion.button
                  type="button"
                  key={item.number}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`group relative flex w-full items-start gap-4 border-b py-5 text-left transition-all duration-300 sm:gap-5 sm:py-6 ${
                    isActive
                      ? "border-[#a51620]/50"
                      : "border-black/10 hover:border-[#a51620]/40"
                  }`}
                >
                  {/* ACTIVE INDICATOR */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[3px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#a51620]" : "bg-transparent"
                    }`}
                  />

                  {/* NUMBER */}
                  <span
                    className={`pl-2 pt-1 font-['Playfair_Display'] text-xl font-bold transition ${
                      isActive
                        ? "text-[#a51620]"
                        : "text-black/40 group-hover:text-[#a51620]"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* ICON */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isActive
                        ? "border-[#a51620] bg-[#a51620] text-white"
                        : "border-red-100 bg-red-50 text-[#a51620] group-hover:border-[#a51620]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-['Playfair_Display'] text-lg font-bold transition sm:text-xl ${
                        isActive
                          ? "text-[#a51620]"
                          : "text-black group-hover:text-[#a51620]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-lg font-['Lato'] text-xs leading-6 text-black sm:text-sm">
                      {item.description}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-2 font-['Lato'] text-[9px] font-extrabold tracking-[1.5px] text-[#a51620]">
                      <CheckCircle2 size={12} />
                      {item.tag}
                    </span>
                  </div>

                  {/* ARROW */}
                  <ArrowUpRight
                    size={19}
                    className={`mt-1 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "-translate-y-1 translate-x-1 text-[#a51620]"
                        : "text-black/40 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a51620]"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
