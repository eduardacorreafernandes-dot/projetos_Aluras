// Curtidas e reações
function curtir(botao) {
    const contador = botao.querySelector("span");

    if (contador) {
        let numero = parseInt(contador.textContent);
        numero++;
        contador.textContent = numero;
    }
}


// Botão de tema claro/escuro
const botaoTema = document.querySelector("#botao-tema");

if (botaoTema) {
    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("tema-escuro");

        if (document.body.classList.contains("tema-escuro")) {
            botaoTema.textContent = "☀️";
        } else {
            botaoTema.textContent = "🌙";
        }

    });
}
