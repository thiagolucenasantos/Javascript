let idade = 60;

if(idade < 18){
    console.log("Você é uma criança")
}else if(idade >= 18 && idade < 60){
    console.log(`Você tem ${idade} anos, já é um adulto`)
}else if(idade >= 60){
    console.log("Você é um idoso")
}
/*com o else if se caso uma das verificações seja
verdadeira ele valida e não confere as demais */