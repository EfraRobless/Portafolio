// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center"
//     >
//       <div className="max-w-7xl mx-auto px-14 sm:px-16 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
//         {/* Foto y redes sociales */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-center"
//         >
//           <div className="relative w-96 h-96 md:w-110 md:h-120 overflow-hidden shadow-lg rounded-lg">
            
//             <div className="absolute inset-0 border-4 border-transparent animate-border-rgb rounded-lg">
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-40 to-red-20 opacity-40 animate-gradient-rgb rounded-lg">
                
//               </div>
//             </div>
//             <img
//               src="src/imagenes/uni.png"
//               alt="Efrain Robles"
//               className="w-full h-110 object-cover rounded-lg"
//             />
//           </div>
//           <div className="mt-16 p-4 bg-gray-600 bg-opacity-15 rounded-lg shadow-md flex space-x-4">
//             <motion.a
//               href="https://www.facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-white hover:text-blue-700 transition-colors duration-100"
//             >
//               <Facebook size={24} />
//               <span className="ml-2">Facebook</span>
//             </motion.a>
//             <motion.a
//               href="https://www.instagram.com/ef_robless/"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-white hover:text-pink-700 transition-colors duration-100"
//             >
//               <Instagram size={24} />
//               <span className="ml-2">Instagram</span>
//             </motion.a>
//             <motion.a
//               href="https://www.linkedin.com/in/efrain-robles-4487a8330/"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-white hover:text-blue-400 transition-colors duration-100"
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
//           transition={{ duration: 0.8 }}
//           className="text-center md:text-left"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
//             Soy <span className="text-yellow-500">Efrain Robles</span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-white mb-10">
//             Desarrollador Web Full Stack
//           </h2>
//           <p className="text-lg text-white max-w-2xl mx-auto mb-12 text-justify">
//             "Ingeniero de Sistemas e Informática de la UNASAM, especializado 
//             en crear soluciones digitales que impulsan resultados. Transformo 
//             ideas complejas en experiencias eficientes que mejoran la interacción 
//             del usuario y potencian el crecimiento de tu negocio."
//           </p>
          
//           <div className="flex justify-center md:justify-start gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-green-900 text-black border-2 border-black rounded-lg 
//               hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
//               onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               CONTÁCTAME
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg 
//               hover:bg-green-900 hover:text-black hover:border-green-900 transition-colors duration-300"
//               onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}           
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
//           className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
//           onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
//         >
//           <ChevronDown 
//             size={22} 
//             className="text-white animate-bounce" 
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';

const Hero = () => {
  // Estado simplificado para la imagen
  const [imageStatus, setImageStatus] = useState({
    loaded: false,
    error: false
  });
  
  // URL de imagen externa (Google Drive optimizada para visualización directa)
  // Convertimos la URL de compartir de Google Drive a una URL de visualización directa
  const imageUrl = "https://i.pinimg.com/736x/cf/21/00/cf2100ca818794506ade583d04666bac.jpg";
  
  // Imagen de respaldo en caso de error
  const fallbackImageUrl = '/assets/imagenes/fot.webp';

  // Precarga de imagen para mejor experiencia de usuario
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageStatus({ loaded: true, error: false });
    img.onerror = () => setImageStatus({ loaded: false, error: true });
    img.src = imageUrl;
    
    // Limpieza al desmontar componente
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  // Animación fade-in para toda la sección
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  };
  
  // Optimización de rendimiento con memo para componentes animados
  const MemoizedSocialLinks = React.memo(() => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-6 md:mt-8 p-3 sm:p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg flex flex-wrap justify-center gap-4 border border-gray-700/50 max-w-md mx-auto"
    >
      <SocialLink 
        href="https://www.facebook.com"
        icon={<Facebook size={20} strokeWidth={1.5} />}
        label="Facebook"
        hoverColor="#1877f2"
      />
      <SocialLink 
        href="https://www.instagram.com/ef_robless/"
        icon={<Instagram size={20} strokeWidth={1.5} />}
        label="Instagram"
        hoverColor="#e4405f"
      />
      <SocialLink 
        href="https://www.linkedin.com/in/efrain-robles-4487a8330/"
        icon={<Linkedin size={20} strokeWidth={1.5} />}
        label="LinkedIn"
        hoverColor="#0a66c2"
      />
    </motion.div>
  ));

  // Componente de enlace social reutilizable
  const SocialLink = ({ href, icon, label, hoverColor }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, color: hoverColor }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center text-gray-200 transition-all duration-300"
      aria-label={label}
    >
      {icon}
      <span className="ml-2 text-sm sm:text-base">{label}</span>
    </motion.a>
  );

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center justify-center relative py-8 px-4 sm:px-6 md:py-12 lg:px-8 overflow-hidden"
    >
      {/* Container con ancho máximo y media queries optimizados */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Foto y redes sociales - Con mejor manejo de errores y carga */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-end order-1 lg:order-1"
        >
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl rounded-xl mx-auto">
            {/* Borde animado optimizado con will-change para mejor rendimiento */}
            <div className="absolute inset-0 border-4 border-transparent animate-border-rgb rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-40 to-red-20 opacity-40 animate-gradient-rgb rounded-lg">
              </div>
            </div>

            {/* Estado de carga con accessibility */}
            {!imageStatus.loaded && !imageStatus.error && (
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gray-800 animate-pulse" 
                   aria-label="Cargando imagen">
                <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" role="img">
                  <title>Cargando</title>
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}

            {/* Manejo mejorado de errores de imagen */}
            {imageStatus.error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gray-900">
                <svg className="w-16 h-16 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm px-4 text-center">Imagen no disponible.</p>
              </div>
            )}

            {/* Implementación de imagen moderna con srcSet para diferentes resoluciones */}
            <picture>
              {/* Formato moderno WebP */}
              <source 
                type="image/webp"
                srcSet={`${imageUrl} 1x, ${imageUrl} 2x`}
                media="(min-width: 640px)"
              />
              {/* Formato de respaldo para navegadores más antiguos */}
              <source 
                type="image/jpeg"
                srcSet={`${imageUrl} 1x, ${imageUrl} 2x`}
              />
              <img
                src={imageStatus.error ? fallbackImageUrl : imageUrl}
                alt="Efrain Robles - Desarrollador Web Full Stack"
                onLoad={() => setImageStatus({ loaded: true, error: false })}
                onError={() => setImageStatus({ loaded: false, error: true })}
                className={`w-full h-full object-cover object-center rounded-xl relative z-10 transition-opacity duration-500 ${
                  imageStatus.loaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                width="400"
                height="600"
                fetchPriority="high"
              />
            </picture>
          </div>

          {/* Redes sociales componentizadas */}
          <MemoizedSocialLinks />
        </motion.div>

        {/* Descripción y botones - Optimizados para accesibilidad y rendimiento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left order-2 lg:order-2 mt-6 lg:mt-0"
        >
          <div className="space-y-6">
            <div>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 tracking-tight leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Soy{" "}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300 inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Efrain Robles
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium mb-6 sm:mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Desarrollador Web Full Stack
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              "Ingeniero de Sistemas e Informática de la UNASAM, especializado 
              en crear soluciones digitales que impulsan resultados. Transformo 
              ideas complejas en experiencias eficientes que mejoran la interacción 
              del usuario y potencian el crecimiento de tu negocio."
            </motion.p>
            
            {/* Botones optimizados para accesibilidad */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.9)" }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Contactar a Efrain Robles"
              >
                CONTÁCTAME
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-transparent text-white border-2 border-green-600/60 rounded-lg hover:border-green-500 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Ver portafolio de trabajos"        
              >
                MIS TRABAJOS
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Flecha animada con mejoras de accesibilidad */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          delay: 1.5, 
          duration: 2, 
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
        role="button"
        aria-label="Desplazarse hacia abajo"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="p-2 rounded-full bg-green-600/20 backdrop-blur-sm border border-green-500/30">
          <ChevronDown 
            size={24} 
            className="text-green-400" 
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* Fondo optimizado para rendimiento */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900/90 to-black/95"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent opacity-60"></div>
    </section>
  );
};

// Memoizar el componente para evitar re-renders innecesarios
export default React.memo(Hero);