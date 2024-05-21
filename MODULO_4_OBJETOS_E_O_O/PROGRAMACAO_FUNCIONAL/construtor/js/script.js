//criando uma factory, funcão que cria pessoas no exemplo
//normalmente indicamos que é uma factory quando a função inicia-se com create

function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        //utilizando uma função para utilizar o this dentro da factory, importante fazer a função sem uso de arrow function
        getFullName() {
            return `${this.name} ${this.lastName}`
        },
        //objetos nao tem construtor, somente classes, mas podemos emular esse tipo de situação
        startPerson(){
            console.log('Pessoa foi criada!!')
        }
    }
}

//utilizando a factory que cria objetos, no caso pessoa
let person1 = createPerson("Thiago", "Santos", 37);


person1.startPerson();
//pegando todo o nome com a função criada utilizando o this
console.log(person1.getFullName()); //não se esqueça dos () para chamar a função no console