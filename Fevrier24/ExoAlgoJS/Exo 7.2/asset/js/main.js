// Tri à bulles

// let tab = [12, 4 , 75, 19, 18, 22, 97, 55, 7];
// let temp = 0;


// for (i = 0; i <= 8; i++){
//     for (j = 0; j <= 8; j++){
//         if (tab[j+1] < tab[j]){
//             temp = tab[j];
//             tab[j] = tab [j+1];
//             tab [j+1] = temp;
//         }
//     }
// }
// for (i = 0; i <=8; i++){
// console.log("" + tab[i]);
// }


// tri par insertion

let tab = [12, 4 , 75, 19, 18, 22, 97, 55, 7];
let temp = 0;

for (i =0; i <= 8; i++){
    k = i + 1;
    temp = tab [k];
    while(temp < tab[k-1] && k > 0){
        tab[k] = tab[k-1];
        k = k-1;
    }
    tab[k] = temp;
}
for(i = 0; i<=8; i++){
    console.log("" + tab[i]);
}