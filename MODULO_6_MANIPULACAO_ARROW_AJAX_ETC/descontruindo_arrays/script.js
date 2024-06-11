let info = [ "Camila Pitanga", "Camila", "Pitanga", "@camila"]

//desconstruindo o array
let [nomeCompleto, nome, sobreNome, instagram] = info;

//pegando apenas o primeiro item do array e o último
let [nameCompleto, , , insta] = info

console.log(nomeCompleto, nome, sobreNome, instagram)

console.log(nameCompleto, insta)

//desconstruindo arrays de uma função
function criar(){
    let numeros = [1, 2, 3]
    return numeros
}

//desconstruindo
let [a, b, c] = criar();

console.log(a, b, c)
