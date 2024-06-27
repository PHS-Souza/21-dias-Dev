// Arrays para armazenar nomes e senhas
let nomes = [];
let senhas = [];

// Função para solicitar a opção do usuário
function solicitarOpcao() {
    let opcao = prompt("\nEscolha uma opção:\n1. Registrar\n2. Login\n3. Excluir Cadastro\n4. Sair\nOpção: ");
    return opcao;
}

// Função para registrar um novo usuário
function cadastrarUsuario() {
    let nome = prompt("Digite o nome de usuário: ");
    let senha = prompt("Digite a senha: ");
    nomes.push(nome);
    senhas.push(senha);
    console.log("Usuário registrado com sucesso!");
}

// Função para autenticar um usuário
function autenticarUsuario(nome, senha) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] === senha) {
        return true;
    }
    return false;
}

// Função para excluir um cadastro
function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluído com sucesso!");
        return true;
    } else {
        console.log("Nome de usuário não encontrado!");
        return false;
    }
}

// Função principal para gerenciar o fluxo do programa
function main() {
    while (true) {
        let opcao = solicitarOpcao();
        
        if (opcao === "1") {
            cadastrarUsuario();
        } else if (opcao === "2") {
            let nome = prompt("Digite o nome de usuário: ");
            let senha = prompt("Digite a senha: ");
            if (autenticarUsuario(nome, senha)) {
                console.log("Login feito com sucesso!");
            } else {
                console.log("Nome ou senha incorretos!");
            }
        } else if (opcao === "3") {
            let nome = prompt("Digite o nome de usuário a ser excluído: ");
            excluirCadastro(nome);
        } else if (opcao === "4") {
            console.log("Encerrando o programa...");
            break;
        } else {
            console.log("Opção inválida! Tente novamente.");
        }
    }
}

// Executar o programa
main();
