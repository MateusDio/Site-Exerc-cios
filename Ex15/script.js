const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const resultado = document.getElementById("resultado");

btn4.addEventListener("click", function () {
    resultado.textContent = "";

    if (btn1.checked) {
        resultado.textContent = `Você votou na opção um!`;  
    } else if (btn2.checked) {
        resultado.textContent = `Você votou na opção dois!`; 
    } else if (btn3.checked) {
        resultado.textContent = `Você votou na opção três!`; 
    } else {
        resultado.textContent = `Você não selecionou nenhuma opção!`; 
    }
});
