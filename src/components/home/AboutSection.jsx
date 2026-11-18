
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Target,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description: "Focused learning with experienced faculty.",
  },
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Strong concepts and structured study material.",
  },
  {
    icon: Target,
    title: "Exam-Focused Approach",
    description: "Smart preparation for teaching examinations.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="grid w-full grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative h-[260px] overflow-hidden rounded-xl sm:h-[340px] lg:h-[390px]">
            <img
              src="https://www.google.com/maps/place/Gyan+Sagar+Nta+Net+Classes+%E2%80%93+HISAR/@29.1468357,75.7209729,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhA5v6MeA8caEMmK7zfBcmoH!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TOz8YybCc96wnBdqmM19YvoCRBd_NrF8uH9ziF86zxqQLFISpas6nhMsdCQL6EUroBjt9P8kVFM3k1WbruB_9pgAeFh2zcZCDyg-nd7X29OS1jONuPLq8hch8K4rc7qQIYXXK2OTS1ZHAq%3Dw529-h298-k-no!7i1280!8i720!4m9!3m8!1s0x3912332e6a4aff15:0x4120a818a926f051!8m2!3d29.1468357!4d75.7209729!10e5!14m1!1BCgwKCC9tLzBjZ2g0MAE!16s%2Fg%2F11f384_vkz?entry=ttu&g_ep=EgoyMDI2MTExNS4wIKXMDSoASAFQAw%3D%3D#"
              
              alt="Students learning at an educational institute"
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-['Lato'] text-xs font-bold tracking-[2px] text-white/80">
                GYAN SAGAR NET CLASSES
              </p>

              <h3 className="mt-1 font-['Playfair_Display'] text-xl font-bold text-white sm:text-2xl">
                Learn Today, Lead Tomorrow.
              </h3>
            </div>
          </div>

          {/* EXPERIENCE BADGE */}
          <div className="absolute -right-2 -top-3 flex items-center gap-3 rounded-xl bg-[#850f18] px-4 py-3 text-white shadow-xl sm:right-4 sm:top-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
              <GraduationCap size={23} />
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-xl font-bold leading-none">
                Since 2018
              </p>
              <p className="mt-1 font-['Lato'] text-[10px] text-white/80">
                Your Learning Partner
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          {/* SECTION LABEL */}
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#a51620]" />

            <span className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-[#a51620]">
              ABOUT OUR INSTITUTE
            </span>
          </div>

          {/* HEADING */}
          <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            Empowering Future Educators With{" "}
            <span className="text-[#a51620]">
              Knowledge & Guidance.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-4 space-y-3 font-['Lato'] text-sm leading-7 text-slate-600 sm:text-base">

            <p>
              <strong className="font-extrabold text-slate-900">
                Gyan Sagar NET Classes
              </strong>{" "}
              is dedicated to helping{" "}
              <strong className="font-bold text-[#850f18]">
                aspiring educators
              </strong>{" "}
              achieve their academic and professional goals. We provide
              focused preparation for{" "}
              <strong className="font-extrabold text-slate-900">
                UGC NET, CSIR NET, HTET, CTET, DSSSB, TGT and PGT
              </strong>{" "}
              examinations.
            </p>

            <p>
              Our approach focuses on{" "}
              <strong className="font-bold text-[#850f18]">
                building strong concepts
              </strong>
              , effective learning strategies and developing the{" "}
              <strong className="font-bold text-slate-900">
                confidence students need
              </strong>{" "}
              to move forward in their teaching careers.
            </p>
          </div>

          {/* SPECIAL HIGHLIGHT */}
          <div className="mt-4 flex items-start gap-3 rounded-lg border-l-[3px] border-[#a51620] bg-red-50/70 px-4 py-3">
            <GraduationCap
              size={21}
              className="mt-0.5 shrink-0 text-[#a51620]"
            />

            <p className="font-['Lato'] text-sm leading-6 text-slate-700">
              Our mission is to make{" "}
              <strong className="font-extrabold text-[#850f18]">
                quality education and the right guidance
              </strong>{" "}
              accessible to every aspiring teacher.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3 transition hover:border-red-100 hover:bg-red-50/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-[#a51620]">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="font-['Lato'] text-xs font-extrabold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-['Lato'] text-[11px] leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#a51620] px-5 py-3 font-['Lato'] text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#850f18]"
            >
              Discover Our Institute

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <div className="flex items-center gap-2 font-['Lato'] text-xs font-bold text-slate-600">
              <CheckCircle2 size={17} className="text-green-600" />
              Online & Offline Classes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
