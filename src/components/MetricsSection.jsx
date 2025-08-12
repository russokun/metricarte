import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Target, Clock, Zap } from 'lucide-react';

const MetricsSection = () => {
  const metrics = [
    {
      icon: BarChart3,
      title: "Análisis Avanzado",
      value: "99.9%",
      description: "Precisión en métricas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Usuarios Activos",
      value: "15K+",
      description: "Empresas confían en nosotros",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento",
      value: "+250%",
      description: "Mejora en eficiencia",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Objetivos",
      value: "95%",
      description: "Tasa de cumplimiento",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Tiempo Real",
      value: "<1s",
      description: "Latencia de datos",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Automatización",
      value: "24/7",
      description: "Workflows activos",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Tecnologia al Alcance 
            </span>
            {' '} de tu mano
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Descubre cómo Metricarte revoluciona la forma de medir y mejorar la productividad de tu equipo a través de diagnósticos automatizados y análisis precisos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="metric-card rounded-2xl p-6 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                      {metric.value}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {metric.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {metric.description}
                </p>

                {/* Progress bar animation */}
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para optimizar tus métricas?
            </h3>
            <p className="text-white/80 mb-6 text-lg">
              Únete a miles de empresas que ya transformaron su toma de decisiones con Metricarte
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-xl font-semibold text-lg"
              onClick={() => {
                // Scroll to form section
                document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Comenzar Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;