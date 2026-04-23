// 1) Maior de três números
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

// 2) Ordenar em ordem crescente
function ordenarCrescente(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

// 3) Verificar palíndromo
function ehPalindromo(texto) {
    let tratado = texto.toLowerCase().replace(/\s/g, "");
    let invertido = tratado.split("").reverse().join("");
    return tratado === invertido;
}

// 4) Verificar subconjunto de string
function verificarSubconjunto(palavra1, palavra2) {

    // validação
    if (!palavra1 || !palavra2 || palavra1.trim() === "" || palavra2.trim() === "") {
        return "erro";
    }

    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();

    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// 5) Retornar dia da semana
function diaDaSemana(data) {
    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    
    let d = new Date(data);

    if (isNaN(d)) {
        return "Data inválida";
    }

    return dias[d.getDay()];
}