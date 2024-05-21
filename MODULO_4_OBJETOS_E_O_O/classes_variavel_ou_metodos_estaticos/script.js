class Person{
//o método static refetencia somente a classe Person, não podendo ser alterada por outra
//classe ou método que não seja ela mesma.
    static hands = 2;
    age = 0;

    constructor(name){
        this.name = name;
    }
}

let p1 = new Person("Thiago")
//observe que para pegar o atributo statico buscamos pela classe Person, não pelo p1
console.log(`${p1.name} tem ${Person.hands} mãos`)