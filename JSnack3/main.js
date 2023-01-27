//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const number_list = [1, 2, 3, 4, 5, 6];
let somma = 0;


for (let i = 0; i < number_list.length; i++) {

    if (i % 2 !== 1) {
        somma = somma + number_list[i];

    }

}

console.log(somma);
