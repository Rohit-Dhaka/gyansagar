
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const terms = [
  {
    id: "01",
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Gyan Sagar NET Classes website, you agree to follow these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using the website.",
  },
  {
    id: "02",
    title: "Courses and Educational Services",
    content:
      "Gyan Sagar NET Classes provides educational guidance and coaching for competitive teaching examinations, including UGC NET, CSIR NET, HTET, CTET, DSSSB, TGT, PGT and related examinations. Course details, schedules and learning facilities may be updated from time to time.",
  },
  {
    id: "03",
    title: "Admission and Registration",
    content:
      "Students are expected to provide accurate information during enquiry, registration and admission. Admission confirmation, batch allocation and course access are subject to the institute's applicable admission process.",
  },
  {
    id: "04",
    title: "Fees and Payments",
    content:
      "Course fees, payment schedules and any applicable refund or cancellation conditions will be communicated by the institute at the time of admission. Students should confirm all financial terms before making a payment.",
  },
  {
    id: "05",
    title: "Intellectual Property",
    content:
      "Website content, educational material, notes, logos, graphics, videos and other resources may be protected by intellectual property laws. Students and visitors must not reproduce, distribute, publish or commercially use these materials without prior written permission.",
  },
  {
    id: "06",
    title: "Website Usage",
    content:
      "Users agree not to misuse this website, attempt unauthorized access, interfere with its functionality, upload harmful content or use the website for unlawful purposes.",
  },
  {
    id: "07",
    title: "Accuracy of Information",
    content:
      "We make reasonable efforts to keep the information on this website accurate and updated. However, examination notifications, eligibility requirements, dates and other third-party information should always be verified through the respective official authorities.",
  },
  {
    id: "08",
    title: "Third-Party Links",
    content:
      "Our website may contain links to external websites for additional information or convenience. Gyan Sagar NET Classes does not control and is not responsible for the content, policies or availability of third-party websites.",
  },
  {
    id: "09",
    title: "Limitation of Liability",
    content:
      "The institute shall not be held responsible for temporary website interruptions, technical issues or inaccuracies in external information. Educational guidance does not guarantee selection, qualification or a particular examination result.",
  },
  {
    id: "10",
    title: "Changes to These Terms",
    content:
      "We reserve the right to revise these Terms and Conditions when required. Updated terms will be published on this page, and visitors are encouraged to review them periodically.",
  },
  {
    id: "11",
    title: "Contact and Clarifications",
    content:
      "For questions regarding these Terms and Conditions, please contact Gyan Sagar NET Classes through the contact information provided on our website.",
  },
];

const TermsAndConditions = () => {
  return (
    <main className="w-full bg-[#faf8f5]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#850f18] px-3 py-8 text-white sm:px-4 sm:py-10 lg:px-8 lg:py-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

        <div className="relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 flex items-center gap-3 text-white/70">
              <span className="h-px w-8 bg-white" />
              <span className="text-[10px] font-extrabold uppercase tracking-[3px]">
                Legal Information
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Terms & Conditions.
            </h1>

            <p className="mt-3 max-w-2xl text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
              Please read these terms carefully to understand the guidelines
              for using our website and educational services.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/80 sm:text-xs">
              <BookOpen size={15} />
              Gyan Sagar NET Classes
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-3 py-6 sm:px-4 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid w-full gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">

          {/* SIDE CONTENT */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="flex h-11 w-11 items-center justify-center bg-[#850f18] text-white">
              <ShieldCheck size={23} />
            </div>

            <h2 className="mt-4 font-['Playfair_Display'] text-2xl font-bold leading-tight text-black sm:text-3xl">
              Our Terms,
              <span className="block text-[#850f18]">
                Your Trust.
              </span>
            </h2>

            <p className="mt-3 text-xs leading-6 text-black/55 sm:text-sm">
              These terms help maintain a transparent and responsible
              relationship between our institute and website visitors.
            </p>

            <div className="mt-5 border-l-2 border-[#850f18] bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#850f18]">
                Need Assistance?
              </p>

              <p className="mt-2 text-xs leading-6 text-black/65">
                Our team is available to help with questions about our
                services and policies.
              </p>

              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-[#850f18]"
              >
                Contact Us
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>

          {/* TERMS LIST */}
          <div className="space-y-0">
            {terms.map((term, index) => (
              <motion.article
                key={term.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.04,
                }}
                className="group grid gap-2 border-b border-black/10 py-4 sm:grid-cols-[50px_1fr] sm:gap-4 sm:py-5"
              >
                <span className="font-['Playfair_Display'] text-xl font-bold text-[#850f18]/40 transition group-hover:text-[#850f18]">
                  {term.id}
                </span>

                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-black sm:text-xl">
                    {term.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-black/60 sm:text-sm sm:leading-7">
                    {term.content}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="mt-5 flex items-center gap-3 bg-white p-4">
              <GraduationCap
                className="shrink-0 text-[#850f18]"
                size={22}
              />
              <p className="text-xs leading-6 text-black/60">
                Gyan Sagar NET Classes is committed to providing transparent
                educational information and a positive learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
