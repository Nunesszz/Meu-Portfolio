window.alert ("SEJA BEM-VINDO A MINHA PAGINA!")


const object = [
    {
    "Nome": "Felipe",
    "Idade": 23,
    "Trabalhando_atualmente": false,
    "Detalhes_profissao": {
        "Cargo": "Programador Front End",
        "Empresa": false,
    "Hobbies": ['Jogar', 'Ler', 'Academia']
        
    } 
}
]


    //Enviando Dados

    //converte objeto para JSON
    const conversor = JSON.stringify(object)
        console.log(conversor)
        console.log(typeof conversor) //aqui ele mostra que estará em String
    
    // convertendo para Objeto
    //recebendo Dados via JSON
    const objeto = JSON.parse(conversor)
        console.log(objeto)
        console.log(typeof objeto) //aqui mostrará que é objeto
     

    objeto.map((pessoa) =>
        console.log(`Esta me retornando ${pessoa.Nome}` )
    )
