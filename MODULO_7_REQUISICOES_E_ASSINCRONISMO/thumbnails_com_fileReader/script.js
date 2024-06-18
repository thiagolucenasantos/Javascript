//outra forma de fazer a manipulação da imagem, porém a outra forma é mais fácil

function mostrar(){
    let reader = new FileReader();
    let imagem = document.getElementById("imagem").files[0];

reader.onloadend = function(){
    let img = document.createElement("img")//criação da imagem na variável img
    img.src = reader.result;//é aqui que pegamos o resultado da imagem
    img.width = 200;

    document.getElementById("area").appendChild(img)
}
    //antes de chegar a essa parte do código precisamos fazer uma função de captura da imagem
    reader.readAsDataURL(imagem);
}