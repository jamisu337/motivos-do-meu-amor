// ===== SISTEMA DE TEMA =====
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
});

// ===== CÁLCULO DE DIAS =====
const today = new Date();
const dataInicio = new Date('2024-10-17');
const diasNamorando = Math.floor((today - dataInicio) / (1000 * 60 * 60 * 24));

// ===== MENSAGEM ALEATÓRIA =====
const mensagensDisponiveis = mensagens.slice(0, diasNamorando);
const indiceAleatorio = Math.floor(Math.random() * mensagensDisponiveis.length);
document.getElementById("mensagem").innerText = mensagensDisponiveis[indiceAleatorio] || "Em breve...";

// ===== CONTADOR TOTAL DE DIAS =====
document.getElementById("dias-namorando").innerText = `Estamos namorando há ${diasNamorando} dias.`;

// ===== CONTADOR DETALHADO (ANOS, MESES E DIAS) =====
function calcularTempoDecorrido(inicio, fim) {
    let anos = fim.getFullYear() - inicio.getFullYear();
    let meses = fim.getMonth() - inicio.getMonth();
    let dias = fim.getDate() - inicio.getDate();

    // Se os dias ficaram negativos, empresta um mês
    if (dias < 0) {
        meses--;
        // Pega o último dia do mês anterior ao mês atual de 'fim'
        const mesAnterior = new Date(fim.getFullYear(), fim.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    // Se os meses ficaram negativos, empresta um ano
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return { anos, meses, dias };
}

const tempo = calcularTempoDecorrido(dataInicio, today);

let detalhes = '';
if (tempo.anos > 0) {
    detalhes += `${tempo.anos} ${tempo.anos === 1 ? 'ano' : 'anos'}, `;
}
if (tempo.meses > 0) {
    detalhes += `${tempo.meses} ${tempo.meses === 1 ? 'mês' : 'meses'} e `;
}
detalhes += `${tempo.dias} ${tempo.dias === 1 ? 'dia' : 'dias'}`;

document.getElementById("detalhes-namorando").innerText = detalhes;

// ===== LISTA DE MENSAGENS =====
const mensagensLimitadas = mensagens.slice(0, diasNamorando);
const listaMensagens = document.getElementById("lista_mensagens");
mensagensLimitadas.forEach((mensagem) => {
    const li = document.createElement("li");
    li.textContent = mensagem;
    listaMensagens.appendChild(li);
});

// ===== LÓGICA PARA ALTERNAR A LISTA =====
const botaoToggle = document.getElementById("toggle_lista");
const botaovoltar = document.getElementById("voltar_lista");

botaoToggle.addEventListener("click", () => {
    const isHidden = listaMensagens.style.display === "none";
    listaMensagens.style.display = isHidden ? "block" : "none";
    if (isHidden) {
        criarParticulas('particles-lista', 12);
    }
});

botaovoltar.addEventListener("click", () => {
    listaMensagens.style.display = "none";
});

// ===== PARTÍCULAS DE CORAÇÕES FLUTUANTES =====
function criarParticulas(containerId, quantidade) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Limpa partículas anteriores
    container.innerHTML = '';

    const hearts = ['♥', '♡', '❤', '❥'];
    const total = quantidade || 15;

    for (let i = 0; i < total; i++) {
        const heart = document.createElement('span');
        heart.classList.add('particle-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + '%';

        const size = Math.random() * 14 + 10;
        heart.style.fontSize = size + 'px';

        const duration = Math.random() * 10 + 8;
        heart.style.animationDuration = duration + 's';

        const delay = Math.random() * 12;
        heart.style.animationDelay = delay + 's';

        container.appendChild(heart);
    }
}

criarParticulas('particles', 15);

