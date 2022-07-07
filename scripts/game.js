

class Game {
    constructor(word) {
        console.log(word);

        this.won = false;

        this.element = document.getElementById("board");
        this.word = word;

        this.guesses = [];
        this.current = new Guess(this.element);
        this.guesses.push(this.current);
    }

    keyinput(key) {
        if(!this.won) {
            if(key == CHAR_BACKSPACE || key == 'backspace') {
                this.current.backspace();
            } else if(key == CHAR_ENTER || key == 'enter') {

                if(this.current.enter()) {
                    if(this.current.check(this.word)) {
                        console.log("WIN");
                        HIDE(keyboard.element);
                        this.guesses.forEach((guess) => {
                            if(guess != this.current) {
                                HIDE(guess.element);
                            }
                        })
                        games.push(this.guesses.length);
                        setCookie('games',games);
                        stats.update(games);
                        stats.show();
                        this.won = true;
                    } else {
                        this.guesses.push(this.current = new Guess(this.element));
                    }
                }


            } else if("abcdefghijklmnopqrstuvwxyz".includes(key)){
                this.current.type(key);
            }
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

    enter() {
        if(this.index == 5) {
            const word = this.letters.map((i) => i.innerHTML).join("");

            if(!WORDS.includes(word)) {
                SET_INVALID(this.element);
                setTimeout(() => REMOVE_INVALID(this.element),100);
                return false;
            }

            INACTIVE(this.element);
            return true;
        } else {
            return false;
        }
    }

    check(word) {
        const pool = [...word];
        this.letters.forEach((node,i) => {
            if(word[i] == node.innerHTML) {
                STATE_CORRECT(node);
                removeItemOnce(pool,word[i]);
                STATE_CORRECT(keyboard.keys[node.innerHTML]);
            }
        });

        if(pool.length == 0) {
            return true;
        }

        this.letters.forEach((node) => {
            if(node.dataset.state != 'correct') {
                if(pool.includes(node.innerHTML)) {
                    removeItemOnce(pool,node.innerHTML);
                    STATE_PARTIAL(node);
                    if(keyboard.keys[node.innerHTML].dataset.state != 'correct') {
                        STATE_PARTIAL(keyboard.keys[node.innerHTML]);
                    }
                } else {
                    STATE_WRONG(node);
                    if(keyboard.keys[node.innerHTML].dataset.state == 'unknown') {
                        STATE_WRONG(keyboard.keys[node.innerHTML]);
                    }
                }
            }
        })


        return false;
    }


}
