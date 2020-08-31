const usuarios = [
   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  ];
  
  const usuariosIdade = usuarios.map(usuario => usuario.idade);
  console.log(usuariosIdade);

  const usuariosEmpresa18 = usuarios.filter(usuario => usuario.empresa && usuario.idade >= 18);

  console.log(usuariosEmpresa18);

  const usuariosGoogle = usuarios.find(usuario => usuario.empresa === 'Google');
  console.log(usuariosGoogle);

  const calculo = usuarios
  .map(usuario =>({...usuario,idade:usuario.idade * 2}))
  .filter(usuario => usuario.idade <=50);

  console.log(calculo)