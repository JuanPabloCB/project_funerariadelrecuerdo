import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      {/* Aquí siguen las demás secciones */}
    </main>
  );
}
