function calcularMedia() {

    let nome = document.getElementById("nome").value;

    let nota1 = parseFloat(document.getElementById("n1").value);
    let nota2 = parseFloat(document.getElementById("n2").value);
    let nota3 = parseFloat(document.getElementById("n3").value);
    let nota4 = parseFloat(document.getElementById("n4").value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));

    let situacao = confirm("Deseja saber a situação do aluno?");

    if (situacao) {
        if (media >= 6) {
            alert("Situação: Aprovado");
        } else {
            alert("Situação: Reprovado");
        }
    }

}