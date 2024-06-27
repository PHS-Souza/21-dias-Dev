//criando variáveis
let array = []
let arrayInvertido = []
 
//populando array
for (let i= 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o" + (i + 1) + "º numero"))
    array[i] = numero
}

console.log("Array original: " + array)

//invertendo array
let contador = 4
for (let i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)