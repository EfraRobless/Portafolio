
// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useForm, ValidationError } from '@formspree/react';
// import { Mail, Phone, MapPin, ArrowUp, Check } from 'lucide-react';

// const Contacto = () => {
//   const [state, handleSubmit] = useForm("xyyqzgwk");
//   const [focusedFields, setFocusedFields] = useState({
//     name: false,
//     email: false,
//     phone: false,
//     message: false,
//   });
//   const [showScrollButton, setShowScrollButton] = useState(false);

//   // Referencias para los campos del formulario
//   const formRef = useRef(null);
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const phoneRef = useRef(null);
//   const messageRef = useRef(null);
//   const serviceRefs = useRef([]);

//   const handleFocus = (field) => {
//     setFocusedFields({ ...focusedFields, [field]: true });
//   };

//   const handleBlur = (field) => {
//     setFocusedFields({ ...focusedFields, [field]: false });
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Limpiar el formulario después de enviar
//   useEffect(() => {
//     if (state.succeeded && formRef.current) {
//       formRef.current.reset(); // Limpia el formulario
//       setFocusedFields({
//         name: false,
//         email: false,
//         phone: false,
//         message: false,
//       });
//       serviceRefs.current.forEach((ref) => {
//         if (ref) ref.checked = false; // Desmarcar checkboxes
//       });
//     }
//   }, [state.succeeded]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShowScrollButton(true);
//       } else {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section id="contacto" className="min-h-screen flex items-center justify-center py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-sm md:text-lg text-green-500 mb-6">Contactamé</h2>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">¿Tienes un proyecto en mente?</h2>
//           <p className="text-base text-gray-300 max-w-2xl mx-auto">
//             ¡Agenda una reunión y hablemos sobre cómo puedo ayudarte!
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Información de Contacto */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="text-center lg:text-left flex flex-col justify-center space-y-10 lg:border-r lg:border-gray-700 lg:pr-6"
//           >
//             <h3 className="text-2xl font-semibold text-white mb-1 text-center lg:text-left">Información de Contacto</h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <Mail className="text-green-500 mr-4" size={24} />
//                 <div>
//                   <h4 className="font-medium text-white">Email</h4>
//                   <p className="text-gray-300">efrarobles01@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="text-green-500 mr-4" size={24} />
//                 <div>
//                   <h4 className="font-medium text-white">Teléfono</h4>
//                   <p className="text-gray-300">+51 980 600 719</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="text-green-500 mr-4" size={24} />
//                 <div>
//                   <h4 className="font-medium text-white">Ubicación</h4>
//                   <p className="text-gray-300">Independencia, Huaraz</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Formulario de Contacto */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col space-y-6"
//           >
//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
//                   Nombre y Apellidos
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   ref={nameRef}
//                   onFocus={() => handleFocus('name')}
//                   onBlur={() => handleBlur('name')}
//                   className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
//                     focusedFields.name ? 'border-green-500' : ''
//                   }`}
//                   placeholder={focusedFields.name ? '' : 'Ingresa tu nombre'}
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     ref={emailRef}
//                     onFocus={() => handleFocus('email')}
//                     onBlur={() => handleBlur('email')}
//                     className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
//                       focusedFields.email ? 'border-green-500' : ''
//                     }`}
//                     placeholder={focusedFields.email ? '' : 'Ingresa tu email'}
//                   />
//                   <ValidationError prefix="Email" field="email" errors={state.errors} />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
//                     Teléfono
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     required
//                     ref={phoneRef}
//                     onFocus={() => handleFocus('phone')}
//                     onBlur={() => handleBlur('phone')}
//                     className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
//                       focusedFields.phone ? 'border-green-500' : ''
//                     }`}
//                     placeholder={focusedFields.phone ? '' : 'Ingresa tu teléfono'}
//                     pattern="[0-9]*"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Servicio de Interés
//                 </label>
//                 <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
//                   {['Desarrollo web', 'Software', 'Mobile', 'Consultoría'].map((service, index) => (
//                     <label
//                       key={service}
//                       className="flex items-center space-x-2 cursor-pointer group"
//                     >
//                       <div className="relative">
//                         <input
//                           type="checkbox"
//                           name="service"
//                           value={service}
//                           ref={(el) => (serviceRefs.current[index] = el)}
//                           className="appearance-none w-3 h-3 border border-gray-700 rounded-full checked:bg-green-500 checked:border-green-500 transition-colors group-hover:border-green-500"
//                         />
//                         <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10px] opacity-0 checked:opacity-100 pointer-events-none" />
//                       </div>
//                       <span className="text-gray-300 group-hover:text-green-500 transition-colors">{service}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
//                   Detalles
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   ref={messageRef}
//                   onFocus={() => handleFocus('message')}
//                   onBlur={() => handleBlur('message')}
//                   className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
//                     focusedFields.message ? 'border-green-500' : ''
//                   }`}
//                   placeholder={focusedFields.message ? '' : 'Describe tu requerimiento aquí.'}
//                 />
//                 <ValidationError prefix="Message" field="message" errors={state.errors} />
//               </div>
//               <button
//                 type="submit"
//                 disabled={state.submitting}
//                 className="w-full px-4 py-2 bg-green-800 text-black border-2 border-green-600 rounded-lg hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300 disabled:opacity-50"
//               >
//                 {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
//               </button>
//               {state.succeeded && (
//                 <p className="text-green-500 text-center">¡Gracias por tu mensaje! Te contactaré pronto.</p>
//               )}
//             </form>
//           </motion.div>
//         </div>

//         {/* Flecha para volver al inicio */}
//         {showScrollButton && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-8 right-8 p-3 bg-transparent border border-gray-700 rounded-full hover:bg-green-900 transition-colors duration-300"
//           >
//             <ArrowUp className="text-white" size={15} />
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Contacto;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Check, Send, Loader } from 'lucide-react';

const Contacto = () => {
  // Estado para manejar el formulario
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    hasError: false,
    errorMessage: ''
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: []
  });
  
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Referencias para los campos del formulario
  const formRef = useRef(null);
  const serviceRefs = useRef([]);
  
  // Servicios disponibles
  const availableServices = ['Desarrollo web', 'Software', 'Mobile', 'Consultoría'];

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Validación en tiempo real
    validateField(name, value);
  };
  
  // Manejar cambios en los checkboxes de servicios
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const updatedServices = checked 
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value);
      
      return { ...prev, services: updatedServices };
    });
  };

  // Validación de campos individuales
  const validateField = (name, value) => {
    let errors = { ...validationErrors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'El nombre es requerido';
        } else if (value.trim().length < 3) {
          errors.name = 'El nombre debe tener al menos 3 caracteres';
        } else {
          delete errors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errors.email = 'El email es requerido';
        } else if (!emailRegex.test(value)) {
          errors.email = 'Ingresa un email válido';
        } else {
          delete errors.email;
        }
        break;
      case 'phone':
        const phoneRegex = /^[0-9]{9,15}$/;
        if (!value.trim()) {
          errors.phone = 'El teléfono es requerido';
        } else if (!phoneRegex.test(value.replace(/\D/g, ''))) {
          errors.phone = 'Ingresa un número de teléfono válido';
        } else {
          delete errors.phone;
        }
        break;
      case 'message':
        if (!value.trim()) {
          errors.message = 'El mensaje es requerido';
        } else if (value.trim().length < 10) {
          errors.message = 'El mensaje debe tener al menos 10 caracteres';
        } else {
          delete errors.message;
        }
        break;
      default:
        break;
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Validar todo el formulario
  const validateForm = () => {
    // Validar cada campo
    const nameValid = validateField('name', formData.name);
    const emailValid = validateField('email', formData.email);
    const phoneValid = validateField('phone', formData.phone);
    const messageValid = validateField('message', formData.message);
    
    // Verificar si hay al menos un servicio seleccionado
    if (formData.services.length === 0) {
      setValidationErrors(prev => ({ ...prev, services: 'Selecciona al menos un servicio' }));
      return false;
    } else {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.services;
        return newErrors;
      });
    }
    
    return nameValid && emailValid && phoneValid && messageValid && formData.services.length > 0;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormState({ ...formState, isSubmitting: true });
    
    try {
      // Configurar datos para enviar a Email.js o similar
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        message: formData.message,
        services: formData.services.join(', '),
        to_email: 'efrarobles01@gmail.com'
      };
      
      // Enviamos el formulario usando fetch a un servicio como Formspree
      // Asegurando que los datos lleguen a tu email personal
      const response = await fetch('https://formspree.io/f/xyyqzgwk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });
      
      if (response.ok) {
        // Éxito - limpiar el formulario
        resetForm();
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          hasError: false,
          errorMessage: ''
        });
        
        // Configurar temporizador para quitar el mensaje de éxito
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSubmitted: false }));
        }, 5000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        hasError: true,
        errorMessage: 'Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.'
      });
    }
  };

  // Resetear el formulario
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      services: []
    });
    
    setFocusedFields({
      name: false,
      email: false,
      phone: false,
      message: false,
    });
    
    if (formRef.current) {
      formRef.current.reset();
    }
    
    // Desmarcar todos los checkboxes
    serviceRefs.current.forEach(ref => {
      if (ref) ref.checked = false;
    });
  };

  const handleFocus = (field) => {
    setFocusedFields({ ...focusedFields, [field]: true });
  };

  const handleBlur = (field) => {
    setFocusedFields({ ...focusedFields, [field]: false });
    // Validar el campo cuando pierde el foco
    validateField(field, formData[field]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detectar scroll para mostrar/ocultar botón para volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center py-10 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-sm md:text-lg text-green-500 mb-4 md:mb-6">Contáctame</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-10">¿Tienes un proyecto en mente?</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            ¡Agenda una reunión y hablemos sobre cómo puedo ayudarte!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8 lg:border-r lg:border-gray-700 lg:pr-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-1 text-center lg:text-left">Información de Contacto</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-full bg-green-500 bg-opacity-10">
                  <Mail className="text-green-500" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-300 hover:text-green-400 transition-colors">
                    <a href="mailto:efrarobles01@gmail.com">efrarobles01@gmail.com</a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-full bg-green-500 bg-opacity-10">
                  <Phone className="text-green-500" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">Teléfono</h4>
                  <p className="text-gray-300 hover:text-green-400 transition-colors">
                    <a href="tel:+51980600719">+51 980 600 719</a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-full bg-green-500 bg-opacity-10">
                  <MapPin className="text-green-500" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">Ubicación</h4>
                  <p className="text-gray-300">Independencia, Huaraz</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="mt-8 pt-8 border-t border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Horario de atención</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lunes - Viernes:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sábados:</span>
                  <span className="text-white">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingos:</span>
                  <span className="text-white">Cerrado</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre y Apellidos <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-2 bg-gray-900 bg-opacity-50 border ${
                    validationErrors.name ? 'border-red-500' : 
                    focusedFields.name ? 'border-green-500' : 'border-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200`}
                  placeholder="Ingresa tu nombre completo"
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.name}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-2 bg-gray-900 bg-opacity-50 border ${
                      validationErrors.email ? 'border-red-500' : 
                      focusedFields.email ? 'border-green-500' : 'border-gray-700'
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200`}
                    placeholder="correo@ejemplo.com"
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{validationErrors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className={`w-full px-4 py-2 bg-gray-900 bg-opacity-50 border ${
                      validationErrors.phone ? 'border-red-500' : 
                      focusedFields.phone ? 'border-green-500' : 'border-gray-700'
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200`}
                    placeholder="Ej. 980123456"
                    inputMode="numeric"
                  />
                  {validationErrors.phone && (
                    <p className="mt-1 text-sm text-red-500">{validationErrors.phone}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Servicio de Interés <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {availableServices.map((service, index) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 cursor-pointer group"
                    >
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          name="service"
                          value={service}
                          ref={(el) => (serviceRefs.current[index] = el)}
                          onChange={handleServiceChange}
                          className="appearance-none w-4 h-4 border border-gray-700 rounded-md checked:bg-green-500 checked:border-green-500 transition-colors duration-200 group-hover:border-green-400"
                        />
                        <Check 
                          size={14} 
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none opacity-0 check-mark transition-opacity duration-200" 
                          style={{ opacity: formData.services.includes(service) ? 1 : 0 }}
                        />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-green-400 transition-colors duration-200">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
                {validationErrors.services && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.services}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-2 bg-gray-900 bg-opacity-50 border ${
                    validationErrors.message ? 'border-red-500' : 
                    focusedFields.message ? 'border-green-500' : 'border-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200`}
                  placeholder="Describe tu proyecto o requerimiento aquí..."
                />
                {validationErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.message}</p>
                )}
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formState.isSubmitting ? (
                    <>
                      <Loader className="animate-spin mr-2" size={18} />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Mensajes de éxito o error */}
              <AnimatePresence>
                {formState.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-800 bg-opacity-20 border border-green-600 text-green-400 rounded-lg p-4 flex items-start"
                  >
                    <Check className="mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <p>¡Gracias por tu mensaje! Te contactaré pronto a través de tu correo electrónico.</p>
                  </motion.div>
                )}
                
                {formState.hasError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-red-800 bg-opacity-20 border border-red-600 text-red-400 rounded-lg p-4 flex items-start"
                  >
                    <AlertCircle className="mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <p>{formState.errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
            
            <div className="mt-6 text-sm text-gray-400 italic">
              * Campos obligatorios
            </div>
          </motion.div>
        </div>

        {/* Flecha para volver al inicio */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-green-900 bg-opacity-70 border border-green-700 rounded-full shadow-lg hover:bg-green-800 transition-colors duration-300 z-50"
              aria-label="Volver arriba"
            >
              <ArrowUp className="text-white" size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Importamos el AlertCircle que faltaba
import { AlertCircle } from 'lucide-react';

export default Contacto;