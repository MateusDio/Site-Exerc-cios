const ini = document.getElementById("ini");
const pass = document.getElementById("pass");
const fim = document.getElementById("fim");
const adc = document.getElementById("adc");
const resultado = document.getElementById("resultado");


adc.addEventListener("click", function () {
    const a = parseInt(ini.value);
    const b = parseInt(pass.value);
    const c = parseInt(fim.value);

    if (ini.value.trim() === "" || pass.value.trim() === "" || fim.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Erro! Coloque um número válido!!!");
    } else {
        
        resultado.textContent = "";
        
        for (let i = a; i <= c; i += b) {
            resultado.textContent += `Número: ${i}\n`; 
        }
    }
});

ini.addEventListener("click", function () {
    resultado.textContent = "";
});

pass.addEventListener("click", function () {
    resultado.textContent = "";
});

fim.addEventListener("click", function () {
    resultado.textContent = "";
});
