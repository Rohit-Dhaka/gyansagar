import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import {
  ArrowRight,
  ChevronRight,  
    Play,  
  Award,    
} from "lucide-react";

const slides = [
  {
    subtitle: "WELCOME TO GYAN SAGAR NET CLASSES",

    title: "Your Dream of Becoming a Teacher Starts Here.",

    description:
      "Prepare for UGC NET, CSIR NET, HTET, CTET and other competitive examinations with expert guidance, strong concepts and the right strategy.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=90",
  },
  {
    subtitle: "EXPERT GUIDANCE • BETTER RESULTS",

    title: "Build Strong Concepts. Create a Bright Future.",

    description:
      "Improve your preparation with focused learning, experienced faculty and a smart approach designed to move you closer to your teaching career.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=90",
  },
  {
    subtitle: "START YOUR SUCCESS JOURNEY",
    title: "Turn Your Teaching Dreams Into Reality.",
    description: "Get dedicated preparation for UGC NET, HTET, CTET, DSSSB, TGT and PGT examinations with the guidance you need to move forward.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=90",
  },
];

const exams = ["UGC NET", "CSIR NET", "HTET", "CTET", "DSSSB", "TGT / PGT"];

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section
      className="
        relative isolate flex w-full items-center justify-center
        h-[calc(100svh-76px)]
        md:h-[calc(100svh-118px)]
        overflow-hidden bg-[#16090b]
      "
    >
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.image}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 6, ease: "linear" },
          }}
          className="absolute inset-0 -z-30 bg-cover bg-center"
          style={{ backgroundImage: `url("${currentSlide.image}")` }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-black/65" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#650b12]/70 via-transparent to-black/30" />

      {/* DECORATIVE ELEMENTS */}
      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/10 lg:h-[700px] lg:w-[700px]" />

      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-white/10 lg:h-[540px] lg:w-[540px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-5 px-5 py-6 sm:px-8 md:py-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:px-14 lg:py-5 xl:px-20">
        {/* LEFT CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-4xl"
          >
      

            {/* SUBTITLE */}
            <motion.p
              variants={itemVariants}
              className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[2px] text-red-300 sm:text-xs sm:tracking-[3px]"
            >
              <span className="h-px w-7 bg-red-400" />
              {currentSlide.subtitle}
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-3xl font-['Playfair_Display'] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {currentSlide.title}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-3 flex items-center gap-3 sm:mt-4"
            >
              <div className="h-1 w-10 rounded-full bg-red-500 sm:w-14" />
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="mt-3 max-w-2xl text-xs leading-6 text-slate-200 sm:mt-4 sm:text-sm sm:leading-7 md:text-base"
            >
              {currentSlide.description}
            </motion.p>

            {/* EXAM TAGS */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex max-w-2xl flex-wrap gap-2 sm:mt-5"
            >
              {exams.map((exam) => (
                <span
                  key={exam}
                  className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm sm:text-xs"
                >
                  {exam}
                </span>
              ))}
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row"
            >
              <Link
                to="/admissions"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#a51620] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-1 hover:bg-[#850f18] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Apply for Admission
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-[#850f18] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                <Play size={16} />
                Explore Courses
              </Link>
            </motion.div>

         
          </motion.div>
        </AnimatePresence>

        {/* RIGHT SIDE FEATURE CARD */}
        <div className="relative hidden lg:flex lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[360px] rounded-2xl border border-white/20 bg-black/35 p-6 shadow-2xl backdrop-blur-xl xl:max-w-[390px]"
          >
            <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#a51620] shadow-lg">
              <Award size={24} className="text-white" />
            </div>

            <p className="text-xs font-bold tracking-[2px] text-red-300">
              GYAN SAGAR ACADEMY
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white xl:text-3xl">
              Prepare With Purpose.
              <span className="block text-red-300">
                Succeed With Confidence.
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/70">
              The right guidance can make your learning journey more focused and
              meaningful.
            </p>

            <div className="my-5 h-px bg-white/15" />

            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/70">
              Your Preparation Pathway
            </p>

            {[
              "Build Strong Fundamentals",
              "Practice With Smart Strategy",
              "Prepare For Your Target Exam",
            ].map((step, index) => (
              <div key={step} className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-300">
                  0{index + 1}
                </span>
                <p className="text-sm font-medium text-white/90">{step}</p>
                <ChevronRight size={15} className="ml-auto text-red-300" />
              </div>
            ))}

            <Link
              to="/courses"
              className="mt-3 flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a51620]"
            >
              Discover Our Courses
              <ArrowRight size={17} />
            </Link>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-white/60">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Online & Offline Learning Available
            </div>
          </motion.div>
        </div>
      </div>

      {/* SLIDE INDICATORS */}
<div className="absolute bottom-3 left-5 z-20 flex items-center gap-3 sm:bottom-5 sm:left-8 lg:left-14">
  {slides.map((slide, index) => (
    <button
      key={slide.subtitle}
      type="button"
      onClick={() => setActiveSlide(index)}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={activeSlide === index ? "true" : undefined}
      className={`h-3 rounded-full border border-white transition-all duration-300
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-white
        ${
          activeSlide === index
            ? "w-9 bg-white"
            : "w-3 bg-white hover:bg-white"
        }`}
    />
  ))}
</div>

      {/* BOTTOM RIGHT LABEL */}
      <div className="absolute bottom-3 right-5 z-20 hidden items-center gap-2 text-[10px] font-semibold tracking-widest text-white/60 sm:flex">
        <span>0{activeSlide + 1}</span>
        <span className="h-px w-7 bg-white/40" />
        <span>0{slides.length}</span>
      </div>
    </section>
  );
};

export default Hero;
