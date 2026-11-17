
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const policies = [
  {
    id: "01",
    title: "Information We Collect",
    content:
      "When you submit an enquiry or contact us, we may collect information such as your name, phone number, email address, selected course and message. We may also receive information that you voluntarily share during admission or communication.",
  },
  {
    id: "02",
    title: "How We Use Your Information",
    content:
      "We use the information you provide to respond to enquiries, share course details, communicate about admissions, provide educational service information and improve our communication with students.",
  },
  {
    id: "03",
    title: "Communication Through WhatsApp and Phone",
    content:
      "If you contact us through WhatsApp, phone or email, we may use the contact details you provide to respond to your request. Communication through these services may also be governed by the privacy policies of their respective providers.",
  },
  {
    id: "04",
    title: "Information Sharing",
    content:
      "We do not sell your personal contact information. We may share information where necessary to operate our services, respond to lawful requests or comply with applicable legal obligations.",
  },
  {
    id: "05",
    title: "Cookies and Website Data",
    content:
      "Our website or its hosting and service providers may use cookies or similar technologies to support website functionality, security and performance. You can manage cookies through your browser settings where available.",
  },
  {
    id: "06",
    title: "Data Security",
    content:
      "We take reasonable measures to protect information shared with us against unauthorized access, misuse or disclosure. However, no online transmission or storage system can be guaranteed to be completely secure.",
  },
  {
    id: "07",
    title: "External Websites",
    content:
      "Our website may link to external websites or services. We are not responsible for the privacy practices or content of those external platforms. Please review their privacy policies separately.",
  },
  {
    id: "08",
    title: "Your Choices and Requests",
    content:
      "You may contact us to ask about the personal information you have shared, request corrections or raise concerns about its use. We will review such requests subject to applicable laws and reasonable verification.",
  },
  {
    id: "09",
    title: "Children's Privacy",
    content:
      "Our website is not designed to knowingly collect personal information from children without appropriate involvement or consent of a parent or guardian where required by applicable law.",
  },
  {
    id: "10",
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy when our practices or applicable requirements change. The latest version will be published on this page.",
  },
  {
    id: "11",
    title: "Contact Us",
    content:
      "If you have questions or concerns about this Privacy Policy or the information you have shared with us, please contact Gyan Sagar NET Classes using the details available on our Contact page.",
  },
];

const PrivacyPolicy = () => {
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
                Your Privacy Matters
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Privacy Policy.
            </h1>

            <p className="mt-3 max-w-2xl text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
              We respect your privacy and are committed to handling the
              information you share with care and transparency.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/80 sm:text-xs">
              <LockKeyhole size={15} />
              Gyan Sagar NET Classes
            </div>
          </motion.div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="px-3 py-6 sm:px-4 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid w-full gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">

          {/* SIDE CONTENT */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="flex h-11 w-11 items-center justify-center bg-[#850f18] text-white">
              <ShieldCheck size={23} />
            </div>

            <h2 className="mt-4 font-['Playfair_Display'] text-2xl font-bold leading-tight text-black sm:text-3xl">
              Your Data,
              <span className="block text-[#850f18]">
                Our Responsibility.
              </span>
            </h2>

            <p className="mt-3 text-xs leading-6 text-black/55 sm:text-sm">
              We aim to be clear about what information we collect, why we
              use it and how you can contact us with concerns.
            </p>

            <div className="mt-5 border-l-2 border-[#850f18] bg-white p-4">
              <div className="flex items-center gap-2 text-[#850f18]">
                <UserRound size={16} />
                <p className="text-[10px] font-bold uppercase tracking-wider">
                  Privacy Questions?
                </p>
              </div>

              <p className="mt-2 text-xs leading-6 text-black/65">
                Reach out to our team if you have any questions about your
                personal information.
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

          {/* POLICY LIST */}
          <div className="space-y-0">
            {policies.map((policy, index) => (
              <motion.article
                key={policy.id}
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
                  {policy.id}
                </span>

                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-black sm:text-xl">
                    {policy.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-black/60 sm:text-sm sm:leading-7">
                    {policy.content}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="mt-5 flex items-center gap-3 bg-white p-4">
              <LockKeyhole
                className="shrink-0 text-[#850f18]"
                size={22}
              />
              <p className="text-xs leading-6 text-black/60">
                We encourage you to review this policy periodically to stay
                informed about how your information is handled.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;