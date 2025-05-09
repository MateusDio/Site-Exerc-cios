const nomeInput = document.getElementById("nome");
const quantidadeInput = document.getElementById("quantidade");
const adcButton = document.getElementById("Adc");
const limparButton = document.getElementById("Limpar");
const listaContainer = document.getElementById("lista-container");

adcButton.addEventListener("click", function () {
    const nome = nomeInput.value.trim();
    const quantidade = quantidadeInput.value.trim();

    if (nome === "" || quantidade === "") {
        alert("Erro! Preencha todos os campos.");
        return;
    }

   
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("lista-item");

    const nomeSpan = document.createElement("span");
    nomeSpan.textContent = `${nome} - ${quantidade}`;
    itemDiv.appendChild(nomeSpan);

    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function () {
        listaContainer.removeChild(itemDiv);
    });
    itemDiv.appendChild(removeButton);

   
    listaContainer.appendChild(itemDiv);

   
    nomeInput.value = "";
    quantidadeInput.value = "";
});

limparButton.addEventListener("click", function () {
    listaContainer.innerHTML = "";
});
