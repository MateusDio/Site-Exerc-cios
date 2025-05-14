const nt1 = document.getElementById("nt1");
const nt2 = document.getElementById("nt2");
const nt3 = document.getElementById("nt3");
const btn = document.getElementById("btn");


const resultado = document.getElementById("resultado");



btn.addEventListener("click", function () {
    resultado.textContent = "";

    const a = parseInt(nt1.value);
     const b = parseInt(nt2.value);
      const c = parseInt(nt3.value);
      const d = (a + b + c) / 3;
    

    if (nt1.value.trim() === "" || nt2.value.trim() === "" || nt3.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Erro! Coloque uma nota válida!!!");
    } else if ( d <= 5) {
        resultado.textContent = "Reprovado!";
    } else if ( d <= 6.9) {
        resultado.textContent = "Recuperação!";
    } else if ( d >= 7) {
        resultado.textContent = "Aprovado!";
    } 
});

nt1.addEventListener("click", function () {
    resultado.textContent = "";
    nt1.value = "";
});

nt2.addEventListener("click", function () {
    resultado.textContent = "";
    nt2.value = "";
});

nt3.addEventListener("click", function () {
    resultado.textContent = "";
    nt3.value = "";
});



