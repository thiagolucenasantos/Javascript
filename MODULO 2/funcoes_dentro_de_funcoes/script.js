function addSquare(a, b){
  const square = (x) =>{ // outra função sendo chamado dentro da outra função
    return x * x;
  }

let sqrA = square(a);
let sqrB = square(b);
return sqrA + sqrB;
}
console.log(addSquare(2, 4))