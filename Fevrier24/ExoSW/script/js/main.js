const personnages =[
    {nom : "Luke Skywalker", espece : "Humain", affiliation : "Jedi"},
    {nom : "Darth Vader", espece : "Humain", affiliation : "Sith"},
    {nom : "Yoda", espece : "Yoda's species", affiliation : "Jedi"},
    {nom : "Obi-Wan Kenobi", espece : "Humain", affiliation : "Jedi"},
    {nom : "Jar Jar Binks", espece : "Gungan", affiliation : "République Galactique"},
    {nom : "Darth Maul", espece : "Zabrak", affiliation : "Sith"},
    {nom : "Darth Sidious", espece : "Humain", affiliation : "Sith"},
    {nom : "Leia Organa", espece : "Humain", affiliation : "République Galactique"},
    {nom : "Padmé Amidala", espece : "Humain", affiliation : "République Galactique"},
    {nom : "Din Djarin", espece : "Humain", affiliation : "Mandalorien"},
];



let personnagesJedi = filtrerParAffiliation("Jedi",personnages);
function filtrerParAffiliation(affiliation,tableau){
    const resultat= [];
    for(let i=0; i<personnages.length;i++){
        if (affiliation==tableau[i].affiliation)
        {resultat.push(tableau[i]);
    }}
    return resultat;
}
console.log(personnagesJedi)

let personnagesSith = filtrerParAffiliation("Sith", personnages);
console.log(personnagesSith);

let personnagesRepublique = filtrerParAffiliation("République Galactique", personnages);
console.log(personnagesRepublique);


let persoNom = trouverParNom("Darth Maul", personnages);
function trouverParNom(nom, tableau){
    const resultat= [];
    for(let i=0; i<personnages.length;i++){
        if (nom==tableau[i].nom)
        {resultat.push(tableau[i]);
    }}
    return resultat;
}
console.log(persoNom);


let nombreTotalPersonnages = calculerNombreTotal(personnages);
function calculerNombreTotal(tableau){
    let total=0
    for(let i=0; i<tableau.length;i++){
        total++;
    }
    return total;
}
console.log(nombreTotalPersonnages);


let present = presentOuNon ("HelloKittty",personnages);
function presentOuNon(nom,tableau){
    for(let i=0; i<personnages.length;i++){
        absent = 0;
        if (tableau[i].nom===nom){
            absent =  true;
        }
        else if (tableau[i].nom != nom){
            absent = false;
        }
    }
    if(absent==true){
        console.log("Présent")
    }
    else if(absent==false){
        console.log("Absent")
    }
}


