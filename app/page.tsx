// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
              PR
            </span>
            <span className="font-semibold">Parque del Recuerdo</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#preguntas" className="hover:text-blue-600">Preguntas</a>
            <Link
              href="#contacto"
              className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
            >
              Contáctanos
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Un lugar para recordar, <span className="text-blue-600">un sitio para estar</span>.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Acompañamos a las familias con servicios integrales y humanos.
              Conoce nuestros planes y atención personalizada.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#servicios"
                className="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
              >
                Ver servicios
              </Link>
              <Link
                href="#contacto"
                className="rounded-lg border border-gray-300 px-5 py-3 hover:bg-gray-100 transition"
              >
                Hablar con un asesor
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">★</span>
              Atención 24/7 y asesoría personalizada
            </div>
          </div>

          {/* Tarjeta lateral */}
          <div className="rounded-2xl border bg-white shadow-sm p-6">
            <h3 className="text-lg font-semibold">Agenda una visita</h3>
            <p className="text-sm text-gray-500 mt-1">Déjanos tus datos y te contactamos.</p>
            <form className="mt-4 grid gap-3">
              <input className="border rounded-lg px-3 py-2" placeholder="Nombre completo" />
              <input className="border rounded-lg px-3 py-2" placeholder="Correo electrónico" />
              <input className="border rounded-lg px-3 py-2" placeholder="Celular" />
              <button className="rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
                Enviar
              </button>
              <p className="text-xs text-gray-500">
                *Este formulario es de ejemplo (sin lógica). Luego lo conectamos a tu backend/Zapier.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold">Nosotros</h2>
          <p className="mt-3 text-gray-600">
            Brindamos espacios de paz y ceremonias significativas. Nuestro equipo
            acompaña cada paso con empatía y profesionalismo.
          </p>
        </div>
      </section>

      {/* Servicios / Features */}
      <section id="servicios" className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Planes integrales", d: "Opciones flexibles y accesibles para cada familia." },
              { t: "Ceremonias personalizadas", d: "Coordina detalles significativos y homenajes especiales." },
              { t: "Asesoría 24/7", d: "Atención inmediata ante cualquier necesidad." },
              { t: "Espacios verdes", d: "Áreas de paz y reflexión, cuidadas todo el año." },
              { t: "Trámites simplificados", d: "Te guiamos para reducir tiempos y estrés." },
              { t: "Apoyo psicológico", d: "Acompañamiento profesional para el proceso." },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 hover:shadow-sm transition">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-700 grid place-items-center mb-3">✓</div>
                <h3 className="font-semibold">{f.t}</h3>
                <p className="text-sm text-gray-600 mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas */}
      <section id="preguntas" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-4">
            <details className="rounded-lg border bg-white p-4">
              <summary className="cursor-pointer font-medium">¿Cómo agendo una visita?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Completa el formulario o contáctanos por WhatsApp; coordinamos fecha y hora.
              </p>
            </details>
            <details className="rounded-lg border bg-white p-4">
              <summary className="cursor-pointer font-medium">¿Ofrecen planes a futuro?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Sí, tenemos planes preventivos con facilidades de pago.
              </p>
            </details>
            <details className="rounded-lg border bg-white p-4">
              <summary className="cursor-pointer font-medium">¿Puedo personalizar la ceremonia?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Por supuesto. Nuestro equipo te ayuda a diseñar una despedida significativa.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-white text-2xl font-semibold">
            ¿Listo para hablar con un asesor?
          </h3>
          <Link
            href="#"
            className="bg-white text-blue-700 px-5 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Escríbenos ahora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Parque del Recuerdo. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">Privacidad</a>
            <a href="#" className="hover:text-blue-600">Términos</a>
            <a href="#" className="hover:text-blue-600">Soporte</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
