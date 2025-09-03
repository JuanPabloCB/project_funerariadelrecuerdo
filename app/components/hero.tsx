"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/hero/slide-uno.png"
              alt="Historia del amor eterno"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay con texto */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-5xl font-bold text-green-700">
                Descubre la historia del{" "}
                <span className="text-yellow-400 italic">amor eterno</span>
              </h2>
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-white text-yellow-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
                >
                  MIRA ESTA LINDA HISTORIA AQUÍ
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l5.19-3L10 9v6zm12-3c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/hero/slide-dos.jpeg"
              alt="Imagen 2"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/hero/slide-tres.png"
              alt="Imagen 3"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
