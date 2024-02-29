const bouton = document.getElementById("bouton");
const champ = document.getElementById("champ");
const message = document.getElementById("message");
let reponse;
// const axios = require('axios');

bouton.addEventListener("click", afficherMessage);

function afficherMessage() {

    // Requêter un utilisateur avec un ID donné.
    axios.get('https://world.openfoodfacts.org/api/v2/product/' + champ.value)
        .then(function (response) {
            // en cas de réussite de la requête
            let produit = document.getElementById("produit");
            produit.innerHTML = "<span>Produit</span>" + "<br>" + response.data.product.product_name;
            let code = document.getElementById("code"); 
            code.innerHTML="<span>Code Barre</span><br>" + response.data.code;
            let marque = document.getElementById("marque");
            marque.innerHTML="<span>Marque</span><br>" + response.data.product.brands;

            let photo = document.getElementById("photo");
            photo.innerHTML = "<span>Package</span>" + "<br>" + "<img src=" + response.data.product.image_front_small_url + ">";
            let ingredients = document.getElementById("ingredients");
            ingredients.innerHTML = "<span>Ingrédients</span><br>" + response.data.product.ingredients_text;
            
            let allergenes = document.getElementById("allergenes");
            allergenes.innerHTML = "<span>Allergènes</span><br>" + response.data.product.allergens;
            let emballage = document.getElementById("emballage");
            emballage.innerHTML = "<span>Emballage</span><br>" + response.data.product.packaging_old_before_taxonomization;

            let nova = document.getElementById("nova");
            nova.innerHTML = "<span>Nova</span> <br>" + response.data.product.nova_group;
            let nutriscore = document.getElementById("nutriscore");
            nutriscore.innerHTML = "<span>Nutriscore</span> <br>" + response.data.product.nutriscore_2023_tags[0] + 
            "<br><img src=" + response.data.product.image_nutrition_url + ">";
            let huile = document.getElementById("huile");
            palm = response.data.product.ingredients.find(element => element.id === 'en:palm-oil');
            huile.innerHTML = "<span>Huile de palme</span>" + "<br>" + (palm ? "Présente" : "Non présente");

            let distributeur = document.getElementById("distributeur");
            distributeur.innerHTML = "<span>Distributeur</span> <br>" + response.data.product.stores;
            let fabricant = document.getElementById("fabricant");
            fabricant.innerHTML = "<span>Pays de fabrication</span> <br>" + response.data.product.countries_imported;
            let pays = document.getElementById("pays");
            pays.innerHTML = "<span>Pays de commercialisation</span><br>" + response.data.product.countries;
        })
        .catch(function (error) {
            // en cas d’échec de la requête
            console.log(error);
        })
        .finally(function () {
            // dans tous les cas
        });

}