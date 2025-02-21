import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, LineChart } from 'lucide-react';

// Componente para cada servicio individual
const ServiceCard = ({ icon, title, description, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: index * 0.15,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="glassmorphism-card p-4 sm:p-5 w-full rounded-lg backdrop-filter backdrop-blur-lg 
      bg-opacity-20 border border-gray-700 hover:border-green-400 transition-all duration-300 
      flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
    >
      <div className="text-green-600 hover:text-green-300 transition-all duration-300 flex-shrink-0 mb-2 sm:mb-0">
        {React.cloneElement(icon, { 
          className: "text-current transition-all duration-300 hover:scale-110",
          size: {
            default: 50,
            sm: 55,
            md: 60
          }[window.innerWidth < 640 ? 'default' : window.innerWidth < 768 ? 'sm' : 'md']
        })}
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  // Memoizamos los servicios para evitar recreaciones innecesarias
  const servicesList = useMemo(() => [
    {
      icon: <Code2 aria-hidden="true" />, 
      title: 'Desarrollo Web',
      description: 'Creación de sitios web modernos y aplicaciones web utilizando las últimas tecnologías.',
    },
    {
      icon: <Smartphone aria-hidden="true" />,
      title: 'Desarrollo Mobile',
      description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    },
    {
      icon: <Globe aria-hidden="true" />,
      title: 'Software a Medida',
      description: 'Soluciones de software personalizadas para satisfacer las necesidades específicas de tu negocio.',
    },
    {
      icon: <LineChart aria-hidden="true" />,
      title: 'Consultoría',
      description: 'Asesoramiento técnico y estratégico para optimizar tus proyectos digitales.',
    },
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mensaje llamativo y descripción */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left flex flex-col justify-center"
          >
            <h2 className="text-sm md:text-base lg:text-lg font-medium text-green-600 mb-4 sm:mb-6">
              Mis Servicios
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              ¿Cómo puedo ayudarte?
            </h3>
            <p className="text-base text-gray-300 mb-8 leading-relaxed sm:leading-relaxed lg:pr-12">
              Transformo ideas en soluciones digitales personalizadas 
              que potencian tu negocio. Estoy aquí para ayudarte 
              a alcanzar tus objetivos con profesionalismo y compromiso. 
              ¡Hablemos y llevemos tu proyecto al siguiente nivel!
            </p>
            <div className="flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-800 text-white font-medium rounded-lg
                hover:bg-transparent hover:text-white border-2 border-green-700 hover:border-white
                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                focus:ring-offset-gray-900"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Contactar para servicios"
              >
                CONTÁCTAME
              </motion.button>
            </div>
          </motion.div>

          {/* Servicios en cuadros de texto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4 sm:gap-6"
          >
            {servicesList.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);