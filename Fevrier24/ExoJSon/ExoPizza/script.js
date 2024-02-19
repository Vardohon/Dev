let button = document.querySelector("button");
button.addEventListener("click", ChargeInfosjson);

function ChargeInfosjson() {
    fetch("pizzas.json")
    //Les promesses de fetch
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            createHTML(data);
        });
}

function createHTML(_data) { // On peut mettre un autre nom que _data, pas d'importance
    // Je récupère ma balise avec la classe preview
    const preview = document.getElementsByClassName("preview")[0]; // c'est le 1er de cette classe donc index 0
    // Je réinitialise la balise à vide à chaque clic
    preview.innerHTML = "";

    // Je crée un élément pizzeria name
    const pizzeriaName = document.createElement("div");
    pizzeriaName.innerHTML = _data.Name;
    pizzeriaName.setAttribute("class", "NomPizzeria");
    // Je crée la div pour le slogan avec le createElement
    const pizzeriaSlogan = document.createElement("div");
    // le _data est pour la fonction createHTML(_data)
    pizzeriaSlogan.innerHTML = _data.Slogan;
    pizzeriaSlogan.setAttribute("class", "SloganPizzeria");
    //On attache le nom et le slogan de la pizzeria grâce à appenChild
    preview.appendChild(pizzeriaName);
    preview.appendChild(pizzeriaSlogan);

    let listPizzas = _data.Pizzas;
    const pizzeriaListPizzas = document.createElement("div");
    pizzeriaListPizzas.setAttribute("class", "contenu");
    //1ère boucle pour les pizzas
    for (let index = 0; index < listPizzas.length; index++) {
        const element = listPizzas[index];
        const Ingredients = element.Ingredients;
        // On crée la div pour le texte des pizzas
        let pizzaElement = document.createElement("div");
        pizzaElement.innerHTML =
            "<h2>" +
            element.Nom +
            "</h2>" +
            "<h3>" +
            element.Prix +
            "</h3>" +
            "<img src=" +
            element.Image +
            ">";
        // 2ème boucle pour les ingrédients
        for (let y = 0; y < Ingredients.length; y++) {
            const ingredient = Ingredients[y];
            pizzaElement.innerHTML += "<li>" + ingredient + "</li>";
        }
        // On attache la liste des ingrédients
        pizzeriaListPizzas.appendChild(pizzaElement);
    }
    preview.appendChild(pizzeriaListPizzas);
}
