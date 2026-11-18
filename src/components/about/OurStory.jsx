
import { motion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const journey = [
  {
    year: "2015",
    title: "A Vision Begins",
    description:
      "Gyan Sagar NET Classes started with a vision to provide quality guidance to aspiring educators.",
    icon: GraduationCap,
  },
  {
    year: "Our Growth",
    title: "Learning With Purpose",
    description:
      "Focused teaching and dedicated academic support became the foundation of our learning approach.",
    icon: BookOpen,
  },
  {
    year: "Our Mission",
    title: "Inspiring Future Educators",
    description:
      "We continue to guide students towards their teaching career goals through structured preparation.",
    icon: Target,
  },
];

const storyImages = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzFvL6KzmildBKJqFfj1jZ-J_MQYgb85TIJj48ZYOfA&s=10",
      // "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
    alt: "Students learning in a classroom",
    label: "Classroom Learning",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnncW3GjIDb_BeulI1SQyPkjvtYme-LjfvuiJVDVgnyg&s=10",
      // "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    alt: "Students studying together",
    label: "Student Community",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM44UQhh95EZQ7TQKbKWFO5UhMaQSCunjEclPkjvOUaA&s=10",
      // "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    alt: "Teacher guiding students",
    label: "Expert Guidance",
  },
];

const OurStory = () => {
  return (
    <section className="w-full overflow-hidden bg-[#faf7f7]  py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* MAIN STORY */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a51620]" />
              <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#850f18]">
                The Story Of Gyan Sagar
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:text-6xl">
              Shaping Dreams.
              <span className="mt-2 block text-[#850f18]">
                Inspiring Educators.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-black/70 sm:text-base">
              Every meaningful journey begins with a purpose. Gyan Sagar NET
              Classes was established in{" "}
              <strong className="font-extrabold text-black">2015</strong> in
              Hisar, Haryana, with a commitment to guiding aspiring educators
              towards their professional goals.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-8 text-black/70 sm:text-base">
              We focus on{" "}
              <strong className="font-bold text-black">
                UGC NET, CSIR NET, HTET, CTET, DSSSB, TGT and PGT
              </strong>{" "}
              examinations, with an emphasis on conceptual clarity, structured
              preparation and consistent academic guidance.
            </p>

            {/* QUOTE */}
            <div className="relative mt-4 sm:mt-8 border-l-[3px] border-[#850f18] bg-[#faf6f4] px-4 py-4 sm:px-7">
              <Sparkles
                size={20}
                className="mb-3 text-[#a51620]"
              />
              <p className="max-w-lg font-['Playfair_Display'] text-xl font-bold italic leading-8 text-[#850f18] sm:text-2xl">
                "Education is not just about learning, it's about building a
                brighter future."
              </p>
            </div>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 bg-[#850f18] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#650910]"
            >
              Be A Part Of Our Journey
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT JOURNEY */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative lg:pl-8"
          >
            <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#850f18]">
                  Our Evolution
                </span>
                <h3 className="mt-2 font-['Playfair_Display'] text-3xl font-bold text-black sm:text-4xl">
                  The Journey
                </h3>
              </div>

              <span className="font-['Playfair_Display'] text-5xl font-bold text-[#850f18]/15">
                01—03
              </span>
            </div>

            <div className="relative">
              {/* VERTICAL LINE */}
              <div className="absolute bottom-8 left-[19px] top-5 w-px bg-[#850f18]/20" />

              <div className="space-y-9">
                {journey.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                      }}
                      className="relative flex gap-5"
                    >
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#850f18]/25 bg-white text-[#850f18] transition hover:bg-[#850f18] hover:text-white">
                        <Icon size={18} />
                      </div>

                      <div className="flex-1 pb-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#a51620]">
                          {item.year}
                        </span>

                        <h4 className="mt-1 font-['Playfair_Display'] text-xl font-bold text-black sm:text-2xl">
                          {item.title}
                        </h4>

                        <p className="mt-2 max-w-md text-sm leading-7 text-black/65">
                          {item.description}
                        </p>
                      </div>

                      <span className="hidden font-['Playfair_Display'] text-3xl font-bold text-black/10 sm:block">
                        0{index + 1}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ESTABLISHED NOTE */}
            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
              <span className="text-xs font-bold uppercase tracking-[2px] text-black/50">
                Established In Hisar
              </span>
              <span className="font-['Playfair_Display'] text-2xl font-bold text-[#850f18]">
                2015
              </span>
            </div>
          </motion.div>
        </div>

        {/* IMAGE STRIP */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-20">
          {storyImages.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative h-[220px] overflow-hidden sm:h-[240px] lg:h-[280px]"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-5">
                <h4 className="font-['Playfair_Display'] text-xl font-bold text-white">
                  {item.label}
                </h4>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurStory;
