import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    <section className="px-4 py-12 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto bg-[#F9F9F9] rounded-2xl shadow-lg p-8 md:p-12 border border-[#E0E0E0]">
        <h2 className="text-3xl font-bold text-[#04182B] mb-8 text-center">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-semibold text-[#04182B] mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                required
                value={form.firstName}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-[#04182B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DB7B2] transition"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                value={form.lastName}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-[#04182B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DB7B2] transition"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-semibold text-[#04182B] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#04182B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DB7B2] transition"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold text-[#04182B] mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#04182B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DB7B2] transition"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block font-semibold text-[#04182B] mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#04182B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DB7B2] transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-[#04182B] mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#04182B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DB7B2] transition resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#1DB7B2] hover:bg-[#149a99] text-[#04182B] font-semibold px-8 py-3 rounded-md transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
