//OPERADORES REST/SPREAD

//intalar @babel/plugin-proposal-object-rest-spread

//REST

const usuario = {
   nome: 'Yan',
   idade: 23,
   profissao: 'programador'
}

const { nome, ...resto} = usuario;

console.log(nome)
console.log(resto)

const arr = [1,2,3,4];

const [a, b, ...c] = arr;

console.log(a)
console.log(b)
console.log(c)

function soma(a,b, ...params){
   return params
}

console.log(soma(1,2,3,4,5,6,7))


//SPREAD

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const arr3 = [...arr1, ...arr2];

console.log(arr3)

const usuario = {
   nome:'Yan',
   idade:23,
   profissao:'programador'

}

const newUsuario = {...usuario, nome:'Agatha'};

console.log(newUsuario)
