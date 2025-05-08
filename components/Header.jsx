import Image from "next/image";
import Link from "next/link";
import Socials, { socialData } from "../components/Socials";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? "bg-primary/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          <Link
            href="/"
            className="relative h-12 w-48 shrink-0 transition-all hover:opacity-80 md:h-10 md:w-40 lg:h-12 lg:w-48"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 160px, 192px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <Socials />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="fixed inset-y-0 left-0 z-50 w-[300px] max-w-xs bg-primary/95 backdrop-blur-lg shadow-xl"
                >
                  <div className="flex h-full flex-col items-start p-6 space-y-8">
                    <button
                      onClick={handleMenuToggle}
                      className="self-end text-white hover:text-accent transition-colors"
                      aria-label="Close menu"
                    >
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {socialData.map((social, i) => (
                      <Link
                        key={i}
                        title={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={`${social.name === "Github"
                          ? "bg-accent rounded-full p-[5px] hover:text-white"
                          : "hover:text-accent"
                          } transition-all duration-300 flex items-center gap-x-4`}
                      >
                        <social.Icon aria-hidden />
                        <div>

                        <span className="" >{social.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;