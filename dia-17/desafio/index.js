// Arrays para armazenar hotéis e reservas
const hoteis = [];
const reservas = [];

// Função para gerar um ID único
function generateId(array) {
    return array.length ? Math.max(...array.map(item => item.id)) + 1 : 1;
}

// Função para cadastrar um hotel
function cadastrarHotel(nome, categoria, endereco, telefone) {
    const id = generateId(hoteis);
    const novoHotel = { id, nome, categoria, endereco, telefone };
    hoteis.push(novoHotel);
    console.log("Hotel cadastrado com sucesso:", novoHotel);
}

// Função para cadastrar uma reserva
function cadastrarReserva(idHotel, nomeResponsavel, diaEntrada, diaSaida) {
    if (diaEntrada > diaSaida) {
        console.log("Erro: O dia de entrada não pode ser maior que o dia de saída.");
        return;
    }

    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        console.log("Erro: O id do hotel não é válido.");
        return;
    }

    const id = generateId(reservas);
    const novaReserva = { id, idHotel, nomeResponsavel, diaEntrada, diaSaida };
    reservas.push(novaReserva);
    console.log("Reserva cadastrada com sucesso:", novaReserva);
}

// Função para exibir reservas por ID do hotel
function exibirReservasPorHotel(idHotel) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        console.log("Erro: O id do hotel não é válido.");
        return;
    }

    const reservasDoHotel = reservas.filter(reserva => reserva.idHotel === idHotel);
    if (reservasDoHotel.length === 0) {
        console.log("Nenhuma reserva encontrada para este hotel.");
        return;
    }

    reservasDoHotel.forEach(reserva => {
        console.log(`Hotel: ${hotel.nome} - Responsável: ${reserva.nomeResponsavel} - Entrada: ${reserva.diaEntrada} - Saída: ${reserva.diaSaida}`);
    });
}

// Função para exibir detalhes da reserva por ID da reserva
function exibirDetalhesReserva(idReserva) {
    const reserva = reservas.find(reserva => reserva.id === idReserva);
    if (!reserva) {
        console.log("Erro: O id da reserva não é válido.");
        return;
    }

    const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
    console.log(`Hotel: ${hotel.nome} - Endereço: ${hotel.endereco} - Entrada: ${reserva.diaEntrada} - Saída: ${reserva.diaSaida}`);
}

// Função para exibir reservas por nome do responsável
function exibirReservasPorResponsavel(nomeResponsavel) {
    const reservasDoResponsavel = reservas.filter(reserva => reserva.nomeResponsavel === nomeResponsavel);
    if (reservasDoResponsavel.length === 0) {
        console.log("Nenhuma reserva encontrada para este responsável.");
        return;
    }

    reservasDoResponsavel.forEach(reserva => {
        const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        console.log(`Hotel: ${hotel.nome} - Responsável: ${reserva.nomeResponsavel} - Entrada: ${reserva.diaEntrada} - Saída: ${reserva.diaSaida}`);
    });
}

// Função para listar hotéis por categoria
function listarHoteisPorCategoria(categoria) {
    const hoteisDaCategoria = hoteis.filter(hotel => hotel.categoria === categoria);
    if (hoteisDaCategoria.length === 0) {
        console.log("Nenhum hotel encontrado para esta categoria.");
        return [];
    }
    return hoteisDaCategoria;
}

// Função para atualizar telefone do hotel por ID
function atualizarTelefoneHotel(idHotel, novoTelefone) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        console.log("Erro: O id do hotel não é válido.");
        return;
    }

    hotel.telefone = novoTelefone;
    console.log("Telefone atualizado com sucesso:", hotel);
}

// Função para exibir menu e receber entrada do usuário
function exibirMenu() {
    console.log("\nMenu:");
    console.log("1. Cadastrar hotel");
    console.log("2. Cadastrar reserva");
    console.log("3. Exibir reservas por hotel");
    console.log("4. Exibir detalhes da reserva");
    console.log("5. Exibir reservas por responsável");
    console.log("6. Listar hotéis por categoria");
    console.log("7. Atualizar telefone do hotel");
    console.log("8. Encerrar programa");

    const opcao = parseInt(prompt("Escolha uma opção:"));
    return opcao;
}

// Função principal para o fluxo do programa
function main() {
    let continuar = true;

    while (continuar) {
        const opcao = exibirMenu();

        switch (opcao) {
            case 1:
                const nomeHotel = prompt("Nome do hotel:");
                const categoria = prompt("Categoria do hotel:");
                const endereco = prompt("Endereço do hotel:");
                const telefone = prompt("Telefone do hotel:");
                cadastrarHotel(nomeHotel, categoria, endereco, telefone);
                break;

            case 2:
                const idHotelReserva = parseInt(prompt("ID do hotel:"));
                const nomeResponsavel = prompt("Nome do responsável:");
                const diaEntrada = prompt("Dia de entrada:");
                const diaSaida = prompt("Dia de saída:");
                cadastrarReserva(idHotelReserva, nomeResponsavel, diaEntrada, diaSaida);
                break;

            case 3:
                const idHotelParaExibir = parseInt(prompt("ID do hotel:"));
                exibirReservasPorHotel(idHotelParaExibir);
                break;

            case 4:
                const idReserva = parseInt(prompt("ID da reserva:"));
                exibirDetalhesReserva(idReserva);
                break;

            case 5:
                const nomeDoResponsavel = prompt("Nome do responsável:");
                exibirReservasPorResponsavel(nomeDoResponsavel);
                break;

            case 6:
                const categoriaParaListar = prompt("Categoria do hotel:");
                const hoteisEncontrados = listarHoteisPorCategoria(categoriaParaListar);
                console.log("Hotéis encontrados:", hoteisEncontrados);
                break;

            case 7:
                const idHotelParaAtualizar = parseInt(prompt("ID do hotel:"));
                const novoTelefone = prompt("Novo telefone:");
                atualizarTelefoneHotel(idHotelParaAtualizar, novoTelefone);
                break;

            case 8:
                continuar = false;
                console.log("Programa encerrado.");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Executar o programa
main();
