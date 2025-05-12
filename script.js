const num = document.getElementById("num");
const cal = document.getElementById("cal");
const resultado = document.getElementById("resultado");

cal.addEventListener("click", function () {
    resultado.textContent = "";

    const a = parseInt(num.value);

   
    if (num.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a)) {
        alert("Erro! Coloque um número válido!!!");
    } else {
        for (let i = 1; i <= 10; i++) {  
            const c = a * i;
            resultado.innerHTML += `Resultado vezes ${i} = ${c} <br>`;  
        }
    }
});

num.addEventListener("click", function () {
resultado.textContent = "";
num.value = "";
})
