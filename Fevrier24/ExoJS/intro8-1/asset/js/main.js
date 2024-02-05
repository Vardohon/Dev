let x = (prompt("Saisissez un premier nombre"));
let y = (prompt("Saisissez un deuxième nombre"));

function cube(x){
    let resultat = x * x * x;
    return resultat;
}


function multi(a,b){
    return a * b;
}

document.write("Le cube de " + x + " est " + cube(x));
document.write("<br>");
document.write("Le produit de " + x + " x " + y + " est " + multi(x, y));
document.write("<br>");

 // Créer un nouvel objet Image
var imgElement = new Image();

 // Définir l'attribut src avec l'URL passée en paramètre
imgElement.src = "papillon.jpg";

 // Ajouter l'élément img à la page (par exemple, au corps du document)
document.body.appendChild(imgElement); 