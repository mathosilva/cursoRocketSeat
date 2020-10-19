const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const mapUsuario = usuarios.map(item =>  item.idade)
   
console.log(mapUsuario)

//2.2

const filterUsuario = usuarios.filter((item) => {
    return item.empresa === 'Rocketseat'
})

console.log(filterUsuario)

//2.3
const fintUsuario = usuarios.find((item) => item.empresa === 'Google')

console.log(fintUsuario)

//Unindo Operações

const multiplicaIdade = usuarios.map((item) => {
    item.idade *= 2
    return item
})
const filtraIdade = multiplicaIdade.filter((item) => {
    return item.idade <= 50
})

console.log(filtraIdade)