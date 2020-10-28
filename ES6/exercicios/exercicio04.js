// 4.1 desestruturação simples

const empresa = {
    nome: "rocketseat",
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
}

const {nome, endereco: {cidade, estado}} = empresa
console.log(nome)
console.log(cidade)
console.log(estado)




//4.2 Desestruturação em parâmetros

const usuario = {
    nome:"Matheus",
    idade: 25
}

function mostraInfo({nome, idade}){
    return `${nome} tem ${idade} anos.`
}

console.log(mostraInfo(usuario))
