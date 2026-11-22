import aboutImage from "../assets/Aboutus.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="bg-[#E8DFD3] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 md:grid-cols-2 lg:gap-24">

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Glow Studio beauty salon"
            className="h-[450px] w-full object-cover sm:h-[580px]"
          />

          <div className="absolute -bottom-7 -right-5 hidden bg-[#30251F] px-8 py-7 text-[#F1EAE2] sm:block">
            <p className="font-serif text-4xl">Glow.</p>
            <p className="mt-2 text-[9px] tracking-[0.25em] text-[#C9B8A7]">
              BEAUTY BEGINS HERE
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-4">
          <p className="mb-6 text-xs tracking-[0.3em] text-[#A17B5B]">
            OUR STORY
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#30251F] sm:text-5xl lg:text-6xl">
            More than beauty.
            <br />
            <span className="italic text-[#A17B5B]">
              It's an experience.
            </span>
          </h2>

          <p className="mt-8 text-sm leading-8 text-[#76675B] sm:text-base">
            At Glow Studio, we believe beauty is more than just
            appearance. It's about feeling confident, relaxed
            and comfortable in your own skin.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#76675B] sm:text-base">
            Our goal is to create a welcoming space where
            every visit feels special and every detail is
            designed around you.
          </p>

          <Link
            to="/services"
            className="mt-9 inline-flex items-center gap-3 border-b border-[#A17B5B] pb-2 text-xs tracking-[0.15em] text-[#30251F] transition hover:text-[#A17B5B]"
          >
            DISCOVER OUR SERVICES <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
