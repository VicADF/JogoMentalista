var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
    var chute = prompt("Digite um número entre 0 e 1000");

    if (chute == numeroSecreto) {
        alert ("Acertou!");
    }

    else if (chute > numeroSecreto) {
        alert("Errouu... o número secreto é menor");
    }

    else if (chute < numeroSecreto) {
        alert("Errouu... o número secreto é maior");
    }
}