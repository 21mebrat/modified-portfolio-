import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const templateParams = {
      to_name: 'May',
      from_name: event.target.name.value,
      from_email: event.target.email.value,
      message: event.target.message.value,
      reply_to: event.target.email.value,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      }
    )
    .then(() => {
      alert('Message sent successfully!');
      event.target.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="h-full bg-primary/30 pb-10 md:pb-5">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  placeholder="Your first name"
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-accent focus:outline-none py-4 px-1 transition-all"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="relative z-0">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-accent focus:outline-none py-4 px-1 transition-all"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="relative z-0">
              <textarea
                name="message"
                placeholder="Your message..."
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-accent focus:outline-none py-4 px-1 transition-all resize-none h-32"
                disabled={isLoading}
                required
              />
            </div>

            <button
              type="submit"
              className="btn rounded-full border-2 border-accent max-w-[200px] px-8 py-3 transition-all duration-300 
              hover:bg-accent/10 hover:border-accent/50 mt-6 mx-auto"
              disabled={isLoading}
            >
              <span className="flex items-center gap-2">
                {isLoading ? 'Sending...' : "Contact me"}
                <BsArrowRight className="text-xl" />
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;