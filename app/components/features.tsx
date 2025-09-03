"use client";
import { Lightbulb, Users, TreePine, Home, BarChart3 } from "lucide-react";

const FEATURES = [
  {
    icon: Lightbulb,
    title: "Innovación",
    desc: "Somos un parque cementerio único gracias a nuestra avanzada arquitectura e ingeniería.",
  },
  {
    icon: Users,
    title: "Atención profesional",
    desc: "Equipo altamente capacitado y dedicado a brindar un servicio con enfoque humano.",
  },
  {
    icon: TreePine,
    title: "Entorno acogedor",
    desc: "Belleza, paz y seguridad que invitan a compartir visitas con familiares y amigos.",
  },
  {
    icon: Home,
    title: "Propiedades y Planes",
    desc: "Diseñamos opciones con las máximas facilidades para su tranquilidad.",
  },
  {
    icon: BarChart3,
    title: "Inversión segura",
    desc: "Adquiera una propiedad con una revalorización constante en el tiempo.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-3xl font-serif font-bold text-gray-900 mb-16">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <feature.icon className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
