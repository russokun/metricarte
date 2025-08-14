import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Cuantos test puedo generar x mes?",
    answer:
      "Puedes generar hasta 500 test test mensuales , no acumulables.",
  },
  {
    question: "¿Me llega copia del test que hace mi coachee?",
    answer:
      "Desde nuestra interfaz de cliente tu le envías el enlace a tu coachee para que complete el test, al momento de llenar el registro te llegará copia para que puedeas generar tu sesión.",
  },
  {
    question: "¿En el caso de hacer tests masivos puedo acceder a una planilla con todos los resultados?",
    answer:
      "Asi es, te podemos exportar los registros de los test realizados a una planilla de calculo para que puedas generar reportes grupales y tabular datos masivos.",
  },
  {
    question: "¿Si cancelo mi suscripción me entregan mi data?",
    answer:
      "Asi es, si das de baja nuestro servicio puedes descargar toda tu data sin problema y sin costos ocultos.",
  },
  {
    question: "¿Que tan confiables son sus tests?",
    answer:
      "Nuestros tests han sido desarrollados por un equipo multidisciplinario validado y probado en cientos de personas con un 97% de aceptación.",
  },
  {
    question: "¿Cuanto se demora en procesar un informe desde que mi cliente llena una encuesta?",
    answer:
      "Antes de una hora tendrás el informe en tu correo y en el correo de tu coachee.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
  <section className="py-16 px-4" style={{ backgroundColor: '#DAE8FC' }}>
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1E3C94" fillOpacity="0.08" d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,117.3C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-[#1E3C94] drop-shadow-lg">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              className={`transition-all duration-300 bg-[#EFF6FF] rounded-2xl shadow-xl border border-[#1E3C94]/20 ${openIndex === i ? 'ring-2 ring-[#1E3C94]' : ''}`}
            >
              <button
                className="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 font-semibold text-[#1F2937] text-lg">
                  <svg className="flex-shrink-0 w-6 h-6 xs:w-6 xs:h-6" fill="none" stroke="#1E3C94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                  <span className="break-words max-w-full xs:max-w-xs sm:max-w-none">{faq.question}</span>
                </span>
                <span className="ml-4 text-[#1E3C94] text-2xl font-bold">{openIndex === i ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-8 pb-6 text-[#111827] border-t border-[#1E3C94]/20 animate-fadein"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 0.5s; }
      `}</style>
    </section>
  );
}
