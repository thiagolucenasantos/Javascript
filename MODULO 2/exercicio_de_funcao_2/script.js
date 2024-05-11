function calculaImovel(metragem, quartos){
  let m2 = 3000;
  let preco = 0;
    switch(quartos){
        case 1:
        preco = metragem * m2
        break;
        case 2:
        preco = metragem * (m2 * 1.2)
        break;
        case 3 :
        preco = metragem * (m2 * 1.3)
    }
   return preco
}


let metragem = 150;
let quartos = 2;
let preco = calculaImovel(metragem, quartos);
console.log(`${preco}`)