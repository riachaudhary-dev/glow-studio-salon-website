
import { useState } from "react";
import { FaCalendarAlt, FaWhatsapp } from "react-icons/fa";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
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

    const whatsappMessage = `
Hello Glow Studio! I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message || "No additional message"}
    `;

    const whatsappURL = `https://wa.me/917467864159?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-[#E8DFD3] text-[#30251F]">

      {/* PAGE HEADING */}
      <section className="px-6 pt-20 pb-12 text-center md:pt-28">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A17B5B]">
          Your Beauty Experience Awaits
        </p>

        <h1 className="font-serif text-4xl md:text-6xl">
          Book Your Appointment
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#76675B] md:text-base">
          Take a moment for yourself. Fill in the details below
          and let us help you plan your next beauty experience.
        </p>
      </section>

      {/* BOOKING FORM */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-3xl border border-[#CDBEAD] bg-[#F1EAE2] p-6 shadow-sm md:p-12">

          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center text-3xl text-[#A17B5B]">
              <FaCalendarAlt />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl">
              Appointment Details
            </h2>

            <p className="mt-3 text-sm text-[#76675B]">
              Please share your details and preferred appointment date.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME + PHONE */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-[#CDBEAD] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#A17B5B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full border border-[#CDBEAD] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#A17B5B]"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm">
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full border border-[#CDBEAD] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#A17B5B]"
              />
            </div>

            {/* SERVICE + DATE */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">
                  Select Service *
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#CDBEAD] bg-[#F1EAE2] px-4 py-3 text-sm text-[#76675B] outline-none focus:border-[#A17B5B]"
                >
                  <option value="">Choose a service</option>
                  <option value="Hair Services">Hair Services</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Skin & Facial">Skin & Facial</option>
                  <option value="Waxing & Threading">Waxing & Threading</option>
                  <option value="Nail Care">Nail Care</option>
                  <option value="Beauty Essentials">Beauty Essentials</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Preferred Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                  className="w-full border border-[#CDBEAD] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#A17B5B]"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-2 block text-sm">
                Additional Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests or details you'd like us to know?"
                className="w-full resize-none border border-[#CDBEAD] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#A17B5B]"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-[#30251F] px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#F1EAE2] transition duration-300 hover:bg-[#A17B5B]"
            >
              <FaWhatsapp className="text-lg" />
              Book Appointment 
            </button>

            <p className="text-center text-xs leading-6 text-[#76675B]">
              Your appointment request will be sent to us through WhatsApp.
              We will contact you to confirm your booking.
            </p>

          </form>
        </div>
      </section>

    </div>
  );
};

export default BookAppointment;
