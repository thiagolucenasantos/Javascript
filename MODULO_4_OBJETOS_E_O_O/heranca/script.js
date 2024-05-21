class Person{

    age = 0;

    constructor(name){
        this.name = name;
    }

    //adicionando uma nova funcão que poderá ser utilizada na classe Students também
    sayHi(){
        console.log(`${this.name} falou olá!!`)
    }
}
    //utilizando extends que faz o conceito de herança
    //recebendo os atributos da classe pai
    class Students extends Person{

        constructor(name, id){
            //utilizamos o super agora para referenciar o nosso atributo pai, que possue a propriedade name
            super(name);
            //utilizamos o this para refetenciar o id da propria classe Students
            this.id = id;
        }

        //sobrescrevendo a função sayHi que temos na classe pai
        sayHi(){
            console.log(`${this.name} é estudante e falou olá!!`)
        }
    }

    let p1 = new Students("Thiago", 1);
    p1.age = 30;//alterando a propriedade age de Students que herdou do pai Person

    //utilizando a função sayHi
    p1.sayHi();

    console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}.`)