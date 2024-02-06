let tab = Array(9);
let somme = 0;
let moyenne = 0;

for(i=0; i < tab.length; i++){
tab [i] = window.prompt("Entrer votre nombre :");
somme = parseInt(somme) + parseInt(tab[i]);
console.log(somme);
}
moyenne = parseInt(somme) / i;

alert("La somme est de : " + somme);
alert("La moyenne est de : " + Math.round(moyenne * 100)/100);
console.log("La moyenne est de : " + Math.round(moyenne * 100)/100);