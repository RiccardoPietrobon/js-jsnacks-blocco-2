//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

//array long
const ar_big = [1, 2, 3, 4, 5, 6];

//array short
const ar_small = [1, 2, 3];
console.log(ar_small);

//lenght array
const lunghezza_big = ar_big.length;
console.log(lunghezza_big);

const lunghezza_small = ar_small.length;
console.log(lunghezza_small);

const differenza = lunghezza_big - lunghezza_small;

//random number
const item = Math.floor(Math.random() * 10) + 1;
console.log(item);


for (let i = 0; i < differenza; i++) {

    const item = Math.floor(Math.random() * 10) + 1;
    console.log(item);

    ar_small.push(item);

}
