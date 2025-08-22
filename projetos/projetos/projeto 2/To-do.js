// Colocar valor input - OK
//Criar um botao X de remover - OK
//Adicionar LocalSotage

const meuInput = document.querySelector('.input');
const botao = document.querySelector('.button');
const resultado = document.querySelector('#lista');

botao.addEventListener('click', () => {
    const valorInput = meuInput.value.trim();


    if (valorInput !== '') {
        const tagLi = document.createElement('li');
        tagLi.textContent = valorInput
        const botaoRemover = document.createElement('button')
        botaoRemover.textContent = 'X'

        tagLi.appendChild(botaoRemover)
        resultado.appendChild(tagLi)

        //LOCALSTORAGE

        localStorage.setItem("Nome", meuInput.value)

        botaoRemover.addEventListener('click', () => {
            tagLi.remove()
        })


        meuInput.value = ''

    }




})


