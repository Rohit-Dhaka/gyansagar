
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    number: "01",
    title: "Call Us",
    subtitle: "Have a question? Give us a call.",
    value: "+91 97283-06888",
    action: "Call Now",
    href: "tel:+919728306888",
    icon: Phone,
  },
  {
    number: "02",
    title: "WhatsApp",
    subtitle: "Connect with us instantly.",
    value: "Chat With Our Team",
    action: "Send Message",
    href: "https://wa.me/919728306888",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Email Us",
    subtitle: "Write to us for course enquiries.",
    value: "gyansagar02102018@gmail.com",
    action: "Send Email",
    href: "mailto:gyansagar02102018@gmail.com",
    icon: Mail,
  },
  {
    number: "04",
    title: "Visit Us",
    subtitle: "We would love to meet you.",
    value: "DSS 67, Rajgarh Road, Hisar, Haryana 125004",
    action: "Get Directions",
    href: "https://www.google.com/maps/search/?api=1&query=DSS+67+Rajgarh+Road+Hisar+Haryana+125004",
    icon: MapPin,
  },
];

const ContactInformation = () => {
  return (
    <section
      id="contact-details"
      className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* SECTION HEADER */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#850f18]" />
              <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#850f18]">
                Contact Information
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              We're Just A
              <span className="text-[#850f18]"> Message Away.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
            Whether you need course details, admission guidance or
            assistance with exam preparation, feel free to connect
            with our team.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">

          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.number}
                href={item.href}
                target={item.number === "02" || item.number === "04" ? "_blank" : undefined}
                rel={item.number === "02" || item.number === "04" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex min-h-[270px] flex-col justify-between border-b border-r border-black/10 bg-transparent p-6 transition-all duration-300 hover:bg-white sm:p-7 lg:min-h-[300px] lg:p-6 xl:p-7"
              >
                {/* TOP */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[2px] text-[#850f18]/50">
                      {item.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center bg-[#850f18]/5 text-[#850f18] transition-all duration-300 group-hover:bg-[#850f18] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3 className="mt-7 font-['Playfair_Display'] text-xl font-bold text-black sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-black/50 sm:text-sm">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 break-words text-sm font-bold leading-6 text-black sm:text-base">
                    {item.value}
                  </p>
                </div>

                {/* BOTTOM ACTION */}
                <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="text-xs font-extrabold text-[#850f18]">
                    {item.action}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#850f18] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* HOVER LINE */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#850f18] transition-all duration-500 group-hover:w-full" />
              </motion.a>
            );
          })}

        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-black/50">
            Our team is happy to assist you with your academic enquiries.
          </p>

          <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#850f18]">
            Gyan Sagar NET Classes · Hisar
          </span>
        </div>

      </div>
    </section>
  );
};

export default ContactInformation;
