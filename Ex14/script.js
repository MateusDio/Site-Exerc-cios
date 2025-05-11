const vmi = document.getElementById("vmi");
const vma = document.getElementById("vma");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");


btn.addEventListener("click", function () {
    resultado.textContent = "";

    const a = parseInt(vmi.value);
    const b = parseInt(vma.value);

   
    if (vmi.value.trim() === "" || vma.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");

    } else if (isNaN(a) || isNaN(b)) {
        alert("Erro! Coloque um número válido!!!");

    } else {
            const numeroAleatorio = Math.floor(Math.random() * (b - a + 1)) + 2;
            resultado.textContent = `Número sorteado = ${numeroAleatorio} `;  

            
    }
});

vmi.addEventListener("click", function () {
    resultado.textContent = "";

        
});

vma.addEventListener("click", function () {
    resultado.textContent = "";

        
});