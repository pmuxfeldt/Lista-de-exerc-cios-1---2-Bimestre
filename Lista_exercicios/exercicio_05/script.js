let primeiroValor = document.querySelector("#primeiroValor");
let segundoValor = document.querySelector("#segundoValor");
let btCalcular = document.querySelector("#btCalcular");
let maiorValor = document.querySelector("#maiorValor");

function calculoMaiorValor(){
    let varPrimeiroValor = Number(primeiroValor.value);
    let varSegundoValor = Number(segundoValor.value);
    let varMaiorValor = String(maiorValor.value);

    if (varPrimeiroValor > varSegundoValor){
        varMaiorValor = varPrimeiroValor;
    } else {
        varMaiorValor = varSegundoValor;
    }

    maiorValor.textContent = String(varMaiorValor);
}

btCalcular.onclick=function(){
    calculoMaiorValor();
}