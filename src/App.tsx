//  import React from 'react';
//  import { BrowserRouter as Router } from 'react-router-dom';
//  import Navbar from './components/Navbar';
//  import Hero from './components/Hero';
//  import Servicios from './components/Services';
//  import Portfolio from './components/Portfolio';
//  import Testimonios from './components/Testimonials';
//  import Contacto from './components/Contact';
//  import Footer from './components/Footer';

//  function App() {
//    return (
//      <Router>
//        <div className="min-h-screen bg-gray-50">            
//          <Navbar />
//          <main>
//            <Hero />
//            <Servicios />
//            <Portfolio />
//            <Testimonios />
//            <Contacto />
//          </main>
//          <Footer /> 
//        </div>
//     </Router>
//   );
// }
//  export default App;


// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Servicios from './components/Services';
// import Portfolio from './components/Portfolio';
// import Testimonios from './components/Testimonials';
// import Contacto from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       {/* Contenedor principal con fondo */}
//       <div
//         className="w-full"
//         style={{
//           backgroundColor: "#000000", // Color de fondo
//           backgroundImage: `
//             radial-gradient(at 25% 25%, hsla(98, 89.30%, 14.70%, 0.27) 0%, transparent 40%),
//             radial-gradient(at 75% 75%, hsla(103, 77.80%, 12.40%, 0.25) 0%, transparent 60%)
//           `,
//         }}
//       >
//         {/* Barra de navegación */}
//         <Navbar />

//         {/* Contenido principal */}
//         <main className="w-full">
//           {/* Sección Hero */}
//           <section id="home" className="w-full min-h-[600px] flex items-center justify-center py-12">
//             <Hero />
//           </section>

//           {/* Sección Servicios */}
//           <section id="services" className="w-[1600px] h-[640px] flex items-center justify-center mx-auto py-12">
//             <Servicios />
//           </section>

//           {/* Sección Portafolio */}
//           <section id="portfolio" className="w-[1700px] h-[1100px] flex items-center justify-center mx-auto py-12">
//             <Portfolio />
//           </section>

//           {/* Sección Testimonios */}
//           <section id="testimonials" className="w-[1600px] h-[400px] flex items-center justify-center mx-auto py-12">
//             <Testimonios />
//           </section>

//           {/* Sección Contacto */}
//           <section id="contact" className="w-[1600px] h-[1100px] flex items-center justify-center mx-auto py-12">
//             <Contacto />
//           </section>
//         </main>

//         {/* Pie de página */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


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