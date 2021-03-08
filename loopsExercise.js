// Loops Exercise

// 1
for (i = 1; i <= 7; i++){
    console.log(i);
}
// Or
// for (i = 1; i < 8; i++){
//     console.log(i);
// }

console.log("========");

// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
}

console.log("========");

// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

// 3b
for (name of wizards){
    console.log(name);
}

console.log("========");

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies <= 7){
    harryPotterMovies++;
    console.log(harryPotterMovies);
}
// Or
// while (true){
//     harryPotterMovies++;
//     if (harryPotterMovies === 8){
//         break;
//     }
// }

console.log("========");

// BONUS
// 5a
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
];

// 5b
for (house of hogwartsHouses){
    for (char of house){
        console.log(char);
    }
}

console.log("========");

// 6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];

// 6b
let fullQuote = "";
for (word of quote){
    fullQuote += `${word} `
}
console.log(fullQuote);
// Or
// let fullQuote = "";
// for (i = 0; i < quote.length; i++){
//     fullQuote += quote[i];
//     if (i < quote.length - 1){
//         fullQuote += " ";
//     }
// }

// console.log(fullQuote);