const heure = document.getElementById("heure");
const minute = document.getElementById("minute");
const seconde = document.getElementById("seconde")
const bouton = document.getElementById("bouton");
const resultat = document.getElementById("resultat");



function minuteEnPlus()
{let min = parseInt(minute.value);
    let hour = parseInt(heure.value);
    let second = 1 + parseInt(seconde.value)

if(second == 60){
    second = "00";
    min = 1 + min
}
if(min == 60){
    min = "00";
    hour = 1 + hour
}
if(hour==24){
    hour="00"
}

resultat.innerHTML = "Dans une seconde il sera : " + hour + "h" + min + "minute(s)" + second + "seconde(s)"
}


bouton.addEventListener("click", minuteEnPlus)
