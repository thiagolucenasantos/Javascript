let n = 10;
//toString(): faz com que o número se transforme em String
let resultado = n.toString();

let z = 10.398474959
//toFixed(): faz com que após o ponto obedeça a quantidade de casas decimais
let resultado2 = z.toFixed(2);

let a = "25";
//parseInt(): transforma a String na variável em number
let resultado3 = parseInt(a) + 5;

let b = "23.9";
//parseFloat(): preserva o decimal após o ponto, o parseInt não.
let resultado4 = parseFloat(b) + 4;

console.log(`toString: ${resultado}`)
console.log(`toFixed: ${resultado2}`)
console.log(`parseInt: ${resultado3}`)
console.log(`parseFloat: ${resultado4}`)