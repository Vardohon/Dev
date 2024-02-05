let n1 = parseInt(prompt("Entrer le nombre 1"));
let n2 = parseInt(prompt("Entrer le nombre 2"));
let somme = 0;


for(i= parseInt(n1 + 1); i < parseInt(n2); i++){
    somme = somme + i;
}

console.log(somme)