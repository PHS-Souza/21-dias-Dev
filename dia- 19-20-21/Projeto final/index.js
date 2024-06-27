class ToDo {
    constructor(texto, prioridade) {
        this.Texto = texto;
        this.Prioridade = prioridade;
        this.Feito = false;
    }
}

function CriarToDo(texto, prioridade, array) {
    let objetoTodo = new ToDo(texto, prioridade);
    if (!array.some(x => x.Texto === texto))
        array.push(objetoTodo);
    return objetoTodo;
}

function AtualizarToDo(textoAntigo, textoNovo, array) {
    let atualizado = false;
    array.forEach(todo => {
        if (todo.Texto === textoAntigo) {
            todo.Texto = textoNovo;
            atualizado = true;
        }
    });

    return atualizado;
}

function ConcluirToDo(array, texto) {
    let concluido = false;
    array.forEach(todo => {
        if (todo.Texto === texto) {
            todo.Feito = !todo.Feito;
            concluido = true;
        }
    });
    return concluido;
}

function ExcluirToDo(array, texto) {
    let index = array.findIndex(todo => todo.Texto === texto);
    if (index !== -1) {
        array.splice(index, 1);
        return true;
    }
    return false;
}

function PesquisarToDo(array, texto) {
    return array.filter(todo => todo.Texto.includes(texto));
}

function OrdenarCrescente(array) {
    return array.sort((a, b) => a.Prioridade - b.Prioridade);
}

function OrdenarDecrescente(array) {
    return array.sort((a, b) => b.Prioridade - a.Prioridade);
}
