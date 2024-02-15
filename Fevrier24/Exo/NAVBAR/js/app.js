// Récupérer le sélecteur .nav-toggle ainsi que .links 

// Ecouter l'évènement 'click' sur .nav-toogle

  // si .links a pour class .show-links
    // la supprimer
  // sinon
    // l'ajouter

  // Vous pouvez arriver au même résultat avec classList.toggle

  const nav = document.querySelector(".nav-toggle");

  const link = document.querySelector(".links");

  nav.addEventListener("click", function(){

link.classList.toggle("show-links");

    // if(link.classList.contains("show-links")){
    //   link.classList.remove("show-links");
    // }
    // else{link.classList.add("show-links");}
  })