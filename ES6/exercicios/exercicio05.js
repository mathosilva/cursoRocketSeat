//5.1 REST OPERATOR
const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x)
console.log(y)

function soma(...params) {
    return params.reduce((total, next) => total+next)
    
}

console.log(soma(1, 2, 3, 4, 5, 6))
console.log(soma(1, 2))

//5.2 SPREAD OPERATOR
const usuario = {
    nome: "Matheus",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil"
    }
}

const usuario2 = {...usuario, nome: "Gabriel"}

const {endereco} = usuario
const novoEndereco = {...endereco, cidade:"Londrina", estado: "PR"}

const usuario3 = {...usuario, endereco: {...novoEndereco}}
console.log(usuario3)

