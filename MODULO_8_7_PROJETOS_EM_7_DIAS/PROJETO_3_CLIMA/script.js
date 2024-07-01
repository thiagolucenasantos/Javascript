//estamos capturando o botão buscar e iremos executar algo quando ele enviar através do submit
document.querySelector(".busca").addEventListener("submit",async (event) => {
    //vamos prevenir o comportamento padrão do formulário primeiramente
    event.preventDefault();

    //vamos pegar agora o que foi digitado através do id do formulário
    let input = document.querySelector("#searchInput").value;

    if (input !== "") {
        clearInfo();
        showWarning("Um momento estamos apurando as informações...")

        //vamos montar a url da nossa Api, que estamos pegando direto do site OpenWeather
        //colocamos o encodeURI para quando uo usuário digitar ex: "São Paulo" ele gerar corretamente sem espaços 'S%C3%A3o%20Paulo'
        //no final colocamos o código da nossa API KEY que está na nossa conta criada em My API Keys
        //adicionamos metric e também a linguagem como pt_br no final da nossa API
        //let url = `https://api.openweathermap.org/data/3.0/onecall?lat=weather?q=${encodeURI(input)}&appid={18def0f13d735f56ffdcfbe3b3cd9d16}&units=metric&lang=pt_br`
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=18def0f13d735f56ffdcfbe3b3cd9d16&units=metric&lang=pt_br`
        //vamos pegar a url com a função fetch utilizando o async e await
        let results = await fetch(url);
        //agora vamos pegar o resultado e transformar em json para utilizarmos
        let json = await results.json();
        
        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }else{
            //caso não ache a localização ela irá limpar os dados na tela
            clearInfo();
            showWarning("Não encontramos esta localização");
        }
    }else{
        clearInfo()
    }
})

function showInfo(json){
    //primeiramente vamos tirar a frase que está no showWarning
    showWarning("");

    document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`
    document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`

    //substituindo a imagem da url pela nossa do tempIcon
    document.querySelector(".temp img").setAttribute("src", `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    //agora vamos trocar a propriedade style do atributo no html para utilizar da api
    document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle-90}deg)`
    //exibindo o resultado após a API apurar tudo
    document.querySelector(".resultado").style.display = "block";
}

//função para limpar todos os resultados caso não ache a localização
function clearInfo(){
    showWarning("");
    document.querySelector(".resultado").style.display = "none";
}
//função que utilizaremos caso o usuário não digite nada na busca
function showWarning(msg){
    document.querySelector(".aviso").innerHTML = msg;
}