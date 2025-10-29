import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  // GANTI DENGAN CREDENTIALS ANDA!
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_jdq81ok", // Ganti dengan Service ID dari EmailJS
    TEMPLATE_ID: "template_tqn7bij", // Ganti dengan Template ID dari EmailJS
    PUBLIC_KEY: "0QatUHhrdb_3I2NHi", // Ganti dengan Public Key dari EmailJS
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Muhammad Khairil Amin",
          reply_to: formData.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setError(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Check if credentials are still placeholder values
  const hasValidCredentials =
    !EMAILJS_CONFIG.SERVICE_ID.includes("your_service_id");

  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-800 section-padding"
    >
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Configuration Warning */}
          {!hasValidCredentials && (
            <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-600 text-yellow-700 dark:text-yellow-300 rounded-lg">
              <p className="font-semibold">⚠️ Email Configuration Required</p>
              <p className="text-sm mt-1">
                Please setup EmailJS and update the credentials in the Contact
                component.
              </p>
              <ol className="text-sm mt-2 list-decimal list-inside space-y-1">
                <li>
                  Sign up at{" "}
                  <a href="https://emailjs.com" className="underline">
                    emailjs.com
                  </a>
                </li>
                <li>Add an email service (Gmail/Outlook)</li>
                <li>Create an email template</li>
                <li>
                  Update SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY in the code
                </li>
              </ol>
            </div>
          )}

          {/* Success Message */}
          {isSent && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg text-center">
              ✅ Thank you for your message! I'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg text-center">
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading || !hasValidCredentials}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading || !hasValidCredentials}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading || !hasValidCredentials}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300 resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !hasValidCredentials}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 disabled:transform-none text-lg flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : !hasValidCredentials ? (
                <span>Setup Required</span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Or reach out directly:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:khairilamin1217@gmail.com" // Ganti dengan email Anda
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/muhammad-khairil-amin-9043a411a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/aminkhairil17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
