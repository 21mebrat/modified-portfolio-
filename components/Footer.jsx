import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Socials from './Socials';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:h-full md:space-y-0">
                    {/* Social Links */}
                    <Socials />
                    {/* <div className="flex space-x-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="h-6 w-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://twitter.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a
                            href="mailto:youremail@example.com"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope className="h-6 w-6" />
                        </a>
                    </div> */}

                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} Your Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}