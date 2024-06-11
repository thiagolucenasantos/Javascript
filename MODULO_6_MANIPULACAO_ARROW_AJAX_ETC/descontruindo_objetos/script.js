let pessoa = {
    nome: "Thiago",
    sobrenome: "Santos",
    idade: 40,
    social: {
        facebook: "thiagoWeb",
        instagram: "tgahm"
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

//Desconstruindo um objeto
//também vamos altarar o nome da variável nome do objeto original
//padronizando valor default de sexo, caso não tenha no objeto principal
//pegando informação dentro do objeto na parte social, exemplo facebook
let {nome: pessoaNome, sobrenome, sexo = "masculino", social: {facebook}} = pessoa;

console.log(pessoaNome, sobrenome, sexo, facebook)

//desconstruindo objeto em uma função diretamente nos parâmetros, não esquecer os {}
function nomesCompletos({nome, sobrenome, social:{facebook}}){
    return `${nome} ${sobrenome} (Siga no facebook ${facebook})`
}

console.log(nomesCompletos(pessoa))