const num = document.getElementById("num");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const vida = document.getElementById("vida");
const resultado = document.getElementById("resultado");

btn1.disabled = true;
let chances = 3;
let numA = gerarNumero();

function gerarNumero() {
    return Math.floor(Math.random() * 10) + 1; 
}

btn.addEventListener("click", function () {
    resultado.textContent = "";

    const a = parseInt(num.value);

    if (num.value.trim() === "") {
        alert("Erro! O campo está vazio!");
    } else if (isNaN(a)) {
        alert("Erro! Coloque um número válido!");
    } else if (a === numA) {
        resultado.textContent = "Você acertou! Aperte 'Reiniciar' para jogar novamente!";
        vida.textContent = `${chances} chances restantes`;
        btn.disabled = true;
        btn1.disabled = false;
    } else {
        chances--;
        if (chances > 0) {
            vida.textContent = `${chances} chances restantes`;
            resultado.textContent = "Tente novamente!";
        } else {
            vida.textContent = "0 chances";
            resultado.textContent = `Você perdeu! O número era ${numA}`;
            btn.disabled = true;
            btn1.disabled = false;
        }
    }
});

num.addEventListener("click", function () {
    resultado.textContent = "";
    num.value = "";
});

btn1.addEventListener("click", function () {
    chances = 3;
    numA = gerarNumero(); // novo número gerado somente aqui
    vida.textContent = "3 chances";
    resultado.textContent = "";
    num.value = "";
    btn.disabled = false;
    btn1.disabled = true;
});
