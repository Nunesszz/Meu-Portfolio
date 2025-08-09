const botao = document.querySelector('.button');

botao.onclick = () => {
    botao.classList.toggle('ativo');
    document.body.classList.toggle('noite');
};

