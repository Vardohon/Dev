fetch("margot-robbie.json")
// On fait les promesses
    .then (
        (actor) => // On charge le fichier et dès qu'il est chargé
        actor.json() // On le convertit en JSon
        )
    .then (
        (data) => {
            // Notre fichier est converti en JSon
            console.log(data);
            createActor(data); // Appeler notre fonction
        });

function createActor(_data){ // _data pour rappel de la condition (ne pas mettre le mpême nom !!)
let actorName = document.querySelector(".actor-name");
let actorPicture = document.querySelector(".actor-picture");
let actorMovies = document.querySelector(".actor-movies");

actorName.innerHTML = _data.firstname + " " + _data.lastname;
actorPicture.src = _data.picture;

let moviesList = "" ;
for(i=0; i<_data.movies.length;i++){
    let movies = _data.movies[i];
    moviesList += "<li>" + movies.name + " | " + movies.year + "</li>";
}
actorMovies.innerHTML = moviesList;
}
