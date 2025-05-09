document.getElementById('ge').addEventListener('click', function() {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+=[]{}|;:,.<>?';
    const todos = letras + numeros + simbolos;

    const tamanho = parseInt(document.getElementById('tam').value);
    let senha = '';

    if (!tamanho || tamanho < 4) {
        document.getElementById('resultado').innerText = 'Informe um tamanho válido (mínimo 4).';
        return;
    }

    for (let i = 0; i < tamanho; i++) {
        const caractere = todos.charAt(Math.floor(Math.random() * todos.length));
        senha += caractere;
    }

    document.getElementById('resultado').innerText = `Senha gerada: ${senha}`;
});
