
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  User,
  Phone,
  MessageSquare,
  Check,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { examPreparationData } from "../../data/examPreparationData";

const ContactEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const mobileNumber = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: mobileNumber,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setError("");
    setSuccess("");
  };

  const handleCourseSelect = (course) => {
    setFormData((prev) => ({
      ...prev,
      course,
    }));

    setError("");
    setSuccess("");
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.course) {
      setError("Please select your interested exam.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError("Web3Forms access key is missing. Please check your .env file.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Admission Enquiry - Gyan Sagar NET Classes",
          from_name: "Gyan Sagar NET Classes Website",

          name: formData.name,
          phone: formData.phone,
          course: formData.course,
          message:
            formData.message ||
            "I would like to know more about this exam preparation program.",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(
          "Thank you! Your enquiry has been submitted successfully. Our team will contact you soon."
        );

        setFormData({
          name: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        setError(
          result.message || "Unable to submit your enquiry. Please try again."
        );
      }
    } catch (err) {
      
      setError("Something went wrong. Please check your internet connection.",err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#850f18] py-8 sm:py-10 lg:py-12">
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-white/10" />

      <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* TOP INTRO */}
        <div className="mb-4 sm:mb-12 flex flex-col justify-between gap-6 border-b border-white/20 pb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-white/70" />
              <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-white/75 sm:text-xs">
                Your Journey Starts Here
              </span>
            </div>

            <h2 className="max-w-3xl font-['Playfair_Display'] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="block text-[#f1c7c9]">Your Future.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/70 sm:text-base">
            Every successful journey begins with the right conversation.
            Tell us which examination you are preparing for.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* LEFT EDITORIAL PANEL */}
          <div className="flex flex-col justify-between text-white">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#f1c7c9]">
                A Simple Process
              </span>

              <h3 className="mt-5 max-w-md font-['Playfair_Display'] text-3xl font-bold leading-tight sm:text-4xl">
                Take Your First Step Towards
                <span className="text-[#f1c7c9]"> Something Bigger.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                Share a few details with us and let our team help you
                understand the right exam preparation program for your goals.
              </p>
            </div>

            {/* PROCESS STEPS */}
            <div className="mt-12 space-y-0">
              {[
                {
                  number: "01",
                  title: "Share Your Details",
                  description: "Tell us your name and contact number.",
                },
                {
                  number: "02",
                  title: "Select Your Exam",
                  description: "Choose the examination you are preparing for.",
                },
                {
                  number: "03",
                  title: "Get Personal Guidance",
                  description: "Our team will connect with you about your enquiry.",
                },
              ].map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {index !== 2 && (
                    <span className="absolute left-[17px] top-10 h-full w-px bg-white/20" />
                  )}

                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-white/35 bg-[#850f18] text-[10px] font-extrabold text-white">
                    {step.number}
                  </span>

                  <div className="pt-1">
                    <h4 className="font-['Playfair_Display'] text-lg font-bold">
                      {step.title}
                    </h4>

                    <p className="mt-1 text-xs leading-6 text-white/60 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM NOTE */}
            <div className="mt-12 flex items-center gap-4 border-t border-white/20 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/30">
                <GraduationCap size={22} />
              </div>

              <div>
                <p className="text-sm font-bold">Gyan Sagar NET Classes</p>
                <p className="mt-1 text-[10px] uppercase tracking-[2px] text-white/55">
                  Guiding Aspirations Since 2015
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-5 sm:p-8 lg:p-10"
          >
            {/* FORM HEADING */}
            <div className="mb-9 flex items-start justify-between gap-4 border-b border-black/10 pb-6">
              <div>
                <div className="flex items-center gap-2 text-[#850f18]">
                  <Sparkles size={15} />
                  <span className="text-[10px] font-extrabold uppercase tracking-[2px]">
                    Student Enquiry
                  </span>
                </div>

                <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold text-black sm:text-3xl">
                  Tell Us About Yourself
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/50">
                  Fields marked with * are required.
                </p>
              </div>

              <span className="hidden font-['Playfair_Display'] text-5xl font-bold text-[#850f18]/10 sm:block">
                GS
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* NAME AND PHONE */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="mb-2 flex items-center gap-2 text-xs font-bold text-black"
                  >
                    <span className="text-[#850f18]">01.</span>
                    Student Name *
                  </label>

                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-[#850f18]"
                    />

                    <input
                      id="enquiry-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      maxLength={80}
                      autoComplete="name"
                      className="h-12 w-full border-b border-black/20 bg-transparent pl-7 pr-2 text-sm text-black outline-none transition placeholder:text-black/40"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="mb-2 flex items-center gap-2 text-xs font-bold text-black"
                  >
                    <span className="text-[#850f18]">02.</span>
                    Mobile Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-[#850f18]"
                    />

                    <input
                      id="enquiry-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      inputMode="numeric"
                      autoComplete="tel-national"
                      className="h-12 w-full border-b border-black/20 bg-transparent pl-7 pr-2 text-sm text-black outline-none transition placeholder:text-black/40"
                    />
                  </div>
                </div>
              </div>

              {/* EXAM SELECTOR */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#850f18]">
                    03.
                  </span>

                  <label className="text-xs font-bold text-black">
                    Which Exam Are You Interested In? *
                  </label>
                </div>

                <div className="flex flex-wrap gap-2">
                  {examPreparationData.map((exam) => {
                    const selected = formData.course === exam.title;

                    return (
                      <button
                        key={exam.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => handleCourseSelect(exam.title)}
                        className={`inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold transition duration-200 ${
                          selected
                            ? "border-[#850f18] bg-[#850f18] text-white"
                            : "border-black/15 bg-white text-black/65 hover:border-[#850f18] hover:text-[#850f18]"
                        }`}
                      >
                        {selected && <Check size={13} />}
                        {exam.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="mb-3 flex items-center gap-2 text-xs font-bold text-black"
                >
                  <span className="text-[#850f18]">04.</span>
                  Your Message
                </label>

                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-0 top-4 text-[#850f18]"
                  />

                  <textarea
                    id="enquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your question or message here..."
                    rows={3}
                    maxLength={1000}
                    className="w-full resize-none border-b border-black/20 bg-transparent py-3 pl-7 pr-2 text-sm text-black outline-none transition placeholder:text-black/40"
                  />
                </div>
              </div>

              {/* ERROR */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    role="alert"
                    className="text-xs font-semibold text-red-700"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* SUCCESS */}
              <AnimatePresence>
                {success && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    role="status"
                    className="text-xs font-semibold leading-6 text-green-700"
                  >
                    {success}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex min-h-14 w-full items-center justify-between bg-[#850f18] px-6 text-sm font-bold text-white transition duration-300 hover:bg-[#a51620] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="flex items-center gap-3">
                  {isSubmitting ? "Sending Enquiry..." : "Send Your Enquiry"}

                  {!isSubmitting && (
                    <span className="hidden text-xs font-normal text-white/60 sm:inline">
                      Secure Form Submission
                    </span>
                  )}
                </span>

                <ArrowUpRight
                  size={21}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-[10px] leading-5 text-black/45">
                Your details will be sent securely to our registered email.
                Our team will contact you soon.
              </p>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM FOOTER LINE */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-[10px] font-bold uppercase tracking-[1.5px] text-white/55">
          <span>Gyan Sagar NET Classes · Hisar</span>

          <a
            href="tel:+919728306888"
            className="inline-flex items-center gap-2 text-white transition hover:text-[#f1c7c9]"
          >
            Need Help? Call Us
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactEnquiry;
