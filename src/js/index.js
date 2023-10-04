const botoes = document.querySelectorAll('.botao')

const personagem = document.querySelectorAll('.personagem')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        desselecionarbotao();
        desselecionarpersonagem();

        botao.classList.add("selecionado");
        personagem[index].classList.add("selecionado");
    });
});

function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

