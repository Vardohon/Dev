// variable globale
prenom = prompt("Entrer votre Prénom :");
nom = prompt("Entrer votre Nom :");
age = prompt("Saisir un nombre");
entier = prompt("Entrer un entier :");

// _prenom, _nom, _age sont les paramètres de la fonction en local, ne pas rappeller les varibales globales
function prenomNomage(_prenom, _nom, _age){
    alert("Je m'appelle " + _prenom + " " + _nom + " et j'ai " + _age + " ans")
}

// les variables globales prennent la place des paramètres de la fonction
prenomNomage(prenom, nom, age);
// on force les paramètres de la fonction
prenomNomage("Guillaume", "Del", 42);

// même principe qu'au-dessus
function nouvelAge(_entier, _age){
    let calculAge;
    calculAge = parseInt(_age) + parseInt(_entier);
    // alert ("Après calcul, le nouveau nombre est de : " + calculAge);
    return calculAge
}

nouvelAge(entier, age);
nouvelAge(25,2);
// il faut une autre variable pour faire le rappel du return 
calculAgefinal = nouvelAge(entier,age) 
alert ("Après calcul, le nouveau nombre est de : " + calculAgefinal);