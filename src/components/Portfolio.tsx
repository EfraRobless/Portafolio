// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';

// const projects = [
//   {
//     title: 'E-commerce Platform',
//     description: 'Plataforma de comercio electrónico con gestión de productos y pagos.',
//     image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
//     tags: ['React', 'Node.js', 'MongoDB'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     title: 'Task Management App',
//     description: 'Aplicación de gestión de tareas con características colaborativas.',
//     image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800&h=600',
//     tags: ['Vue.js', 'Express', 'PostgreSQL'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },Portfolio
//   {
//     title: 'Social Media Dashboard',
//     description: 'Dashboard para análisis de redes sociales en tiempo real.',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
//     tags: ['React', 'Firebase', 'Chart.js'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section id="portfolio" className="section-padding bg-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Mi Portafolio</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Una selección de mis proyectos más destacados
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="card group"
//             >
//               <div className="relative overflow-hidden rounded-lg mb-4">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors duration-300"
//                   >
//                     <ExternalLink size={24} className="text-primary-600" />
//                   </a>
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors duration-300"
//                   >
//                     <Github size={24} className="text-primary-600" />
//                   </a>
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';

// const projects = [
//   {
//     title: 'Plataforma de Ventas ',         // TITULO DE MI PORTAFOLIO LAS APP QUE DESARROLLE 
//     description: 'Plataforma de ventas con gestión de productos, pagos, facturación, proveedores y reportes.',
//     image: 'src/imagenes/Reporte.png',
//     tags: ['PHP', 'Node.js', 'MySQL'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     title: 'Aplicación de Agendas',         // TITULO DE MI PORTAFOLIO LAS APP QUE DESARROLLE 
//     description: 'Aplicación de gestión de tareas con características colaborativas.',
//     image: 'src/imagenes/uni.png',
//     tags: ['React', 'Vite', 'Java'],
//     liveUrl: '#',
//     githubUrl: '#',
    
//   },
//   {
//     title: 'Social Media Dashboard',              // TITULO DE MI PORTAFOLIO LAS APP QUE DESARROLLE 
//     description: 'Dashboard para análisis de Sentimientos en redes sociales en tiempo real.',
//     image: 'src/imagenes/sentimientos.png',
//     tags: ['Phyton', 'Azure Machine Learning '],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Mi Portafolio</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Una selección de mis proyectos más destacados
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="card group"
//             >
//               <div className="relative overflow-hidden rounded-lg mb-4">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors duration-300"
//                   >
//                     <ExternalLink size={24} className="text-primary-600" />
//                   </a>
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors duration-300"
//                   >
//                     <Github size={24} className="text-primary-600" />
//                   </a>
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Plataforma de Ventas',
    description: 'Plataforma de ventas con gestión de productos, pagos, facturación, proveedores y reportes.',
    image: 'src/imagenes/Reporte.png',
    tags: ['PHP', 'Node.js', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Aplicación de Agendas',
    description: 'Aplicación de gestión de tareas con características colaborativas.',
    image: 'src/imagenes/uni.png',
    tags: ['React', 'Vite', 'Java'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard para análisis de sentimientos en redes sociales en tiempo real.',
    image: 'src/imagenes/sentimientos.png',
    tags: ['Python', 'Azure Machine Learning'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-1xl text-green-600 mb-6">Mi Portafolio</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Mis Proyectos Destacados</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Una selección de mis proyectos más destacados, donde aplico soluciones innovadoras y tecnologías modernas.
          </p>
        </motion.div>

        {/* Cuadros de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group glassmorphism-card p-6 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-700 hover:border-green-500 transition-all duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors duration-300"
                  >
                    <ExternalLink size={24} className="text-black hover:text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors duration-300"
                  >
                    <Github size={24} className="text-black hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Título y descripción del proyecto */}
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Etiquetas del proyecto */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-green-800 text-white rounded-full text-sm hover:bg-green-600 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;