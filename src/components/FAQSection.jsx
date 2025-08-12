import React, { useState } from "react";

const faqs = [
  {
    question: "¿Qué es MetricArte?",
    answer:
      "MetricArte es una plataforma de visualización y análisis de datos pensada para empresas que buscan tomar decisiones informadas.",
  },
  {
    question: "¿Cómo puedo integrar MetricArte en mi empresa?",
    answer:
      "La integración es sencilla y contamos con soporte técnico para acompañarte en cada paso.",
  },
  {
    question: "¿Ofrecen soporte personalizado?",
    answer:
      "Sí, nuestro equipo de expertos está disponible para ayudarte según las necesidades de tu empresa.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito, transferencias bancarias y otros métodos digitales.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#EFF6FF] via-white to-[#1E3C94]" id="faq">
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1E3C94" fillOpacity="0.08" d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,117.3C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-[#1E3C94] drop-shadow-lg">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`transition-all duration-300 bg-[#EFF6FF] rounded-2xl shadow-xl border border-[#1E3C94]/20 ${openIndex === i ? 'ring-2 ring-[#1E3C94]' : ''}`}
            >
              <button
                className="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="flex items-center gap-3 font-semibold text-[#1F2937] text-lg">
                  <svg width="24" height="24" fill="none" stroke="#1E3C94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                  {faq.question}
                </span>
                <span className="ml-4 text-[#1E3C94] text-2xl font-bold">{openIndex === i ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {openIndex === i && (
                  <div className="px-8 pb-6 text-[#111827] border-t border-[#1E3C94]/20 animate-fadein">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
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
