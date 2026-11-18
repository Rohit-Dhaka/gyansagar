import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Target,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  "Expert guidance for teaching examinations",
  "Concept-based and focused preparation",
  "Online and offline learning opportunities",
  "Student-focused academic support",
];

const AboutInstitute = () => {
  return (
    <section className="w-full overflow-hidden py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[380px] overflow-hidden sm:h-[500px]">
              <img
                src="https://www.gyansagarclasses.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-25-at-1.17.51-PM-3-scaled.jpeg"
                alt="Students learning in a classroom"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* EXPERIENCE BOX */}
            <div className="absolute -bottom-5 right-0 bg-[#850f18] px-7 py-5 text-white shadow-xl sm:-right-5 sm:px-9">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/70">
                Our Establishment
              </p>
              <h3 className="mt-1 font-['Playfair_Display'] text-4xl font-bold">
                2015
              </h3>
            </div>

            {/* IMAGE LABEL */}
            <div className="absolute left-5 top-5 flex items-center gap-2 bg-white px-4 py-3">
              <GraduationCap size={20} className="text-[#850f18]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-black">
                Gyan Sagar NET Classes
              </span>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a51620]" />
              <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#850f18]">
                About Our Institute
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-['Playfair_Display'] text-[32px] font-bold leading-tight text-black sm:text-5xl">
              Welcome To{" "}
              <span className="sm:mt-1 sm:block text-[#850f18]">
                Gyan Sagar NET Classes
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
              <strong className="font-extrabold text-black">
                Gyan Sagar NET Classes
              </strong>
              , established in{" "}
              <strong className="font-bold text-black">
                2015 in Hisar, Haryana
              </strong>
              , is dedicated to helping aspiring educators prepare for{" "}
              <strong className="font-bold text-black">
                competitive teaching examinations
              </strong>{" "}
              with the right knowledge, guidance and preparation strategy.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
              We focus on{" "}
              <strong className="font-bold text-black">
                UGC NET, CSIR NET, HTET, CTET, DSSSB, TGT and PGT
              </strong>{" "}
              examinations, providing{" "}
              <strong className="font-bold text-black">
                conceptual understanding and structured preparation
              </strong>{" "}
              to help students achieve their{" "}
              <strong className="font-bold text-black">
                teaching career goals.
              </strong>
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#a51620]"
                  />
                  <p className="text-sm font-semibold leading-6 text-black/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* BOTTOM HIGHLIGHT */}
            <div className="mt-8 flex items-center gap-4 border-t border-black/10 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#850f18] text-white">
                <Target size={23} />
              </div>

              <div>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-black">
                  Our Purpose
                </h3>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  To guide and empower the next generation of educators.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 bg-[#850f18] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#650910]"
            >
              Get In Touch
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
