import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => setSent(true),
        (error) => alert("Error: " + error.text)
      );
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gradient-to-tr from-blue-500 to-purple-400 text-white p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Email</div>
              <div className="text-gray-600 dark:text-gray-300">emanqadry24@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gradient-to-tr from-blue-500 to-purple-400 text-white p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
              <div className="text-gray-600 dark:text-gray-300">+2 01202901660</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-gradient-to-tr from-blue-500 to-purple-400 text-white p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Location</div>
              <div className="text-gray-600 dark:text-gray-300">Egypt,Assuit</div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>
          <input
            name="name"  
            type="text"
            placeholder="Your Name"
            className="mb-4 px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <input
            name="email" 
            type="email"
            placeholder="Your Email"
            className="mb-4 px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <textarea
            name="message" 
            placeholder="Your Message"
            rows={4}
            className="mb-6 px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-400 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-600 hover:to-purple-500 transition text-base"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
          {sent && <p className="text-green-600 mt-4">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}