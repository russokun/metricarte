import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Reporte de Motivadores Personales (Octalysis)",
    description: "Evaluar el perfil motivacional individual en base al modelo Octalysis de Yu-kai Chou, para identificar qué factores impulsan más el comportamiento, las decisiones y el compromiso personal.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    button: "Solicitar Test"
  },
  {
    title: "Reporte Neurotalentos (Benziger)",
    description: "El Test de Neurotalentos de Benziger evalúa tu preferencia natural de pensamiento en cuatro áreas (prefrontal/basal, izquierda/derecha) y detecta el posible “estrés adaptativo”. A partir de situaciones y tareas, identifica fortalezas, zonas de menor preferencia y el costo de operar fuera de tu estilo. Recibirás un perfil claro con recomendaciones para alinear rol, aprendizaje y liderazgo con tu arquitectura cognitiva.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    button: "Solicitar Test"
  },
  {
    title: "Rueda de la Vida",
    description: "La Rueda de la Vida es una autoevaluación visual que mide tu satisfacción en áreas clave (salud, finanzas, relaciones, propósito, ocio, etc.). Puntúas cada área de 0 a 5 y obtienes un gráfico tipo “radar” que revela desequilibrios y brechas de bienestar. Con esa lectura, defines prioridades y acciones concretas para pasar de la intención a un plan de mejora.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    button: "Solicitar Test"
  },
  {
    title: "Reporte de Valores Personales",
    description: "El test de valores personales es una herramienta diseñada para ayudarte a identificar y comprender los principios que guían tus decisiones y comportamientos. A través de preguntas reflexivas, podrás descubrir cuáles son las creencias y prioridades que más influyen en tu vida. Conocer tus valores te permitirá alinear tus objetivos y acciones con lo que realmente es importante para ti. Además, facilita la toma de decisiones coherentes y la construcción de relaciones más auténticas. Este test es un punto de partida para vivir de manera más consciente y plena.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80",
    button: "Solicitar Test"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};


const SERVICES_BG = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80";

const ServicesSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const bgOpacity = inView ? 1 : 0;

  return (
  <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col relative overflow-hidden" id="services-section" style={{ position: "relative" }}>
      {/* Imagen de fondo animada */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: bgOpacity }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
        }}
      />
      {/* Overlay para oscurecer la imagen y mejorar contraste */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: bgOpacity }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Metricarte</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Nuestros informes ayudan a generar mayor alineación estratégica en personas y equipos.
          </p>
        </motion.div>
        <div className="flex flex-col gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#DAE8FC] rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-0 md:mr-8 rounded-2xl overflow-hidden flex items-center justify-center bg-blue-100 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center md:text-left">{service.title}</h3>
                <p className="text-gray-700 text-base mb-4 text-center md:text-left">{service.description}</p>
                <button
                  className="btn-primary px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 transition-colors shadow-md"
                  onClick={() => {
                    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {service.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;