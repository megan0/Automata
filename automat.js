
// funksion per heqjen e dublikatave nga array
function heq_dublikatat(arr){
    var array_pa_dublikata= new Array();
    var i,j,k="j";
    for (i=0;i<arr.length;i++)
    {
        if(!array_pa_dublikata.includes(arr[i])){
            array_pa_dublikata.push(arr[i]);
        }
    }

    return array_pa_dublikata;
}


// kthen pozicionin e nje ne nje tab
function kthe_pozicion(arr,c){
    var i,poz=-1;
    for(i=0;i<arr.length;i++){
        if(arr[i]==c)
        poz=i;
    }

    return poz;
}


function gjej_gjendjet_fundore(){
    var alfabet= document.getElementById("alfabeti").value.split(".");
    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var gjendjefundore=document.getElementById("gjf").value.split(".");
    var kalim=new Array();
    var kalim1=new Array();
    var i,j;

    var gjendje_fundore_afjd=new Array();

    var eps=kthe_pozicion(alfabet,"e");

    for (i=0;i<gjendjet.length;i++){
        kalim1=kontrollo_kalim(i,eps,kalim);
        console.log(kalim1,"cdo");
        
        for(j=0;j<gjendjefundore.length;j++){
            if(kalim1.includes(gjendjefundore[j])){
            gjendje_fundore_afjd.push(gjendjet[i]);
            break;
            }
        }
        kalim=new Array();
    }
    return  gjendje_fundore_afjd;
        
    
}