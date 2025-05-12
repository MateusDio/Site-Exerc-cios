const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const resultado = document.getElementById("resultado");

const pct1 = document.getElementById("pct1");
const pct2 = document.getElementById("pct2");
const pct3 = document.getElementById("pct3");

let votos = [0, 0, 0]; // [opção 1, opção 2, opção 3]

function atualizarPorcentagens() {
    const total = votos[0] + votos[1] + votos[2];

    if (total === 0) {
        pct1.textContent = "0%";
        pct2.textContent = "0%";
        pct3.textContent = "0%";
        return;
    }

    pct1.textContent = `${((votos[0] / total) * 100).toFixed(1)}%`;
    pct2.textContent = `${((votos[1] / total) * 100).toFixed(1)}%`;
    pct3.textContent = `${((votos[2] / total) * 100).toFixed(1)}%`;
}

btn4.addEventListener("click", function () {
    resultado.textContent = "";

    if (btn1.checked) {
        votos[0]++;
        resultado.textContent = "Você votou na opção um!";
    } else if (btn2.checked) {
        votos[1]++;
        resultado.textContent = "Você votou na opção dois!";
    } else if (btn3.checked) {
        votos[2]++;
        resultado.textContent = "Você votou na opção três!";
    } else {
        resultado.textContent = "Você não selecionou nenhuma opção!";
        return;
    }

    atualizarPorcentagens();
});
