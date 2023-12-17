import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow absolute w-full bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023
          <a href="/" className="hover:underline ml-0.5">
            NoxCart
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 gap-6 mr-16">
          <li>
            <a
              href="https://www.instagram.com/muh.adnan_putra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-gray-600 hover:text-teal-600" />
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/+6281245255702"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl text-gray-600 hover:text-teal-600" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/muh-adnan-putra-amiruddin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-gray-600 hover:text-teal-600" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/adnanamiruddin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-600 hover:text-teal-600" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
