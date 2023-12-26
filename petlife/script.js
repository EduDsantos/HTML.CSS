const duvidas = document.querySelectorAll('.duvida')

duvidas.forEach(function (duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})

//Primeiro eu crio uma funçao com o parametro 'duvida' pegando todas as classes 
//(ForEach) Para cada seçao de duvida que tiver eu crio um evento de click nelas. Quando eu clicar 
//em alguma delas eu crio uma classe, e com essa classe eu consigo fazer alguma coisa no css 

//toggle ( trocar, liga e desliga), ele vai fazer uma verificaçao, caso a classe ja esteja criada ele ira tirar ela, caso ainda noa esteja ele irá cria-la