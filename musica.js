"use strict";
class Musica {
    constructor(titulo, duracao, artista) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.artista = artista;
    }
}
class Playlist {
    constructor() {
        this.musicas = [];
        this.reproduzindo = false;
        this.indiceAtual = 0;
    }
    adicionarMusica(Musica) {
        this.musicas.push(Musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.reproduzindo = true;
            return "Reproduzindo: " + this.musicas[this.indiceAtual].titulo + " - "
                + this.musicas[this.indiceAtual].artista;
        }
        else {
            return "A playlist está vazia";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "musica pausada";
        }
        else {
            return "nenhuma musica esta sendo reproduzida";
        }
    }
    proxima() {
        if (this.musicas.length > 0) {
            this.indiceAtual = (this.indiceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else {
            return "A playlsit está vazia";
        }
    }
}
const musica1 = new Musica("Vai namorar comigo", 300, "henrique e juliano");
const musica2 = new Musica("18hs", 250, "D'senna");
const musica3 = new Musica("surreal", 300, "D'senna");
const minhaPlaylist = new Playlist();
minhaPlaylist.adicionarMusica(musica1);
minhaPlaylist.adicionarMusica(musica2);
minhaPlaylist.adicionarMusica(musica3);
console.log(minhaPlaylist.reproduzir());
console.log(minhaPlaylist.pausar());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
