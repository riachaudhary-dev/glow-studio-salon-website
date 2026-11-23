
import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        title: "Hair Services",
        subtitle: "A beautiful transformation starts with your hair.",
        description:
            "From refreshing haircuts to luxurious treatments, our hair services are designed to bring out the best in your natural beauty.",
        items: [
            "Haircut & Trimming",
            "Hair Styling & Blow Dry",
            "Hair Colouring",
            "Hair Spa & Treatments",
            "Hair Smoothening",
            "Hair Wash",
        ],
        image:
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "02",
        title: "Makeup Services",
        subtitle: "Look and feel your most beautiful.",
        description:
            "Whether it's your special day or a celebration, our makeup services help you achieve a flawless look that reflects your personality.",
        items: [
            "Bridal Makeup",
            "Party Makeup",
            "Engagement Makeup",
            "HD Makeup",
            "Reception Makeup",
            "Occasion Hairstyling",
        ],
        image:
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "03",
        title: "Skin & Facial",
        subtitle: "Give your skin the care it deserves.",
        description:
            "Relax, refresh, and restore your natural glow with our range of facial and skincare treatments, created to leave your skin feeling fresh and radiant.",
        items: [
            "Basic Facial",
            "Fruit Facial",
            "Gold & Pearl Facial",
            "Clean-Up",
            "De-Tan Treatment",
            "Face Masks",
        ],
        image:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "04",
        title: "Waxing & Threading",
        subtitle: "Smooth skin, effortless confidence.",
        description:
            "Enjoy professional grooming services with attention to comfort, hygiene, and detail.",
        items: [
            "Full Body Waxing",
            "Rica Waxing",
            "Arms & Legs Waxing",
            "Underarm Waxing",
            "Eyebrow Threading",
            "Upper Lip & Face Threading",
        ],
        image:
            "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "05",
        title: "Nail Care",
        subtitle: "Beautiful nails are always in style.",
        description:
            "Treat your hands and feet to a little luxury with our nail care services, from classic grooming to creative nail designs.",
        items: [
            "Manicure",
            "Pedicure",
            "Nail Extensions",
            "Nail Art",
            "Gel Polish",
            "Nail Grooming",
        ],
        image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "06",
        title: "Beauty Essentials",
        subtitle: "The little details make all the difference.",
        description:
            "Complete your beauty routine with our essential grooming and finishing services, designed to help you feel confident every day.",
        items: [
            "Eyebrow Shaping",
            "Bleach",
            "De-Tan",
            "Eyelash Services",
            "Personal Grooming",
            "Makeup Touch-Ups",
        ],
        image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85",
    },
];

const Services = () => {
    return (
        <div className="bg-[#E8DFD3] text-[#30251F]">

            {/* PAGE INTRODUCTION - NO TOP IMAGE */}
            <section className="px-6 pb-16 pt-20 text-center md:px-12 md:pb-20 md:pt-28">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A17B5B]">
                    The Art of Beauty & Care
                </p>

                <h1 className="font-serif text-4xl leading-tight md:text-6xl">
                    Our Services
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#76675B] md:text-base">
                    Discover a world of beauty, relaxation, and self-care.
                    From everyday grooming to special occasion makeovers,
                    we bring together everything you need to look and feel
                    your absolute best.
                </p>

                <div className="mx-auto mt-8 h-px w-20 bg-[#A17B5B]" />
            </section>

            {/* SERVICES */}
            <section className="px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto max-w-7xl space-y-20 md:space-y-28">

                    {services.map((service, index) => (
                        <div
                            id={service.title.toLowerCase().replace(" & ", "-and-").replace(" ", "-")}
                            key={service.number}
                            className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${index % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""
                                }`}
                        >

                            {/* SERVICE IMAGE */}
                            <div className="group overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[480px]"
                                />
                            </div>

                            {/* SERVICE CONTENT */}
                            <div className="py-4 md:py-8">
                                <p className="mb-5 text-xs tracking-[0.3em] text-[#A17B5B]">
                                    {service.number} / BEAUTY & CARE
                                </p>

                                <h2 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
                                    {service.title}
                                </h2>

                                <p className="mt-4 font-serif text-lg italic text-[#A17B5B]">
                                    {service.subtitle}
                                </p>

                                <p className="mt-5 text-sm leading-7 text-[#76675B]">
                                    {service.description}
                                </p>

                                <div className="my-7 h-px w-full bg-[#CDBEAD]" />

                                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                                    {service.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-2 text-sm text-[#57483D]"
                                        >
                                            <span className="mt-1 text-[#A17B5B]">✦</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/contact"
                                    className="mt-9 inline-flex items-center border-b border-[#A17B5B] pb-2 text-xs uppercase tracking-[0.2em] text-[#30251F] transition hover:text-[#A17B5B]"
                                >
                                    Get in Touch <span className="ml-3">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-[#30251F] px-6 py-20 text-center text-[#F1EAE2] md:py-28">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C19A75]">
                    A Little Time For Yourself
                </p>

                <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
                    Your Beauty Journey Starts Here
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#C9B8A7]">
                    Take a break from your busy schedule and let us take care
                    of you. We'd love to welcome you to Glow Studio.
                </p>

                <Link
                    to="/book-appointment"
                    className="mt-9 inline-block border border-[#C19A75] px-9 py-4 text-xs uppercase tracking-[0.2em] text-[#F1EAE2] transition duration-300 hover:bg-[#C19A75] hover:text-[#30251F]"
                >
                    Book Your Appointment
                </Link>
            </section>

        </div>
    );
};

export default Services;
