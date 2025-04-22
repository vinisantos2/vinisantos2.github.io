
export default function MeuPerfil() {
  return (
    <section id="inicio" className="h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="max-w-6xl w-full shadow-lg rounded-lg p-6 flex flex-col lg:flex-row justify-between">

        {/* Lado Esquerdo: Foto */}
        <div className="flex-shrink-0 border-black mb-6 lg:mb-0 lg:mr-8 border-2">
          <img
            src="/imagens/perfil.png"
            alt="Foto de perfil do desenvolvedor"
            className="w-80 h-96 shadow-md mx-auto lg:mx-0"
          />
        </div>

        {/* Lado Direito: Informações */}
        <div className="flex-grow border-2 border-black text-center">
          <h2 className="text-3xl font-bold">Marcus vinicius</h2>
          <p className="text-gray-600 text-xl">Desenvolvedor React, React Native</p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">📚 Formação</h3>
            <p className="mt-2 text-gray-700">Bacharelado em sistemas de informação - Universidade Agés</p>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">💼 Experiência</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5">
              <li>Desenvolvedor Front-end - Empresa ABC (2022 - presente)</li>
              <li>Estagiário de Desenvolvimento - Empresa DEF (2021 - 2022)</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">📌 Contato</h3>
            <ul className="mt-2 text-gray-700">
              <li><strong>Email:</strong> seuemail@email.com</li>
              <li><strong>Telefone:</strong> (00) 1234-5678</li>
              <li><strong>Localização:</strong> Sua cidade, Estado</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="/curriculo.pdf"
              download
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              📄 Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
