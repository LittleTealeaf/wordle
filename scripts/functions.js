const fetchWords = async () => fetch('./words.json').then(response => response.json());

const choose = (arr) => arr[Math.floor(Math.random() * arr.length)];

