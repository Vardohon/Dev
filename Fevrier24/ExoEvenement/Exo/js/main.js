// var clic = document.getElementById("button1")

// clic.addEventListener("click", function()
// {
//     alert("Vous avez saisi : " + textBox1.value);
// })

var verif = document.getElementById("button1")

let nbToFind = nombreAleatoireEntier();

function nombreAleatoireEntier() {
  return Math.floor(Math.random() * 101); // Math.random() génère un nombre décimal entre 0 et 1, Math.floor() arrondit ce nombre à l'entier inférieur
}
console.log("" + nbToFind);

verif.addEventListener("click", function()
{
    let nb = nbToFind;
    let textBox1 = document.getElementById("textBox1");
    if(parseInt(textBox1.value) > parseInt(nb)){
        alert("proposition trop grande !");
    }
    else if(parseInt(textBox1.value) < parseInt(nb)){
        alert("Proposition trop petite !");
    }
    else {
        alert("Bien joué !!");
    }
})