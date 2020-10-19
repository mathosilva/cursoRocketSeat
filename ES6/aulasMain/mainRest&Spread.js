//REST
/*
const usuario = {
    nome: 'Matheus',
    idade: 25,
    faculdade: 'FAM'
}

const {nome, ...resto} = usuario

console.log(nome)
console.log(resto)

//exemplo 2 REST com ARRAY

const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

//Exemplo 3
function soma(...params){
    return params.reduce((total, next) => total + next)
}
console.log(soma(1,2,3))
*/
//SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)


//Exemplo 2 Spread

const usuario1 = {
    nome:'Matheus',
    idade: 25,
    faculdade: 'FAM'
}

const usuario2 = {...usuario1, nome: 'Jamal'}
console.log(usuario2)