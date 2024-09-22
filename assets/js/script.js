function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerText = "Por favor, insira notas válidas.";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    let classificacao;

    if (media < 5) {
        classificacao = "Reprovação";
    } else if (media >= 5 && media <= 7) {
        classificacao = "Recuperação";
    } else {
        classificacao = "Passou de semestre";
    }

    document.getElementById('resultado').innerText = `Sua média é ${media.toFixed(2)}: ${classificacao}`;
}
