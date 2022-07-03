class Keyboard {
    constructor() {
        this.element = document.getElementById("keyboard");
        this.element.innerHTML = "";
        this.keys = {}

        const KEYBOARD_LETTERS = [
            'QWERTYUIOP'.split(""),
            'ASDFGHJKL'.split(""),
            'ZXCVBNM'.split("")
        ];

    }
}
