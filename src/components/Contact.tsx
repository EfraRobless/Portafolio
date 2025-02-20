
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
//     if (state.succeeded) {
//       formRef.current.reset(); // Limpia el formulario
//       setFocusedFields({
//         name: false,
//         email: false,
//         phone: false,
//         message: false,
//       });
//       serviceRefs.current.forEach((ref) => (ref.checked = false)); // Desmarcar checkboxes
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
//     <section id="contacto" className="min-h-screen flex items-center justify-center py-20 ">
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
//             <h3 className="text-2xl font-semibold text-white mb-1 text-center lg:text-left ">Información de Contacto</h3>
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
//                     key={service} 
//                     className="flex items-center space-x-2 cursor-pointer group"  // Agregamos cursor-pointer y group 
//                     > 
//                       <div className="relative">
//                         <input
//                           type="checkbox"
//                           name="service"
//                           value={service}
//                           ref={(el) => (serviceRefs.current[index] = el)}
//                           className="appearance-none w-3 h-3 border border-gray-700 rounded-full 
//                                     checked:bg-green-500 checked:border-green-500 transition-colors 
//                                      group-hover:border-green-500"// Cambio de borde al pasar el mouse
//                         />
//                         <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//                                          text-white text-[10px] opacity-0 checked:opacity-100 pointer-events-none" />
//                       </div>
//                       <span className="text-gray-300 group-hover:text-green-900 transition-colors">{service}</span>
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
//                 className="w-full px-4 py-2 bg-green-800 text-black border-2 border-green-600 rounded-lg 
//                 hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300 disabled:opacity-50"
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
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, ArrowUp, Check } from 'lucide-react';

const Contacto = () => {
  const [state, handleSubmit] = useForm("xyyqzgwk");
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Referencias para los campos del formulario
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const serviceRefs = useRef([]);

  const handleFocus = (field) => {
    setFocusedFields({ ...focusedFields, [field]: true });
  };

  const handleBlur = (field) => {
    setFocusedFields({ ...focusedFields, [field]: false });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Limpiar el formulario después de enviar
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset(); // Limpia el formulario
      setFocusedFields({
        name: false,
        email: false,
        phone: false,
        message: false,
      });
      serviceRefs.current.forEach((ref) => {
        if (ref) ref.checked = false; // Desmarcar checkboxes
      });
    }
  }, [state.succeeded]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-lg text-green-500 mb-6">Contactamé</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">¿Tienes un proyecto en mente?</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            ¡Agenda una reunión y hablemos sobre cómo puedo ayudarte!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex flex-col justify-center space-y-10 lg:border-r lg:border-gray-700 lg:pr-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-1 text-center lg:text-left">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-green-500 mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-300">efrarobles01@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-green-500 mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-white">Teléfono</h4>
                  <p className="text-gray-300">+51 980 600 719</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-green-500 mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-white">Ubicación</h4>
                  <p className="text-gray-300">Independencia, Huaraz</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre y Apellidos
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  ref={nameRef}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
                    focusedFields.name ? 'border-green-500' : ''
                  }`}
                  placeholder={focusedFields.name ? '' : 'Ingresa tu nombre'}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    ref={emailRef}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
                      focusedFields.email ? 'border-green-500' : ''
                    }`}
                    placeholder={focusedFields.email ? '' : 'Ingresa tu email'}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    ref={phoneRef}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
                      focusedFields.phone ? 'border-green-500' : ''
                    }`}
                    placeholder={focusedFields.phone ? '' : 'Ingresa tu teléfono'}
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Servicio de Interés
                </label>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {['Desarrollo web', 'Software', 'Mobile', 'Consultoría'].map((service, index) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 cursor-pointer group"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="service"
                          value={service}
                          ref={(el) => (serviceRefs.current[index] = el)}
                          className="appearance-none w-3 h-3 border border-gray-700 rounded-full checked:bg-green-500 checked:border-green-500 transition-colors group-hover:border-green-500"
                        />
                        <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10px] opacity-0 checked:opacity-100 pointer-events-none" />
                      </div>
                      <span className="text-gray-300 group-hover:text-green-500 transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Detalles
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  ref={messageRef}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-colors ${
                    focusedFields.message ? 'border-green-500' : ''
                  }`}
                  placeholder={focusedFields.message ? '' : 'Describe tu requerimiento aquí.'}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-4 py-2 bg-green-800 text-black border-2 border-green-600 rounded-lg hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300 disabled:opacity-50"
              >
                {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {state.succeeded && (
                <p className="text-green-500 text-center">¡Gracias por tu mensaje! Te contactaré pronto.</p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Flecha para volver al inicio */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-transparent border border-gray-700 rounded-full hover:bg-green-900 transition-colors duration-300"
          >
            <ArrowUp className="text-white" size={15} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Contacto;