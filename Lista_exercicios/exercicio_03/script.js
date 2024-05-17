let inpSaldo = document.querySelector("#inpSaldo");
let pValorReajuste = document.querySelector("#pValorReajuste");
let btCalcular = document.querySelector("#btCalcular");

function calcularReajuste(){
    let saldoAtual = Number(inpSaldo.value);
    let reajuste = (saldoAtual / 100 ) + saldoAtual;
    pValorReajuste.textContent = String(reajuste);
}

btCalcular.onclick=function(){
    calcularReajuste();
}

