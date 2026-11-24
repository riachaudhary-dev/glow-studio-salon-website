
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = ["All", "Hair", "Makeup", "Nails", "Skin"];

const galleryItems = [
  // HAIR
  {
    id: 1,
    title: "Elegant Hair Styling",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "Classic Haircut",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Soft Curls",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "Professional Hair Styling",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Beautiful Hair Finish",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    title: "Modern Hair Look",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },

  // MAKEUP
  {
    id: 7,
    title: "Flawless Makeup",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    title: "Soft Glam Makeup",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    title: "Traditional Bridal Look",
    category: "Makeup",
    image:
      "https://www.bing.com/th/id/OIP.0GFIF1pQF_Y1YClAnIBeLAHaJT?w=193&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
  },
  {
    id: 10,
    title: "Bridal Elegance",
    category: "Makeup",
    image:
      "https://th.bing.com/th/id/OIP.oXYpl9Kc0tx0Yv8a1aA27gHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 11,
    title: "Evening Makeup",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    title: "Party Ready",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },

  // NAILS
  {
    id: 13,
    title: "Beautiful Nail Art",
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 14,
    title: "Nail Perfection",
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 15,
    title: "Elegant Nail Design",
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 16,
    title: "Minimal Nail Art",
    category: "Nails",
    image:
      "https://th.bing.com/th/id/OIP.YvSPrA7XqlBws_Akgm6VbAHaJQ?w=205&h=256&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 17,
    title: "Modern Nail Style",
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 18,
    title: "Luxury Manicure",
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
  },

  // SKIN
  {
    id: 19,
    title: "Glowing Skin",
    category: "Skin",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 20,
    title: "Relaxing Facial",
    category: "Skin",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 21,
    title: "Radiant Skin Care",
    category: "Skin",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 22,
    title: "Beauty Treatment",
    category: "Skin",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 23,
    title: "Self Care Ritual",
    category: "Skin",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
  },
];

// ANIMATION VARIANTS

const fadeUpVariants = {
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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.3,
      staggerChildren: 0.2,
    },
  },
};

const galleryCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const ctaVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Reference for horizontal gallery scrolling
  const galleryScrollRef = useRef(null);

  // Change category and reset gallery to first image
  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="bg-[#E8DFD3] text-[#30251F]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-[#30251F] px-6 text-center">

        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000')",
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="relative z-10 mx-auto max-w-3xl py-24"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUpVariants}
            className="mb-6 text-[10px] tracking-[0.4em] text-[#C19A75]"
          >
            A GLIMPSE OF GLOW STUDIO
          </motion.p>

          <motion.h1
            variants={fadeUpVariants}
            className="font-serif text-5xl leading-tight text-[#F1EAE2] sm:text-6xl md:text-7xl"
          >
            Beauty in
            <br />
            every detail.
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#D8CABB] sm:text-base"
          >
            Explore our world of beauty, creativity and transformation.
            Every detail is thoughtfully crafted to make you feel
            beautiful and confident.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-9 h-px w-16 bg-[#C19A75]"
          />
        </motion.div>
      </section>

      {/* GALLERY SECTION */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

        {/* SECTION HEADING */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="mb-4 text-[10px] tracking-[0.35em] text-[#A17B5B]">
            OUR WORK & CREATIVITY
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl">
            The Glow Gallery
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#76675B]">
            From stunning hairstyles to flawless makeup, beautiful
            bridal looks and elegant nail art, discover the little
            details that make every transformation special.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`border px-6 py-3 text-[10px] tracking-[0.2em] transition duration-300 ${
                activeCategory === category
                  ? "border-[#30251F] bg-[#30251F] text-[#F1EAE2]"
                  : "border-[#BDAE9E] text-[#76675B] hover:border-[#30251F] hover:text-[#30251F]"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* HORIZONTAL SCROLL GALLERY */}
        <div
          ref={galleryScrollRef}
          className="overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={galleryCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group w-[280px] shrink-0 md:w-[350px]"
              >
                <div className="relative overflow-hidden bg-[#D8CABB]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[420px]"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#30251F]/75 via-transparent to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div>
                      <p className="text-[9px] tracking-[0.25em] text-[#C19A75]">
                        {item.category.toUpperCase()}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-serif text-xl">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-1 text-[10px] tracking-[0.2em] text-[#76675B]">
                  {item.category.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* FINAL CTA */}
      <motion.section
        className="bg-[#F1EAE2] px-6 py-20 text-center md:py-28"
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeUpVariants}
          className="mb-5 text-[10px] tracking-[0.35em] text-[#A17B5B]"
        >
          YOUR BEAUTY STORY STARTS HERE
        </motion.p>

        <motion.h2
          variants={fadeUpVariants}
          className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl"
        >
          Ready for your own
          <br />
          moment of glow?
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#76675B]"
        >
          Let our team help you look and feel your absolute best.
          Your next beauty experience is just one appointment away.
        </motion.p>

        <motion.div variants={fadeUpVariants}>
          <Link
            to="/book-appointment"
            className="mt-9 inline-block bg-[#30251F] px-10 py-4 text-[10px] tracking-[0.25em] text-[#F1EAE2] transition duration-300 hover:bg-[#A17B5B]"
          >
            BOOK YOUR APPOINTMENT
          </Link>
        </motion.div>
      </motion.section>

    </div>
  );
};

export default Gallery;
