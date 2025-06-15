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

  play() {
    // Verifica se a música NÃO está tocando
    if (!this.isPlaying) {
      this.audio.play(); // Toca a música
      this.isPlaying = true; // Atualiza o estado
      this.controlPanel.classList.add('active');
      this.infoBar.classList.add('active');
    } else { // Se JÁ estiver tocando
      this.audio.pause(); // Pausa a música
      this.isPlaying = false; // Atualiza o estado
      this.controlPanel.classList.remove('active');
      this.infoBar.classList.remove('active');
    }
  }
}

const newMusicplayer = new musicPlayer();

newMusicplayer.play();