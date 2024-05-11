let idade = 30

/* PRIMEIRA FORMA DE SE FAZER

if(idade >= 18){
    if(idade <= 60){
        console.log("Você é um adulto")
    }
}
*/

/*FORMA UTILIZANDO CONDICIONAIS*/
if(idade >= 18 && idade <= 60){
    console.log(`Sua idade é ${idade}`)
}

/*
&& - significa "e" (as duas condições ttem que ser satisfeitas)
|| - significa "ou" (apenas uma das condições sendo satisfeitas é o suficiente)
*/