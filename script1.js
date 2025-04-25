let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura!").toLowerCase().trim(); 

let aleatorioPC = Math.round(Math.random() * 2);


let escolhaPC;
if (aleatorioPC === 0) {
  escolhaPC = "pedra";
} else if (aleatorioPC === 1) {
  escolhaPC = "papel";
} else {
  escolhaPC = "tesoura";
}


alert("PC: Eu escolhi " + escolhaPC);


if (escolhaPC === escolhaUsuario) {
  alert("Empate!");
} else if (
  (escolhaPC === "pedra" && escolhaUsuario === "tesoura") || 
  (escolhaPC === "papel" && escolhaUsuario === "pedra") ||
  (escolhaPC === "tesoura" && escolhaUsuario === "papel")
) {
  alert("Você Perdeu!");
} else {
  alert("Você Ganhou!");
}