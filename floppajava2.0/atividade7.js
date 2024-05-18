let pimp = document.querySelector("#pimp");
let resp = document.querySelector("#respo");
let btt = document.querySelector("#btt");

function impar(){
    let n1 = Number(pimp.value);
    let repp = (n1 % 2);
    let rep;

    if(repp === 1){
        rep = 'impar';
    }else{
        rep = 'par';
    }

    resp.textContent = rep;
}

btt.onclick = function(){
    impar();
}