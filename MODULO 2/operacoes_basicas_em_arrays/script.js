let ingredientes = [
    'agua',
    'farinha',
    'chocolate',
    'manteiga'
]

// para adicionar um item na lista utilizamos o nome do array + a função 'push'
ingredientes.push('ovo');
ingredientes.push('corante');

//função 'shift' remove o primeiro item do array, no caso a água
ingredientes.shift();

//função 'pop' remove o último item do meu array, no caso o corante adicionado
ingredientes.pop();

console.log(ingredientes);

//verificar o tamanho do array
console.log(ingredientes.length);

console.log(`Sua lista de ingredientes é: ${ingredientes}`)