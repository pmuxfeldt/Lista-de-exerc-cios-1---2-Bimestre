let valorRecebido = document.querySelector("#valorRecebido");
let valorProduto = document.querySelector("#valorProduto");
let troco = document.querySelector("#troco");
let btCalcular = document.querySelector("#btCalcular");

function calcularTroco(){
    let valorProvProduto = Number(valorRecebido.value);
    let valorProvPago = Number(valorProduto.value);
    let resulProv = valorProvProduto - valorProvPago;
    troco.textContent = String(resulProv);
}

btCalcular.onclick=function(){
    calcularTroco();
}