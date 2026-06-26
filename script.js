// Função que calcula a economia de água utilizando Agricultura de Precisão

function calcular() {

    let area = parseFloat(document.getElementById("area").value);
    let agua = parseFloat(document.getElementById("agua").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(area) || isNaN(agua) || area <= 0 || agua <= 0) {
        resultado.innerHTML = "⚠️ Preencha todos os campos corretamente.";
        resultado.style.color = "red";
        return;
    }

    // Consumo total de água
    let consumo = area * agua;

    // Economia estimada de 25%
    let economia = consumo * 0.25;

    // Novo consumo
    let novoConsumo = consumo - economia;

    resultado.style.color = "#1b5e20";

    resultado.innerHTML = `
        <h3>Resultado da Simulação</h3>

        <p><strong>Consumo atual:</strong> ${consumo.toFixed(2)} litros</p>

        <p><strong>Economia estimada (25%):</strong> ${economia.toFixed(2)} litros</p>

        <p><strong>Novo consumo:</strong> ${novoConsumo.toFixed(2)} litros</p>

        <br>

        ✅ Utilizando sensores, programação e Agricultura de Precisão,
        é possível reduzir o desperdício de água, economizar recursos
        e contribuir para uma produção mais sustentável.
    `;
}
