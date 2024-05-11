function validar(usuario, senha){
  let validacao = true; // verificação de boolean da senha
  if(usuario === "Thiago" && senha === "123" )
  return validacao;

}

let usuario = "Thiago"
let senha = "123"
let validacao = validar(usuario, senha);
if(validacao){
  console.log(" Acesso Concedido");
}else{
  console.log(" Acesso Negado")
}