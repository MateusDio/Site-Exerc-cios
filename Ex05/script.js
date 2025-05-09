const ano = document.getElementById("idade");
const cal = document.getElementById("cal");
const resultado = document.getElementById("resultado");

cal.addEventListener("click", function () {
    resultado.textContent = ""; 

    const nascimento = parseInt(ano.value);
    const anoAtual = new Date().getFullYear();

    if (ano.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(nascimento) || nascimento < 1900 || nascimento > anoAtual) {
        alert("Erro! Coloque um ano válido!!!");
    } else {
        const idade = anoAtual - nascimento;

        if (idade < 18) {
            resultado.textContent = `Você tem ${idade} anos. É menor de idade.`;
        } else if (idade < 60) {
            resultado.textContent = `Você tem ${idade} anos. É adulto(a).`;
        } else {
            resultado.textContent = `Você tem ${idade} anos. É idoso(a).`;
        }
    }
});