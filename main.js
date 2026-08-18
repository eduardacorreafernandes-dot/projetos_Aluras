const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const contador = botao.querySelector("span");
        contador.textContent = Number(contador.textContent) + 1;
    });
});
