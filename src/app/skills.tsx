"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Desenvolvimento Web Frontend:",
    children:
      "Criar experiências web bonitas e funcionais é o meu forte. Utilizando as tecnologias mais recentes e as melhores práticas, projeto e construo sites que cativam e engajam os usuários..",
  },
  {
    icon: FingerPrintIcon,
    title: "Desenvolvimento Mobile",
    children:
      " Sou especialista em criar aplicativos móveis responsivos e intuitivos que funcionam perfeitamente em dispositivos iOS e Android. Do conceito à implantação, cuido de todas as etapas do processo de desenvolvimento.",
  },
  {
    icon: SwatchIcon,
    title: "Technologias",
    children:
      "Sou bem versado nas tecnologias de front-end mais populares do setor, incluindo HTML5, CSS3, JavaScript e frameworks como React e React Native.",
  },
  {
    icon: HashtagIcon,
    title: " Otimização Web ",
    children:
      "O desempenho é importante. Otimizo sites e aplicativos para velocidade, garantindo que seus usuários tenham uma experiência rápida e responsiva, o que, por sua vez, aumenta a satisfação do usuário e o posicionamento em SEO.",
  },
  {
    icon: EyeIcon,
    title: "Design centrado no usuário",
    children:
      "Meu desenvolvimento anda de mãos dadas com meu olhar para o design. Crio interfaces de usuário que não são apenas funcionais, mas também esteticamente agradáveis, proporcionando uma jornada do usuário fluida e agradável.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testes e Garantia de Qualidade",
    children:
      "Eu testo e depuro aplicativos rigorosamente para garantir um ambiente seguro e livre de bugs para os usuários. Sua tranquilidade é tão importante para mim quanto a funcionalidade do seu projeto.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Minhas habilidades
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          O que eu faço
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
         Não sou apenas um desenvolvedor; sou um criador de sonhos digitais. Criar experiências online imersivas não é apenas um trabalho, mas minha vocação. Descubra abaixo como posso ajudar você.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
