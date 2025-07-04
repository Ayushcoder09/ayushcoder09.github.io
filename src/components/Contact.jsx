import { Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { launchConfetti } from "../lib/confetti";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_k5eyg69",
        "template_4q4ghgs",
        formRef.current,
        "SB9OO8hJVQhBP6K3x"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          launchConfetti(); // trigger confetti on success
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section className="container mx-auto py-8 px-4" id="contact">
      <h2 className="flex items-center gap-2 text-3xl font-bold mb-4 text-blue-600">
        <Mail className="text-blue-500" size={28} /> Contact
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 max-w-xl space-y-4 bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-2xl p-8 border border-blue-100 dark:border-gray-800 backdrop-blur-md"
        >
          <input
            name="your_name"
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white bg-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 transition"
            required
          />
          <input
            name="your_email"
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white bg-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 transition"
            required
          />
          <textarea
            name="your_message"
            placeholder="Your Message"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white bg-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 transition"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition disabled:opacity-60 w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <div className="mt-2 text-green-600 font-semibold bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-700 rounded p-2 text-center">
              Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="mt-2 text-red-600 font-semibold bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-700 rounded p-2 text-center">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
        {/* Contact Info / Illustration */}
        <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50/60 via-white/60 to-blue-100/60 dark:from-gray-900/60 dark:via-gray-800/60 dark:to-gray-900/60 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-gray-800 min-h-[350px]">
          <svg
            width="100"
            height="100"
            fill="none"
            viewBox="0 0 24 24"
            className="mx-auto mb-6"
          >
            <circle cx="12" cy="12" r="10" fill="#2563eb" fillOpacity="0.12" />
            <path
              d="M16.24 7.76a6 6 0 11-8.48 8.48"
              stroke="#2563eb"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M9 10h.01M15 10h.01M8 15c1.5-1 6.5-1 8 0"
              stroke="#2563eb"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <div className="text-xl font-semibold text-blue-700 dark:text-blue-300 text-center mb-2">
            Let's build something amazing together!
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-center max-w-xs">
            I’m always open to new opportunities, collaborations, and creative
            ideas. Drop a message and I’ll get back to you soon!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
