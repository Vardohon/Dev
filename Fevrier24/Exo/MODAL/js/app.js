// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay

let modalBtn = document.querySelector(".modal-btn");

let modal = document.querySelector(".modal-overlay");

let closeBtn = document.querySelector(".close-btn");


modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
    });
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
    });