let ipMedia = document.querySelector("#ipMedia");
let btverificar = document.querySelector("#btverificar");

function verificarmedia(){
    let media = Number(ipMedia.value);
    
    //DESVIO CONDICIONAL SIMPLES
    if(media >= 6){
        alert("aluno APROVADO");

    }else{
        alert("Aluno REPROVADO");
    }
}

btverificar.onclick = function(){
    verificarmedia();
}

