function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (altura <= 0 || peso <= 0 || isNaN(altura) || isNaN(peso)) {
        document.getElementById("resultado").innerHTML =
            "Digite valores válidos!";
        return;
    }

    let imc = peso / Math.pow(altura, 2);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc < 25) {
        classificacao = "Normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 40) {
        classificacao = "Obesidade";
    } else {
        classificacao = "Obesidade Grave";
    }

    document.getElementById("resultado").innerHTML =
        `IMC: ${imc.toFixed(2)} <br> Classificação: ${classificacao}`;
}