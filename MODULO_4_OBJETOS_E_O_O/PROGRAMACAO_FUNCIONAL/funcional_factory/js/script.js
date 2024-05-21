//criando uma factory, funcão que cria pessoas no exemplo
//normalmente indicamos que é uma factory quando a função inicia-se com create

function createPerson(nome, lastName, age){
    return {
        nome,
        lastName,
        age
        }
}

//utilizando a factory que cria objetos, no caso pessoa
let person1 = createPerson("Thiago", "Santos", 37);
let person2 = createPerson("Ana", "Catarina", 42);

console.log(person1.lastName);