
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -35 : 35,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hoursVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      detail: "+91 74678 64159",
      link: "tel:+917467865159",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      detail: "Chat with us",
      link: "https://wa.me/917467864159",
      external: true,
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "hello@glowstudio.com",
      link: "mailto:hello@glowstudio.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      detail: "Agra, Uttar Pradesh, India",
      link: "https://www.google.com/maps/search/?api=1&query=Agra%2C%20India",
      external: true,
    },
  ];

  return (
    <div className="bg-[#E8DFD3] text-[#30251F]">

      {/* PAGE HEADING */}
      <section className="px-6 pt-20 pb-14 text-center md:pt-28 md:pb-20">

        <motion.p
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A17B5B]"
        >
          We'd Love to Hear From You
        </motion.p>

        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="font-serif text-4xl md:text-6xl"
        >
          Let's Connect
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
          className="mx-auto mt-6 h-[1px] w-20 origin-center bg-[#A17B5B]"
        />

        <motion.p
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#76675B] md:text-base"
        >
          Have a question or planning your next beauty experience?
          Get in touch with us. We'd be delighted to help you.
        </motion.p>

      </section>

      {/* CONTACT DETAILS */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {contactDetails.map((item, index) => (
            <motion.a
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12 }}
              href={item.link}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group flex flex-col items-center border border-[#CDBEAD] bg-[#F1EAE2] px-5 py-10 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="mb-5 text-2xl text-[#A17B5B] transition group-hover:text-[#30251F]"
              >
                {item.icon}
              </motion.div>

              <h3 className="mb-2 font-serif text-xl">
                {item.title}
              </h3>

              <p className="text-sm text-[#76675B]">
                {item.detail}
              </p>

              <span className="mt-5 text-xs uppercase tracking-widest text-[#A17B5B]">
                Connect With Us →
              </span>
            </motion.a>
          ))}

        </div>
      </section>

      {/* OPENING HOURS */}
      <section className="bg-[#30251F] px-6 py-20 text-[#F1EAE2] md:px-12">
        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 flex justify-center text-3xl text-[#C19A75]"
          >
            <FaClock />
          </motion.div>

          <motion.p
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C19A75]"
          >
            Plan Your Visit
          </motion.p>

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl"
          >
            Our Opening Hours
          </motion.h2>

          <div className="mx-auto mt-10 max-w-lg border-t border-[#76675B]">

            <motion.div
              variants={hoursVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-between gap-4 border-b border-[#76675B] py-5 text-sm md:text-base"
            >
              <span className="text-[#C9B8A7]">
                Monday – Saturday
              </span>
              <span>10:00 AM – 8:00 PM</span>
            </motion.div>

            <motion.div
              variants={hoursVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-between gap-4 border-b border-[#76675B] py-5 text-sm md:text-base"
            >
              <span className="text-[#C9B8A7]">
                Sunday
              </span>
              <span>By Appointment</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* LOCATION / MAP */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#A17B5B]">
              Find Your Way To Us
            </p>

            <h2 className="font-serif text-3xl md:text-5xl">
              Visit Our Studio
            </h2>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Agra%2C%20India"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#76675B] transition hover:text-[#A17B5B]"
            >
              <FaMapMarkerAlt />
              Agra, Uttar Pradesh, India
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border border-[#CDBEAD] shadow-lg"
          >
            <iframe
              title="Glow Studio Location"
              src="https://www.google.com/maps?q=Agra,India&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <p className="mt-4 text-center text-xs text-[#76675B]">
            Demo location: Agra, India. Replace this with your salon's
            actual address when finalising the website.
          </p>

        </div>
      </section>

    </div>
  );
};

export default Contact;
