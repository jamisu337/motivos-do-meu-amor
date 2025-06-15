console.clear();

class musicPlayer {
  constructor() {
    // Referências aos elementos da interface
    this.playBtn = document.getElementById('play');
    this.controlPanel = document.getElementById('control-panel');
    this.infoBar = document.getElementById('info');

    // Referência ao elemento de áudio e estado de reprodução
    this.audio = document.getElementById('minha-musica');
    this.isPlaying = false; // Controla se a música está tocando ou não

    // Liga o método 'play' ao contexto correto
    this.play = this.play.bind(this);
    this.playBtn.addEventListener('click', this.play);
  }

  async play() { // 1. Adicionamos a palavra "async" aqui
    // Verifica se a música NÃO está tocando
    if (!this.isPlaying) {
      try { // 2. Adicionamos um bloco "try...catch"
        await this.audio.play(); // 3. Adicionamos "await" para esperar a permissão
        
        // Este código só roda se o navegador PERMITIR a reprodução:
        this.isPlaying = true;
        this.controlPanel.classList.add('active');
        this.infoBar.classList.add('active');

      } catch (error) {
        // Este código roda se o navegador NEGAR a permissão:
        console.error("O navegador bloqueou a reprodução automática:", error);
      }

    } else { // Se JÁ estiver tocando
      this.audio.pause();
      this.isPlaying = false;
      this.controlPanel.classList.remove('active');
      this.infoBar.classList.remove('active');
    }
  }
}

const newMusicplayer = new musicPlayer();

function iniciarMusicaComInteracao() {
    if (!newMusicplayer.isPlaying) {
      newMusicplayer.play();
    }
    document.body.removeEventListener('click', iniciarMusicaComInteracao);
    document.body.removeEventListener('touchend', iniciarMusicaComInteracao);
  }
  
  // Adiciona os "ouvintes" de interação
  document.body.addEventListener('click', iniciarMusicaComInteracao);
  document.body.addEventListener('touchend', iniciarMusicaComInteracao);
