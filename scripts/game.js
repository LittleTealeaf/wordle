

class Game {
    constructor(word) {
        console.log(word);

        this.element = document.getElementById("board");
        this.word = word;

        this.guesses = [];
        this.current = new Guess(this.element);
        INACTIVE(this.current.element);
        this.current = new Guess(this.element);
    }

    keyinput(key) {
        if(key == CHAR_BACKSPACE || key == 'backspace') {
            this.current.backspace();
        } else if(key == CHAR_ENTER || key == 'enter') {

        } else if("abcdefghijklmnopqrstuvwxyz".includes(key)){
            this.current.type(key);
        }
    }
}

class Guess {
    constructor(board) {
        this.element = document.createElement("div");
        this.element.classList.add("row");

        this.index = 0;
        this.letters = [];

        ACTIVE(this.element);


        board.appendChild(this.element);

        for (var i = 0; i < 5; i++) {
            const cell = document.createElement("div");
            cell.classList.add('cell');


            STATE_BLANK(cell);

            this.element.appendChild(cell);
            this.letters.push(cell);
        }


        document.getElementById("board").appendChild(this.element);
    }

    type(letter) {
        if (this.index < 5) {
            this.letters[this.index].innerHTML = letter;
            STATE_UNKNOWN(this.letters[this.index]);
            this.index++;
        }
    }

    backspace() {
        if(this.index > 0) {
            this.index--;
            STATE_BLANK(this.letters[this.index]);
            this.letters[this.index].innerHTML = ' ';
        }
    }


}
