import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#414141] text-[#F1EEDA] font-poppins py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold">JobHunt</h2>
          <p className="mt-3 text-sm">
            Explore opportunities, connect with top employers, and take the next step in your career journey—all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-300 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-300 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">📍 123 Handmade St, Creativity City</p>
          <p className="text-sm">📞 +1 234 567 890</p>
          <p className="text-sm">📧 support@brandname.com</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-[#F1EEDA] text-xl hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com"
              className="text-[#F1EEDA] text-xl hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              className="text-[#F1EEDA] text-xl hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-[#F1EEDA] text-xl hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t bg-[#414141] pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} JobHunt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
