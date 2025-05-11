const nom = document.getElementById("nom");
const ema = document.getElementById("ema");
const sen = document.getElementById("sen");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", function () {
    resultado.textContent = "";


    if (nom.value.trim() === "" || ema.value.trim() === "" || sen.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
        
    }  else if (!ema.value.includes("@")) {
        alert("Erro! E-mail inválido, deve conter @.");
   
   
    } else if (sen.value.length < 8) {
    alert("Erro! A senha deve ter pelo menos 8 caracteres!");

    }else {
        resultado.textContent = "Cadastro Correto!";


    }
    
    
});


nom.addEventListener("click", function () {
   resultado.textContent = "";
});

ema.addEventListener("click", function () {
   resultado.textContent = "";
});

sen.addEventListener("click", function () {
   resultado.textContent = "";
});
