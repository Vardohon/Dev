let n = prompt("Saisissez le nombre");


function tablemulti(n){
    for(i=1; i<=10 ; i++){
        document.write(i + " x " + n + " = " + i*n);
        document.write("<br>");
    }
}

tablemulti(n);