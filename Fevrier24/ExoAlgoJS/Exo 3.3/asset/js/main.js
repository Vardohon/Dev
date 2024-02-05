let nom1 = window.prompt("Entrer le premier nom :");
let nom2 = window.prompt("Entrer le deuxième nom :");
let nom3 = window.prompt("Entrer le troisième nom :");

if (nom1 < nom2 && nom1 < nom3 && nom2 < nom3){
    console.log("Ils sont rangés en ordre alphabétique")
}
else{
    console.log("Ils ne sont pas rangés en ordre alphabétique")
}
