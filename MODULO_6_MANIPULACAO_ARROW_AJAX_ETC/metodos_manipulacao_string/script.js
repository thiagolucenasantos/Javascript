let nome = "Genival Lacerda Junior";

//indexOf retorna a posição em que determinado texto se encontra, caso ele não localize retornará -1
let resultado = nome.indexOf("Junior");

console.log(resultado);

//métodos responsáveis por extrair uma string

let nome2 = "Josue Carlos";

//slice, ele pega a string a partir de onde você quer até onde você quiser, depende da numeração passada
// nos parâmetros
let slice1 = nome2.slice(3, 8);
//utilizando -6 no slice ele pega a string de trás pra frente, nesse caso mostrará Carlos
//Obs: podemos usar o método substring(), porém não possue essa possibilidade de números negativos, 
//funciona como o slice normal
let slice2 = nome2.slice(-6);
//nesse caso o substr o primeiro parÂmetro é a posição inicial e o segundo a quantidade de caracteres que ele 
//irá pegar
let substr = nome2.substr(2, 7);
//replace, primeiro parametro pesquisa se possue aquela letra ou palavra e segundo substitui pela qual você 
//atribuiu
let replace = nome2.replace("Carlos", "Jesus")
//toUpperCase, transforma tudo em letras maiúsculas, toLowerCase transforma tudo em minúscula.
let upperCase = nome2.toUpperCase();
//trim, tira todos os espaços inúteis caso possua na sua string
let trim = nome2.trim();
//charAt, mostra qual o caractere que possue na posição passada em parâmentro, hoje podemos pegar o elemento, 
//utilizando como exemplo nome2.[2]
let charAt = nome2.charAt(2);
//split, gera um arrai através do parâmetro passado, no nosso exemplo gerará 2, ele irá cortar onde tem espaço
let split = nome2.split(" ")

console.log(slice1);
console.log(slice2)
console.log(substr)
console.log(replace)
console.log(upperCase);
console.log(trim)
console.log(charAt)
console.log(split)