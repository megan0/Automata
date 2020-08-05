// tabela e kalimeve e e-afjd
function gjenero_tab(){

    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var alfabet= document.getElementById("alfabeti").value.split(".");

    var table=document.getElementById("table");
    var tabela=document.createElement("TABLE");
    tabela.setAttribute("class","tab");
    tabela.setAttribute("id","tab1");
    tabela.setAttribute("style","width=400px;");
    tabela.setAttribute("style","height=400px;");
    tabela.border="1";
    var row=tabela.insertRow(0);
    var cell0=row.insertCell(0);
    cell0.innerHTML="->";
    var i,j;

    for(i=0;i<alfabet.length;i++){

        var cell=row.insertCell(i+1);
        cell.innerHTML=alfabet[i];
    }
    for(i=0;i<gjendjet.length;i++){
        var row1=tabela.insertRow(i+1);
        for(j=0;j<=alfabet.length;j++){
            var cell1=row1.insertCell(j);
            if(j==0){
                cell1.innerHTML=gjendjet[i];
            }
            else{
                cell1.setAttribute("contenteditable","true");
            }
        }
    }

    table.appendChild(tabela);
}

//tabela e afjd
function gjenero_tab_afjd(arr){

    var alfabet= document.getElementById("alfabeti").value.split(".");
    var gjendjet =document.getElementById("gjendjet").value.split(".");

    var poz=kthe_pozicion(alfabet,"e");

    alfabet.splice(poz,1);
    console.log(alfabet,"alfabeti");

    var table=document.getElementById("tab_afjd");
    var tabela=document.createElement("TABLE");
    tabela.setAttribute("id","tabafjd");
    tabela.setAttribute("class","tab");

    tabela.border="1";
    var row=tabela.insertRow(0);
    var cell0=row.insertCell(0);
    cell0.innerHTML="->";
    var i,j;

    for(i=0;i<alfabet.length;i++){
        var cell=row.insertCell(i+1);
        cell.innerHTML=alfabet[i];
    }
    var l=0;
    for(i=0;i<gjendjet.length;i++){
        var row1=tabela.insertRow(i+1);
        for(j=0;j<=alfabet.length;j++){
            var cell1=row1.insertCell(j);
            if(j==0){
                cell1.innerHTML=gjendjet[i];
            }
            else{
                if(l<arr.length)
                {cell1.innerHTML=arr[l];
                    l++;
                }
            }
        }
    }

    table.appendChild(tabela);
}

function gjenero_tab_afd(arr,gjend_re){

    var alfabet= alfabeti_pa_e();


    var table=document.getElementById("tab_afd");
    var tabela=document.createElement("TABLE");
    tabela.setAttribute("id","tabafd");
    tabela.setAttribute("class","tab");

    tabela.border="1";
    var row=tabela.insertRow(0);
    var cell0=row.insertCell(0);
    cell0.innerHTML="->";
    var i,j;

    for(i=0;i<alfabet.length;i++){
        var cell=row.insertCell(i+1);
        cell.innerHTML=alfabet[i];
    }
    var l=0;
    for(i=0;i<gjend_re.length;i++){
        var row1=tabela.insertRow(i+1);
        for(j=0;j<=alfabet.length;j++){
            var cell1=row1.insertCell(j);
            if(j==0){
                cell1.innerHTML=gjend_re[i];
            }
            else{
                if(l<arr.length)
                {cell1.innerHTML=arr[l];
                    l++;
                }
            }
        }
    }

    table.appendChild(tabela);
}

function gjenero_tab_min(gjendje,ku_shkon){

    var alfabet= alfabeti_pa_e();


    var table=document.getElementById("tab_min");
    var tabela=document.createElement("TABLE");
    tabela.setAttribute("id","tabmin");
    tabela.setAttribute("class","tab");

    tabela.border="1";
    var row=tabela.insertRow(0);
    var cell0=row.insertCell(0);
    cell0.innerHTML="->";
    var i,j;

    for(i=0;i<alfabet.length;i++){
        var cell=row.insertCell(i+1);
        cell.innerHTML=alfabet[i];
    }
    var l=0;
    for(i=0;i<gjendje.length;i++){
        var row1=tabela.insertRow(i+1);
        for(j=0;j<=alfabet.length;j++){
            var cell1=row1.insertCell(j);
            if(j==0){
                cell1.innerHTML=gjendje[i];
            }
            else{
                if(l<ku_shkon.length)
                {cell1.innerHTML=ku_shkon[l];
                    l++;
                }
            }
        }
    }

    table.appendChild(tabela);
}