export class Article {
  // Il costruttore definisce le proprietà e le inizializza.
  // `public` crea automaticamente le proprietà della classe.
  constructor(
    public title: string,          // Titolo dell'articolo
    public link: string,           // URL dell'articolo
    public votes: number = 0       // Numero di voti (di default 0)
  ) {}

  // Metodo per aumentare i voti
  voteUp(): void {
    this.votes++;
  }

  // Metodo per diminuire i voti
  voteDown(): void {
    this.votes--;
  }

    domain(): string | null {
    try {
        const url = new URL(this.link);
        return url.hostname; // e.g. "foo.com"
    } catch (error) {
        console.error('Invalid URL:', this.link);
        return null;
    }
    }

}
