"use client";

import { PROJETOS } from "@/constants/Projetos";
import CardView from "../../components/CardViewProjeto";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Portfolio() {
    return (
        <section id="projetos" className="min-h-screen flex flex-col items-center  bg-blue-200 py-10">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Meu Portfólio</h1>
            
            <div className="w-full max-w-6xl px-4">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full"
                >
                    {PROJETOS.map((item) => (
                        <SwiperSlide key={item.id} className="flex justify-center">
                            <CardView item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
