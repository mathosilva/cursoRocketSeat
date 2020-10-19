const arr = [1, 3, 4, 5, 6]

//Quando a função tem apenas 1 parametro, não e necessário o uso de parenteses na arrow function
const newArr = arr.map(item => item * 2)

console.log(newArr)

//retornando um objeto usando arrow function menos verboso

const teste = () => ({nome: 'diego'})

console.log(teste())