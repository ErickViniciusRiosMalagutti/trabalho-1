let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");
let btcalcular = document.querySelector("#btcalcular");
let resp1 = document.querySelector("#resp1");
let resp2 = document.querySelector("#resp2");
let resp3 = document.querySelector("#resp3");
let resp4 = document.querySelector("#resp4");

function calcular(){
   let num1 = Number(valor1.value);
   let num2 = Number(valor2.value);
   let num3 = Number(valor3.value);
   let respo1 = ((num1 + num2 + num3) / 3);
   let respo2 = (((3 * num1) + (2 * num2) + (5 * num3)) / (3 + 2 + 5 ));
   let respo3 = (respo1 + respo1);
   let respo4 = ((respo1 + respo2) / 2);
   resp1.textContent = respo1.toFixed(2);
   resp2.textContent = respo2.toFixed(2);
   resp3.textContent = respo3.toFixed(2);
   resp4.textContent = respo4.toFixed(2);
   
}

btcalcular.onclick = function(){
   calcular();
}