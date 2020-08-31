// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map  (item => item + 10 );

// 3.2

const usuario = { nome: "Yan", idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario))


// 3.3

const nome = "Yan";
const idade = 23;

const mostraUsuario = (nome= "Yan", idade = "18") =>({
   nome,
   idade
});

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise((resolve, reject)  => resolve());