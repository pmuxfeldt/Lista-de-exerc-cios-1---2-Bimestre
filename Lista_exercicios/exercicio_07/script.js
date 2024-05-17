let numEntrada = document.querySelector("#numEntrada");
let btCalcular = document.querySelector("#btCalcular");

function calculoParImpar(){
    let varNumPrinc = Number(numEntrada.value);

    if (varNumPrinc% 2 == 0 ){
        alert("O Número é Par");
    } else {
        alert("O Número é Impar");
    }
}

btCalcular.onclick=function(){
    calculoParImpar();
}