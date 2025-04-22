"use client"; // Para garantir que o código roda apenas no cliente

import { Button } from "@material-tailwind/react";

export function MenuOpcao() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.scrollY; 
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg z-50">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <div className="flex gap-4">
        <Button variant="text" className="text-white" onClick={() => scrollToSection("inicio")}>
          Início
        </Button>
        <Button variant="text" className="text-white" onClick={() => scrollToSection("projetos")}>
          Projetos
        </Button>
        <Button variant="text" className="text-white" onClick={() => scrollToSection("sobre")}>
          Sobre
        </Button>
        <Button variant="text" className="text-white" onClick={() => scrollToSection("contato")}>
          Contato
        </Button>
      </div>
    </nav>
  );
}
