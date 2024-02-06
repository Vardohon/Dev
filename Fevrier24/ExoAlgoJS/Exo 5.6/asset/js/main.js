let nb = window.prompt("Entrer votre nombre :");
let facto = 1;

for(i=1; i <= nb; i++){
    facto = parseInt(facto) * i;
}

console.log (nb + " ! = " + facto)