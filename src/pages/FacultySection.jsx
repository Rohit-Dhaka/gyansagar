
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Award,
} from "lucide-react";

const facultyMembers = [
  {
    id: 1,
    name: "Faculty Member 01",
    role: "Senior Faculty",
    qualification: "M.A. / UGC NET Qualified",
    subject: "UGC NET & Assistant Professor",
    experience: "Experienced Educator",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90",
    description:
      "Focused on building strong concepts and helping students prepare confidently for competitive examinations through structured learning and personal guidance.",
    expertise: ["UGC NET", "Assistant Professor", "Teaching"],
  },
  {
    id: 2,
    name: "Faculty Member 02",
    role: "Subject Specialist",
    qualification: "Post Graduate / NET Qualified",
    subject: "CTET, HTET & Teaching Exams",
    experience: "Experienced Educator",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=90",
    description:
      "Dedicated to providing clear explanations, practical learning and exam-oriented preparation to help students develop confidence and subject knowledge.",
    expertise: ["HTET", "CTET", "DSSSB"],
  },
  {
    id: 3,
    name: "Faculty Member 03",
    role: "Academic Mentor",
    qualification: "Post Graduate / Subject Expert",
    subject: "CSIR NET & PGT / TGT",
    experience: "Experienced Educator",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
    description:
      "Encourages analytical thinking and helps students develop a deeper understanding of their subjects with focused academic mentoring.",
    expertise: ["CSIR NET", "PGT", "TGT"],
  },
];

const FacultySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFaculty = facultyMembers[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % facultyMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + facultyMembers.length) % facultyMembers.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facultyMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-24">

        {/* TOP HEADING */}
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#a51620]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#a51620]">
                The People Behind Your Success
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-black sm:text-4xl">
              Meet The Minds Behind{" "}
              <span className="text-[#a51620]">Your Success</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black">
            Dedicated educators. Expert guidance. A better learning journey.
          </p>
        </div>

        {/* EDITORIAL FACULTY LAYOUT */}
        <div className="relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl bg-[#faf5f5] p-4 sm:p-6 lg:grid-cols-[0.8fr_0.9fr_1.3fr] lg:gap-8 lg:p-7">

          {/* LEFT INTRO */}
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#a51620]">
              Our Educators
            </span>

            <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold leading-snug text-black sm:text-3xl">
              Knowledge That
              <br />
              <span className="text-[#a51620]">Inspires Growth.</span>
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-black">
              At Gyan Sagar NET Classes, our educators focus on conceptual
              clarity, individual guidance and exam-oriented preparation.
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-red-200 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#850f18] text-white">
                <Award size={20} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-black">
                  Expert Mentorship
                </p>
                <p className="text-xs text-black">
                  Learn with confidence
                </p>
              </div>
            </div>
          </div>

          {/* CENTER PORTRAIT */}
          <div className="relative order-1 mx-auto w-full max-w-[280px] lg:order-2 lg:max-w-none">
            <div className="relative h-[260px] overflow-hidden rounded-xl bg-red-100 sm:h-[300px] lg:h-[340px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFaculty.id}
                  src={activeFaculty.image}
                  alt={activeFaculty.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                  {activeFaculty.experience}
                </span>

                <p className="mt-2 font-['Playfair_Display'] text-xl font-bold text-white">
                  {activeFaculty.name}
                </p>
              </div>

              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#850f18]">
                <ArrowUpRight size={19} />
              </div>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="order-3 flex min-w-0 flex-col justify-center lg:pl-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaculty.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#a51620]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#a51620]">
                    {activeFaculty.role}
                  </span>
                </div>

                <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold leading-tight text-black sm:text-3xl">
                  {activeFaculty.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black">
                  {activeFaculty.description}
                </p>

                <div className="my-5 h-px bg-red-200" />

                <div className="flex items-start gap-3">
                  <GraduationCap
                    size={20}
                    className="mt-0.5 shrink-0 text-[#a51620]"
                  />
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a51620]">
                      Qualification
                    </p>
                    <p className="mt-1 text-sm font-bold text-black">
                      {activeFaculty.qualification}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <BookOpen
                    size={19}
                    className="mt-0.5 shrink-0 text-[#a51620]"
                  />
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a51620]">
                      Subject Expertise
                    </p>
                    <p className="mt-1 text-sm font-bold text-black">
                      {activeFaculty.subject}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeFaculty.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-red-200 bg-white px-3 py-1.5 text-[11px] font-bold text-[#850f18]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* COMPACT NAVIGATION */}
            <div className="mt-6 flex items-center justify-between border-t border-red-200 pt-4">
              <div className="flex items-center gap-3">
                <span className="font-['Playfair_Display'] text-xl font-bold text-[#850f18]">
                  0{activeIndex + 1}
                </span>
                <span className="h-px w-8 bg-red-300" />
                <span className="text-xs font-bold text-black">
                  0{facultyMembers.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous faculty"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-red-200 text-[#850f18] transition hover:bg-[#850f18] hover:text-white"
                >
                  <ArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next faculty"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#850f18] text-white transition hover:bg-[#a51620]"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SLIM FACULTY NAVIGATION */}
        <div className="mt-4 flex items-center justify-center gap-2 sm:justify-end">
          {facultyMembers.map((faculty, index) => (
            <button
              key={faculty.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${faculty.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-10 bg-[#850f18]"
                  : "w-4 bg-red-200 hover:bg-red-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
