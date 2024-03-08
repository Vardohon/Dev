let form = document.getElementById("formulaire");
let mail = document.getElementById("mail").value;


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let societe = document.getElementById("societe").value;
    if (societe.length <= 1) {
        alert("Entrez le nom de la société s.v.p");
    }
    let contactaprevenir = document.getElementById("contactaprevenir").value;
    if (contactaprevenir.length <= 1) {
        alert("Entrez le nom de la personne à contacter s.v.p");
    }
    let codepostal = document.getElementById("codepostal").value;
    if (codepostal.length < 5) {
        alert("Entrez le code postal sur 5 chiffres s.v.p");
    } 
    let ville = document.getElementById("ville").value;
    if (ville.length <= 1) {
        alert("Entrez la ville s.v.p");
    }
    if(estAdresseMail(mail.value)==false){
        alert("Entrez une adresse mail valide");
    }

},
function estAdresseMail(chaine) {
    const expression = new RegExp(
        "[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?"
    );

    return expression.test(chaine);
}

)

function estAdresseMail(chaine) {
    const expression = new RegExp(
        "[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?"
    );

    return expression.test(chaine);
}

const email1 = "michel.vaillant@gmail.com";
const email2 = "gertrude1958.gmail.com";
const email3 = "pauloleplusbo@wanadoo";

if (!estAdresseMail(email1)) {
    alert("Adresse e-mail1 invalide !");
}

if (!estAdresseMail(email2)) {
    alert("Adresse e-mail2 invalide !");
}

if (!estAdresseMail(email3)) {
    alert("Adresse e-mail3 invalide !");
}


console.log(estAdresseMail(email1)); // retourne true
console.log(estAdresseMail(email2)); //retourne false 
console.log(estAdresseMail(email3)); //retourne true (ne vérifie pas le .com) 


// const expression = new RegExp(
//     "[a-z0-9!#$%&'+/=?^_`{|}~-]" + //test de la chaine de caractère (je veux les lettre et les chiffres mais pas de caractères spéciaux)
//     "+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)" + // est ce que j'ai un point dans la chaine genre (guillaume.delacroix) ; si oui meme test qu'au dessus
//     "@(?:[a-z0-9]" + // à partir de là et tout ce qu'il y'a en dessous, on teste le domaine(@gmail.com par ex)
//     "(?:[a-z0-9-][a-z0-9])?.)" + // le ?. c'est le point entre les sections de domaine (gmail.com)
//     "+[a-z0-9](?:[a-z0-9-]*[az0-9])?" // le sous domaine (fr, net, com)
// );