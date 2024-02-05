let n = parseInt(prompt("Saisissez le nombre"));
let somme = 0;
let moyenne = 0;
let i = 0;

while(n != 0){
    somme = somme + parseInt(n);
    i = i + 1 //ou i++ ;
    n = parseInt(prompt("Saisissez le nombre"));
}

moyenne = somme / i

console.log(somme)
console.log(moyenne)