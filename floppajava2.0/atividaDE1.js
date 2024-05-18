let vpago = document.querySelector("#vpago");
let vpro = document.querySelector("#vpro");
let btver = document.querySelector("#btver");
let resp = document.querySelector("#resp");

function troco(){
    let n1 = Number(vpago.value);
    let n2 = Number(vpro.value);
    let respo = n1 - n2;
    resp.textContent = respo;
}

btver.onclick = function(){
    troco();

}