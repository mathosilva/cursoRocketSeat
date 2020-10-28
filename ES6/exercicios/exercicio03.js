//transformando cunçõeos em arrow functions
//3.1

const arr = [1, 2, 3, 4, 5]

const newArr = arr.map(item => item+10)


// 3.2

const usuario = {nome: "Matheus", idade: 25}

const mostraIdade = usuario => usuario.idade
// function mostraIdade(usuario){
//     return usuario.idade
// }
console.log(mostraIdade(usuario))


//3.3
const nome = "Matheus"
const idade = 25


const mostraUsuario = (nome = 'Matheus', idade = 18) => ({nome, idade})

console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))
mostraUsuario(nome, idade)
mostraUsuario(nome)

//3.4 

const promise = () =>{
    return new Promise((resolve, reject) => resolve())
}
