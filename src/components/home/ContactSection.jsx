import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
  Navigation,
} from "lucide-react";

import { examPreparationData } from "../../data/examPreparationData";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d{0,10}$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
    setStatusType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setStatus("Please enter a valid 10-digit mobile number.");
      setStatusType("error");
      return;
    }

    if (!formData.course) {
      setStatus("Please select your interested exam.");
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const submissionData = new FormData();

      submissionData.append(
        "access_key",
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      );

      submissionData.append("name", formData.name);
      submissionData.append("phone", formData.phone);
      submissionData.append("course", formData.course);
      submissionData.append(
        "message",
        formData.message ||
          "I want to know more about this exam preparation program.",
      );

      submissionData.append(
        "subject",
        "New Admission Enquiry - Gyan Sagar NET Classes",
      );

      submissionData.append("from_name", "Gyan Sagar NET Classes Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Thank you! Your enquiry has been submitted successfully.");
        setStatusType("success");

        setFormData({
          name: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }
    } catch (error) {
      setStatus(error.message || "Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 97283-06888",
      link: "tel:+919728306888",
      description: "Speak with our admission team",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "gyansagar02102015@gmail.com",
      link: "mailto:gyansagar02102015@gmail.com",
      description: "Send us your enquiry",
    },
    {
      icon: MapPin,
      title: "Visit Our Institute",
      value: "DSS 67, Rajgarh Road, Hisar, Haryana 125004",
      link: "https://www.google.com/maps/search/?api=1&query=DSS+67+Rajgarh+Road+Hisar+Haryana+125004",
      description: "Visit us for admission guidance",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-50/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-red-50/40 blur-3xl" />

      <div className="relative w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* SECTION HEADER - LEFT CONTENT + RIGHT QUICK CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 grid grid-cols-1 items-end gap-6 sm:mb-12 lg:grid-cols-[1fr_auto] lg:gap-10"
        >
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#a51620]" />

              <span className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-[#a51620]">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Contact <span className="italic text-[#a51620]">Us</span>
            </h2>

            <p className="mt-4 max-w-2xl font-['Lato'] text-sm leading-7 text-black/65 sm:text-base">
              Have questions about our exam preparation programs or admissions?
              Get in touch with Gyan Sagar NET Classes. We are here to guide
              you.
            </p>
          </div>

          {/* RIGHT QUICK CONTACT CARD */}
          
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919728306888"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#850f18] px-4 py-3 font-['Lato'] text-sm font-bold text-white transition hover:bg-[#650b12]"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href="https://wa.me/919728306888?text=Hello%2C%20I%20want%20admission%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-green-600/30 bg-white px-4 py-3 font-['Lato'] text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* LEFT - CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="rounded-xl bg-[#850f18] p-6 text-white sm:p-8">
              <span className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-white/70">
                CONTACT INFORMATION
              </span>

              <h3 className="mt-4 font-['Playfair_Display'] text-2xl font-bold leading-snug sm:text-3xl">
                Let's Start Your
                <span className="block italic text-red-200">
                  Success Journey.
                </span>
              </h3>

              <p className="mt-4 font-['Lato'] text-sm leading-7 text-white/85">
                Connect with our team to learn about exam preparation programs,
                batches, classes and admission opportunities.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-8 space-y-6">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target={
                        item.title === "Visit Our Institute"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.title === "Visit Our Institute"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition group-hover:bg-white group-hover:text-[#850f18]">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-['Lato'] text-xs font-bold text-white/70">
                          {item.title}
                        </p>

                        <p className="mt-1 break-words font-['Lato'] text-sm font-bold text-white transition group-hover:text-red-200">
                          {item.value}
                        </p>

                        <p className="mt-1 font-['Lato'] text-xs text-white/60">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                      />
                    </a>
                  );
                })}
              </div>

              {/* TIMING NOTE */}
              <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-5">
                <Clock size={19} className="shrink-0 text-red-200" />

                <p className="font-['Lato'] text-xs leading-5 text-white/80">
                  Contact us for current batch timings and admission details.
                </p>
              </div>
            </div>

         
          </motion.div>

          {/* RIGHT - ENQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
          >
            <span className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-[#a51620]">
              ADMISSION ENQUIRY
            </span>

            <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold text-black sm:text-3xl">
              Start Your Preparation
            </h3>

            <p className="mt-3 font-['Lato'] text-sm leading-6 text-black/60">
              Share your details and our academic team will help you find the
              right exam preparation program.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="flex gap-2">
                
                <div className="w-full">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-['Lato'] text-sm font-bold text-black"
                  >
                    Student Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    maxLength={80}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition focus:border-[#850f18] focus:ring-2 focus:ring-[#850f18]/10 placeholder:text-black/40 disabled:opacity-60"
                  />
                </div>
                {/* MOBILE NUMBER */}
                <div className="w-full">
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block font-['Lato'] text-sm font-bold text-black"
                  >
                    Mobile Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    autoComplete="tel"
                    inputMode="numeric"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition focus:border-[#850f18] focus:ring-2 focus:ring-[#850f18]/10 placeholder:text-black/40 disabled:opacity-60"
                  />
                </div>
              </div>

              {/* SELECT EXAM */}
              <div>
                <label
                  htmlFor="contact-course"
                  className="mb-2 block font-['Lato'] text-sm font-bold text-black"
                >
                  Select Exam *
                </label>

                <select
                  id="contact-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition focus:border-[#850f18] focus:ring-2 focus:ring-[#850f18]/10 disabled:opacity-60"
                >
                  <option value="">Choose your exam</option>

                  {examPreparationData.map((exam) => (
                    <option key={exam.id} value={exam.title}>
                      {exam.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-['Lato'] text-sm font-bold text-black"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us what you would like to know..."
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition focus:border-[#850f18] focus:ring-2 focus:ring-[#850f18]/10 placeholder:text-black/40 disabled:opacity-60"
                />
              </div>

              {/* STATUS MESSAGE */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                    statusType === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#850f18] px-6 py-4 font-['Lato'] text-sm font-extrabold text-white transition hover:bg-[#650b12] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting Enquiry..." : "Send Enquiry"}

                <Send
                  size={17}
                  className={`transition group-hover:translate-x-1 ${
                    isSubmitting ? "animate-pulse" : ""
                  }`}
                />
              </button>

              <p className="max-sm:hidden text-center font-['Lato'] text-xs text-black/50">
                Your enquiry will be sent securely to our registered email.
              </p>
            </form>
          </motion.div>
        </div>

        {/* GOOGLE MAP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
        >
          <div className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center sm:px-7">
            <div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#a51620]" />

                <h3 className="font-['Playfair_Display'] text-xl font-bold text-black">
                  Find Our Location
                </h3>
              </div>

              <p className="mt-1 font-['Lato'] text-xs leading-5 text-black/60">
                DSS 67, Rajgarh Road, Old Courts Commercial Complex, Hisar,
                Haryana 125004
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=DSS+67+Rajgarh+Road+Hisar+Haryana+125004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 font-['Lato'] text-sm font-extrabold text-[#a51620] transition hover:text-[#650b12]"
            >
              Get Directions
              <Navigation size={16} />
            </a>
          </div>

          <iframe
            title="Gyan Sagar NET Classes Location"
            src="https://maps.google.com/maps?q=DSS%2067%20Rajgarh%20Road%20Hisar%20Haryana%20125004&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
