
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerColumns = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const columnItem = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#30251F] text-[#F1EAE2]">

            {/* Decorative Top Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-[2px] w-full origin-left bg-[#C19A75]"
            />

            <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-20">

                <motion.div
                    variants={footerColumns}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
                >

                    {/* Brand */}
                    <motion.div variants={columnItem}>
                        <Link to="/" className="inline-block group">
                            <h2 className="font-serif text-3xl tracking-[0.15em] transition duration-300 group-hover:text-[#C19A75]">
                                GLOW<span className="text-[#C19A75]">.</span>
                            </h2>

                            <p className="mt-1 text-[9px] tracking-[0.35em] text-[#C9B8A7]">
                                BEAUTY STUDIO
                            </p>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-[#C9B8A7]">
                            A little time for yourself, a beautiful difference.
                            Experience beauty, care and confidence at Glow Studio.
                        </p>

                        <div className="mt-6 flex items-center gap-5">

                            <motion.a
                                whileHover={{ y: -5, rotate: -8 }}
                                transition={{ duration: 0.25 }}
                                href="https://www.instagram.com/username"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-[#C9B8A7] transition-colors duration-300 hover:text-[#C19A75]"
                            >
                                <FaInstagram size={20} />
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -5, rotate: 8 }}
                                transition={{ duration: 0.25 }}
                                href="https://wa.me/7467864159"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="text-[#C9B8A7] transition-colors duration-300 hover:text-[#C19A75]"
                            >
                                <FaWhatsapp size={20} />
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -5, rotate: -8 }}
                                transition={{ duration: 0.25 }}
                                href="https://facebook.com/yourname"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-[#C9B8A7] transition-colors duration-300 hover:text-[#C19A75]"
                            >
                                <FaFacebookF size={20} />
                            </motion.a>

                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={columnItem}>
                        <h3 className="mb-6 text-xs tracking-[0.2em] text-[#C19A75]">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-4 text-sm text-[#C9B8A7]">
                            {[
                                ["Home", "/"],
                                ["About Us", "/about"],
                                ["Services", "/services"],
                                ["Gallery", "/gallery"],
                                ["Contact", "/contact"],
                            ].map(([label, path]) => (
                                <li key={label}>
                                    <Link
                                        to={path}
                                        className="group relative inline-block transition-colors duration-300 hover:text-white"
                                    >
                                        {label}
                                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C19A75] transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={columnItem}>
                        <h3 className="mb-6 text-xs tracking-[0.2em] text-[#C19A75]">
                            OUR SERVICES
                        </h3>

                        <ul className="space-y-4 text-sm text-[#C9B8A7]">
                            {[
                                ["Hair Styling", "/services#hair-services"],
                                ["Skin Care", "/services#skin-and-facial"],
                                ["Makeup", "/services#makeup-services"],
                                ["Spa & Wellness", "/services#waxing-and-threading"],
                                ["Nail Care", "/services#nail-care"],
                            ].map(([label, path]) => (
                                <li key={label}>
                                    <Link
                                        to={path}
                                        className="group relative inline-block transition-colors duration-300 hover:text-white"
                                    >
                                        {label}
                                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C19A75] transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={columnItem}>
                        <h3 className="mb-6 text-xs tracking-[0.2em] text-[#C19A75]">
                            GET IN TOUCH
                        </h3>

                        <ul className="space-y-4 text-sm leading-6 text-[#C9B8A7]">
                            <li>Your City, India</li>
                            <li>+91 XXXXX XXXXX</li>
                            <li>hello@glowstudio.com</li>
                        </ul>

                        <Link
                            to="/book-appointment"
                            className="group mt-7 inline-block border border-[#C19A75] px-5 py-3 text-[10px] tracking-[0.15em] text-[#F1EAE2] transition-all duration-300 hover:bg-[#C19A75] hover:text-[#30251F] hover:tracking-[0.2em]"
                        >
                            BOOK YOUR VISIT
                        </Link>
                    </motion.div>

                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 border-t border-white/15 pt-7"
                >
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-[#C9B8A7] sm:flex-row sm:text-left">
                        <p>
                            © {new Date().getFullYear()} Glow Studio. All rights reserved.
                        </p>

                        <p className="transition-colors duration-300 hover:text-[#C19A75]">
                            Designed with care & elegance.
                        </p>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
};

export default Footer;
