let ar=[];
sum = 0;

while (sum<50){
    let arElement = parseInt(prompt("Inserisci un numero"));
    ar.push(arElement);
    sum += arElement;
}

document.writeln("Ecco la lista da te creata: [" + ar + "]")