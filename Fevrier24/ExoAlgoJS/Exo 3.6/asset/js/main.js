let age = window.prompt("Entrer l'âge de l'enfant :");

if (age < 6){
    console.log("L'enfant est trop jeune");
}
else if(age ==6 || age==7){
    console.log("L'enfant est de catégorie Poussin");
}
else if(age ==8 || age ==9){
    console.log("L'enfant est de catégorie Pupille");
}
else if(age ==10 || age ==11){
    console.log("L'enfant est de catégorie Minime");
}
else if(age >= 12){
    console.log("L'enfant est de catégorie Cadet");
}