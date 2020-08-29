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

//CLASSES -metodo estatico
class Matematica{
   static soma(a,b){
      return a + b;
   }
}

console.log(Matematica.soma(3,4));

