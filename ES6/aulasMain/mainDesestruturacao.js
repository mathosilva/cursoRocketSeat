const usuario = {
    nome: 'Matheus',
    idade: 25,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
    },
}

const {nome, idade, endereco: {cidade} } = usuario
console.log(nome)
console.log(idade)
console.log(cidade)


// OU

function mostraNome({nome, idade}){
    console.log(nome, idade)
}
console.log(mostraNome(usuario))
