import React from 'react';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{
        backgroundImage: `
          radial-gradient(at 25% 25%, hsla(113, 93.30%, 11.80%, 0.40) 0%, transparent 40%),
          radial-gradient(at 75% 75%, hsla(110, 85.80%, 12.40%, 0.25) 0%, transparent 40%)
        `,
        backgroundColor: '#000000', // Color de fondo base
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Efrain Robles</h3>
            <p className="text-gray-400">Desarrollador Web Full Stack</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/EfraRobless"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-600 transition-colors duration-100"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/efrain-robles-4487a8330/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/ef_robless/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-pink-700 transition-colors duration-100"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/efrain.balabarcarobles?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-700 transition-colors duration-100"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Efrain M. Balabarca Robles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;