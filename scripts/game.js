class Game {
    constructor() {
        this.guesses = [];
        this.current = new Guess();
    }
}

class Guess {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("guess");
        
    }
}
