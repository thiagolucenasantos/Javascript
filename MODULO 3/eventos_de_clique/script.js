//utilizando o onclick direto no html
function clicou(){
    alert('Clicou no botão');
}

//fazendo o evento de clique diretamente no javascript
let botao = document.querySelector('.botaoClique');
botao.addEventListener('click', () => {
    clicou();
})
