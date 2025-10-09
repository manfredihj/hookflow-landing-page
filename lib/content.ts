
export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export type Landing = {
  title: string;
  description: string;
  cta: string;
  calLink?: string;
  features: { title: string; text: string }[];
  ctaBlock?: { text: string; cta: string };
  videoUrl?: string;
  videoTitle?: string;
  showPricing?: boolean;
  pricingTitle?: string;
  pricingSubtitle?: string;
  pricingTiers?: PricingTier[];
  niche?: string;
  fbEventParams?: {
    content_name?: string;
    content_ids?: string[];
    content_type?: string;
    value?: number;
    currency?: string;
  };
};

export const LANDINGS: Record<string, Landing> = {
  ecommerce: {
    title: "Duplicá tus ventas recuperando carritos por WhatsApp 🛒",
    description: "HookflowAI recupera el doble de carritos abandonados que tus campañas de email. Integración rápida y resultados medibles.",
    cta: "Agendar reunión",
    calLink: "https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento",
    niche: "ecommerce",
    fbEventParams: {
      content_name: "Landing E-commerce",
      content_ids: ["ecommerce-landing"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "Integración automática", text: "Conectá tu Tiendanube, Shopify o WooCommerce en minutos." },
      { title: "IA de seguimiento", text: "Tu agente conversa con los clientes para cerrar la venta 24/7." },
      { title: "Panel de resultados", text: "Mirá tus métricas de recuperación en tiempo real." }
    ],
    ctaBlock: { text: "¿Listo para recuperar el doble de carritos?", cta: "Empezar ahora" },
    videoUrl: "https://www.youtube.com/watch?v=3xGyVZOJb0k",
    videoTitle: "Descubrí cómo funciona HookflowAI",
    pricingTitle: "Planes que escalan con tu negocio",
    pricingSubtitle: "Elegí el plan perfecto para tu e-commerce. Sin permanencia, cancelá cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "$49/mes",
        description: "Perfecto para comenzar",
        features: [
          "Hasta 500 carritos recuperados/mes",
          "Integración con 1 tienda",
          "Soporte por email",
          "Panel de métricas básico"
        ],
        cta: "Empezar prueba gratis"
      },
      {
        name: "Growth",
        price: "$149/mes",
        description: "Para e-commerce en crecimiento",
        features: [
          "Hasta 2,000 carritos recuperados/mes",
          "Integración con 3 tiendas",
          "Soporte prioritario",
          "Panel avanzado + reportes",
          "Personalización de mensajes"
        ],
        cta: "Empezar prueba gratis",
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "Personalizado",
        description: "Para grandes volúmenes",
        features: [
          "Carritos ilimitados",
          "Tiendas ilimitadas",
          "Soporte dedicado 24/7",
          "Marca blanca",
          "API personalizada"
        ],
        cta: "Contactar ventas"
      }
    ]
  },
  inmobiliarias: {
    title: "Tu agente inmobiliario con IA califica leads 24/7 🏠",
    description: "Olvidate de responder manualmente. La IA pregunta, filtra y deriva solo leads listos para cerrar.",
    cta: "Agendar reunión",
    calLink: "https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento",
    niche: "real_estate",
    fbEventParams: {
      content_name: "Landing Inmobiliarias",
      content_ids: ["inmobiliarias-landing"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "Filtro inteligente", text: "Compra / alquiler, presupuesto, zona y tipo de propiedad." },
      { title: "Calificación automática", text: "Llega a tu CRM con toda la información relevante." },
      { title: "Atención inmediata", text: "Respuestas en segundos por WhatsApp, todo el día." }
    ],
    ctaBlock: { text: "Probá la demo guiada para inmobiliarias", cta: "Quiero la demo" },
    videoUrl: "https://www.youtube.com/watch?v=3xGyVZOJb0k",
    videoTitle: "Mirá cómo un agente IA califica tus leads",
    pricingTitle: "Invertí en calidad de leads, no en tiempo",
    pricingSubtitle: "Planes diseñados para inmobiliarias que quieren escalar sin aumentar costos operativos.",
    pricingTiers: [
      {
        name: "Básico",
        price: "$79/mes",
        description: "Ideal para agentes independientes",
        features: [
          "Hasta 300 consultas/mes",
          "1 cuenta de WhatsApp",
          "Calificación básica de leads",
          "Integración con email"
        ],
        cta: "Probar gratis"
      },
      {
        name: "Profesional",
        price: "$199/mes",
        description: "Para inmobiliarias medianas",
        features: [
          "Hasta 1,000 consultas/mes",
          "3 cuentas de WhatsApp",
          "Integración CRM completa",
          "Reportes detallados",
          "Soporte prioritario"
        ],
        cta: "Probar gratis",
        highlighted: true
      },
      {
        name: "Corporativo",
        price: "A medida",
        description: "Para redes inmobiliarias",
        features: [
          "Consultas ilimitadas",
          "Cuentas ilimitadas",
          "Multi-sucursal",
          "API personalizada",
          "Onboarding dedicado"
        ],
        cta: "Solicitar cotización"
      }
    ]
  },
  agencias: {
    title: "Ofrecé automatizaciones IA a tus clientes 🚀",
    description: "Agregá un servicio rentable sin sumar estructura: agentes de IA que califican leads y atienden consultas.",
    cta: "Agendar reunión",
    calLink: "https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento",
    niche: "agencies",
    fbEventParams: {
      content_name: "Landing Agencias",
      content_ids: ["agencias-landing"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "Marca blanca", text: "Operá con tu logo, colores y dominio." },
      { title: "Capacitación incluida", text: "Onboarding y materiales para tu equipo." },
      { title: "Escalá tus ingresos", text: "Multiplicá servicios sin aumentar headcount." }
    ],
    ctaBlock: { text: "¿Querés lanzar tu oferta IA en 7 días?", cta: "Aplicar ahora" },
    videoUrl: "https://www.youtube.com/watch?v=3xGyVZOJb0k",
    videoTitle: "Convertite en partner y vendé soluciones IA",
    pricingTitle: "Programa de Partners",
    pricingSubtitle: "Modelos flexibles para que agregues valor sin riesgo ni infraestructura.",
    pricingTiers: [
      {
        name: "Reseller",
        price: "20% comisión",
        description: "Vendé y nosotros operamos",
        features: [
          "Reventa de plataforma HookflowAI",
          "Tus clientes, nuestra operación",
          "Material de ventas incluido",
          "Soporte técnico para tus clientes"
        ],
        cta: "Aplicar como reseller"
      },
      {
        name: "White Label",
        price: "$499/mes",
        description: "Tu marca, nuestra tecnología",
        features: [
          "Plataforma con tu identidad",
          "Dominio y branding propio",
          "Panel para gestionar clientes",
          "Capacitación comercial",
          "Soporte técnico dedicado"
        ],
        cta: "Solicitar demo",
        highlighted: true
      },
      {
        name: "Enterprise Partner",
        price: "A medida",
        description: "Soluciones personalizadas",
        features: [
          "Desarrollo de features custom",
          "Integraciones exclusivas",
          "Revenue share negociable",
          "Co-marketing y eventos",
          "Equipo técnico asignado"
        ],
        cta: "Agendar reunión"
      }
    ]
  },
  "ecommerce-carritos": {
    title: "Recuperación de carritos abandonados por WhatsApp",
    description: "Recuperá hasta un 40% más de ventas automatizando el seguimiento por WhatsApp con una IA que será persuasiva y amigable para animar y guiar a cada cliente de forma personalizada.",
    cta: "Agendar reunión",
    calLink: "https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento",
    niche: "ecommerce",
    fbEventParams: {
      content_name: "Landing Carritos Abandonados",
      content_ids: ["ecommerce-carritos-landing"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      {
        title: "¿Por qué se pierden tantas ventas en ecommerce?",
        text: "Más del 70% de los carritos se abandonan. La mayoría de tus visitantes agregan productos al carrito… y nunca completan la compra. En mobile, el abandono llega al 85%. 🛑 Email no alcanza. 🟢 WhatsApp tiene una tasa de apertura superior al 95%."
      },
      {
        title: "Carrito Abandonado",
        text: "Detectamos cuándo alguien abandona el carrito"
      },
      {
        title: "Esperamos",
        text: "Esperamos unos minutos (configurable)"
      },
      {
        title: "Enviamos mensaje",
        text: "Le enviamos un mensaje personalizado por WhatsApp con un link directo para continuar la compra"
      }
    ],
    ctaBlock: { text: "No dejes más ventas en el camino", cta: "Agendar reunión" },
    videoUrl: "https://www.youtube.com/watch?v=3xGyVZOJb0k",
    videoTitle: "¿Cómo funciona? Automatizamos el seguimiento por WhatsApp en 3 pasos simples",
    pricingTitle: "Todo listo en tan solo 4 semanas",
    pricingSubtitle: "Descubre cómo transformamos tus procesos con agentes de IA adaptados a tu negocio en solo cuatro semanas",
    pricingTiers: [
      {
        name: "Semana 1: Diseño personalizado",
        price: "",
        description: "Nos sumergimos en tus procesos de ventas para configurar un agente adaptado a tus necesidades.",
        features: [
          "Análisis de procesos actuales",
          "Definición de objetivos",
          "Configuración inicial del agente",
          "Personalización de mensajes"
        ],
        cta: "Agendar reunión"
      },
      {
        name: "Semana 2: Desarrollo del agente",
        price: "",
        description: "Creamos un agente de IA alineado con los objetivos específicos de tu negocio.",
        features: [
          "Desarrollo de flujos conversacionales",
          "Entrenamiento de IA personalizada",
          "Configuración de respuestas automáticas",
          "Pruebas internas"
        ],
        cta: "Agendar reunión",
        highlighted: true
      },
      {
        name: "Semana 3: Integración con sistemas",
        price: "",
        description: "Conectamos el agente con tu CRM y herramientas existentes para un flujo de trabajo continuo.",
        features: [
          "Integración con tu plataforma de e-commerce",
          "Conexión con WhatsApp Business API",
          "Sincronización con CRM",
          "Configuración de webhooks"
        ],
        cta: "Agendar reunión"
      },
      {
        name: "Semana 4: Optimización continua",
        price: "",
        description: "Supervisamos y ajustamos el agente para garantizar un rendimiento sobresaliente en todo momento.",
        features: [
          "Monitoreo de métricas en tiempo real",
          "Ajustes basados en resultados",
          "Capacitación de tu equipo",
          "Soporte continuo"
        ],
        cta: "Agendar reunión"
      }
    ]
  },
  gastronomia: {
    title: "Automatizá la atención de tu restaurante por WhatsApp 🍽️",
    description: "Tu agente de IA responde consultas, toma pedidos y gestiona reservas 24/7. Atención personalizada sin contratar más personal.",
    cta: "Agendar reunión",
    calLink: "https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento",
    niche: "gastronomy",
    fbEventParams: {
      content_name: "Landing Gastronomía",
      content_ids: ["gastronomia-landing"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "Atención 24/7", text: "Tu agente de IA responde consultas sobre el menú, horarios, ubicación y disponibilidad en cualquier momento." },
      { title: "Toma de pedidos", text: "Recibe pedidos de delivery o takeaway directamente por WhatsApp sin perder ningún cliente." },
    ],
    ctaBlock: { text: "¿Listo para automatizar la atención de tu local?", cta: "Empezar ahora" },
    videoUrl: "https://www.youtube.com/watch?v=3xGyVZOJb0k",
    videoTitle: "Mirá cómo funciona HookflowAI para gastronomía",
    showPricing: true,
    pricingTitle: "Planes para locales gastronómicos",
    pricingSubtitle: "Elegí el plan perfecto según el volumen de tu negocio. Sin permanencia, cancelá cuando quieras.",
    pricingTiers: [
      {
        name: "STARTER",
        price: "USD 69/mes",
        description: "Foodtrucks, bares chicos o pizzerías con bajo volumen",
        features: [
          "300 conversaciones IA / mes",
          "1 usuario",
          "1 conexión de WhatsApp",
          "Costo adicional: USD 0.35 por conversación extra",
          "Soporte por email"
        ],
        cta: "Empezar prueba gratis"
      },
      {
        name: "GROW",
        price: "USD 129/mes",
        description: "Restaurantes con pedidos diarios o reservas por WhatsApp",
        features: [
          "1,000 conversaciones IA / mes",
          "3 usuarios",
          "1 conexión de WhatsApp",
          "Costo adicional: USD 0.25 por conversación extra",
          "Soporte prioritario",
          "Panel de métricas avanzado"
        ],
        cta: "Empezar prueba gratis",
        highlighted: true
      },
      {
        name: "PRO",
        price: "USD 249/mes",
        description: "Franquicias o cadenas con atención 24/7 y varios locales",
        features: [
          "3,000 conversaciones IA / mes",
          "5 usuarios",
          "2 conexiones de WhatsApp",
          "Costo adicional: USD 0.20 por conversación extra",
          "Soporte dedicado 24/7",
          "Integraciones personalizadas",
          "Reportes detallados"
        ],
        cta: "Contactar ventas"
      }
    ]
  }
};

export async function getLandingContent(slug: string) {
  return LANDINGS[slug];
}
