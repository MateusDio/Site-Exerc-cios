const temp = document.getElementById("temp");
const fah = document.getElementById("fah");
const kel = document.getElementById("kel");
const resultado = document.getElementById("resultado");



fah.addEventListener("click", function () {
    resultado.textContent = "";

    const a = parseFloat(temp.value);

   
    if (temp.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a)) {
        alert("Erro! Coloque um número válido!!!");
    } else {
            const b = (a * 9/5) + 32;
            resultado.textContent = `Em Fahrenheit = ${b.toFixed(2)} `;  
       
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
            resultado.textContent = `Em Kelsius = ${c.toFixed(2)} `;  
       
    }
});