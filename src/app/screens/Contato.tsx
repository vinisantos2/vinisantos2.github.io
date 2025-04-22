export default function Contato() {
    return (
        <section id="contato" className="min-h-screen  flex flex-col items-center justify-center bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <form className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Nome</label>
                    <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Seu nome"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">E-mail</label>
                    <input
                        type="email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="seuemail@email.com"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Mensagem</label>
                    <textarea
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Escreva sua mensagem..."
                        rows={4}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
}
