import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Reporte de Motivadores Personales (Octalysis)",
    description: "Evaluar el perfil motivacional individual en base al modelo Octalysis de Yu-kai Chou, para identificar qué factores impulsan más el comportamiento, las decisiones y el compromiso personal.",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/wb4hxv7l76YbcOaLtxNf/media/6892563ee1b5f24fc244b385.png",
    button: "Lo Quiero"
  },
  {
    title: "Reporte Neurotalentos (Benziger)",
    description: "El Test de Neurotalentos de Benziger evalúa tu preferencia natural de pensamiento en cuatro áreas (prefrontal/basal, izquierda/derecha) y detecta el posible “estrés adaptativo”. A partir de situaciones y tareas, identifica fortalezas, zonas de menor preferencia y el costo de operar fuera de tu estilo. Recibirás un perfil claro con recomendaciones para alinear rol, aprendizaje y liderazgo con tu arquitectura cognitiva.",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/wb4hxv7l76YbcOaLtxNf/media/689bbdcc9a2be0820304edbb.png",
    button: "Lo Quiero"
  },
  {
    title: "Rueda de la Vida",
    description: "La Rueda de la Vida es una autoevaluación visual que mide tu satisfacción en áreas clave (salud, finanzas, relaciones, propósito, ocio, etc.). Puntúas cada área de 0 a 5 y obtienes un gráfico tipo “radar” que revela desequilibrios y brechas de bienestar. Con esa lectura, defines prioridades y acciones concretas para pasar de la intención a un plan de mejora.",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/wb4hxv7l76YbcOaLtxNf/media/689bbe0f0e03874be0e6982c.png",
    button: "Lo Quiero"
  },
  {
    title: "Reporte de Valores Personales",
    description: "El test de valores personales es una herramienta diseñada para ayudarte a identificar y comprender los principios que guían tus decisiones y comportamientos. A través de preguntas reflexivas, podrás descubrir cuáles son las creencias y prioridades que más influyen en tu vida. Conocer tus valores te permitirá alinear tus objetivos y acciones con lo que realmente es importante para ti. Además, facilita la toma de decisiones coherentes y la construcción de relaciones más auténticas. Este test es un punto de partida para vivir de manera más consciente y plena.",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/wb4hxv7l76YbcOaLtxNf/media/689bbdccd757ed3a3307cb3b.png",
    button: "Lo Quiero"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};


const SERVICES_BG = "https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzQ4Mjd8MHwxfHNlYXJjaHwxN3x8ZmluYW5jaWFsJTIwZ3Jvd3RofGVufDB8MHx8fDE3NTQzOTIyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080";

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
  <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col relative overflow-hidden bg-black" id="services-section" style={{ position: "relative" }}>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Servicios <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Metricarte</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
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
              className={`bg-[#DAE8FC] rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col md:flex-row items-center hover:shadow-2xl transition-shadow duration-300 group md:min-h-[20rem] lg:min-h-[24rem] ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 md:mb-0 md:mr-8 md:ml-0 md:flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center bg-blue-100 shadow-lg group-hover:scale-105 transition-transform duration-300">
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