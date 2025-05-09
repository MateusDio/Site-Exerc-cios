const palavra = document.getElementById("palavra");
const adc = document.getElementById("adc");
const resultado = document.getElementById("resultado");

adc.addEventListener("click", function () {
    resultado.textContent = "";

    const texto = palavra.value.trim();
    const invertida = texto.split('').reverse().join('');

    if (texto === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (!isNaN(texto)) {
        alert("Erro! Não digite apenas números.");
    } else if (texto.toLowerCase() === invertida.toLowerCase()) {
        resultado.textContent = "É um palíndromo";
    } else {
        resultado.textContent = "Não é um palíndromo";
    }
});