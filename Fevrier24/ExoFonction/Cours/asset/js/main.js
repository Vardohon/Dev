let nb1 = parseInt(prompt("Saisis un premier nombre"));
let nb2 = parseInt(prompt("Saisis un deuxième nombre"));
let operateur = prompt("saisis un opérateur (+, -, *, /)");
// let nb3 = nb1 + nb2;

// alert(nb3);

// let nb3 = addition(nb1, nb2);
// alert(nb3);

// let nb4 = multiplication(nb1, nb2);
// alert(nb4);

// let nb5 = multiplication(nb3, nb4);
let nb3;
switch (operateur) {
  case "+":
    nb3 = addition(nb1, nb2);
    break;
  case "*":
    nb3 = multiplication(nb1, nb2);
    break;
  default:
    alert("pas cool");
    break;
}
alert(nb3);

function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}