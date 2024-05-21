class Person{

    age = 0;

    constructor(name){
        this.name = name;
    }
}

    //conceito de factory é a criação de uma função que irá auxiliar na construção de algo
    function createPerson(name, age){
        let p = new Person(name);
        p.age = age;
        return p;
    }

    let p1 = createPerson("Thiago", 33);

    console.log(`${p1.name} tem ${p1.age}`)
