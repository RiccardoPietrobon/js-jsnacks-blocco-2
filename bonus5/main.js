//Dato un array contenente i risultati di una squadra(vittorie, pareggi e sconfitte)[W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

const games = ["W", "W", "L", "X", "X", "W", "L", "X"];

let win = 0;
let lose = 0;
let pareggi = 0;

for (let i = 0; i < games.length; i++) {
    let giocata = games[i];

    if (giocata == "W") {
        win++;
    }

    else if (giocata == "L") {
        lose++;
    }

    else {
        pareggi++;
    }


}

console.log(win);
console.log(lose);
console.log(pareggi);
