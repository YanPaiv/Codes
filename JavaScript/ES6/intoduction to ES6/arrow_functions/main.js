//ARROW FUNCTIONS

const arr = [1,2,3,4,5,6];

const newArr = arr.map(item => item * 2);

console.log(newArr)

//retornar um objeto

const teste = () => ({nome: 'Yan'})

console.log(teste)

//valores padroes 

const soma = (a = 2, b = 3) => a + b

console.log(soma(1))
console.log(soma())
