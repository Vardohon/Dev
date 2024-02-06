let tab1 = Array();
let tab2 = Array();
let tab3 = Array();
tab1[0]= 4;
tab1[1]= 8;
tab1[2]= 7;
tab1[3]= 9;
tab1[4]= 1;
tab2[0]= 7;
tab2[1]= 6;
tab2[2]= 5;
tab2[3]= 2;
tab2[4]= 1;


for(i=0; i <= 4; i++){
    tab3[i] = parseInt(tab1[i]) + parseInt(tab2[i]);
    console.log("" + parseInt(tab3[i]) + "");
}

