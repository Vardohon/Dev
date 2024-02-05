let heure = window.prompt("Entrer l'heure :");
let minute = window.prompt("Entrer les minutes :");
let minute2 = 0

minute2 = parseInt(minute) + 1;

if (minute == 59){
    heure = parseInt(heure) +1;
    minute2 = 0o0;
}
if (heure == 24){
    heure = 0o0;
}

console.log ("Dans une minutes, il sera " + heure + " heure(s) " + minute2 + " minute(s)")