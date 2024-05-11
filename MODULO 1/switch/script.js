//  switch - CONDICIONAL COM MULTIPLOS RESULTADOS

let profession = "agente";

switch(profession){
    case 'fiscal':
    console.log(`${profession}, sua camisa é verde`)
    break;
    case "bombeiro":
    console.log (`${profession}, sua camisa é vermelha`)
    break
    case "policial":
    console.log(`${profession}, sua camisa é azul`)
    break
    // caso nenhuma dessas seja a satisfatória utilizamos "default"
    default:
    console.log("Sua camisa é preta");
    break;
}