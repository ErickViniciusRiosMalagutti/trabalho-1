let codi = document.querySelector("#codi");
let buto = document.querySelector("#buto");
let resposta = document.querySelector("#resposta");

function codigos(){
    let c1 = Number(codi.value);
    let resp;

    if (c1 === 1){
        resp = '  parafuso';
    } else if (c1 === 2){
        resp = '  porca';
    } else if  (c1 === 3){
        resp = '   prego';
    } else{
        resp = 'diversos';
    }


resposta.textContent = resp;

    }
buto.onclick = function(){
    codigos();
}
    
