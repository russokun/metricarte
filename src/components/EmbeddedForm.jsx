import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, User, MessageSquare, Calendar, Phone, Building } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/use-toast';
const formConfigs = {
  ruedaVida: {
    title: "Rueda de la Vida",
    description: "Completa los campos y evalúa tu bienestar.",
    step1: [
      { name: "nombre", label: "Nombre", type: "text", required: true },
      { name: "apellido", label: "Apellido", type: "text", required: true },
      { name: "mail", label: "Mail", type: "email", required: true },
      { name: "telefono", label: "Teléfono", type: "text", required: true },
      { name: "edad", label: "Edad", type: "select", required: true, options: ["30 a 39", "40 a 49", "50 a 59", "60 a más"] },
      { name: "pais", label: "País de residencia", type: "text", required: true },
      { name: "profesion", label: "Profesión", type: "text", required: true },
      { name: "genero", label: "Género", type: "select", required: true, options: ["Masculino", "Femenino"] }
    ],
    step2: [
      {
        name: "salud",
        label: "Salud",
        description: "¿Cuan satisfech@ estás con tus hábitos alimenticios y saludables (Alimentos, ejercicio, horas de sueño)?",
        type: "rating",
        required: true
      },
      {
        name: "dinero",
        label: "Dinero",
        description: "¿Cuan satisfech@ estás con tu situación financiera?",
        type: "rating",
        required: true
      },
      {
        name: "amor",
        label: "Amor",
        description: "¿Cuan satisfech@ estás con tu vida amorosa?",
        type: "rating",
        required: true
      },
      {
        name: "familia",
        label: "Familia",
        description: "¿Cuan satisfech@ estás con tu relación familiar?",
        type: "rating",
        required: true
      },
      {
        name: "profesionRating",
        label: "Profesión",
        description: "¿Cuan satisfech@ estás con tu desarrollo profesional?",
        type: "rating",
        required: true
      },
      {
        name: "desarrollo",
        label: "Desarrollo personal / espiritual",
        description: "¿Cuan satisfech@ estás con tu desarrollo personal y espiritual?",
        type: "rating",
        required: true
      },
      {
        name: "ocio",
        label: "Ocio",
        description: "¿Cuan satisfech@ estás con tu tiempo libre y actividades recreativas?",
        type: "rating",
        required: true
      },
      {
        name: "amigos",
        label: "Amigos",
        description: "¿Cuan satisfech@ estás con tus relaciones de amistad?",
        type: "rating",
        required: true
      }
    ],
    submitText: "Enviar Evaluación",
  webhookUrl: import.meta.env.VITE_WEBHOOK_URL
  },
  contacto: {
    title: "Contáctanos",
    description: "Déjanos tu mensaje y te responderemos pronto.",
    fields: [
      { name: "nombre", label: "Nombre", type: "text", required: true, icon: User },
      { name: "email", label: "Email", type: "email", required: true, icon: Mail },
      { name: "telefono", label: "Teléfono", type: "text", required: false, icon: Phone },
      { name: "empresa", label: "Empresa", type: "text", required: false, icon: Building },
      { name: "mensaje", label: "Mensaje", type: "textarea", required: true, icon: MessageSquare }
    ],
    submitText: "Enviar Mensaje",
    webhookUrl: "https://n8n.russoftware.com/webhook-test/7c2c7c12-5c0d-4ada-a024-3123b30d33ac"
  }
};

const EmbeddedForm = ({ formType }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const config = formConfigs[formType];

  const validate = () => {
    let newErrors = {};
    if (formType === 'ruedaVida') {
      if (step === 1) {
        config.step1.forEach(field => {
          if (field.required && !formData[field.name]) {
            newErrors[field.name] = "Este campo es obligatorio";
          }
        });
      } else if (step === 2) {
        config.step2.forEach(field => {
          if (field.required && !formData[field.name]) {
            newErrors[field.name] = "Este campo es obligatorio";
          }
        });
      }
    } else {
      config.fields.forEach(field => {
        if (field.required && !formData[field.name]) {
          newErrors[field.name] = "Este campo es obligatorio";
        }
      });
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (formType === 'ruedaVida' && step === 1) {
      setStep(2);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(config.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({});
        setStep(1);
        toast({ title: "¡Mensaje enviado!", description: "Gracias por contactarnos." });
      } else {
        toast({ title: "Error", description: "No se pudo enviar el mensaje.", variant: "destructive" });
      }
    } catch (err) {
      // ...
    }
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 success-checkmark"
      >
        <CheckCircle className="w-10 h-10 text-white" />
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Mensaje Enviado!</h3>
      <p className="text-gray-600 mb-6">
        Gracias por contactarnos. Nuestro equipo revisará tu solicitud y te responderá pronto.
      </p>
      <Button
        onClick={() => setIsSubmitted(false)}
        variant="outline"
        className="border-blue-500 text-blue-600 hover:bg-blue-50"
      >
        Enviar Otro Mensaje
      </Button>
    </motion.div>
    );
  }

  if (formType === 'ruedaVida' && !isSubmitted) {
    return (
      <motion.div
        key={formType + step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl shadow-xl p-6 md:p-10"
        style={{ minHeight: 400 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{config.title}</h3>
          <p className="text-gray-600 mb-6">{config.description}</p>
          {step === 1 && config.step1.map((field) => (
            <div key={field.name} className="form-group">
              {/* ...renderizar campo como en los otros forms... */}
              {field.type === 'select' ? (
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <select
                    className={`form-input w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors[field.name] ? 'border-red-500' : ''}`}
                    value={formData[field.name] || ''}
                    onChange={e => handleInputChange(field.name, e.target.value)}
                  >
                    <option value="">Selecciona...</option>
                    {field.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors[field.name] && <div className="text-red-500 text-xs mt-1">{errors[field.name]}</div>}
                </div>
              ) : (
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    className={`form-input w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors[field.name] ? 'border-red-500' : ''}`}
                    value={formData[field.name] || ''}
                    onChange={e => handleInputChange(field.name, e.target.value)}
                  />
                  {errors[field.name] && <div className="text-red-500 text-xs mt-1">{errors[field.name]}</div>}
                </div>
              )}
            </div>
          ))}
          {step === 2 && config.step2.map((field) => (
            <div key={field.name} className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
              {field.description && (
                <div className="text-gray-500 text-sm mb-2">{field.description}</div>
              )}
              <div className="flex gap-2">
                {[1,2,3,4,5].map(val => (
                  <button
                    type="button"
                    key={val}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-lg ${formData[field.name] === val ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700 border-gray-300'} hover:bg-blue-100 transition-colors`}
                    onClick={() => handleInputChange(field.name, val)}
                  >
                    {val}
                  </button>
                ))}
              </div>
              {errors[field.name] && <div className="text-red-500 text-xs mt-1">{errors[field.name]}</div>}
            </div>
          ))}
          <div className="flex gap-4 mt-8">
            {step === 2 && (
              <Button type="button" className="btn-secondary flex-1" onClick={() => setStep(1)}>
                Volver
              </Button>
            )}
            <Button type="submit" className="btn-primary flex-1 py-3 text-lg font-semibold" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin w-5 h-5 mr-2 inline" /> : null}
              {step === 1 ? 'Siguiente' : config.submitText}
            </Button>
          </div>
        </form>
      </motion.div>
    );
  }

  // Render for forms with fields (e.g. contacto)
  if (config && config.fields && Array.isArray(config.fields)) {
    return (
      <motion.div
        key={formType}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl shadow-xl p-6 md:p-10"
        style={{ minHeight: 400 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{config.title}</h3>
          <p className="text-gray-600 mb-6">{config.description}</p>
          {config.fields.map((field) => (
            <div key={field.name} className="form-group">
              {field.type === 'select' ? (
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <select
                    className={`form-input w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors[field.name] ? 'border-red-500' : ''}`}
                    value={formData[field.name] || ''}
                    onChange={e => handleInputChange(field.name, e.target.value)}
                  >
                    <option value="">Selecciona...</option>
                    {field.options && field.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors[field.name] && <div className="text-red-500 text-xs mt-1">{errors[field.name]}</div>}
                </div>
              ) : field.type === 'textarea' ? (
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <textarea
                    className={`form-input w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors[field.name] ? 'border-red-500' : ''}`}
                    value={formData[field.name] || ''}
                    onChange={e => handleInputChange(field.name, e.target.value)}
                  />
                  {errors[field.name] && <div className="text-red-500 text-xs mt-1">{errors[field.name]}</div>}
                </div>
              ) : (
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    className={`form-input w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors[field.name] ? 'border-red-500' : ''}`}
                    value={formData[field.name] || ''}
                    onChange={e => handleInputChange(field.name, e.target.value)}
                  />
                  {errors[field.name] && <div className="text-red-500 text-xs mt-1">{errors[field.name]}</div>}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-4 mt-8">
            <Button type="submit" className="btn-primary flex-1 py-3 text-lg font-semibold" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin w-5 h-5 mr-2 inline" /> : null}
              {config.submitText}
            </Button>
          </div>
        </form>
      </motion.div>
    );
  }

  // If formType is not found, show a message
  return (
    <div className="text-center text-gray-500 py-12">
      No se encontró el formulario seleccionado.<br />
      Por favor revisa la configuración de <code>formConfigs</code>.
    </div>
  );

}

export default EmbeddedForm;