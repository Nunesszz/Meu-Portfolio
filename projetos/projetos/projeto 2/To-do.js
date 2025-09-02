const meuInput = document.querySelector('.input');
const botao = document.querySelector('.button');
const resultado = document.querySelector('#lista');

// --- LÓGICA  ---

// 1. CARREGA E MOSTRA AS TAREFAS SALVAS QUANDO A PÁGINA ABRE
window.addEventListener('DOMContentLoaded', () => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas.forEach(elementosSalvos => {
        criarElementoTarefa(elementosSalvos);
    });
});

// 2. ADICIONA UMA NOVA TAREFA AO CLICAR NO BOTÃO
botao.addEventListener('click', () => {
    const valorInput = meuInput.value.trim();

    if (valorInput !== '') {
        const tarefasAtuais = JSON.parse(localStorage.getItem("tarefas")) || [];
        tarefasAtuais.push(valorInput);

        localStorage.setItem("tarefas", JSON.stringify(tarefasAtuais));

        criarElementoTarefa(valorInput);

        meuInput.value = '';
    }
});

// 3. FUNÇÃO AUXILIAR PARA CRIAR O HTML DA TAREFA
function criarElementoTarefa(texto) {
    const tagLi = document.createElement('li');
    tagLi.textContent = texto;

    const botaoremover = document.createElement('button');
    botaoremover.textContent = "X";

    tagLi.appendChild(botaoremover);
    resultado.appendChild(tagLi);

// 4. REMOVER TAREFA
    botaoremover.addEventListener('click', () => {

        const tarefasAtuais = JSON.parse(localStorage.getItem("tarefas")) || [];

        const tarefasFiltradas = tarefasAtuais.filter(tarefa => tarefa !== texto);
        
        localStorage.setItem("tarefas", JSON.stringify(tarefasFiltradas));
        tagLi.remove();
    });
}