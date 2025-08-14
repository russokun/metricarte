import React from "react";

const testimonials = [
  {
    name: "Ana Torres",
    role: "CEO, Innovatech",
    quote:
      "MetricArte nos ayudó a visualizar nuestros datos de manera clara y tomar mejores decisiones. ¡Excelente experiencia!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Carlos Méndez",
    role: "CTO, DataWorks",
    quote:
      "La integración fue rápida y el soporte técnico impecable. Recomiendo MetricArte a cualquier empresa que valore la analítica.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Lucía Ramírez",
    role: "Gerente de Marketing, Creativa",
    quote:
      "La plataforma es intuitiva y el equipo siempre está dispuesto a ayudar. ¡5 estrellas!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-20"
      id="testimonios"
      style={{ backgroundColor: '#DAE8FC' }}
    >
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1E3C94" fillOpacity="0.08" d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,117.3C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-[#1E3C94] drop-shadow-lg">¿Qué dicen de nosotros?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#EFF6FF] p-8 rounded-3xl shadow-xl border border-[#1E3C94]/20 hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-[#1E3C94]/30 shadow-lg mx-auto"
                  style={{ boxShadow: '0 4px 24px #1E3C9422' }}
                />
                <span className="absolute -bottom-2 right-2 bg-[#1E3C94] text-white text-xs px-2 py-1 rounded-full shadow">Top</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, star) => (
                  <svg
                    key={star}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill={star < t.rating ? '#FFD700' : '#E5E7EB'}
                    stroke="#1E3C94"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-0.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="font-semibold text-[#1F2937] text-lg mb-1">{t.name}</p>
              <p className="text-sm text-[#1E3C94] mb-4">{t.role}</p>
              <p className="text-[#111827] italic text-base leading-relaxed">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
