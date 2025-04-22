import Contato from "@/app/screens/Contato";
import { MenuOpcao } from "@/components/navBar";
import MeuPerfil from "@/app/screens/Perfil";
import Portfolio from "@/app/screens/Portfolio";
import Rodape from "@/components/rodape";

export default function Home() {
  return (
    <div>
      <MenuOpcao />
      {/* Seção de Início */}

      <MeuPerfil />

      {/* Seção de Projetos */}

      <Portfolio />


      <Contato />

      <Rodape />

    </div>
  );
}
