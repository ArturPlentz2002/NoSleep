// index.js

// Definindo um objeto para um usuário
// Removendo as anotações de tipo TypeScript

// Função para exibir informações do usuário
function exibirUsuario(usuario) {
  console.log(`ID: ${usuario.id}`);
  console.log(`Nome: ${usuario.nome}`);
  console.log(`Email: ${usuario.email}`);
}

// Criando um usuário exemplo
const usuario1 = {
  id: 1,
  nome: "Letícia",
  email: "leticia@example.com",
};

// Chamando a função
exibirUsuario(usuario1);
