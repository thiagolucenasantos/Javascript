async function enviar(){
    //utilizando o .files para pegar o arquivo
    let arquivo = document.getElementById("arquivo").files[0];//pegamos somente o primeiro arquivo com [0]

    //utilizaremos FormData() para fazer o upload do arquivo
    let body = new FormData();
    body.append("title", "teste");
    body.append("arquivo", arquivo)//recebendo nosso arquivo file

    let req = await fetch("https://www.meusite.com.br/upload", {
        method: "POST",
        body: body,
        headers: {
            "Content-type": "multipart/form-data"//precisamos mudar o content-type para que o envio possa receber corretamente
        }
    })
}