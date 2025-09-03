"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bree_Serif } from "next/font/google";

// Bree Serif (esta familia sólo tiene weight 400)
const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

const nav = [
  { href: "/", label: "Inicio" },
  { href: "#", label: "Servicios", chevron: true },
  { href: "#", label: "Camposantos", chevron: true },
  { href: "#", label: "Cementerio Lima", chevron: true },
  { href: "#", label: "Más información" },
  { href: "/noticias", label: "Noticias" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="border-b">
        {/* Layout: logo (izq) | nav centrado | botón (der) */}
        <div className="mx-auto max-w-screen-xl h-20 px-6 flex items-center">
          {/* LOGO (ajusta h-/w- para cambiar tamaño) */}
          <Link href="/" className="shrink-0">
            <div className="relative h-32 w-32">
              <Image
                src="/brand/logo_paraisodelrecuerdo.png"
                alt="Paraíso del Recuerdo"
                fill
                sizes="128px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* NAV: Bree Serif + negrita + separación pareja */}
          <nav className={`flex-1 ${breeSerif.className}`}>
            <ul className="flex justify-center items-center gap-12 text-[15px] font-normal">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : item.href !== "#" && pathname.startsWith(item.href);

                return (
                  <li key={item.label} className="leading-none">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 transition-colors ${
                        active ? "text-black" : "text-gray-800 hover:text-[#2F7D33]"
                      }`}
                    >
                      {item.label}
                      {item.chevron && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                          className="opacity-80"
                        >
                          <path
                            d="M7 10l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* BOTÓN WHATSAPP */}
          <a
            href="https://wa.me/51XXXXXXXXX" // tu número
            target="_blank"
            className="shrink-0 ml-6 inline-flex items-center gap-2 rounded-xl bg-[#118C3F] px-5 py-2.5
                       text-white text-[15px] font-semibold hover:bg-[#0E7434] transition-colors"
          >
            <Image
              src="/icons/whatsapp_vector.png"
              alt="WhatsApp"
              width={20}
              height={20}
              priority
            />
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}
