let age = window.prompt("Entrer votre âge :");
let genre = window.prompt("Entrer votre genre:")

if (genre == "homme" && age > 20){
    console.log("Vous payez l'impôt !")
}
else if (genre == "femme" &&  age >= 18 && age <= 35){
        console.log("Vous payez l'impôt !")
    }
else{
    console.log("Vous ne payez pas l'impôt !")
}