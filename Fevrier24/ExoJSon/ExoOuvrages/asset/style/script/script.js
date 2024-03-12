let booksList = new Array();
let authorsList = new Array();
let categoriesList = new Array();
let form = document.getElementById("form");

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
// Permet d'afficher la date avec le jour de la semaine en lettres, le jour, le mois et l'année complète en chiffres

window.onload = function () {
    // Retirer l'indicateur de chargement
    let loader = document.getElementById('loader');
    loader.style.display = 'none';
    // Autres opérations après le chargement complet de la page
};



document.addEventListener("DOMContentLoaded", jSonOnLoad); // Important pour une grosse base de données

let selectAuthors = document.getElementById("listAuthors");
selectAuthors.addEventListener("change", chargedByAuthor); // Changement sur la liste déroulante
let selectCategories = document.getElementById("listCategories");
selectCategories.addEventListener("change", chargedByCategory);
form.addEventListener("submit", CheckForm);// méthode qui ajoute un écouteur d'événement a l'élément html

function jSonOnLoad() {
    fetch("asset/data/books.json")
        .then(response => { // Une fois que notre fichier est chargé
            return response.json(); //  On le convertit en JSon
        })
        .then(booksData => {
            console.log(booksData);
            createList(booksData); // Obligatoire
        });
}

function createList(_data) {
    for (let i = 0; i < _data.length; i++) { //Tableau donc boucle
        let book = _data[i];
        booksList.push(book);

        for (let index = 0; index < book.authors.length; index++) {
            const element = book.authors[index];
            if (authorsList.indexOf(element) == -1) { //Si l'auteur n'est pas déjà présent dans la liste, il faut l'ajouter (indexOf vérifie la condition)
                authorsList.push(element);
            }
        }

        for (let j = 0; j < book.categories.length; j++) {
            const elem = book.categories[j];
            if (categoriesList.indexOf(elem) == -1) {
                categoriesList.push(elem);
            }
        }

    }
    booksList.sort(function compare(a, b) { // Permet de ranger alphabétiquement la liste de livres
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });
    authorsList.sort();
    categoriesList.sort();
    console.log(booksList);

    for (let index = 0; index < authorsList.length; index++) { // Pour faire apparaître la liste des auteurs
        const element = authorsList[index];
        let option = document.createElement("option"); // On crée option pour afficher le tableau des auteurs, option est obligatoire !!
        option.value = element; // On récupère la valeur des éléments pour en faire des valeurs de option
        option.innerText = element; // Pour que les valeurs soient affichés en HTML
        selectAuthors.appendChild(option); // Pour dire que option est un enfant du noeud selectAuthors et s'affiche dedans
    }

    for (let i = 0; i < categoriesList.length; i++) {
        const element = categoriesList[i];
        let optionCat = document.createElement("option");
        optionCat.value = element;
        optionCat.innerText = element;
        selectCategories.appendChild(optionCat);
    }



    showBooks(booksList);
}

function showBooks(_data) {
    let booklistElement = document.getElementById("booksList");
    booklistElement.innerHTML = ""; // On réinitialise à chaque chargement de showBooks

    for (let index = 0; index < _data.length; index++) {
        const book = _data[index];
        let bookElement = document.createElement("div"); // On crée une div pour mettre nos cards
        bookElement.setAttribute("class", "card m-2 col-5 col-md-2"); // classe de Bootstrap

        let titre = "";
        if (book.title.length > 20) { // Si la longueur du titre dépasse les 20 caractères
            titre = book.title.substring(0, 20) + " (...)"; // substrings permet de choisir d'où on démarre (1ère valeur) la sélection et où elle se termine(2ème valeur)
        }
        else {
            titre = book.title;
        }

        let description;
        let descriptionShort;

        if (book.shortDescription == null || book.shortDescription == undefined) { // Vérification s'il y a une description courte ou non
            descriptionShort = "";
            description = book.longDescription;
        }
        else {
            if (book.shortDescription.length > 60) { // Si il y a plus de 60 caractères, on rajoute le if sinon on met tout le texte
                descriptionShort = book.shortDescription.substring(0, 60) + " (...)";
                description = book.longDescription;
            }
            else {
                descriptionShort = book.shortDescription;
                description = book.longDescription;
            }
        }

        let image;
        if (book.thumbnailUrl == null || book.thumbnailUrl == undefined) { //Pour un lien cassé, le onError ne fonctionne pas
            image = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
        }
        else {
            image = book.thumbnailUrl;
        }

        let datePubli;
        try {
            datePubli = new Date(book.publishedDate.dt_txt).toLocaleDateString("fr-FR", options);
        } catch (error) {
            datePubli = "Pas de date de publication"
        }

        let isbn;
        isbn = book.isbn

        let nbPages;
        if (book.pageCount == null || book.pageCount == 0) {
            nbPages = "Non communiqué";
        }
        else {
            nbPages = book.pageCount;
        }


        bookElement.innerHTML =
            "<img src='" + image + "'/>" + //Pour afficher les images
            "<h1>" + titre + "</h1>"; // Pour affihcer les titres

        bookElement.innerHTML += "<h2><strong> ISBN : </strong>" + isbn + "</h2>"

        bookElement.innerHTML += "<h4><strong> Publication le : </strong>" + datePubli + "</h4>"

        bookElement.innerHTML += "<h4><strong> Nombres de Pages : </strong>" + nbPages + "</h4>"

        if (description != "") {
            bookElement.innerHTML += "<h4> <span class='infobulle' title='" + description + "'>" + descriptionShort + "</span> </h4>"; // += calcule la somme ou la concaténation et affecte le résultat à la variable
        }
        else {
            bookElement.innerHTML += "<h4> span class='infobulle' title='" + description + "</span> </h4>";
        }



        booklistElement.appendChild(bookElement); // On affiche le titre et autres éléments dans la div des cards

    }
}

function chargedByAuthor() {
    let strAuthor = selectAuthors.options[selectAuthors.selectedIndex].text; //Chercher dans l'index sélectionner avec les options de la fonction createList
    let booksByAuthor = new Array(); // On a besoin d'un nouveau tableau

    if (strAuthor == "") {
        showBooks(booksList); // Si pas d'auteur sélectionné, on affiche tous les livres
    }
    else {
        for (let index = 0; index < booksList.length; index++) {
            const element = booksList[index]; // On cherche dans le tableau de booksList

            if (element.authors.indexOf(strAuthor) != -1) { // On regarde si l'auteur est présent sur chaque livre
                booksByAuthor.push(element);
            }
        }
        selectCategories.selectedIndex = 0
        showBooks(booksByAuthor);
    }
}

function chargedByCategory() {
    let strCategories = selectCategories.options[selectCategories.selectedIndex].text;
    let booksByCategories = new Array();

    if (strCategories == "") {
        showBooks(booksList);
    }
    else {
        for (let index = 0; index < booksList.length; index++) {
            const element = booksList[index];

            if (element.categories.indexOf(strCategories) != -1) {
                booksByCategories.push(element);
            }
        }
        selectAuthors.selectedIndex = 0
        showBooks(booksByCategories);
    }
}

function CheckForm(event) {
    event.preventDefault();// empeche que la soumission d'un formulaire recharge la page entierement
    let strSearch = document.getElementById("recherche").value;
    let booksBySearch = new Array();

    if (strSearch == "") {
        showBooks(booksList);
    } else {
        for (let index = 0; index < booksList.length; index++) {
            const element = booksList[index]; //création d'une constant qui prend la valeur de la liste des livres
            if (element.title.includes(strSearch)) {// si dans le titre il y a la chaine de caractere saisi Bingo!
                booksBySearch.push(element);
            }
        }
        showBooks(booksBySearch);
    }
}