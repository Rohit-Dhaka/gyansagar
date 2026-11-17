
import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "01",
    icon: GraduationCap,
    category: "NATIONAL LEVEL EXAM",
    title: "UGC NET / CSIR NET",
    description:
      "Prepare for national-level eligibility examinations with focused subject learning, conceptual clarity and exam-oriented guidance.",
    exams: ["UGC NET", "CSIR NET"],
    link: "/courses/ugc-net",
  },
  {
    id: "02",
    icon: Award,
    category: "HIGHER EDUCATION",
    title: "Assistant Professor",
    description:
      "Build the subject knowledge and examination readiness required to pursue your goal of becoming an Assistant Professor.",
    exams: ["UGC NET Preparation", "CSIR NET Preparation"],
    link: "/courses",
  },
  {
    id: "03",
    icon: BookOpen,
    category: "SCHOOL TEACHING",
    title: "PGT / TGT",
    description:
      "Strengthen your subject knowledge and teaching preparation for Post Graduate Teacher and Trained Graduate Teacher examinations.",
    exams: ["PGT", "TGT"],
    link: "/courses/tgt-pgt",
  },
  {
    id: "04",
    icon: Users,
    category: "TEACHER ELIGIBILITY",
    title: "HTET / CTET / DSSSB",
    description:
      "Prepare for teaching eligibility and recruitment examinations with structured learning and an exam-focused approach.",
    exams: ["HTET", "CTET", "DSSSB"],
    link: "/courses/htet",
  },
];

const CoursesSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-50/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-50/60 blur-3xl" />

      <div className="relative w-full px-5 sm:px-8 lg:px-14 xl:px-24">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 flex flex-col items-center text-center sm:mb-12"
        >
          {/* LABEL */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#a51620]" />

            <span className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-[#a51620]">
              EXPLORE OUR PROGRAMS
            </span>

            <span className="h-[2px] w-9 bg-[#a51620]" />
          </div>

          {/* HEADING */}
          <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Courses <span className="italic text-[#a51620]">Offered</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-2xl font-['Lato'] text-sm leading-7 text-black sm:text-base">
            Explore our exam preparation programs designed to help aspiring
            educators build strong concepts, improve their knowledge and move
            confidently towards their teaching career goals.
          </p>
        </motion.div>

        {/* COURSE CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white p-6 shadow-[0_5px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#a51620]/40 hover:shadow-[0_15px_40px_rgba(133,15,24,0.10)]"
              >

                {/* CARD TOP */}
                <div className="mb-6 flex items-start justify-between">

                  {/* ICON */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-[#a51620] transition-all duration-300 group-hover:bg-[#a51620] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  {/* NUMBER */}
                  <span className="font-['Playfair_Display'] text-3xl font-bold text-black/10 transition group-hover:text-[#a51620]/20">
                    {course.id}
                  </span>
                </div>

                {/* CATEGORY */}
                <span className="mb-3 font-['Lato'] text-[9px] font-extrabold tracking-[1.7px] text-[#a51620]">
                  {course.category}
                </span>

                {/* TITLE */}
                <h3 className="min-h-[58px] font-['Playfair_Display'] text-xl font-bold leading-snug text-black transition group-hover:text-[#a51620]">
                  {course.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 font-['Lato'] text-sm leading-7 text-black">
                  {course.description}
                </p>

                {/* EXAMS INCLUDED */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.exams.map((exam) => (
                    <span
                      key={exam}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#faf7f7] px-2.5 py-1.5 font-['Lato'] text-[10px] font-bold text-black"
                    >
                      <CheckCircle2 size={12} className="text-[#a51620]" />
                      {exam}
                    </span>
                  ))}
                </div>

                {/* BOTTOM BUTTON */}
                <div className="mt-auto pt-7">
                  <Link
                    to={course.link}
                    className="flex items-center justify-between border-t border-black/10 pt-4 font-['Lato'] text-sm font-extrabold text-[#a51620] transition hover:text-[#650b12]"
                  >
                    <span>Explore Course</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a51620]/30 transition-all duration-300 group-hover:border-[#a51620] group-hover:bg-[#a51620] group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
