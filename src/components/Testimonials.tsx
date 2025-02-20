// import React from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const testimonials = [
//   {
//     name: 'Ana García',
//     position: 'CEO, TechStart',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
//     text: 'Efrain demostró ser un profesional excepcional. Su trabajo superó nuestras expectativas y entregó el proyecto antes del plazo previsto.',
//   },
//   {
//     name: 'Carlos Rodríguez',
//     position: 'Director de Innovación, DataCorp',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
//     text: 'La atención al detalle y la calidad del código de Efrain son impresionantes. Definitivamente volveremos a trabajar con él.',
//   },
//   {
//     name: 'María Torres',
//     position: 'Fundadora, CreativeHub',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
//     text: 'Trabajar con Efrain fue una experiencia extraordinaria. Su capacidad para entender nuestras necesidades y convertirlas en soluciones es única.',
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="section-padding bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonios</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Lo que dicen mis clientes sobre mi trabajo
//           </p>
//         </motion.div>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           className="pb-12"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={testimonial.name}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="card h-full flex flex-col"
//               >
//                 <div className="flex items-center mb-6">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
//                     <p className="text-sm text-gray-600">{testimonial.position}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 flex-grow">{testimonial.text}</p>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;





import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Ana García',
    position: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'Efrain demostró ser un profesional excepcional. Su trabajo superó nuestras expectativas y entregó el proyecto antes del plazo previsto.',
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Director de Innovación, DataCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'La atención al detalle y la calidad del código de Efrain son impresionantes. Definitivamente volveremos a trabajar con él.',
  },
  {
    name: 'María Torres',
    position: 'Fundadora, CreativeHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'Trabajar con Efrain fue una experiencia extraordinaria. Su capacidad para entender nuestras necesidades y convertirlas en soluciones es única.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-1xl text-green-600 mb-6">Testimonios</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Lo que dicen mis clientes</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Descubre lo que mis clientes tienen que decir sobre mi trabajo y cómo he ayudado a impulsar sus proyectos.
          </p>
        </motion.div>

        {/* Carrusel de testimonios */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
               className="glassmorphism-card p-6 bg-transparent rounded-lg backdrop-filter backdrop-blur-lg border border-transparent 
                hover:bg-transparent hover:border-green-500 transition-all duration-300 h-full flex flex-col"
              >
                {/* Información del cliente */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-300">{testimonial.position}</p>
                  </div>
                </div>

                {/* Texto del testimonio */}
                <p className="text-gray-300 flex-grow">{testimonial.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;