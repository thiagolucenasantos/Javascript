let pessoa = {
    nome: 'Thiago',
    sobrenome:'Santos',
    idade: 20,
    nomeCompleto: function(){ //até o momento uma arrow funciton não tem acesso ao this, gerando indefined
        return `${this.nome} ${this.sobrenome}` //utilizando 'this' referece a propriedade dentro do objeto
    }
}
console.log(pessoa.nomeCompleto())