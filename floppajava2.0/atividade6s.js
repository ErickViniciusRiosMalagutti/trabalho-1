let primeirova = document.querySelector("#primeirova");
let segundova = document.querySelector("#segundova");
let terceirova = document.querySelector("#terceirova");
let quartova = document.querySelector("#quartova");
let btescolha = document.querySelector("#btescolha");
let resposta = document.querySelector("#resposta");

function menor(){
let nr1 = Number(primeirova.value);
let nr2 = Number(segundova.value);
let nr3 = Number(terceirova.value);
let nr4 = Number(quartova.value);
let resp;

let menorvalor = nr1

if(nr2 < menorvalor){
    menorvalor = nr2;
} if (nr3 < menorvalor){
    menorvalor = nr3;
} if (nr4 < menorvalor ){
    menorvalor = nr4;
}

resposta.textContent = menorvalor;
}

btescolha.onclick = function(){
    menor();
}