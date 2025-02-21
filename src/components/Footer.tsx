import React, { memo } from 'react';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, hoverColor, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`text-gray-300 hover:${hoverColor} transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-400`}
  >
    <Icon size={24} className="transform hover:scale-110 transition-transform" />
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/EfraRobless",
      icon: Github,
      hoverColor: "text-gray-400",
      ariaLabel: "GitHub de Efrain Robles"
    },
    {
      href: "https://www.linkedin.com/in/efrain-robles-4487a8330/",
      icon: Linkedin,
      hoverColor: "text-blue-500",
      ariaLabel: "LinkedIn de Efrain Robles"
    },
    {
      href: "https://www.instagram.com/ef_robless/",
      icon: Instagram,
      hoverColor: "text-pink-700",
      ariaLabel: "Instagram de Efrain Robles"
    },
    {
      href: "https://www.facebook.com/efrain.balabarcarobles?locale=es_LA",
      icon: Facebook,
      hoverColor: "text-blue-700",
      ariaLabel: "Facebook de Efrain Robles"
    }
  ];

  return (
    <footer
      className="text-white py-6 sm:py-8 w-full print:hidden"
      style={{
        backgroundImage: `
          radial-gradient(at 25% 25%, hsla(113, 93%, 12%, 0.4) 0%, transparent 50%),
          radial-gradient(at 75% 75%, hsla(110, 86%, 12%, 0.25) 0%, transparent 50%)
        `,
        backgroundColor: '#000000',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Efrain Robles</h2>
            <p className="text-gray-400 text-sm sm:text-base">Desarrollador Web Full Stack</p>
          </div>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                icon={link.icon}
                hoverColor={link.hoverColor}
                ariaLabel={link.ariaLabel}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Efrain M. Balabarca Robles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Usar memo para evitar re-renders innecesarios
export default memo(Footer);
