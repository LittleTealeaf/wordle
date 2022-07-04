/// <reference path="keyboard.js" />
/// <reference path="functions.js" />
/// <reference path="data.js" />
/// <reference path="stats.js" />
/// <reference path="game.js" />

let WORDS;

const CHAR_BACKSPACE = '←';
const CHAR_ENTER = '✓'

const keyboard = new Keyboard();
const stats = new Stats();

var game;

function keyboardInput(key) {
    game.keyinput(key.toLowerCase());

}

keyboard.setKeyPress(keyboardInput);


document.onkeydown = (event) => keyboardInput(event.key);

// fetchWords().then(choose).then((word) => {
//     game = new Game(word);
// })

fetchWords().then(words => {
    WORDS = words;
    return words;
}).then(choose).then(word => game = new Game(word));
