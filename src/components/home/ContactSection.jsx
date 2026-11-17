
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Gyan Sagar NET Classes!

Name: ${formData.name}
Mobile: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919728306888?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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
      value: "gyansagar02102018@gmail.com",
      link: "mailto:gyansagar02102018@gmail.com",
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
    <section className="relative w-full overflow-hidden bg-[#faf7f7] py-8 sm:py-10 lg:py-12">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />

      <div className="relative w-full px-5 sm:px-8 lg:px-14 xl:px-24">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 text-center sm:mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#a51620]" />
            <span className="font-['Lato'] text-xs font-extrabold tracking-[2px] text-[#a51620]">
              GET IN TOUCH
            </span>
            <span className="h-[2px] w-9 bg-[#a51620]" />
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Contact <span className="italic text-[#a51620]">Us</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-['Lato'] text-sm leading-7 text-black sm:text-base">
            Have questions about our courses or admissions? Get in touch with
            Gyan Sagar NET Classes. We are here to guide you.
          </p>
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
                Connect with our team to learn about courses, batches, online
                and offline classes, and admission opportunities.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-8 space-y-6">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target={item.title === "Visit Our Institute" ? "_blank" : undefined}
                      rel={item.title === "Visit Our Institute" ? "noopener noreferrer" : undefined}
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

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/919728306888?text=Hello%2C%20I%20want%20to%20know%20about%20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-between rounded-xl border border-green-200 bg-white p-5 transition hover:border-green-500 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <p className="font-['Lato'] text-sm font-extrabold text-black">
                    Chat With Us
                  </p>
                  <p className="mt-1 font-['Lato'] text-xs text-black">
                    Connect directly on WhatsApp
                  </p>
                </div>
              </div>

              <ArrowUpRight size={20} className="text-green-600" />
            </a>
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
              SEND AN ENQUIRY
            </span>

            <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold text-black sm:text-3xl">
              Get In Touch With Us
            </h3>

            <p className="mt-3 font-['Lato'] text-sm leading-6 text-black">
              Fill in your details and our team will connect with you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              {/* NAME */}
              <div>
                <label className="mb-2 block font-['Lato'] text-sm font-bold text-black">
                  Your Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#a51620] focus:ring-2 focus:ring-[#a51620]/10"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block font-['Lato'] text-sm font-bold text-black">
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  required
                  className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#a51620] focus:ring-2 focus:ring-[#a51620]/10"
                />
              </div>

              {/* COURSE */}
              <div>
                <label className="mb-2 block font-['Lato'] text-sm font-bold text-black">
                  Select Course *
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition focus:border-[#a51620] focus:ring-2 focus:ring-[#a51620]/10"
                >
                  <option value="">Choose your course</option>
                  <option value="UGC NET / CSIR NET">UGC NET / CSIR NET</option>
                  <option value="Assistant Professor">Assistant Professor</option>
                  <option value="PGT / TGT">PGT / TGT</option>
                  <option value="HTET / CTET / DSSSB">HTET / CTET / DSSSB</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block font-['Lato'] text-sm font-bold text-black">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you would like to know..."
                  className="w-full resize-none rounded-lg border border-black/15 bg-white px-4 py-3 font-['Lato'] text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#a51620] focus:ring-2 focus:ring-[#a51620]/10"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#850f18] px-6 py-4 font-['Lato'] text-sm font-extrabold text-white transition hover:bg-[#650b12]"
              >
                Send Enquiry on WhatsApp
                <Send
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <p className="text-center font-['Lato'] text-xs text-black">
                Your enquiry will open directly in WhatsApp.
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

              <p className="mt-1 font-['Lato'] text-xs leading-5 text-black">
                DSS 67, Rajgarh Road, Old Courts Commercial Complex, Hisar, Haryana 125004
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=DSS+67+Rajgarh+Road+Hisar+Haryana+125004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 font-['Lato'] text-sm font-extrabold text-[#a51620] hover:text-[#650b12]"
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
