import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
// Importación diferida de componentes para mejorar el rendimiento
const Hero = lazy(() => import('./components/Hero'));
const Servicios = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonios = lazy(() => import('./components/Testimonials'));
const Contacto = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de carga para Suspense
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      {/* Contenedor principal con fondo */}
      <div className="min-h-screen overflow-x-hidden"
       style={{
        backgroundColor: "#000000", // Color de fondo
        backgroundImage: `
          radial-gradient(at 25% 25%, hsla(98, 89.30%, 14.70%, 0.27) 0%, transparent 40%),
          radial-gradient(at 75% 75%, hsla(103, 77.80%, 12.40%, 0.25) 0%, transparent 60%)
        `,
      }}
      
      >

        {/* Barra de navegación - no diferida para carga rápida de UI */}
        <Navbar />
        
        {/* Contenido principal */}
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Implementación de Suspense para carga diferida */}
          <Suspense fallback={<LoadingFallback />}>
            {/* Sección Hero */}
            <Hero />
            
            {/* Sección Servicios */}
            <Servicios />
            
            {/* Sección Portafolio */}
            <Portfolio />
            
            {/* Sección Testimonios */}
            <Testimonios />
            
            {/* Sección Contacto */}
            <Contacto />
          </Suspense>
        </main>
        
        {/* Pie de página */}
        <Suspense fallback={<div className="h-16"></div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;