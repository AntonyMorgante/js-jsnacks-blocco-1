/* Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. */

const array = document.getElementById("array");
const odd = document.getElementById("odd");
const even = document.getElementById("even");

even.style.color = "green";
odd.style.color = "red";

let ar=[];
let arOdd=[];
let arEven=[];

const arLength = parseInt(prompt("Inserisci la lunghezza della lista di numeri da generare"));

for (let i=0; i<arLength; i++){
    ar.push(Math.floor(Math.random()*10+1));
    console.log("la tua lista di numeri:",ar);
}

for (let i=0; i<arLength;i++){
    if (ar[i]%2==0){
        arEven.push(ar[i]);
    }
    else{
        arOdd.push(ar[i]);
    }
}

array.innerHTML += "la tua lista di numeri: [" + ar + "]" + "<br>" + "<br>";
odd.innerHTML += "la tua sottolista di numeri dispari: [" + arOdd + "]" + "<br>" + "<br>";
even.innerHTML += "la tua sottolista di numeri pari: [" + arEven + "]";
