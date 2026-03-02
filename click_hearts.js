// ===== EXPLOSÃO DE CORAÇÕES AO CLICAR =====
(function () {
    const hearts = ['♥', '♡', '❤', '❥', '💕'];
    const totalPorClique = 8;

    document.addEventListener('click', (e) => {
        // Ignora cliques em botões e controles interativos
        if (e.target.closest('button, a, .controls, .play, .prev, .next, .theme-toggle-switch')) return;

        for (let i = 0; i < totalPorClique; i++) {
            criarCoracao(e.clientX, e.clientY);
        }
    });

    function criarCoracao(x, y) {
        const heart = document.createElement('span');
        heart.classList.add('click-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        // Direção aleatória (espalhamento em 360°)
        const angulo = Math.random() * Math.PI * 2;
        const distancia = Math.random() * 80 + 40;
        const tx = Math.cos(angulo) * distancia;
        const ty = Math.sin(angulo) * distancia;
        const rot = (Math.random() - 0.5) * 360;

        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.setProperty('--tx', tx + 'px');
        heart.style.setProperty('--ty', ty + 'px');
        heart.style.setProperty('--rot', rot + 'deg');

        // Tamanho variado
        const size = Math.random() * 12 + 14;
        heart.style.fontSize = size + 'px';

        document.body.appendChild(heart);

        // Remove o elemento após a animação
        heart.addEventListener('animationend', () => heart.remove());
    }
})();
