alert("Hola! Jugaremos al Cahipun!")

let vidas = parseInt(prompt("Cuantas veces quieres jugar? "))

while(vidas>=1){

//maquina recibe opcion aleatoria
let opcionMaquina = Math.floor(Math.random ()*(4-1)) +1;
console.log(opcionMaquina)

let opcionUsuario = parseInt(prompt("Escoge tu Opcion: 1= Piedra, 2= Papel 3=Tijeras "))
//maq  usu   
// 1 vs 1 = Empate
// 1 vs 2 = Ganaste
// 1 vs 3 = Perdiste
// 2 vs 1 = Perdiste
// 2 vs 2 = Empate
// 2 vs 3 = Ganaste
// 3 vs 1 = Ganaste
// 3 vs 2 = Perdiste
// 3 vs 3 = Empate
function winner(){

    if (opcionMaquina === 1 &&  opcionUsuario === 3 ){
        return "Perdiste :("
    }
    if (opcionMaquina === 2 &&  opcionUsuario === 1 ){
        return "Perdiste :("
    }
    if (opcionMaquina === 3 &&  opcionUsuario === 2 ){
        return "Perdiste :("
    }
    if (opcionMaquina === opcionUsuario){
        return "Empataste"
    }
    return "Ganaste!"
}
console.log(winner())
vidas--;
}

