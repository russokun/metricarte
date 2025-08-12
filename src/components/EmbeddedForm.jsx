import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, User, MessageSquare, Calendar, Phone, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const EmbeddedForm = ({ formType }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  // Reset form when type changes
  useEffect(() => {
    setFormData({});
    setIsSubmitted(false);
    setErrors({});
  }, [formType]);

  const formConfigs = {
    contact: {
      title: 'Formulario de Contacto',
      description: 'Conecta con nuestro equipo de expertos',
      fields: [
        { name: 'name', label: 'Nombre completo', type: 'text', icon: User, required: true },
        { name: 'email', label: 'Correo electrónico', type: 'email', icon: Mail, required: true },
        { name: 'company', label: 'Empresa', type: 'text', icon: Building, required: false },
        { name: 'phone', label: 'Teléfono', type: 'tel', icon: Phone, required: false },
        { name: 'message', label: 'Mensaje', type: 'textarea', icon: MessageSquare, required: true }
      ],
      webhookUrl: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE === 'production')
        ? 'https://n8n.russoftware.com/webhook/7c2c7c12-5c0d-4ada-a024-3123b30d33ac'
        : 'https://n8n.russoftware.com/webhook-test/7c2c7c12-5c0d-4ada-a024-3123b30d33ac',
      submitText: 'Enviar Mensaje'
    },
    demo: {
      title: 'Solicitar Demostración',
      description: 'Agenda una demo personalizada de Metricarte',
      fields: [
        { name: 'name', label: 'Nombre completo', type: 'text', icon: User, required: true },
        { name: 'email', label: 'Correo electrónico', type: 'email', icon: Mail, required: true },
        { name: 'company', label: 'Empresa', type: 'text', icon: Building, required: true },
        { name: 'phone', label: 'Teléfono', type: 'tel', icon: Phone, required: true },
        { name: 'employees', label: 'Número de empleados', type: 'select', icon: User, required: true, options: [
          '1-10', '11-50', '51-200', '201-1000', '1000+'
        ]},
        { name: 'preferredDate', label: 'Fecha preferida', type: 'date', icon: Calendar, required: true },
        { name: 'requirements', label: 'Requerimientos específicos', type: 'textarea', icon: MessageSquare, required: false }
      ],
    webhookUrl: 'https://n8n.russoftware.com/webhook-test/7c2c7c12-5c0d-4ada-a024-3123b30d33ac',
      submitText: 'Agendar Demo'
    },
    support: {
      title: 'Soporte Técnico',
      description: 'Obtén ayuda de nuestro equipo de soporte',
      fields: [
        { name: 'name', label: 'Nombre completo', type: 'text', icon: User, required: true },
        { name: 'email', label: 'Correo electrónico', type: 'email', icon: Mail, required: true },
        { name: 'priority', label: 'Prioridad', type: 'select', icon: AlertCircle, required: true, options: [
          'Baja', 'Media', 'Alta', 'Crítica'
        ]},
        { name: 'category', label: 'Categoría', type: 'select', icon: MessageSquare, required: true, options: [
          'Error técnico', 'Pregunta general', 'Solicitud de función', 'Problema de cuenta'
        ]},
        { name: 'description', label: 'Descripción del problema', type: 'textarea', icon: MessageSquare, required: true }
      ],
    webhookUrl: 'https://n8n.russoftware.com/webhook-test/7c2c7c12-5c0d-4ada-a024-3123b30d33ac',
      submitText: 'Enviar Ticket'
    }
  };

  const config = formConfigs[formType];

  const validateForm = () => {
    const newErrors = {};
    
    config.fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} es requerido`;
      }
      
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Formato de email inválido';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Error de validación",
        description: "Por favor corrige los errores en el formulario",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Enviar datos reales al endpoint de n8n
      const response = await fetch(config.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType,
          timestamp: new Date().toISOString(),
          ...formData
        })
      });
      if (!response.ok) throw new Error('Error en el envío');
      setIsSubmitted(true);
      toast({
        title: "¡Enviado exitosamente!",
        description: "Hemos recibido tu información. Te contactaremos pronto.",
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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

  return (
    <motion.div
      key={formType}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{config.title}</h3>
        <p className="text-gray-600">{config.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {config.fields.map((field) => {
          const IconComponent = field.icon;
          
          return (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium text-gray-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className={`form-input w-full pl-12 pr-4 py-3 rounded-xl resize-none h-32 ${
                      errors[field.name] ? 'border-red-500 error-shake' : ''
                    }`}
                    placeholder={`Ingresa tu ${field.label.toLowerCase()}`}
                  />
                ) : field.type === 'select' ? (
                  <select
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className={`form-input w-full pl-12 pr-4 py-3 rounded-xl ${
                      errors[field.name] ? 'border-red-500 error-shake' : ''
                    }`}
                  >
                    <option value="">Selecciona una opción</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className={`form-input w-full pl-12 pr-4 py-3 rounded-xl ${
                      errors[field.name] ? 'border-red-500 error-shake' : ''
                    }`}
                    placeholder={`Ingresa tu ${field.label.toLowerCase()}`}
                  />
                )}
              </div>
              
              <AnimatePresence>
                {errors[field.name] && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-sm flex items-center space-x-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors[field.name]}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary py-4 rounded-xl text-lg font-semibold group"
          >
            {isLoading ? (
              <>
                <div className="loading-spinner mr-2" />
                Enviando...
              </>
            ) : (
              <>
                {config.submitText}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>
      </form>

      {/* Technical Implementation Notes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200"
      >
        <h4 className="font-semibold text-blue-800 mb-2">🔧 Notas de Implementación Técnica:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• <strong>Webhook URL:</strong> {config.webhookUrl}</li>
          <li>• <strong>Método:</strong> POST con Content-Type: application/json</li>
          <li>• <strong>CORS:</strong> Configurar headers en n8n para permitir origen del dominio</li>
          <li>• <strong>Validación:</strong> Implementar validación tanto en frontend como en n8n</li>
          <li>• <strong>Respuesta:</strong> n8n debe retornar status 200 con mensaje de confirmación</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default EmbeddedForm;