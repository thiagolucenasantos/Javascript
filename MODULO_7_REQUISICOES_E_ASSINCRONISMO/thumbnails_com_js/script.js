function mostrar(){
    let imagem = document.getElementById("imagem").files[0];
    
    //criação da imagem
    let img = document.createElement("img")
    img.src = URL.createObjectURL(imagem)//criação através da nossa variável que pega a imagem
    img.width = 300;

    //inserindo nossa imagem na nossa div de id area
    document.getElementById("area").appendChild(img)
}