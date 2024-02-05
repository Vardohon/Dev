var nombre = window.prompt("Saisissez un nombre");

var operateur = window.prompt("Saisissez votre opération");

var nombre2 = window.prompt("Saisissez un nombre");





if (operateur == "+"){
    alert((parseInt(nombre) + parseInt(nombre2)));
}
else if (operateur == "-"){
    alert((parseInt(nombre) - parseInt(nombre2)));
}
else if (operateur == "*"){
    alert((parseInt(nombre) * parseInt(nombre2)));
}
else if (operateur == "/" && (nombre != 0 || nombre2 != 0)){
    alert((parseInt(nombre) / parseInt(nombre2)));
}
else if(operateur == "/" && (nombre == 0 || nombre2 == 0)){
    alert("Impossible de diviser par zéro");
}
else if (operateur =! "*" || "+" || "-" || "/"){
    alert("Opération non valable");
}