/// <reference path="keyboard.js" />
/// <reference path="functions.js" />
/// <reference path="data.js" />
/// <reference path="stats.js" />
/// <reference path="game.js" />

const keyboard = new Keyboard();
const stats = new Stats();

const board = document.getElementById("board");


stats.update([1,2,3,2,3,5,4,3,4,6,2,2,4,5,6,6,3,6,8,6]);
stats.show();
