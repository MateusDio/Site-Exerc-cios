const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const soma = document.getElementById("soma");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const resultado = document.getElementById("resultado");


soma.addEventListener("click", function () {
    resultado.textContent = ""; 

    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const c = a + b;

    if (num1.value.trim() === "" || num2.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a) || isNaN(b)) {
        alert("Erro! Coloque um número válido!!!");
    } else  {
       resultado.textContent = `O Resultado é: ${c} `;
    }
});

sub.addEventListener("click", function () {
    resultado.textContent = ""; 

    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const c = a - b;

    if (num1.value.trim() === "" || num2.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a) || isNaN(b)) {
        alert("Erro! Coloque um número válido!!!");
    } else  {
       resultado.textContent = `O Resultado é: ${c} `;
    }
});

mult.addEventListener("click", function () {
    resultado.textContent = ""; 

    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const c = a * b;

    if (num1.value.trim() === "" || num2.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a) || isNaN(b)) {
        alert("Erro! Coloque um número válido!!!");
    } else  {
       resultado.textContent = `O Resultado é: ${c} `;
    }
});

div.addEventListener("click", function () {
    resultado.textContent = ""; 

    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const c = a / b;

    if (num1.value.trim() === "" || num2.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a) || isNaN(b)) {
        alert("Erro! Coloque um número válido!!!");
    } else  {
       resultado.textContent = `O Resultado é: ${c.toFixed(2)} `;
    }
});

