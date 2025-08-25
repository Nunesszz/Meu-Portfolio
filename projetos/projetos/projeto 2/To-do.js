const meuInput = document.querySelector('.input');
const botao = document.querySelector('.button');
const resultado = document.querySelector('#lista');

// Carrega as tarefas salvas ao iniciar
window.addEventListener('DOMContentLoaded', () => {
  const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
  tarefas.forEach((tarefa) => {
    adicionarTarefaNaTela(tarefa);
  });
});

botao.addEventListener('click', () => {
  const valorInput = meuInput.value.trim();

  if (valorInput !== '') {
    adicionarTarefaNaTela(valorInput);
    salvarTarefa(valorInput);
    meuInput.value = '';
  }
});

function adicionarTarefaNaTela(texto) {
  const tagLi = document.createElement('li');
  tagLi.textContent = texto;

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'X';
  tagLi.appendChild(botaoRemover);
  resultado.appendChild(tagLi);

  botaoRemover.addEventListener('click', () => {
    tagLi.remove();
    removerTarefa(texto);
  });
}

function salvarTarefa(tarefa) {
  const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
  tarefas.push(tarefa);
  localStorage.setItem('Tarefas', JSON.stringify(tarefas));
}

function removerTarefa(tarefa) {
  let tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
  tarefas = tarefas.filter((t) => t !== tarefa);
  localStorage.setItem('Tarefas', JSON.stringify(tarefas));
}
