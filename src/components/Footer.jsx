import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-[#30251F] text-[#F1EAE2]">
            <div className="mx-auto  max-w-[1440px] px-6 py-16 md:px-12 lg:px-20">

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="inline-block">
                            <h2 className="font-serif text-3xl tracking-[0.15em]">
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

                            <a
                                href="https://www.instagram.com/username"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-[#C9B8A7] transition duration-300 hover:-translate-y-1 hover:text-[#C19A75]"
                            >
                                <FaInstagram size={20} />
                            </a>

                            <a
                                href="https://wa.me/7467864159"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="text-[#C9B8A7] transition duration-300 hover:-translate-y-1 hover:text-[#C19A75]"
                            >
                                <FaWhatsapp size={20} />
                            </a>

                            <a
                                href="https://facebook.com/yourname"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-[#C9B8A7] transition duration-300 hover:-translate-y-1 hover:text-[#C19A75]"
                            >
                                <FaFacebookF size={20} />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-xs tracking-[0.2em] text-[#C19A75]">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-4 text-sm text-[#C9B8A7]">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white">Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-xs tracking-[0.2em] text-[#C19A75]">
                            OUR SERVICES
                        </h3>

                        <ul className="space-y-4 text-sm text-[#C9B8A7]">
                            <ul className="space-y-4 text-sm text-[#C9B8A7]">
                                <li>
                                    <Link to="/services#hair-services" className="hover:text-white">
                                        Hair Styling
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services#skin-and-facial" className="hover:text-white">
                                        Skin Care
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services#makeup-services" className="hover:text-white">
                                        Makeup
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services#waxing-and-threading" className="hover:text-white">
                                        Spa & Wellness
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services#nail-care" className="hover:text-white">
                                        Nail Care
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
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
                            className="mt-7 inline-block border border-[#C19A75] px-5 py-3 text-[10px] tracking-[0.15em] text-[#F1EAE2] transition hover:bg-[#C19A75] hover:text-[#30251F]"
                        >
                            BOOK YOUR VISIT
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-white/15 pt-7">
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-[#C9B8A7] sm:flex-row sm:text-left">
                        <p>© {new Date().getFullYear()} Glow Studio. All rights reserved.</p>
                        <p>Designed with care & elegance.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
