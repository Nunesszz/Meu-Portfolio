const meuInput = document.querySelector('.input');
const botao = document.querySelector('.button');
const resultado = document.querySelector('#lista');

// --- LÓGICA DO BAGUI TODO AI ---

// 1. CARREGA E MOSTRA AS TAREFAS SALVAS QUANDO A PÁGINA ABRE

//TUDO QUE ESTIVER DENTRO DO PARENTESES SERÁ REFERENCIA
    window.addEventListener('DOMContentLoaded', () => {
        // Pega as tarefas salvas (se não houver, retorna um array vazio [])

        //ou seja "tudo que estiver na minha 'tarefa', ele vai pegar 'getItem', vai salvar 'localstorage', e converter para array 'JSON.parse'", senao ele irá retornar uma array vazia
        const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];

        // Para cada tarefa salva, cria ela na tela

        //o "elementosSalvos" vai representar de uma forma geral o "tarefasSalvas.forEach"
        // vou rodar cada item dentro do array, e quero que ele me retorne uma funcao de "criarElementoTarefa" que estará toda essa informaçao dentro do meu "(elementosSalvos)"
        tarefasSalvas.forEach(elementosSalvos => {
            criarElementoTarefa(elementosSalvos);
        });
    });











    // 2. ADICIONA UMA NOVA TAREFA AO CLICAR NO BOTÃO
    botao.addEventListener('click', () => {
        const valorInput = meuInput.value.trim();

        if (valorInput !== '') {
            //JSON parse, converte de string para ARRAY
            //getItem ele PEGA dados salvos
            //"Tarefa" é uma forma de buscar tudo que esta dentro de um setItem

            // tudo que tiver na minha tarefa, ele ira pegar e transformar em um array
            const tarefasAtuais = JSON.parse(localStorage.getItem("tarefas")) || [];
            tarefasAtuais.push(valorInput);
            //converte para string novamente, que é o correto. Porque ele so le em strings
            localStorage.setItem("tarefas", JSON.stringify(tarefasAtuais));



            //ele esta armazenando o valorinput para a funçao
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

        // Adiciona o evento de remover
        botaoremover.addEventListener('click', () => {
            // Pega a lista de tarefas
            const tarefasAtuais = JSON.parse(localStorage.getItem("tarefas")) || [];

            // Cria uma NOVA lista sem a tarefa que foi clicada
            const tarefasFiltradas = tarefasAtuais.filter(tarefa => tarefa !== texto);

            // Salva a nova lista (sem o item removido)
            localStorage.setItem("tarefas", JSON.stringify(tarefasFiltradas));

            // Remove o elemento da tela
            tagLi.remove();
        });
    }



    /*
    | Função                  | O que faz                                                    | Exemplo                                  |
| ----------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `setItem(chave, valor)` | **Salva** um valor no navegador (como se fosse uma caixinha) | `localStorage.setItem("nome", "João")`   |
| `getItem(chave)`        | **Pega** o valor que foi salvo                               | `localStorage.getItem("nome") // "João"` |

    







🧠 Dica prática

Toda vez que você for usar localStorage com arrays ou objetos, pense sempre assim:

// Salvando
localStorage.setItem('chave', JSON.stringify(arrayOuObjeto));

// Lendo
const dados = JSON.parse(localStorage.getItem('chave')) || [];
    */