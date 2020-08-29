//DESTRUTURAÇAO DE OBJETOS

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
