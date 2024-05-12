//DOM = TUDO QUE POSSUE ESTRUTURAL NO HTML

//no inspecionar do console do navegador manipulando o DOM
//pegando uma tag diretamente

//sempre que a busca for no plural ele retorna um array

document.getElementsByTagName("h1")

//selecionando elementos no DOM mais específico pel ID
document.getElementById("nome do id")

//selcionando o elemento pela classe
document.getElementsByClassName('nome da classe')

//selecionando de fato pelo id ou classe que está no html
document.querySelector('.nome da classe')
document.querySelector('#nome do id');

//selecionando todos os elementos e percorrendo até chegar neles
document.querySelectorAll('#teste2 ul li')
