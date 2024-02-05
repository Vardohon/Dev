let candidat1 = window.prompt("Entrer le score du candidat 1 :");
let candidat2 = window.prompt("Entrer le score du candidat 2 :");
let candidat3 = window.prompt("Entrer le score du candidat 3 :");
let candidat4 = window.prompt("Entrer le score du candidat 4 :");

if (candidat1 > 50){
    console.log("Le candidat est élu !")
}

else if (candidat1 < 12.5){
    console.log("le candidat est éliminé !")
}

else if (candidat1 < 50 && candidat1 > 12.5 && candidat1 > candidat2 && candidat1 > candidat3 && candidat1 > candidat4){
    console.log("Le candidait est en ballotage favorable !")
}

else if (candidat1 < 50 && candidat1 > 12.5 && candidat1 < candidat2 || candidat1 < candidat3 || candidat1 < candidat4){
    console.log("Le candidait est en ballotage défavorable !")
}