const temFome = prompt("Você está com fome? (sim/nao)")
const temDinheiro = prompt("Você tem dinheiro? (sim/nao)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/nao)")

if (temFome === "nao" || temDinheiro == "nao") {
    console.log ("Hoje a janta sera em casa");
} else if (temDinheiro === "sim" && restauranteAberto === "sim"){
    console.log("Hoje o jantar será no seu restaurante preferido!");
}else {
    console.log("Peça um delivery!");}

