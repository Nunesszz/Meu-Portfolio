function adicionar() {
    const digite = document.querySelector('input.tarefa')
    const escrita = digite.value;
//"Essa função chamada adicionar() seleciona o input com a classe .tarefa e armazena ele na variável




    if (escrita === ''){
        
        document.body.style.background = 'red'

        const msg = document.getElementById('mensagem')
        msg.classList.add('visivel');

        setTimeout (() => {
            msg.classList.remove('visivel');
            document.body.style.background = 'white';
        },1000);
            return;
        }
    
    const li = document.createElement('li')
    li.textContent = escrita;

    document.getElementById('lista').appendChild(li);
    
    digite.value = '';



}

//procurar entender tudo que foi feito aqui








//Depois tirar duvidas de tudo que fez, por exeplo: 
// o que é appenchild e createElement e o que eles fazem