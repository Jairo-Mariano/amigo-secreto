//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes inseridos
let nomes = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const inputNome = document.getElementById("amigo"); // Campo de entrada
    const listaNomes = document.getElementById("listaAmigos"); // Lista de nomes
    const nome = inputNome.value.trim(); // Remove espaços extras

    // Validação do nome inserido
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Evita duplicação de nomes
    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array e atualiza a lista exibida
    nomes.push(nome);
    atualizarLista();
    inputNome.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a exibição da lista de nomes
function atualizarLista() {
    const listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = ""; // Limpa a lista antes de recriar

    nomes.forEach(nome => {
        const li = document.createElement("li"); // Cria um novo item de lista
        li.textContent = nome;
        listaNomes.appendChild(li); // Adiciona o item à lista
    });
}

// Função para sortear um nome da lista
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verifica se há nomes suficientes
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gera um índice aleatório dentro do array de nomes
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    resultado.innerHTML = `<p>🎉 Amigo secreto sorteado: <strong>${nomes[indiceSorteado]}</strong></p>`;
}
