function calcularOperacoes() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let resto = num1 % num2;

    alert(
        "Resultados:\n\n" +
        "Soma: " + soma + "\n" +
        "Subtração: " + subtracao + "\n" +
        "Multiplicação: " + multiplicacao + "\n" +
        "Divisão: " + divisao + "\n" +
        "Resto: " + resto
    );

    let continuar = confirm("Deseja calcular outros numeros?");

    if (continuar) {
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
    } else {
        alert("Fim do programa.");
    }
}