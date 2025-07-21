let integer = 10;
let float = 1.5;
let string = "pepe";
let boolean = true;

console.log(typeof integer, typeof float, typeof string, typeof boolean);

let txt = "mon text minus";

console.log(txt);

let txtMaj = txt.toUpperCase();

console.log(txtMaj);

// 1) avec une fonction mettre en minuscule !
// 2) avec une fonction enlever les espaces !
// 3) avec une fonction compter le nombres de characteres d'une string.
// 4) avec une fonction verifier si le mot "nous" est contenu dans la string.

// 1)
let bigTxt = "JE SUIS ENORME";

console.log(bigTxt);

let minTxt = bigTxt.toLowerCase();

console.log(minTxt);

// 2)
let spacedTxt = "           ALLO!          ";

console.log(spacedTxt);

let unspacedTxt = spacedTxt.trim();

console.log(unspacedTxt);

// 3)
let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."

console.log(lorem);

let loremCount = lorem.length;

console.log(loremCount);

// 4)

let nousTxt = "aujourd'hui nous allons manger au restaurant";

console.log(nousTxt);

let wordVerifier = nousTxt.includes("nous");

console.log(wordVerifier);