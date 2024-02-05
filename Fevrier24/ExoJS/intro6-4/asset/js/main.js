let pu = window.prompt("Entrer le prix unitaire :");
let qteCommande = window.prompt("Entrer la quantité commandée :");
let tot = parseInt(pu) * parseInt(qteCommande);
let rem = 0
let port = 6


if(tot < 500){
    window.alert((parseInt(tot) + parseInt(port)));
    console.log((parseInt(tot) + parseInt(port)));
    // pap = parseInt(tot) + parseInt(port);
}
    else if(tot >= 500 && tot <= 600){
    rem = 0,95;
    window.alert(((parseInt(tot) * parseInt(rem)) + parseInt(port)));
    console.log(((parseInt(tot) * parseInt(rem)) + parseInt(port)));
    // pap = (parseInt(tot) * parseInt(rem)) + parseInt(port);
}
    else if(tot > 600){
    rem = 0.90;
    window.alert(((parseInt(tot) * parseInt(rem)) + parseInt(port)));
    console.log(((parseInt(tot) * parseInt(rem)) + parseInt(port)));
    // pap = (parseInt(tot) * parseInt(rem)) + parseInt(port);
}

if(tot >= 500){
    port = 0;
}
    if ((tot*0.02) <= 6){
    port = 6;

    if(tot<500){
    port =((tot*0.02));
}}



document.getElementById('tot').innerHTML = tot
// document.getElementById('pap').innerHTML = pap