function mudarLuz(cor) {
    const cores = ['vermelho', 'amarelo', 'verde'];

    cores.forEach(c => {
        const luz = document.getElementById(c);
        luz.classList.remove(`ativa-${c}`);
    });

    document.getElementById(cor).classList.add(`ativa-${cor}`);
}