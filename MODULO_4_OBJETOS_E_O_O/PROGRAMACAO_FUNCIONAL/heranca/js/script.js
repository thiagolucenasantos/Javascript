const defaultUser =  {
    name: "",
    email: "",
    level: 1
}

let user1 = {
    //para herdar no conceito funcional utilizamros os (... + nome do objeto a ser herdado)
    ...defaultUser,
    name: "Thiago",
    email: "thiago@gmail.com"
}

let adm = {
    ...defaultUser,
    name: "Ana",
    email: "ana@gmail.com",
    level: 2
}

console.log(adm)