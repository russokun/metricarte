import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MetricsSection from '@/components/MetricsSection.jsx';
import FormSection from '@/components/FormSection.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Metricarte - Análisis de Métricas Profesional</title>
        <meta name="description" content="Plataforma profesional para análisis de métricas y automatización de procesos empresariales con formularios inteligentes." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <MetricsSection />
        <FormSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;