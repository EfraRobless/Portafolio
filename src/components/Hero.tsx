// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';
// // PAGINA DE INICIO PRESENTACION DE EFRAIN ROBLES 
// const Hero = () => {
//   return (


//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Soy <span className="text-primary-600">Efrain Robles</span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
//             Desarrollador Web Full Stack
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//             Especializado en crear experiencias digitales excepcionales, . 
//             Inginiero de Sistemas e Informática de la UNASAM
//           </p>
          
//           <div className="flex justify-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn-primary"
//             >
//               CONTÁCTAME
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 
//                          rounded-lg hover:bg-primary-50 transition-all duration-300"
//             >
//               MIS TRABAJOS
//             </motion.button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <ChevronDown 
//             size={32} 
//             className="text-primary-600 animate-bounce" 
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"> bg-gradient-to-br from-[#0a0f0d] to-black"
// min-h-screen flex items-center justify-center bg-green-gradient
// min-h-screen flex items-center justify-center









import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-14 sm:px-16 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Foto y redes sociales */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-96 h-96 md:w-110 md:h-120 overflow-hidden shadow-lg rounded-lg">
            
            <div className="absolute inset-0 border-4 border-transparent animate-border-rgb rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-40 to-red-20 opacity-40 animate-gradient-rgb rounded-lg">
                
              </div>
            </div>
            <img
              src="src/imagenes/foto125.jpeg"
              alt="Efrain Robles"
              className="w-full h-110 object-cover rounded-lg"
            />
          </div>
          <div className="mt-16 p-4 bg-gray-600 bg-opacity-15 rounded-lg shadow-md flex space-x-4">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center text-white hover:text-blue-700 transition-colors duration-100"
            >
              <Facebook size={24} />
              <span className="ml-2">Facebook</span>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ef_robless/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center text-white hover:text-pink-700 transition-colors duration-100"
            >
              <Instagram size={24} />
              <span className="ml-2">Instagram</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/efrain-robles-4487a8330/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center text-white hover:text-blue-400 transition-colors duration-100"
            >
              <Linkedin size={24} />
              <span className="ml-2">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
        {/* Descripción y botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
            Soy <span className="text-yellow-500">Efrain Robles</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-10">
            Desarrollador Web Full Stack
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto mb-12 text-justify">
            "Ingeniero de Sistemas e Informática de la UNASAM, especializado 
            en crear soluciones digitales que impulsan resultados. Transformo 
            ideas complejas en experiencias eficientes que mejoran la interacción 
            del usuario y potencian el crecimiento de tu negocio."
          </p>
          
          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-900 text-black border-2 border-black rounded-lg 
              hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              CONTÁCTAME
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg 
              hover:bg-green-900 hover:text-black hover:border-green-900 transition-colors duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}           
            >
              MIS TRABAJOS
            </motion.button>
          </div>
        </motion.div>

        {/* Flecha animada */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown 
            size={22} 
            className="text-white animate-bounce" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;









// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
//         {/* Foto y redes sociales */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-center"
//         >
//           <div className="relative w-72 h-96 md:w-96 md:h-120 overflow-hidden shadow-lg rounded-lg">
//             <div className="absolute inset-0 border-4 border-transparent animate-border-rgb rounded-lg">
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-20 animate-gradient-rgb rounded-lg"></div>
//             </div>
//             <img
//               src="src/imagenes/foto12.jpeg"
//               alt="Efrain Robles"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//           <div className="mt-6 p-4 bg-transparent rounded-lg shadow-md flex space-x-4">
//             <motion.a
//               href="https://www.facebook.com/efrain.balabarcarobles?locale=es_LA"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-white hover:text-blue-400 transition-all duration-300"
//             >
//               <Facebook size={24} />
//               <span className="ml-2">Facebook</span>
//             </motion.a>
//             <motion.a
//               href="https://www.instagram.com/ef_robless/"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-white hover:text-pink-400 transition-all duration-300"
//             >
//               <Instagram size={24} />
//               <span className="ml-2">Instagram</span>
//             </motion.a>
//             <motion.a
//               href="https://www.linkedin.com/in/efrain-robles-4487a8330/"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-white hover:text-blue-400 transition-all duration-300"
//             >
//               <Linkedin size={24} />
//               <span className="ml-2">LinkedIn</span>
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Descripción y botones */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse">
//             Soy <span className="text-yellow-300">Efrain Robles</span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-white mb-8">
//             Desarrollador Web Full Stack
//           </h2>
//           <p className="text-lg text-white max-w-2xl mx-auto mb-12">
//             Especializado en crear experiencias digitales excepcionales, 
//             Ingeniero de Sistemas e Informática de la UNASAM
//           </p>
          
//           <div className="flex justify-center md:justify-start gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-all duration-300"
//             >
//               CONTÁCTAME
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-yellow-400 transition-all duration-300"
//             >
//               MIS TRABAJOS
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Flecha animada */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <ChevronDown 
//             size={32} 
//             className="text-white animate-bounce" 
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;