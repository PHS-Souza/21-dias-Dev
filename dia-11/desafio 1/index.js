//CRIANDO VARIÁVEIS 
let aluno = []
let notas = []
let continuar = true
let contador = 0

//criando loop
while (continuar) {
    let nome = prompt("Digite  nome do " + (contador + 1) + "º aluno" )
    let nota= parseInt(prompt("Digite a nota do aluno"))
    aluno[contador] = nome
    notas[contador] = nota
    contador++
    let resposta = prompt("Deseja inserir informações sobre outro aluno (s/n)")
    if (resposta == "n")
        continuar = false
}

//exibindo informações
console.log("Notas dos alunos: ")
for (let i = 0; i < aluno.length; i++) {
    console.log(aluno[i] + " - " + notas[i])
}

let somaNotas = 0 
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}
let media = somaNotas / aluno.length
console.log("A soma das notas foi: " + somaNotas)
console.log("A media geral da turma foi: " + media)
     