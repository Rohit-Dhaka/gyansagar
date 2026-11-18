
import { motion } from "motion/react";
import { ArrowUpRight, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ExamAdmissionCTA = () => {
  return (
    <section className="py-10 sm:py-12 px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#850f18] via-[#a51620] to-[#5f0910]">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative grid items-center lg:grid-cols-2 ">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 px-6 py-12 sm:px-10 sm:py-14 lg:px-12 xl:px-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <GraduationCap size={16} />
              Admissions Open
            </span>

            <h2 className="mt-6 font-['Playfair_Display'] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Dream Career
              <span className="block text-[#ffd9b0]">
                Starts With The Right Guidance.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Take the first step towards your academic goals. Join Gyan Sagar
              NET Classes and prepare for competitive examinations with
              focused learning and dedicated guidance.
            </p>

            {/* Highlights */}
            <div className="mt-7 space-y-3">
              {[
                "Guidance for multiple competitive examinations",
                "Structured learning and regular practice",
                "Online and offline learning options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#ffd9b0]"
                  />
                  <span className="text-sm font-medium text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#850f18] transition-all duration-300 hover:bg-[#ffe8d5]"
              >
                Enquire For Admission
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="tel:+919728306888"
                className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Call Us: +91 97283-06888
              </a>
            </div>
          </motion.div>

          {/* Students Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[580px]"
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02uuG_1YxgUlc-Os9kAaNIiaYFjhXDfXlJlUcCkMAXQ&s=10"
              
              alt="Students studying together and preparing for examinations"
              className="absolute pe-6 inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5f0910]/65 via-[#850f18]/10 to-transparent lg:bg-gradient-to-r lg:from-[#850f18]/30 lg:via-transparent lg:to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#650b12]/70 p-5 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <p className="font-['Playfair_Display'] text-xl font-bold">
                Learn Today. Lead Tomorrow.
              </p>
              <p className="mt-1 text-sm text-white/75">
                Take your next step towards a brighter future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExamAdmissionCTA;
