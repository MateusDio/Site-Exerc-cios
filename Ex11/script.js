const com = document.getElementById("cem");
const cem = document.getElementById("cem");
const cin = document.getElementById("cin");
const dez = document.getElementById("dez");
const dois = document.getElementById("dois");
const resultado = document.getElementById("resultado");



com.addEventListener("click", function () {
    resultado.textContent = "";

    const a = parseInt(val.value);


    if (val.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a)) {
        alert("Erro! Coloque um número válido!!!");
    } else {
        const cem = a / 100;
        const cin = a / 50;
        const vin = a / 20;
        const dez = a / 10;
        const dois = a / 2;
        resultado.innerHTML = `Em notas de 100 = ${cem}  <br>
            Em notas de 50 = ${cin} <br>
            Em notas de 20 = ${vin} <br>
            Em notas de 10 = ${dez} <br>
           Em notas de 2 = ${dois} <br>`;

    }
});

kel.addEventListener("click", function () {
    resultado.textContent = "";

    const d = parseFloat(temp.value);


    if (temp.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(d)) {
        alert("Erro! Coloque um número válido!!!");
    } else {
        const c = d + 273.15;
        resultado.textContent = `Em Fahrenheit = ${c.toFixed(2)} `;

    }
});