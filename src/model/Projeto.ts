export class Projeto {
    id: string; // Agora é obrigatório
    nome: string; // Agora é obrigatório
    detalhes: string; // Agora é obrigatório
    imagens: Array<string> = []; // Inicializa com um array vazio por padrão

    constructor(id: string, nome: string, detalhes: string, imagens?: Array<string>) {
        this.id = id;
        this.nome = nome;
        this.detalhes = detalhes;
        if (imagens) this.imagens = imagens;
    }
}
