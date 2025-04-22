export default function Rodape() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Seção Esquerda - Logo e Nome */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Meu Portfólio</h2>
                        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
                    </div>

                    {/* Seção do Meio - Links Rápidos */}
                    <div className="flex space-x-6">
                        <a href="#sobre" className="text-gray-400 hover:text-white">Sobre</a>
                        <a href="#portfolio" className="text-gray-400 hover:text-white">Projetos</a>
                        <a href="#contato" className="text-gray-400 hover:text-white">Contato</a>
                    </div>

                    {/* Seção Direita - Redes Sociais */}
                    <div className="flex space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-80" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
