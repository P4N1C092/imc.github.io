function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerHTML = "¡Ingresa datos válidos!";
        return;
    }

    const imc = peso / (altura * altura);
    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    document.getElementById("resultado").innerHTML = `
        Tu IMC es: <strong>${imc.toFixed(2)}</strong><br>
        Clasificación: <strong>${clasificacion}</strong>
    `;
}