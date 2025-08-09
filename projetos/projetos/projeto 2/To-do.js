function adicionar() {
    const digite = document.querySelector('input.tarefa');
    const escrita = digite.value;

    // Verifica se o campo está vazio
    if (escrita === '') {
        document.body.style.background = 'red';

        const msg = document.getElementById('mensagem');
        msg.classList.add('visivel');

        setTimeout(() => {
            msg.classList.remove('visivel');
            document.body.style.background = 'white';
        }, 1000);
        return;
    }

    // Criação do item da lista (li)
    const li = document.createElement('li');
    li.textContent = escrita;

    // Criação do botão "X" para remoção
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'X';
    botaoRemover.classList.add('remove');

    // Adiciona o evento de clique para remover o item da lista
    botaoRemover.addEventListener('click', () => {
        li.remove();  // Remove o item da lista ao clicar no botão "X"
    });

    // Adiciona o botão "X" ao item da lista
    li.appendChild(botaoRemover);

    // Adiciona o item da lista à lista principal
    document.getElementById('lista').appendChild(li);

    // Limpa o campo de entrada
    digite.value = '';
}
