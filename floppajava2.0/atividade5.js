let valor11 = document.querySelector("#valor11");
let valor22 = document.querySelector("#valor22");
let ident = document.querySelector("#ident");
let resposta = document.querySelector("#resposta");


function maiorque(){
    let n1 = Number(valor11.value);
    let n2 = Number(valor22.value);
    let resp;

    if(n1 > n2){
        resp = n1;
    }else if(n2 > n1)
        resp = n2;
        else{
            resp = "nenhum";
        }
        resposta.textContent = resp
}

ident.onclick = function(){
    maiorque();
}