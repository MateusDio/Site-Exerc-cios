const num = document.getElementById("num");
const adc = document.getElementById("adc");
const resultado = document.getElementById("resultado");


adc.addEventListener("click", function () {
    const c = parseInt(num.value);
    if (num.value.trim() === "") {
        alert("Erro! o campo está vázio!!!!");

    } else if (isNaN(c)) {
        alert("Erro! coloque um número!!!");

    } else {
        const tipo = (c % 2 === 0) ? "Par" : "Ímpar";
        resultado.textContent = `O número ${c} é ${tipo}.`;

    }

    


});