import { Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

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
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-xl space-y-3"
      >
        <input
          name="your_name"
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          name="your_email"
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          required
        />
        <textarea
          name="your_message"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <div className="mt-2 text-green-600 font-semibold bg-green-50 border border-green-200 rounded p-2 text-center">
            Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="mt-2 text-red-600 font-semibold bg-red-50 border border-red-200 rounded p-2 text-center">
            Failed to send message. Please try again.
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
