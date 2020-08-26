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