const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const adc = document.getElementById("adc");
const resultado = document.getElementById("resultado");


adc.addEventListener("click", function () {
    resultado.textContent = ""; 

    const a = parseFloat(altura.value);
    const b = parseFloat(peso.value);
    const c = b / a ** 2;

    if (peso.value.trim() === "" || altura.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a) || isNaN(b)) {
        alert("Erro! Coloque um número válido!!!");
    } else if (c <= 18.5) {
        resultado.textContent = `O IMC é ${c.toFixed(2)} , e você está abaixo do peso ideal.`;
    } else if (c <= 24.9) {
        resultado.textContent = `O IMC é ${c.toFixed(2)} , e você está no peso normal.`;
    } else if (c <= 29.9) {
        resultado.textContent = `O IMC é ${c.toFixed(2)} , e você está no sobrepeso.`;
    } else if (c >= 30) {
        resultado.textContent = `O IMC é ${c.toFixed(2)} , e você está com obesidade.`;
    }
});
