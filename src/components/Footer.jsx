import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const quickLinks = ["Home", "About Us", "Services", "Contact"];
  const socialMedia = [
    { icon: <FaFacebook size={24} />, label: "Facebook" },
    { icon: <FaTwitter size={24} />, label: "Twitter" },
    { icon: <FaInstagram size={24} />, label: "Instagram" },
    { icon: <FaLinkedin size={24} />, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              YourBrand is dedicated to providing top-notch services. Our mission is to deliver high-quality solutions tailored to your needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="/#" className="hover:text-gray-400 transition duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <p className="text-sm mb-4">Stay connected with us on social media:</p>
            <div className="flex space-x-4">
              {socialMedia.map((platform, index) => (
                <a key={index} href="/#" aria-label={platform.label} className="text-gray-300 hover:text-gray-400 transition duration-200">
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; 2025 YourBrand. All Rights Reserved. | Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;