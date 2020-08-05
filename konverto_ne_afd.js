function alfabeti_pa_e(){
    var alfabet= document.getElementById("alfabeti").value.split(".");
    var poz=kthe_pozicion(alfabet,"e");
    alfabet.splice(poz,1);

    return alfabet;

}


function gjej_kalime(i,j,arr){
    var alfabet= alfabeti_pa_e();
    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var ku_shkon;

    //var nr_gjendjeve_fill=gjendjet.length;

    var tab=document.getElementById("tabafjd");

    var qeliz=tab.rows[i+1].cells[j+1].innerHTML.split(",");
    console.log(qeliz,"qeliza");

     if(qeliz==""){
        //arr.push("err");
        if(!arr.includes("err")){
         arr.push("err");
     }
     ku_shkon="err";
    
    }
   else if(qeliz.length>1){
       
       var gjend_re=qeliz.toString();
       gjend_re=gjend_re.replace(/,/g,'');
       gjend_re=gjend_re.replace(/ /g,'');
       //if(!arr.includes(gjend_re)){
       //    arr.push(gjend_re); 
     //  }    
   ku_shkon=gjend_re;

   }
  
   else{
       var a=qeliz.toString();
      // if(!arr.includes(a)){
       //arr.push(a);}
   ku_shkon=a;
   }
   //arr=heq_dublikatat(arr);

   


   console.log(ku_shkon,"h1");
   return ku_shkon;
   
   
}




function konverto_ne_afd (){

    var alfabet= alfabeti_pa_e();
    var gjendjet =document.getElementById("gjendjet").value.split(".");
    var gjendje_fillestare=document.getElementById("gjfill").value;
    var i,j,k,h,l;
    //var nr_gjendjeve_fill=gjendjet.length;
    //console.log(nr_gjendjeve_fill,"fillim1");

    var gjendje_re_afd=new Array();
    var arr_perfundim_afd=new Array();
    var arr_ndermjet_afd;
    var tmp;

    var arr_kontrolli=new Array();

    gjendje_re_afd.push(gjendje_fillestare);

  
    for(i=0;i<gjendje_re_afd.length;i++){
        for(j=0;j<alfabet.length;j++){
            console.log(gjendje_re_afd[i],"gjendja qe po marrim ne konsiderate");
            if(gjendje_re_afd[i]=="err"){
                arr_perfundim_afd.push("err");
            }
            else if(gjendje_re_afd[i].length>1){
            var arr_kontrolli=new Array();
                //else{
                for(k=0;k<gjendje_re_afd[i].length;k++){
                    var s=gjendje_re_afd[i].charAt(k);
                    var m = kthe_pozicion(gjendjet,s);
                    console.log(s,"karakteri qe po shqyrtohet");
                    console.log(m,"pozicioni i karakterit");
                    arr_ndermjet_afd=gjej_kalime(m,j,gjendje_re_afd);
                    if(arr_ndermjet_afd!="err"){
                    for(l=0;l<arr_ndermjet_afd.length;l++){
                        arr_kontrolli.push(arr_ndermjet_afd[l]);
                   }
                }
               /*  if(arr_kontrolli.length>3 ){
                     var stmp=arr_kontrolli.toString();
                     if(stmp.includes("e,r,r")){
                         stmp=stmp.replace(/e,r,r/g,'');
                     }
                     arr_kontrolli=stmp.split(",");
                 }*/
            }
                arr_kontrolli=heq_dublikatat(arr_kontrolli);
                    console.log(arr_kontrolli,"??????????");
                    tmp=arr_kontrolli.toString();
                    tmp=tmp.replace(/,/g,'');
                    tmp=tmp.replace(/ /,'');
                    if(tmp==""){tmp="err";}
                    arr_perfundim_afd.push(tmp);
                    console.log(!gjendje_re_afd.includes(tmp));
                    if(!gjendje_re_afd.includes(tmp)){
                        gjendje_re_afd.push(tmp);
                        
                    }
              //  }
            
        }
            else{
                var m = kthe_pozicion(gjendjet,gjendje_re_afd[i]);
                arr_ndermjet_afd=gjej_kalime(m,j,gjendje_re_afd);
                arr_perfundim_afd.push(arr_ndermjet_afd);
                if(!gjendje_re_afd.includes(arr_ndermjet_afd)){
                    gjendje_re_afd.push(arr_ndermjet_afd);
                }
            }
            }
        
    }


    gjenero_tab_afd(arr_perfundim_afd,gjendje_re_afd);
    var gjen_fun=gjej_gjendjet_fundore();
    var gjendfund=gjendje_fund_afd(gjendje_re_afd,gjen_fun);
    document.getElementById("pershkrimi_afd").innerHTML="Gjendja fillestare e automatit Afd:"+gjendje_fillestare+"<br>"+"Gjendjet fundore:"+gjendfund;

    var but_afd=document.createElement("input");
        but_afd.type='button';
        but_afd.setAttribute("id","bt");
        but_afd.setAttribute("value","Minimizo");
        but_afd.addEventListener('onclick',minimizo(gjendje_re_afd,gjendfund));
        document.getElementById("minimizo").appendChild(but_afd);
}

function gjendje_fund_afd(gjend,gjenfund){
    var i,j,k,h=0;
    var arr=new Array();
    for(i=0;i<gjend.length;i++)
    {
        h=0
        for(j=0;j<gjenfund.length;j++){
            if(gjend[i].includes(gjenfund[j])){
                arr.push(gjend[i]);
                break;
            }
               
                
            
            //if(h=1)break;
        }
    }
    return arr;
}