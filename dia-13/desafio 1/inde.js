class Computador{
    tipo
    processador 
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo,processador,video,armazenamento,memoriaRam,ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd

    }

    ExibirInformacoes() {
        console.log("Informações do Computador: ")
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Processador: ${this.processador}`);
        console.log(`Vídeo: ${this.video}`);
        console.log(`Amazenamento: ${this.armazenamento} GB`);
        console.log(`Memoria RAM: ${this.memoriaRam} GB`);
        console.log(`SSD: ${this.ssd}`);
    }

}

//Exemplo de uso

const meuComputador = new Computador("notebook", "I3", "Integrado", 1000, 16, false);
meuComputador.ExibirInformacoes();
