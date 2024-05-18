let primvalor = document.querySelector("#primvalor");
let resp = document.querySelector("#resp");
let btreajustar = document.querySelector("#btreajustar");

function reajuste(){
    let saldo = Number(primvalor.value);
    let aumento = (saldo * 0.01);
    resp.textContent = saldo + aumento;
    

}
 btreajustar.onclick = function(){
    reajuste();
 }