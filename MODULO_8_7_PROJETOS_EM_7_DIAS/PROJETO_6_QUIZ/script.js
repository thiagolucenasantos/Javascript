//iniciando da questão 0
let currentQuestion = 0;
let currentAnswers = 0;

showQuestion();

//FUNCTIONS
//iremos pegar as questões do arrai do arquivo question
function showQuestion(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        //cálculo para fazer a animação da nossa barrinha de progresso das perguntas
        let pct = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector(".progress--bar").style.width = `${pct}%`//atribuindo a class do html o style da fórmula
        
        document.querySelector(".scoreArea").style.display="none";
        document.querySelector(".questionArea").style.display="block";

        document.querySelector(".question").innerHTML = q.question;
        let optionsHtml = "";
        for(let i in q.options){
            optionsHtml += `<div data-op="${i}" class ="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
        }
        //inserindo os elemento das perguntas na tela
        document.querySelector(".options").innerHTML = optionsHtml;

        document.querySelectorAll(".options .option").forEach(item => {
            item.addEventListener("click", optionClickEvent)
        })
    }else{
        //acabaram as questoes
        finishQuiz();
    }
}
function optionClickEvent(e){
    let clickOption = parseInt (e.target.getAttribute("data-op"));//usando parseInt para pegar o número da resposta, do array
    //se resposta da pergunta atual for igual a que clicamos, acertamos a resposta
    if(questions[currentQuestion].answer === clickOption){
        currentAnswers++;//quando ele acertar irá contabilizar um acerto no resultado final
    }
    //independente de acertar ou errar, vamos para a próxima pergunta
    currentQuestion++
    showQuestion();
}
//EVENTS
document.querySelector(".scoreArea button").addEventListener("click", resetQuestions);


//FUNCTIONS
function finishQuiz(){
    //cálculo de acertos
    let points = Math.floor((currentAnswers / questions.length) * 100);

    //vamos modificar a cor de acordo com a quantidade de acertos
    if(points < 30){
        document.querySelector(".scoreText1").innerHTML = "Precisa melhorar!!";
        document.querySelector(".scorePct").style.color = "red"
    }else if(points >=30 && points < 70){
         document.querySelector(".scoreText1").innerHTML = "Muito bom!!";
        document.querySelector(".scorePct").style.color = "yellow"
    }else if(points >= 70){
         document.querySelector(".scoreText1").innerHTML = "Parabéns!!";
        document.querySelector(".scorePct").style.color = "green"
    }
    //porcentagem de acertos
    document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`
    //frase com a quantidade de acertos
    document.querySelector(".scoreText2").innerHTML = `Você respondeu ${questions.length} questões e acertou ${currentAnswers}!!`


    document.querySelector(".scoreArea").style.display="block";
    document.querySelector(".questionArea").style.display="none";
    document.querySelector(".progress--bar").style.width = "100%"
}

function resetQuestions(){
    currentAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}