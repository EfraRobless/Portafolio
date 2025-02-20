// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [text, setText] = useState(''); // Estado para el texto animado
//   const fullText = 'Efrain'; // Texto completo

//   // Efecto para la animación de escritura
//   useEffect(() => {
//     let currentIndex = 0;
//     const interval = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setText(fullText.slice(0, currentIndex)); // Actualiza el texto letra por letra
//         currentIndex++;
//       } else {
//         clearInterval(interval); // Detiene la animación cuando termina
//       }
//     }, 400); // Intervalo de 0.4 segundos

//     return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
//   }, []);

//   // Efecto para el scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Inicio', href: '#home' },
//     { name: 'Servicios', href: '#services' },
//     { name: 'Portafolio', href: '#portfolio' },
//     { name: 'Testimonios', href: '#testimonials' },
//     { name: 'Contacto', href: '#contact' },
//   ];

//   // Función para refrescar la página al hacer clic en el nombre
//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-gray-950 shadow-md py-4' : 'bg-transparent py-6'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo con texto animado */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center space-x-2 cursor-pointer" // Agrega cursor-pointer
//             onClick={handleRefresh} // Refresca la página al hacer clic
//           >
//             <span className="text-xl font-bold text-primary-600">{text}</span>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-white hover:text-primary-600 transition-colors duration-300"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Navigation Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-primary-600"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="md:hidden mt-4"
//           >
//             <div className="flex flex-col space-y-4 pb-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [text, setText] = useState(''); // Estado para el texto animado
  const [isTyping, setIsTyping] = useState(true); // Estado para controlar la dirección de la animación
  const fullText = 'Efrain'; // Texto completo

  // Efecto para la animación de escritura en bucle
  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const startTyping = () => {
      interval = setInterval(() => {
        if (isTyping) {
          // Escribiendo
          if (currentIndex <= fullText.length) {
            setText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
            setTimeout(() => setIsTyping(false), 5000); // Espera 5 segundo antes de borrar
          }
        } else {
          // Borrando
          if (currentIndex >= 0) {
            setText(fullText.slice(0, currentIndex));
            currentIndex--;
          } else {
            clearInterval(interval);
            setTimeout(() => setIsTyping(true), 500); // Espera 1 segundo antes de escribir
          }
        }
      }, 600); // Velocidad de escritura/borrado (0.2 segundos por letra)
    };

    startTyping();

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [isTyping]);

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  // Función para refrescar la página al hacer clic en el nombre
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950 shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo con texto animado */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gray-300 flex items-center space-x-2 cursor-pointer" // Agrega cursor-pointer
            onClick={handleRefresh} // Refresca la página al hacer clic
          >
            <span className="text-3xl font-playfair font-bold text-primary-600">
              {text}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;