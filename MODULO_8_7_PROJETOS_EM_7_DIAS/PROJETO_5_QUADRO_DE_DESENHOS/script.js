//INICIAL DATA (Dados iniciais)
let currentColor = "black";

let canDraw = false; // variável de desenho

let screen = document.querySelector("#tela")
//pegando o contexto da tela de pintura em duas dimensões
let ctx = screen.getContext("2d");

//posiçoes do mouse
let mouseX = 0;
let mouseY = 0;

//EVENTS (Eventos)
//vamos fazer o código para movimentar a paleta de cores e escolher a desejada
document.querySelectorAll(".colorArea .color").forEach(item =>{
    item.addEventListener("click", colorClickEvent);
});

/*
Passo a passo para desenar no canvas:
- Quando o clique do mouse for APERTADO, ative o modo desenho.
- Quando o muse se MOVER, se o modo desenho estiver ativado, desenhe.
- Quando o clique do mouse DESAPERTAR, desative o modo desenho
*/
screen.addEventListener("mousedown", mouseDowEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent)
document.querySelector(".clear").addEventListener("click", clearScreen)

//FUNCTIONS (FUNÇÕES)
//função para quando clicar em alguma das cores
function colorClickEvent(e){
    //vamos pegar a cor pelo seu data-color do html
    let color = e.target.getAttribute("data-color")
    //vamos armzenar o click na cor desejada na nossa variável inicial de cor
    currentColor = color;

    //vamos remover quem está com a classe active que deixa a cor selecionada
    //para ir realmente para a que selecionamos atualmente
    document.querySelector(".color.active").classList.remove("active");
    //agora vamos adicionar o active na escolhida atualmente
    e.target.classList.add("active");
}

function mouseDowEvent(e){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){
    if(canDraw){
        //vamos utilizar o evento que mostra a posição vertical pageX e horizontal pagaY do mouse
        //também vamos utilizar um elemento para descontarmos as bordas que o nosso canvas não utiliza na página, para achar nossa posição real do mouse
        draw(e.pageX, e.pageY)
    }
}

function mouseUpEvent(){
    canDraw = false;
}

function draw(x, y){
    //pegando a posição do mouse
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //atributos para desenhar de fato na tela, utilizaremos nossa variável  ctx
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.strokeStyle = currentColor;
    ctx.stroke();
    ctx.closePath();

    //salvando na variável a posição 
    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}