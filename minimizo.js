function minimizo(gjendafd,gjend_fundore){

    gjendafd=heq_gjendjet_e_pakapshme(gjendafd);
    var gjendje_fillestare=document.getElementById("gjfill").value;

    var alfabet= alfabeti_pa_e();
    var tab=document.getElementById("tabafd");

    var i,j,k,l,m,n;
    var tabela_e_ndryshimeve=new Array();
//inicializimi paraprak i tabeles
    for(i=0;i<gjendafd.length;i++){
        var arr=new Array();
        for(j=0;j<gjendafd.length;j++){
            if(i==j){
                arr.push("-");
            }
            else{
                arr.push("0");
            }
        }
        tabela_e_ndryshimeve.push(arr);


    }

    var gjendjet_e_shenjuara=new Array();
    //hapi par i shenjimit
    gjendjet_e_shenjuara=shenjo(gjendafd,tabela_e_ndryshimeve,gjend_fundore);
    console.log(gjendjet_e_shenjuara,"gjendjet e shenjuara fillimisht");

    var t=true;
    while(t){
        t=kontrollo_el_e_pashenjuar(gjendafd,tabela_e_ndryshimeve,gjendjet_e_shenjuara);
        console.log(t,"tja a futet ne cikel");    

    }
    var gjendjet_qe_do_bashkohen=new Array();
    console.log(tabela_e_ndryshimeve,"tabela e ndryshimeve");
    for(i=0;i<gjendafd.length;i++){
        for(j=0;j<gjendafd.length;j++){
            if(tabela_e_ndryshimeve[i][j]==0){
                gjendjet_qe_do_bashkohen.push(gjendafd[i]);
                gjendjet_qe_do_bashkohen.push(gjendafd[j]);
            }
        }
    }

    gjendjet_qe_do_bashkohen=heq_dublikatat(gjendjet_qe_do_bashkohen);
    var gjendjet_qe_mbeten=new Array();
    for(i=0;i<gjendafd.length;i++){
        if(!gjendjet_qe_do_bashkohen.includes(gjendafd[i])){
            gjendjet_qe_mbeten.push(gjendafd[i]);
        }
    }


    var gjendja_e_re=gjendjet_qe_do_bashkohen.toString();
    gjendja_e_re=gjendja_e_re.replace(/,/g,"/");


    var arr_ndermjet=new Array();
    var arr_perfundimtar_min=new Array();

    if(gjendjet_qe_mbeten.length!=0){
        for(i=0;i<gjendjet_qe_mbeten.length;i++){
        for(j=0;j<alfabet.length;j++){
            var poz=kthe_pozicion(gjendafd,gjendjet_qe_mbeten[i]);
            var qeliz=tab.rows[poz+1].cells[j+1].innerHTML;
            if(gjendjet_qe_do_bashkohen.includes(qeliz)){
                arr_perfundimtar_min.push(gjendja_e_re);
            }
            else{
                arr_perfundimtar_min.push(qeliz);
            }
        }
        }
    }
    var gjendjet_min=new Array();
    if(gjendjet_qe_mbeten.length>0){
     gjendjet_min=gjendjet_qe_mbeten;}
    gjendjet_min.push(gjendja_e_re);
    
    for(i=0;i<alfabet.length;i++){
        var poz=kthe_pozicion(gjendafd,gjendjet_qe_do_bashkohen[0]);
            var qeliz=tab.rows[poz+1].cells[i+1].innerHTML;
            if(gjendjet_qe_do_bashkohen.includes(qeliz)){
                arr_perfundimtar_min.push(gjendja_e_re);
            }
            else{
                arr_perfundimtar_min.push(qeliz);
            }
    }

    gjenero_tab_min(gjendjet_min,arr_perfundimtar_min);
    //gjendjet fundore

    var fundore=gjej_gjendjet_fundore_min(gjendjet_min,gjend_fundore);
    document.getElementById("min_pershkrim").innerHTML="Gjendja fillestare e automatit te minimizuar:"+gjendje_fillestare+"<br>"+"Gjendjet fundore:"+fundore;
   

   
}

function shenjo(gjendafd,tabndrysh,gjendfund){
    var i,j;
    var gjendjet_e_shenjuara=new Array();
    for(i=0;i<gjendafd.length;i++){
        for(j=0;j<gjendafd.length;j++){
            if(tabndrysh[i][j]!="-"){
                if(gjendfund.includes(gjendafd[i])){
                    if(!gjendfund.includes(gjendafd[j])){
                        tabndrysh[i][j]=1;
                        var gjendja_shenuar=new Array();
                        gjendja_shenuar.push(gjendafd[i]);
                        gjendja_shenuar.push(gjendafd[j]);
                        gjendjet_e_shenjuara.push(gjendja_shenuar);
                    }
                }
            }
        }
    }

    for(i=0;i<gjendafd.length;i++){
        for(j=0;j<gjendafd.length;j++){
            if(tabndrysh[i][j]!="-"){
                if(!gjendfund.includes(gjendafd[i])){
                    if(gjendfund.includes(gjendafd[j])){
                        tabndrysh[i][j]=1;
                        var gjendja_shenuar=new Array();
                        gjendja_shenuar.push(gjendafd[i]);
                        gjendja_shenuar.push(gjendafd[j]);
                        gjendjet_e_shenjuara.push(gjendja_shenuar);
                    }
                }
            }
        }
    }
    return gjendjet_e_shenjuara;
}

function kontrollo_el_e_pashenjuar(gjendafd,tabndrysh,gjendjet_e_shenjuara){
    var alfabet=alfabeti_pa_e();
    var gj_shtuar=0;
    var gj=new Array();
    var i,j;
    for(i=0;i<gjendafd.length;i++){
        for(j=0;j<gjendafd.length;j++){
            if(tabndrysh[i][j]!="-"&& tabndrysh[i][j]!=1){
                var gjendje=new Array();
                gjendje.push(gjendafd[i]);
                gjendje.push(gjendafd[j]);
                kontrollo(gjendafd,gj_shtuar,gjendje,alfabet,gjendjet_e_shenjuara,i,j,tabndrysh);
                
            }
        }

    }

    if(gj_shtuar==1){
        return true;
    }
    else{return false;}

}


function kontrollo(gjendafd,arr,gjendje,alfabet,gjendjet_e_shenjuara,x,z,tabndrysh){
    var tab=document.getElementById("tabafd");
    //var qeliz=tab.rows[i+1].cells[j+1].innerHTML;

    var ku_shkon=new Array();

    var i,j,k;
    for(i=0;i<gjendje.length;i++){
        for(j=0;j<gjendafd.length;j++){
            for(k=0;k<alfabet.length;k++){
                if(gjendje[i]==gjendafd[j]){
                    var qeliz=tab.rows[j+1].cells[k+1].innerHTML;
                    ku_shkon.push(qeliz);
                    break;
                }
            }
        }
    }


    if(shkon_ne_gjendje_te_shenjuar(gjendjet_e_shenjuara,ku_shkon,x,z,tabndrysh,arr)){
        gjendjet_e_shenjuara.concat(gjendje);

    }

}

function shkon_ne_gjendje_te_shenjuar(gjendjet_e_shenjuara,ku_shkon,x,z,tabndrysh,arr){

    var i,j,k=0;
    for(i=0;i<gjendjet_e_shenjuara.length;i++){
        k=0;
        for(j=0;j<gjendjet_e_shenjuara[i].length;j++){
            //console.log(gjendjet_e_shenjuara[i],"???????????")
            //console.log(ku_shkon,"!!!!!!!!")
            if(gjendjet_e_shenjuara[i][j]!=ku_shkon[j]){
                k=1;
            }
            
        }
        if(k==0){
            tabndrysh[x][z]=1;
            arr=1;
            return true;
        }
    }
    return false;
}



function heq_gjendjet_e_pakapshme(gjendafd){

    var alfabet= alfabeti_pa_e();
    var tab=document.getElementById("tabafd");
    
    var i,j,poz=0;
    var gjendjet=new Array();
    gjendjet.push(gjendafd[0]);
    for(i=0;i<gjendjet.length;i++){
        poz=kthe_pozicion(gjendafd,gjendjet[i]);
        for(j=0;j<alfabet.length;j++){
            var qeliza=tab.rows[poz+1].cells[j+1].innerHTML;
            if(!gjendjet.includes(qeliza)){
                gjendjet.push(qeliza);
            }
        }
    }

    return gjendjet;

}

function gjej_gjendjet_fundore_min(arr_gjendjeve,gjendjet_fund_afd){
    var fundore_min=new Array();
    var i,j;
    for(i=0;i<arr_gjendjeve.length;i++){
        for(j=0;j<gjendjet_fund_afd.length;i++){
            if(arr_gjendjeve[i].includes(gjendjet_fund_afd[j])){
                fundore_min.push(arr_gjendjeve[i]);
                break;
            }
        }
    }
    return fundore_min;
}