

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, Smartphone, Globe, LineChart } from 'lucide-react';

// const services = [
//   {
//     icon: <Code2 size={60} />, 
//     title: 'Desarrollo Web',
//     description: 'Creación de sitios web modernos y aplicaciones web utilizando las últimas tecnologías.',
//   },
//   {
//     icon: <Smartphone size={60} />,
//     title: 'Desarrollo Mobile',
//     description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
//   },
//   {
//     icon: <Globe size={60} />,
//     title: 'Software a Medida',
//     description: 'Soluciones de software personalizadas para satisfacer las necesidades específicas de tu negocio.',
//   },
//   {
//     icon: <LineChart size={60} />,
//     title: 'Consultoría',
//     description: 'Asesoramiento técnico y estratégico para optimizar tus proyectos digitales.',
//   },
// ];

// const Services = () => {
//   return (
//     <section
//       id="services"
//       className="min-h-screen flex items-center justify-center "
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Mensaje llamativo y descripción */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//             className="text-center lg:text-left flex flex-col justify-center"
//           >
//              <h2 className=" text-sm md:text-1xl text-green-600 mb-6" >
//                     Mis Servicios
//             </h2>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 ">
//               ¿Cómo puedo ayudarte?
//             </h2>
//             <p className="text-base text-gray-300 mb-8 text-justify">
//             "Transformo ideas en soluciones digitales personalizadas 
//             que potencian tu negocio. Estoy aquí para ayudarte 
//              a alcanzar tus objetivos con profesionalismo y compromiso. 
//              ¡Hablemos y llevemos tu proyecto al siguiente nivel!"
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-green-800 text-black  rounded-lg hover:bg-transparent 
//               hover:text-white hover:border-white border-2 border-black transition-all duration-300 self-start"
//             >
//               CONTÁCTAME
//             </motion.button>
//           </motion.div>

//           {/* Servicios en cuadros de texto */}
//           <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="glassmorphism-card p-4 w-100 rounded-lg backdrop-filter backdrop-blur-lg 
//                 bg-opacity-20 border border-gray-700 hover:border-green-400 transition-all duration-300 flex items-start space-x-6 items-center "
//               >
//                 <div className="text-green-500 hover:text-green-300 transition-all duration-300 flex-shrink-0">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
//                   <p className="text-gray-300">{service.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
  
// };

// export default Services;


import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={60} />, 
    title: 'Desarrollo Web',
    description: 'Creación de sitios web modernos y aplicaciones web utilizando las últimas tecnologías.',
  },
  {
    icon: <Smartphone size={60} />,
    title: 'Desarrollo Mobile',
    description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
  },
  {
    icon: <Globe size={60} />,
    title: 'Software a Medida',
    description: 'Soluciones de software personalizadas para satisfacer las necesidades específicas de tu negocio.',
  },
  {
    icon: <LineChart size={60} />,
    title: 'Consultoría',
    description: 'Asesoramiento técnico y estratégico para optimizar tus proyectos digitales.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mensaje llamativo y descripción */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left flex flex-col justify-center"
          >
            <h2 className="text-sm md:text-1xl text-green-600 mb-6">
              Mis Servicios
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              ¿Cómo puedo ayudarte?
            </h2>
            <p className="text-base text-gray-300 mb-8 text-justify">
              "Transformo ideas en soluciones digitales personalizadas 
              que potencian tu negocio. Estoy aquí para ayudarte 
              a alcanzar tus objetivos con profesionalismo y compromiso. 
              ¡Hablemos y llevemos tu proyecto al siguiente nivel!"
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-700 text-black rounded-lg  hover:bg-transparent hover:text-white 
              hover:border-white border-2 border-black transition-all duration-300 self-start"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}  
            >
              CONTÁCTAME
            </motion.button>
          </motion.div>

          {/* Servicios en cuadros de texto */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glassmorphism-card p-4 w-full rounded-lg backdrop-filter backdrop-blur-lg 
                bg-opacity-20 border border-gray-700 hover:border-green-400 transition-all duration-300 flex items-start space-x-6 items-center"
              >
                {/* Icono con efecto de hover */}
                <div className="text-green-600 hover:text-green-300 transition-all duration-300 flex-shrink-0">
                  {React.cloneElement(service.icon, { className: "text-current hover:scale-110 transition-all duration-300" })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;