import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "motion/react";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fuek11o",
        "template_7xmrx91",
        form.current,
        "iyrn39NIxEl0cumJ8"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <footer className="bg-transparent text-white py-10 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-neutral-400 mb-2">Mumbai, India</p>
          <p className="text-neutral-400 mb-2">Email: karans21.dev@gmail.com</p>
          <p className="text-neutral-400">Phone: +91-7302518007</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-neutral-800 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-2 rounded bg-neutral-800 text-white"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-2 rounded bg-neutral-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      <p className="text-center text-sm text-neutral-500 mt-10">
        &copy; {new Date().getFullYear()} Karan Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
