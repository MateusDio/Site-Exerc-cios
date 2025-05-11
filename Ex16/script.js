const texto = document.getElementById("texto");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", function () {
    resultado.textContent = "";

    if (texto.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else {
        
        const palavras = texto.value.trim().split(/\s+/).filter(p => p.length > 0);

        
        const letras = texto.value.replace(/[^a-zA-ZÀ-ÿ]/g, "");

        resultado.innerHTML =
            `Quantidade de palavras: ${palavras.length}<br> Quantidade de letras: ${letras.length}`;
    }
});

texto.addEventListener("click", function () {
    resultado.textContent = "";
});
