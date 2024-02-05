const photocopie = window.prompt("Entrer le nombre de photocopie :") ;
// const prixTotal = 0



if (photocopie <= 10){
    prixTotal = parseInt(photocopie)*0.1
    console.log ("Le prix total est de : " + prixTotal + "Euros")
}
else if (photocopie >10 && photocopie <=30){
    prixTotal = 1 + (parseInt(photocopie)*0.09)
    console.log ("Le prix total est de : " + prixTotal + "Euros")
}
else if (photocopie >30){
    prixTotal = 2.8 + (parseInt(photocopie)*0.08)
    console.log ("Le prix total est de : " + prixTotal + "Euros")
}







