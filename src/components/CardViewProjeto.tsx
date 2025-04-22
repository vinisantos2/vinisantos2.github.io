import { Projeto } from "@/model/Projeto";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardViewProps {
    item: Projeto;
}

export default function CardView({ item }: CardViewProps) {
    return (
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Carrossel de Imagens */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
            >
                {item.imagens.map((imagem, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <Image
                            src={imagem}
                            alt={`Imagem do projeto ${item.nome} - ${index + 1}`}
                            layout="responsive"
                            width={900}
                            height={600}
                            className="rounded-t-lg aspect-video object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Informações do Projeto */}
            <div className="p-4 bg-gray-900 text-white">
                <h2 className="text-xl font-bold">{item.nome}</h2>
                <p className="text-gray-300 mt-2">{item.detalhes}</p>
            </div>
        </div>
    );
}
