
import FirstImg from "../assets/Firstimg.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] bg-[#F8F5F0] px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 py-14 md:grid-cols-2 md:py-20 lg:gap-20">

        {/* Left Content */}
        <div className="order-2 md:order-1">

          <p className="glow-fade-up glow-delay-1 mb-6 text-xs font-medium tracking-[0.3em] text-[#A17B5B]">
            BEAUTY · ELEGANCE · YOU
          </p>

          <h1 className="glow-fade-up glow-delay-2 max-w-xl font-serif text-5xl leading-[1.15] text-[#30251F] sm:text-6xl lg:text-7xl">
            Your beauty,
            <br />
            our{" "}
            <span className="italic text-[#A17B5B]">
              passion.
            </span>
          </h1>

          <p className="glow-fade-up glow-delay-3 mt-6 max-w-md text-sm leading-7 text-[#76675B] sm:text-base sm:leading-8">
            Discover a space where beauty meets relaxation.
            From timeless haircuts to luxurious treatments,
            let us make you feel your absolute best.
          </p>

          {/* Buttons */}
          <div className="glow-fade-up glow-delay-4 mt-9 flex flex-wrap items-center gap-4">

            <Link
              to="/book-appointment"
              className="bg-[#30251F] px-7 py-4 text-xs tracking-widest text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#A17B5B]"
            >
              BOOK AN APPOINTMENT
            </Link>

            <Link
              to="/services"
              className="group flex items-center gap-2 text-sm text-[#30251F]"
            >
              Explore Services
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>

          </div>

          {/* Small trust indicator */}
          <div className="glow-fade-up glow-delay-5 mt-12 flex items-center gap-3">
            <div className="h-px w-10 bg-[#A17B5B]" />

            <p className="text-xs tracking-wider text-[#76675B]">
              YOUR BEAUTY, OUR PRIORITY
            </p>
          </div>

        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2">

          <div className="glow-image-reveal relative mx-auto max-w-[520px] overflow-hidden">

            <img
              src={FirstImg}
              alt="Beauty and elegance at Glow Studio"
              className="h-[420px] w-full object-cover transition-transform duration-[2000ms] hover:scale-105 sm:h-[550px] lg:h-[650px]"
            />

            {/* Decorative label */}
            <div className="absolute -bottom-5 -left-5 hidden bg-[#EFE8DF] px-6 py-5 sm:block">
              <p className="font-serif text-xl italic text-[#30251F]">
                Feel beautiful.
              </p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-[#76675B]">
                FEEL CONFIDENT.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
