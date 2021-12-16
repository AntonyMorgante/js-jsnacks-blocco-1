/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. */

let ar=[];
sum = 0;

while (sum<50){
    let arElement = parseInt(prompt("Inserisci un numero"));
    ar.push(arElement);
    sum += arElement;
}

document.writeln("Ecco la lista da te creata: [" + ar + "]")