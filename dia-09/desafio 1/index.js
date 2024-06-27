//CRIANDO VARIÁVEIS 
let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso = prompt("Digite seu peso em Kg")
let altura = prompt("Digite sua altura em metros")
let profissão = prompt("Digite sua profissão")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissão + ", tem " + altura + "m de altura e pesa " + peso + "Kg.")

//VERFICANDO IDADE
if (idade >= 18) {
    console.log("está liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para você")
}

//DESCOBRINDO IDADE FRACIONADA
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log ("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dia é: " + dias)

console.log("---------------------")

//DESCOBRINDO IMC
let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("Magreza")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal")
} else if (imc >= 25 && imc <= 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

console.log("-------------------------")

//DESCOBRINDO O ANO DE NASCIMENTO
let anoAtual = 2024
let anoNasc = anoAtual - idade
console.log("Voce nasceu no ano de " + anoNasc)

//EXIBINDO ANOS E IDADES
let anoVivido = anoNasc
let idadeAtual = 0 

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}

//LOOP DOWHILE
do {
    //INSERIR LÓGICA ANTERIOR
    let continuar = prompt("Deseja inserir os dados novamente? (S/N)")
} while (continuar == "S")

    
    