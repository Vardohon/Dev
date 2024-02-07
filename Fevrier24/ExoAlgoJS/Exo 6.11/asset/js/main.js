let tab1 = Array();
tab1[0] = 4;
tab1[1] = 8;
tab1[2] = 7;
tab1[3] = 12;
let tab2 = Array();
tab2[0] = 3;
tab2[1] = 6;
let multi = 0;

for(j=0; j < tab2.length; j++){
    for (i=0; i < tab1.length; i++){
        multi = parseInt(multi) + (parseInt(tab1[i]) * parseInt(tab2[j]));
}}

console.log("le résultat est de : " + parseInt(multi));