// projet JS 2020 - codez 

    let comment = document.querySelector(".comment");
// comment.addEventListener("")

document.addEventListener('DOMContentLoaded', function () {
    let aerer = document.querySelector('#addinnerspace');
    aerer.addEventListener('click', function () {
        let para = document.querySelectorAll('p')
        para.forEach(function(element) {
            element.style.padding =  parseInt(element.style.padding || 0) + 5 + 'px';
    });
});
});
document.addEventListener('DOMContentLoaded', function () {
    let espacer = document.querySelector('#addouterspace');
    espacer.addEventListener('click', function () {
        let para = document.querySelectorAll('p')
        para.forEach(function(element) {
            element.style.margin =  parseInt(element.style.margin || 0) + 5 + 'px';
    });
});
});

document.addEventListener("DOMContentLoaded", function () {
    let masquer = document.querySelector("#toggle");
    let comment = document.querySelectorAll('.comment');

    masquer.addEventListener('click', function () {
        comment.forEach(function (comment) {
            if (comment.style.display === "none") {
                comment.style.display = "block";
                masquer.textContent = 'Masquer';
            } else {
                comment.style.display = "none";
                masquer.textContent = 'Afficher';
            }
        });
    });
});


function getNumber(chaine) {
    let str = new String(chaine);
    let index = str.indexOf("-");
    let nbre = str.substring(0, index);
    return nbre;
}

// Fonction pour surligner en jaune le texte du commentaire survolé
function surligne(event) {
    const numeroCommentaire = getNumber(event.target.id);
    const annoteID = numeroCommentaire + "-annote";
    const annoteElement = document.getElementById(annoteID);
    if (annoteElement) {
        annoteElement.style.backgroundColor = "yellow";
    }
}

// Fonction pour rétablir la couleur d'arrière-plan initiale du texte annoté
function annulerSurlignage(event) {
    const numeroCommentaire = getNumber(event.target.id);
    const annoteID = numeroCommentaire + "-annote";
    const annoteElement = document.getElementById(annoteID);
    if (annoteElement) {
        annoteElement.style.backgroundColor = ""; // Rétablir la couleur d'arrière-plan par défaut
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les éléments ayant la classe "comment"
    const commentaires = document.querySelectorAll('.comment');
    // Ajouter un écouteur d'évènement pour le survol de chaque commentaire
    commentaires.forEach(commentaire => {
        commentaire.addEventListener("mouseover", surligne);
        commentaire.addEventListener("mouseout", annulerSurlignage);
    })});