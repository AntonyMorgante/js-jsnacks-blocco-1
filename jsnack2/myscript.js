/* Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo. */

let arQuantity = parseInt(prompt("Inserisci la quantità di liste di numeri che vuoi generare"));

for (let i=0; i<arQuantity;i++){
    let ar = [];
    for (let j=0;j<10;j++){
        ar.push(Math.floor(Math.random()*10+1));
    }
    document.writeln("lista numero " + i + ": [" + ar + "];" +"<br>" + "<br>");
}
