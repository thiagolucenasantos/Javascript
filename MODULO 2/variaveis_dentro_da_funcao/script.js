let incremento = 0  // variável de escopo global, posso utilizar ela dentro de uma função

function valor(){
  let incremento = 0 //essa variável local de mesmo nome, tem prioridade sobre a de escopo local, contudo pode ser que não funcione o código corretamente, precisa se atentar.
  incremento++;
}
//chamando a função para incrementar
valor();
valor();

console.log(incremento)