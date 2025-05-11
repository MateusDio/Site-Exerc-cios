const num = document.getElementById("num");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", function () {
    resultado.textContent = "";

    const a = parseInt(num.value);

    
    if (num.value.trim() === "") {
        alert("Erro! O campo está vazio!!!!");
    } else if (isNaN(a)) {
        alert("Erro! Coloque um número válido!!!");
    } else {
        
        function isPrimo(num) {
            if (num <= 1) return false; 
            for (let i = 2; i <= Math.sqrt(num); i++) { 
                if (num % i === 0) return false; 
            }
            return true; 
        }

        
        if (isPrimo(a)) {
            resultado.textContent = "O número é primo!";
        } else {
            resultado.textContent = "O número não é primo!";
        }
    }
});

num.addEventListener("click", function () {
   resultado.textContent = "";
});
