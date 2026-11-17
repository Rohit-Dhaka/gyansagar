
import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  Clock,
  ArrowUpRight,  
  Compass,
} from "lucide-react";

const ContactLocation = () => {
  const address =
    "DSS 67, Rajgarh Road, Old Courts Commercial Complex, Lajpat Nagar, Hisar, Haryana 125004";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=DSS%2067%20Rajgarh%20Road%20Old%20Courts%20Commercial%20Complex%20Hisar%20Haryana%20125004&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* HEADER */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#850f18]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-[#850f18] sm:text-xs">
                Find Your Way To Us
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Your Destination
              <span className="block text-[#850f18]">
                For Better Learning.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end lg:justify-end"
          >
            <p className="max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              Visit Gyan Sagar NET Classes in Hisar.
              We look forward to meeting you and helping you
              explore your academic goals.
            </p>
          </motion.div>
        </div>

        {/* MAP AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative h-[350px] overflow-hidden bg-[#eee9e5] sm:h-[470px] lg:h-[560px]">

            <iframe
              title="Gyan Sagar NET Classes location in Hisar"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: "absolute",
                inset: 0,
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* MAP TOP LABEL */}
            <div className="absolute left-4 top-4 flex items-center gap-3 bg-white px-4 py-3 shadow-lg sm:left-7 sm:top-7 sm:px-5">
              <span className="flex h-10 w-10 items-center justify-center bg-[#850f18] text-white">
                <MapPin size={20} />
              </span>

              <div>
                <p className="text-xs font-extrabold text-black sm:text-sm">
                  Gyan Sagar NET Classes
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[1px] text-black/45">
                  Hisar, Haryana
                </p>
              </div>
            </div>

            {/* MAP SIDE LABEL */}
            <div className="absolute bottom-4 right-4 hidden items-center gap-2 bg-[#850f18] px-5 py-3 text-white shadow-lg sm:flex">
              <Compass size={17} />
              <span className="text-[10px] font-bold uppercase tracking-[2px]">
                Find Our Institute
              </span>
            </div>
          </div>

          {/* ADDRESS OVERLAY STRIP */}
          <div className="relative grid bg-[#850f18] text-white lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="flex items-start gap-4 p-5 sm:p-7 lg:p-8">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-white/30">
                <MapPin size={21} />
              </span>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-white/60">
                  Visit Our Institute
                </span>

                <p className="mt-2 max-w-2xl font-['Playfair_Display'] text-lg font-bold leading-relaxed sm:text-xl lg:text-2xl">
                  DSS 67, Rajgarh Road, Old Courts Commercial Complex,
                  Lajpat Nagar, Hisar, Haryana 125004.
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 sm:px-7 lg:px-8 lg:pb-0">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-between gap-8 border border-white/40 px-5 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[#850f18] lg:min-w-[210px]"
              >
                <span className="flex items-center gap-3">
                  <Navigation size={18} />
                  Get Directions
                </span>

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* LOCATION INFORMATION */}
        <div className="mt-10 grid gap-0 border-y border-black/10 sm:grid-cols-2 lg:grid-cols-3">

          {/* ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 border-b border-black/10 py-6 sm:border-r sm:px-5 lg:border-b-0 lg:px-7"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#850f18]/5 text-[#850f18]">
              <MapPin size={20} />
            </span>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[1.5px] text-black">
                Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-black/55">
                Old Courts Commercial Complex,
                Lajpat Nagar, Hisar, Haryana.
              </p>
            </div>
          </motion.div>

          {/* LANDMARK */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4 border-b border-black/10 py-6 sm:px-5 lg:border-b-0 lg:border-r lg:px-7"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#850f18]/5 text-[#850f18]">
              <Navigation size={19} />
            </span>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[1.5px] text-black">
                Nearby Landmark
              </h3>

              <p className="mt-2 text-sm leading-6 text-black/55">
                Rajgarh Road, near Gulab Restaurant / Lemon Tree Hotel.
              </p>
            </div>
          </motion.div>

          {/* VISIT GUIDANCE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 py-6 sm:col-span-2 sm:px-5 lg:col-span-1 lg:px-7"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#850f18]/5 text-[#850f18]">
              <Clock size={20} />
            </span>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[1.5px] text-black">
                Before You Visit
              </h3>

              <p className="mt-2 text-sm leading-6 text-black/55">
                Please contact us in advance to confirm availability
                and counselling timings.
              </p>
            </div>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default ContactLocation;
