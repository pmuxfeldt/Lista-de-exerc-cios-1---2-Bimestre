let valorKg = document.querySelector("#valorKg");
let valorProduto = document.querySelector("#valorProduto");
let resultado = document.querySelector("#resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcularPreçoKg(){
    let valorPorKg = Number(valorKg.value);
    let valorProdKg = Number(valorProduto.value);
    let resulProv = valorPorKg * valorProdKg;
    resultado.textContent = String(resulProv);
}

btCalcular.onclick=function(){
    calcularPreçoKg();
}