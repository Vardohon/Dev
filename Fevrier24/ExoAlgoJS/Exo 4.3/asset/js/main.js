let heure = window.prompt("Entrer l'heure :");
let minute = window.prompt("Entrer les minutes :");
let seconde = window.prompt("Entrer les secondes :");
let seconde2 = 0;

seconde2 = parseInt(seconde) + 1;

if (seconde == 59){
    minute = parseInt(minute) +1;
    seconde2 = 0o0;
}

if (minute == 60){
    heure = parseInt(heure) +1;
    minute = 0o0;
}
if (heure == 24){
    heure = 0o0;
}

console.log ("Dans une minutes, il sera " + heure + " heure(s), " + minute + " minute(s) " + " et " + seconde2 + " seconde(s)")