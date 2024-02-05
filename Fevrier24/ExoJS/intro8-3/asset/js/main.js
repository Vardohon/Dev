function rechercherNbLettres(phrase,lettre){
    let nbLettre = 0;

    for(i = 0;i < phrase.length;i++){
        if (lettre==phrase[i]){
            nbLettre++;
        }
    }
    return nbLettre;
}  

let a= prompt("Saisissez une phrase");
let b= prompt("Lettre à rechercher dans la phrase");
let result= rechercherNbLettres(a, b);

document.write(result);