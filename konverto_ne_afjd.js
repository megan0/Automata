//kontrollimi nqs nje gjendje shkon me nje karakter  ne gjendje te tjera
function kontrollo_kalim(i,x,kalime){

    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var alfabet= document.getElementById("alfabeti").value.split(".");
    var j,poz,k;
    
    var t=document.getElementById("tab1");
    //console.log(t,"p");

    
    var kalimi_i_ndermjetem= new Array();
    var indexxe=kthe_pozicion(alfabet,"e");

    var qeliza = t.rows[i+1].cells[x+1].innerHTML.split(".");
    //console.log(qeliza,"qeliza");


   
    if(qeliza[0]!="-1"){
    for(j=0;j<qeliza.length;j++){
         kalimi_i_ndermjetem.push(qeliza[j]);
    }
}
    if (kalimi_i_ndermjetem.length!=0){
    kalime= kalime.concat(kalimi_i_ndermjetem);
   // console.log(kalime,"kalim2");
    }

    
    if(x==indexxe){
        for(k=0;k<qeliza.length;k++)
        { 
            
            if(qeliza[k]!=gjendjet[i]){
                var k2=kthe_pozicion(gjendjet,qeliza[k]);
               
               kalimi_i_ndermjetem=kontrollo_kalim(k2,x,kalime);
               return kalimi_i_ndermjetem;
            }
            
        }
    }
   
   var  kalimi_i_ndermjetem1=heq_dublikatat(kalime);

   return kalimi_i_ndermjetem1;
}


// kontrollon ku shkon gjendja me secilen nga karakteret e alfabetit
function kontrollo_kalimin_e_ndermjetem(arr,x,kalime){
    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var i,j,k;
    var arr_tj=new Array();
    var arr_dergimi=new Array();

    for(i=0;i<arr.length;i++){
        j=kthe_pozicion(gjendjet,arr[i]);
        arr_tj=kontrollo_kalim(j,x,kalime);
        if(arr_tj.length!=0){
        arr_dergimi=arr_dergimi.concat(arr_tj);}
        kalime=new Array();
    }
    arr_dergimi=heq_dublikatat(arr_dergimi);

    return arr_dergimi;
}




//konvertimi nga e-afjd ne afjd
function konverto_ne_afjd(){

    var alfabet= document.getElementById("alfabeti").value.split(".");
    var gjendje_fillestare=document.getElementById("gjfill").value;
    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var gjendjefundore=document.getElementById("gjf").value.split(".");

    const te_dhena_te_sakta = kontrollo_te_dhena();
    console.log(te_dhena_te_sakta);
    if(te_dhena_te_sakta){

        var i,j,k,l;

        var array_perfundimtare=new Array();
        var kalime=new Array();
        var ndermjet;
        var indexxe=kthe_pozicion(alfabet,"e");
        

        for(i=0;i<gjendjet.length;i++)
        {
            for(j=0;j<alfabet.length;j++)
            {
                

                if(j!=indexxe) {

                    ndermjet=kontrollo_kalim(i,indexxe,kalime);

                     kalime=new Array();
                   var ndermjet2=kontrollo_kalimin_e_ndermjetem(ndermjet,j,kalime);

                      kalime=new Array();
                    var gjendje_e_perfunduar=kontrollo_kalimin_e_ndermjetem(ndermjet2,indexxe,kalime);
                    kalime=new Array();

                   array_perfundimtare.push(gjendje_e_perfunduar);

                }

                

            }
        }
       // document.getElementById("demo").innerHTML=array_perfundimtare;

        gjenero_tab_afjd(array_perfundimtare);
//afddddd
        var but_afjd=document.createElement("input");
        but_afjd.type='button';
        but_afjd.setAttribute("id","bt");
        but_afjd.setAttribute("value","Konverto ne Afd");
        but_afjd.addEventListener('click',konverto_ne_afd);
        document.getElementById("but_afd").appendChild(but_afjd);

        var gj_f="Gjendja fillestare e automatit Afjd eshte : "+gjendje_fillestare;

        var gjen_fun=gjej_gjendjet_fundore();

        document.getElementById("pershkrimi_afjd").innerHTML=gj_f+"<br>"+"Gjendjet fundore jane:"+gjen_fun;



    }

}











