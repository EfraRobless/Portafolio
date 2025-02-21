import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Componente de tarjeta de testimonio optimizado
const TestimonialCard = memo(({ testimonial, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glassmorphism-card p-5 sm:p-6 bg-transparent rounded-lg backdrop-filter backdrop-blur-lg 
                border border-gray-800 hover:border-green-500 transition-all duration-300 h-full 
                flex flex-col shadow-lg"
    >
      {/* Información del cliente */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-full"></div>
          )}
          <img
            src={testimonial.image}
            alt=""
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full rounded-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            loading="lazy"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-300">{testimonial.position}</p>
        </div>
      </div>

      {/* Texto del testimonio */}
      <div className="relative flex-grow">
        <svg className="text-green-600 w-8 h-8 absolute -top-4 -left-2 opacity-30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-300 text-sm sm:text-base relative z-10 pl-1">{testimonial.text}</p>
      </div>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Datos de testimonios optimizados con placeholders de imágenes más pequeñas
  const testimonials = [
    {
      name: 'Ana García',
      position: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=150&h=150',
      text: 'Efrain demostró ser un profesional excepcional. Su trabajo superó nuestras expectativas y entregó el proyecto antes del plazo previsto.',
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Innovación, DataCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=150&h=150',
      text: 'La atención al detalle y la calidad del código de Efrain son impresionantes. Definitivamente volveremos a trabajar con él.',
    },
    {
      name: 'María Torres',
      position: 'Fundadora, CreativeHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=150&h=150',
      text: 'Trabajar con Efrain fue una experiencia extraordinaria. Su capacidad para entender nuestras necesidades y convertirlas en soluciones es única.',
    },
  ];

  // Manejo responsivo sin causar hidratación incorrecta
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuración responsiva para Swiper
  const getSlidesPerView = () => {
    if (!mounted) return 1;
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section 
      id="testimonials" 
      className="min-h-screen flex items-center justify-center py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Título y descripción */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-sm sm:text-base text-green-600 mb-4 sm:mb-6 font-medium">Testimonios</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Lo que dicen mis clientes
          </h3>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Descubre lo que mis clientes tienen que decir sobre mi trabajo y cómo he ayudado a impulsar sus proyectos.
          </p>
        </motion.div>

        {/* Carrusel de testimonios con A11y mejorado */}
        {mounted && (
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={getSlidesPerView()}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-green-600',
              bulletClass: 'swiper-pagination-bullet bg-transparent opacity-70 w-3 h-3 mx-1'
            }}
            a11y={{
              prevSlideMessage: 'Testimonio anterior',
              nextSlideMessage: 'Testimonio siguiente',
              firstSlideMessage: 'Este es el primer testimonio',
              lastSlideMessage: 'Este es el último testimonio',
            }}
            className="pb-12 sm:pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default memo(Testimonials);