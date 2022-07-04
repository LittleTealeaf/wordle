class Keyboard {
    constructor() {
        this.element = document.getElementById("keyboard");
        this.element.innerHTML = "";
        this.keys = {}


        const KEYBOARD_LETTERS = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            [CHAR_BACKSPACE,'z', 'x', 'c', 'v', 'b', 'n', 'm',CHAR_ENTER]
        ]

        KEYBOARD_LETTERS.forEach((letters) => {
            const row = document.createElement("div");
            row.classList.add("row");

            letters.forEach((letter) => {
                const key = document.createElement("div");
                key.innerHTML = letter;
                key.classList.add("key");
                key.classList.add("noselect");
                STATE_UNKNOWN(key);

                row.appendChild(key);
                this.keys[letter] = key;
            });

            this.element.appendChild(row);



        })

    }

    show() {
        SHOW(this.element);
    }
    hide() {
        HIDE(this.element);
    }

    setKeyPress(fun) {
        Object.entries(this.keys).forEach(([key,element]) => {
            element.onclick = () => fun(key);
        })
    }
}
