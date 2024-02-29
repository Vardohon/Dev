const bouton = document.getElementById("bouton");
const champ = document.getElementById("champ");
const message = document.getElementById("message");
let pays;
// const axios = require('axios');

bouton.addEventListener("click", afficherMessager);

function afficherMessager() {

    // Requêter un utilisateur avec un ID donné.
    axios.get('https://restcountries.com/v3.1/name/' + champ.value)
        .then(function (response) {
            // en cas de réussite de la requête
            console.log(response.data[0].capital);
            console.log(response.data[0].population);
            console.log(response.data[0].name.common);
            pays = response.data[0].capital +"<br> "+ response.data[0].population + "<br> " + response.data[0].name.official;
            message.innerHTML = pays;
        })
        .catch(function (error) {
            // en cas d’échec de la requête
            console.log(error);
        })
        .finally(function () {
            // dans tous les cas
        });
}