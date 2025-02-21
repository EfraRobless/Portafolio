import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';

// URLs de imágenes optimizadas (con dimensiones controladas y formato webp)
const projects = [
  {
    id: 'sales-platform',
    title: 'Plataforma de Ventas',
    description: 'Plataforma de ventas con gestión de productos, pagos, facturación, proveedores y reportes.',
    image: 'https://i.pinimg.com/736x/63/93/85/639385fb1f730a696b214e53b3286275.jpg',
    tags: ['PHP', 'Node.js', 'MySQL'],
    liveUrl: '#demo-sales',
    githubUrl: '#repo-sales',
    longDescription: 'Desarrollé una plataforma completa de ventas que centraliza la gestión de inventario, procesamiento de pagos, emisión automática de facturas y analítica de ventas en tiempo real. Implementé un sistema de roles y permisos para control de accesos.'
  },
  {
    id: 'task-app',
    title: 'Aplicación de Agendas',
    description: 'Aplicación de gestión de tareas con características colaborativas.',
    image: 'https://i.pinimg.com/736x/26/b6/14/26b614a9987cae2e244d5b2527146c20.jpg',
    tags: ['React', 'Vite', 'Java'],
    liveUrl: '#demo-tasks',
    githubUrl: '#repo-tasks',
    longDescription: 'Aplicación basada en React con backend en Java Spring Boot que permite programar tareas, configurar recordatorios y trabajar en equipo. Incluye integración con calendarios externos y notificaciones en tiempo real.'
  },
  {
    id: 'social-dashboard',
    title: 'Social Media Dashboard',
    description: 'Dashboard para análisis de sentimientos en redes sociales en tiempo real.',
    image: 'https://i.pinimg.com/736x/eb/c9/ea/ebc9ea0422f6963d21017e2062bb252c.jpg',
    tags: ['Python', 'Azure Machine Learning'],
    liveUrl: '#demo-dashboard',
    githubUrl: '#repo-dashboard',
    longDescription: 'Dashboard que utiliza algoritmos de Machine Learning para analizar el sentimiento y la percepción de marca en redes sociales. Implementa visualizaciones interactivas y alertas configurables por el usuario.'
  },
];

// Componente de tarjeta de proyecto optimizado
const ProjectCard = memo(({ project, index, onOpenDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="card group glassmorphism-card rounded-lg backdrop-filter backdrop-blur-lg 
                bg-opacity-20 border border-gray-700 hover:border-green-500 
                transition-all duration-300 h-full flex flex-col overflow-hidden"
    >
      {/* Imagen del proyecto con loading state */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div 
          className={`w-full h-48 bg-gray-800 ${!imageLoaded ? 'animate-pulse' : ''} transition-opacity duration-300`}
        />
        <img
          src={project.image}
          alt=""
          className={`w-full h-48 object-cover absolute top-0 left-0 transform group-hover:scale-110 transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      flex items-center justify-center space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label={`Ver demo de ${project.title}`}
          >
            <ExternalLink size={20} className="text-black hover:text-white" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label={`Ver código de ${project.title}`}
          >
            <Github size={20} className="text-black hover:text-white" />
          </a>
          <button
            onClick={() => onOpenDetails(project)}
            className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label={`Ver detalles de ${project.title}`}
          >
            <Info size={20} className="text-black hover:text-white" />
          </button>
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm sm:text-base flex-grow">{project.description}</p>

        {/* Etiquetas del proyecto */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-green-800 text-white rounded-full text-xs font-medium hover:bg-green-700 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Modal de detalles del proyecto
const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          
          <motion.div
            className="glassmorphism-card relative bg-gray-900 border border-gray-700 rounded-lg max-w-lg w-full mx-auto z-10 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <img 
              src={project.image} 
              alt="" 
              className="w-full h-48 object-cover" 
              loading="lazy"
            />
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Cerrar detalles"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-300 mb-6">{project.longDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-green-800 text-white rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Ver Demo
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  Ver Código
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectDetails = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Título y descripción */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-sm sm:text-base text-green-600 mb-4 sm:mb-6 font-medium">Mi Portafolio</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Mis Proyectos Destacados
          </h3>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Una selección de mis proyectos más destacados, donde aplico soluciones innovadoras y tecnologías modernas.
          </p>
        </motion.div>

        {/* Cuadrícula de proyectos responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpenDetails={openProjectDetails} 
            />
          ))}
        </div>
      </div>

      {/* Modal de detalles del proyecto */}
      <ProjectDetailsModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectDetails}
      />
    </section>
  );
};

export default memo(Portfolio);