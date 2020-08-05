//kontrolli i vlefshmerise te te dhenave

function kontrollo_te_dhena() {
    var alfabet= document.getElementById("alfabeti").value.split(".");
    var gjendje_fillestare=document.getElementById("gjfill").value;
    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var gjendjefundore=document.getElementById("gjf").value.split(".");

    if (!gjendjet.includes(gjendje_fillestare)) {
        return false;
    }

    var i,j,k;

    for(i=0;i<gjendjefundore.length;i++) {
        if(!gjendjet.includes(gjendjefundore[i])) {
            return false;
        }
    }
    var inputi;
    var t=document.getElementById("tab1");

    for(i=0;i<gjendjet.length;i++){
        for(j=0;j<alfabet.length;j++){
            inputi=t.rows[i+1].cells[j+1].innerHTML.split(".");

            for (k=0;k<inputi.length;k++)
            {
                if(!gjendjet.includes(inputi[k])){
                    if(inputi[k]!="-1") return false; 
                
                }
            }
        }
    }

    return true;
}
