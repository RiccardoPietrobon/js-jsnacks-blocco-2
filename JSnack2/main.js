//Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const box_pari = document.getElementById("pack_1");

const box_dispari = document.getElementById("pack_2");



const lista_numeri = [21, 24, 39, 13, 163, 14, 21, 22, 23];

const lista_numeri_pari = [];
console.log(lista_numeri_pari);

const lista_numeri_dispari = [];
console.log(lista_numeri_dispari);


for (let i = 0; i < lista_numeri.length; i++) {

    const one_number = lista_numeri[i];

    if (one_number % 2 == 0) {

        console.log(one_number, "è pari");
        lista_numeri_pari.push(one_number);

    }

    if (one_number % 2 != 0) {

        console.log(one_number, "è dispari");
        lista_numeri_dispari.push(one_number);

    }

}

lista_numeri_pari.innerHTML = box_pari;
lista_numeri_dispari.innerHTML = box_dispari;

