
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const teachingPrinciples = [
  {
    number: "01",
    icon: BookOpen,
    title: "Deep Subject Knowledge",
    description:
      "Building strong concepts and helping students understand their subjects with clarity.",
  },
  {
    number: "02",
    icon: Target,
    title: "Exam-Oriented Approach",
    description:
      "Focused preparation that connects academic learning with examination requirements.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Guidance That Inspires",
    description:
      "Encouraging learners with direction, motivation and a purposeful learning experience.",
  },
];

const FacultyIntroduction = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">

      <div className="px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* SECTION HEADING */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#850f18]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#850f18] sm:text-xs">
                Our Teaching Community
              </span>
            </div>

            <h2 className="max-w-xl font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Great Teachers Shape
              <span className="block text-[#850f18]">
                Great Futures.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pb-1"
          >
            <p className="max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              At Gyan Sagar NET Classes, we believe that meaningful education
              begins with the right guidance. Our faculty focuses on making
              learning clear, structured and relevant to the goals of aspiring
              educators.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              From understanding fundamental concepts to preparing for
              competitive teaching examinations, we aim to make every learning
              step purposeful.
            </p>
          </motion.div>
        </div>

        {/* EDITORIAL IMAGE AND MESSAGE */}
        <div className="mt-9 grid gap-6 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[260px] overflow-hidden bg-[#eee7e1] sm:min-h-[360px] lg:min-h-[430px]"
          >
            <img
              
              src="https://www.gyansagarclasses.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-25-at-2.13.40-PM-scaled.jpeg"
              alt="Students learning together in an educational environment"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

            <div className="absolute bottom-0 left-0 p-3 text-white sm:p-8">
              <span className=" text-[8px] sm:text-[10px] font-bold uppercase tracking-[2.5px] text-white/70">
                The Gyan Sagar Approach
              </span>

              <h3 className="sm:mt-2 max-w-md font-['Playfair_Display'] text-lg font-bold leading-tight sm:text-3xl lg:text-4xl">
                Education Is More Than Just Completing A Syllabus.
              </h3>
            </div>

            <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center bg-[#850f18] text-white sm:right-6 sm:top-6 sm:h-16 sm:w-16">
              <GraduationCap size={29} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center bg-[#faf8f5] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#850f18]">
              A Purposeful Learning Experience
            </span>

            <h3 className="mt-4 font-['Playfair_Display'] text-2xl font-bold leading-snug text-black sm:text-3xl">
              Knowledge That Builds Confidence.
              <span className="text-[#850f18]">
                {" "}Guidance That Creates Direction.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              Every student has a different learning journey. The role of an
              educator is to make complex ideas easier to understand, encourage
              curiosity and help learners move forward with confidence.
            </p>

            <div className="mt-7 border-l-2 border-[#850f18] pl-5">
              <p className="font-['Playfair_Display'] text-lg font-bold italic leading-relaxed text-black sm:text-xl">
                "The right guidance can turn ambition into achievement."
              </p>
            </div>

            <Link
              to="/contact"
              className="group mt-8 inline-flex w-fit items-center gap-5 border-b border-[#850f18] pb-2 text-sm font-extrabold text-[#850f18] transition hover:gap-7"
            >
              Connect With Us
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* TEACHING PRINCIPLES */}
        <div className="mt-9 grid border-t border-black/10 sm:mt-12 sm:grid-cols-3">

          {teachingPrinciples.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`flex gap-4 border-b border-black/10 py-6 sm:px-5 sm:py-7 lg:px-7 ${
                  index !== 2 ? "sm:border-b-0 sm:border-r" : ""
                } ${index === 0 ? "sm:pl-0" : ""}`}
              >
                <div className="flex max-sm:hidden h-11 w-11 shrink-0 items-center justify-center bg-[#850f18]/5 text-[#850f18]">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div>
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#850f18]/60">
                    {item.number}
                  </span>

                  <h4 className="mt-1 text-sm font-extrabold text-black sm:text-base">
                    {item.title}
                  </h4>

                  <p className="mt-2 max-w-sm text-xs leading-6 text-black/55 sm:text-sm">
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

export default FacultyIntroduction;
