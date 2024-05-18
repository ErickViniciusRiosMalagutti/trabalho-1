let quilo = document.querySelector("#quilo");
let quan = document.querySelector("#quan");
let btg = document.querySelector("#btg");
let resposta = document.querySelector("#resposta");

function carne(){
    let gosha1 = Number(quilo.value);
    let gosha2 = Number(quan.value);
    let resp = gosha1 * gosha2;
    resposta.textContent = resp;
}

btg.onclick = function(){
    carne();

}