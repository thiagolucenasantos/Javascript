// condiconal ternario "?"

let isMember = true;

let shipping = isMember ? 2 : 10; //se for membro o frete é 2 se não o frete é 10
console.log(isMember ? "Você é membro" : "Você não é membro");
console.log("Frete: " + shipping );

let age = 20;

let isAdult = ((age > 18 && age < 60) ? "Adulto" : "Criança")
console.log(isAdult)