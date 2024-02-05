let n = parseInt(prompt("Saisissez le nombre"));
let somme = 0;
let moyenne = 0;
let i = 0;
let mini = parseInt(n);
let maxi = 0;

while(n != 0){
    if (parseInt(n) < mini){
        mini = parseInt(n);
    }
    if (parseInt(n) > maxi){
        maxi = parseInt(n);
    }
    somme = somme + parseInt(n);
    i = i + 1 //ou i++ ;
    n = parseInt(prompt("Saisissez le nombre"));
}

moyenne = somme / i

console.log(somme)
console.log(moyenne)
console.log(mini)
console.log(maxi)