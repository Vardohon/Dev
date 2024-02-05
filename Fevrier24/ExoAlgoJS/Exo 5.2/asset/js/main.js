let nb = 18;
let entree = 0;

while(entree != nb){
    entree = window.prompt("Entrer un nombre entre 10 et 20 :");
    if( entree > nb && entree != nb){
        alert("Plus petit")
    }
    else if (entree < nb && entree != nb){
        alert("plus grand")
    }
}
alert("bien joué")