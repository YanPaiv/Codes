/*

//CLASSES

class List{
   constructor(){
      this.data = [];
   }

   add(data){
      this.data.push(data);
      console.log(this.data)
   }
}

class TodoList extends List {
   constructor(){
      super();
      this.usuario = "yan";
   }

   mostrarUsuario(){
      console.log(this.usuario)
   }
  
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
   MinhaLista.add('novo todo');
}
MinhaLista.mostrarUsuario();
*/

//CLASSES -metodo estatico
/*
class Matematica{
   static soma(a,b){
      return a + b;
   }
}

console.log(Matematica.soma(3,4));

*/

//CONSTANTES
/*
const usuario = {nome: "Agatha"};

usuario.nome = 'Yan'

console.log(usuario);
*/

//VARIAVEIS DE SCOPO
/*
function teste(x){
   let y = 2

   if(x > 5){
      let y = 4;
      console.log(x, y)
   }
}

teste(10);
*/

//OPERAÇOES EM ARRAY
/*
const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map(function(item){
   return item * 2
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
   return total + next;
});

console.log(sum)

//0
//1

//1
//2

//3
//3...

const filter = arr.filter(function(item){
   return item % 2 === 0
});

console.log(filter)

const find = arr.find(function(item){
   return item === 4;
})

console.log(find);
*/

//ARROW FUNCTIONS
/*
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
*/

//DESTRUTURAÇAO DE OBJETOS
/*
const usuario = {
   nome: 'Yan',
   idade: 23,
   endereco: {
      cidade: 'Nova Friburgo',
      estado: 'Rj',
   },
};

function mostrarNome({ nome, idade}) {
   console.log(nome, idade);
}

mostrarNome(usuario);
*/

//OPERADORES REST/SPREAD

//intalar @babel/plugin-proposal-object-rest-spread

//REST
/*
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
*/

//SPREAD
/*
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

*/
//TEMPLATES LITERALS
/*
const nome = 'Yan'
const idade = 23
//console.log('Meu nome é '+nome+'e tenho' +idade+' anos');

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
*/

//OBJECT SHORT SYNTAX

const nome = 'Yan'
const idade = 23

const usuario = {
   nome,
   idade,
   profissao:'programador'
}

console.log(usuario)