import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, ChevronRight, Home, Briefcase, FolderOpen, MessageCircle, Mail } from 'lucide-react';

const Navbar = () => {
  // Referencias para mejorar el rendimiento
  const navbarRef = useRef(null);
  const typingTimerRef = useRef(null);
  const cursorRef = useRef(null);

  // Estados
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [text, setText] = useState('');
  const [typingState, setTypingState] = useState('typing'); // typing, pause, deleting, waiting
  const [activeSection, setActiveSection] = useState('home');
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const fullText = 'Efrain';
  const typingDelay = 150; // Más rápido para mejor UX
  const deletingDelay = 100; // Más rápido para mejor UX
  const pauseDelay = 3000;
  const waitDelay = 500;

  // Menú de navegación con iconos para mejorar UX
  const navLinks = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Servicios', href: '#services', icon: Briefcase },
    { name: 'Portafolio', href: '#portfolio', icon: FolderOpen },
    { name: 'Testimonios', href: '#testimonials', icon: MessageCircle },
    { name: 'Contacto', href: '#contacto', icon: Mail },
  ];

  // Optimización: Usar Intersection Observer para detectar secciones activas
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observar todas las secciones
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, []);

  // Optimización: Memoizar el handler de scroll para mejor rendimiento
  const handleScroll = useCallback(() => {
    if (!navbarRef.current) return;
    
    // Calcula la opacidad basada en la posición de scroll (efecto de desvanecimiento)
    const scrollY = window.scrollY;
    const opacity = Math.min(scrollY / 100, 0.95);
    
    // Aplicar blur y transparencia progresiva
    if (scrollY > 20) {
      setIsScrolled(true);
      navbarRef.current.style.backgroundColor = `rgba(10, 10, 15, ${opacity})`;
      navbarRef.current.style.backdropFilter = `blur(${Math.min(scrollY / 10, 8)}px)`;
    } else {
      setIsScrolled(false);
      navbarRef.current.style.backgroundColor = 'transparent';
      navbarRef.current.style.backdropFilter = 'none';
    }
  }, []);

  // Efecto para el scroll con throttling para rendimiento
  useEffect(() => {
    let scrollTimeout;
    
    const throttledScrollHandler = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 16); // ~60fps
      }
    };
    
    window.addEventListener('scroll', throttledScrollHandler);
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  // Optimización: Máquina de estados para la animación de typing para mayor fluidez
  useEffect(() => {
    const typeNextChar = () => {
      setText((prev) => fullText.slice(0, prev.length + 1));
      if (text.length === fullText.length - 1) {
        setTypingState('pause');
      }
    };

    const deleteChar = () => {
      setText((prev) => prev.slice(0, -1));
      if (text.length === 1) {
        setTypingState('waiting');
      }
    };

    clearTimeout(typingTimerRef.current);

    switch (typingState) {
      case 'typing':
        typingTimerRef.current = setTimeout(typeNextChar, typingDelay);
        break;
      case 'pause':
        typingTimerRef.current = setTimeout(() => setTypingState('deleting'), pauseDelay);
        break;
      case 'deleting':
        typingTimerRef.current = setTimeout(deleteChar, deletingDelay);
        break;
      case 'waiting':
        typingTimerRef.current = setTimeout(() => setTypingState('typing'), waitDelay);
        break;
      default:
        break;
    }

    return () => clearTimeout(typingTimerRef.current);
  }, [text, typingState, fullText]);

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const blinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    };
    
    const cursorInterval = setInterval(blinkCursor, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Función para cerrar el menú móvil y navegar suavemente
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Scroll suave con fallback para navegadores antiguos
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, targetElement.offsetTop - 80);
      }
    }
  };

  // Evitar recargas innecesarias: navegar al inicio en lugar de recargar
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl py-2' : 'py-4 lg:py-6'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo con efectos mejorados */}
          <div
            className={`flex items-center space-x-1 cursor-pointer transform transition-all duration-300 ${
              isHoveringLogo ? 'translate-x-1 scale-105' : ''
            }`}
            onClick={handleLogoClick}
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
            role="button"
            tabIndex={0}
            aria-label="Ir al inicio"
          >
            <div className="relative font-playfair font-bold text-2xl md:text-3xl">
              <span className="text-white">{text}</span>
              <span 
                ref={cursorRef}
                className="absolute text-green-500 font-normal transition-opacity"
                aria-hidden="true"
              >
                |
              </span>
            </div>
            <span className="hidden sm:inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-sm font-light ml-2">
              Desarrollador Web
            </span>
          </div>

          {/* Navegación desktop mejorada */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 rounded-md text-sm transition-all duration-300 group flex items-center hover:bg-gray-800/50 ${
                    isActive 
                      ? 'text-green-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4 mr-1 opacity-70 group-hover:opacity-100" />
                  <span>{link.name}</span>
                  
                  {/* Indicador de elemento activo */}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
            
            {/* CTA para contacto */}
            <a 
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-green-800 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>Contáctame</span>
            </a>
          </div>

          {/* Botón de menú móvil mejorado */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil mejorado con transiciones */}
        <div 
          id="mobile-menu"
          className={`transition-all duration-300 ease-in-out transform md:hidden overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="rounded-lg bg-gray-900/90 backdrop-blur-md border border-gray-800 shadow-2xl p-2 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-md transition-colors duration-300 ${
                    isActive
                      ? 'bg-gray-800 text-green-400'
                      : 'text-gray-200 hover:bg-gray-800/70 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center">
                    <Icon className="w-5 h-5 mr-3" />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
            
            {/* CTA móvil */}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-md shadow-md"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Estilos adicionales para efectos avanzados */}
      <style jsx >{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        nav {
          box-shadow: ${isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'};
        }
        
        @media (prefers-reduced-motion: reduce) {
          nav, .transition-all, .transform {
            transition: none !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default React.memo(Navbar);
