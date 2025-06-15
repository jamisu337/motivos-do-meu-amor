// Calcular a mensagem do dia
const today = new Date();
const dataInicio = new Date('2024-10-17');
const diasNamorando = Math.floor((today - dataInicio) / (1000 * 60 * 60 * 24));
document.getElementById("mensagem").innerText = mensagens[diasNamorando - 1] || "Em breve...";
document.getElementById("dias-namorando").innerText = `Estamos namorando há ${diasNamorando} dias.`;

// Selecionar apenas as primeiras mensagens
const mensagensLimitadas = mensagens.slice(0, diasNamorando);

// Exibindo as mensagens no HTML
const listaMensagens = document.getElementById("lista_mensagens");
mensagensLimitadas.forEach((mensagem) => {
    const li = document.createElement("li");
    li.textContent = mensagem;
    listaMensagens.appendChild(li);
});

// --- LÓGICA PARA ALTERNAR A LISTA E COR DE FUNDO ---

const botaoToggle = document.getElementById("toggle_lista");
const botaovoltar = document.getElementById("voltar_lista");
const originalBodyColor = '#f0f0f0'; // Cor de original
const pinkColor = '#F96699'; // Cor rosa

// Evento para o botão "Exibir todas as mensagens"
botaoToggle.addEventListener("click", () => {
    const isHidden = listaMensagens.style.display === "none";
    if (isHidden) {
        listaMensagens.style.display = "block";
        document.body.style.backgroundColor = pinkColor; // Muda o fundo para rosa
    } else {
        listaMensagens.style.display = "none";
        document.body.style.backgroundColor = originalBodyColor; // Volta para a cor original
    }
});

// Evento para o botão "voltar" dentro da lista
botaovoltar.addEventListener("click", () => {
    listaMensagens.style.display = "none";
    document.body.style.backgroundColor = originalBodyColor; // Volta para a cor original
});
