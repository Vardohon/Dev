let nombre = parseInt(prompt("Saisir un nombre de valeurs :"));
let tab = Array(nombre);
let isConsecutif = true;
for (i = 0; i < tab.length; i++) {
    tab[i] = parseInt(prompt("Saisir nombres :"));
  //on va faire la comparaison qu'à partir de l'index 1
    if (i > 0) {
    //on compare l'element du tableau en cours avec son précédent
    if (tab[i] < tab[i - 1]) {
        isConsecutif = false;
    }
    }
}
if (isConsecutif) {
    alert("tous les nombres saisis sont consécutifs");
} else {
    alert("Dommage");
}