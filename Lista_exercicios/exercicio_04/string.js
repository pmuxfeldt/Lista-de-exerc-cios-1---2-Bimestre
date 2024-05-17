let primeiroValor = document.querySelector("#primeiroValor");
let segundoValor = document.querySelector("#segundoValor");
let terceiroValor = document.querySelector("#terceiroValor");
let valorMediaAritmetica = document.querySelector("#valorMediaAritmetica");
let valorMediaPonderada = document.querySelector("#valorMediaPonderada");
let somaMedias = document.querySelector("#somaMedias");
let mediaMedias = document.querySelector("#mediaMedias");
let btCalcular = document.querySelector("#btCalcular");

function calculoGeral(){
    //Media Aritmetica
    let artPrimValor = Number(primeiroValor.value);
    let artSegValor = Number(segundoValor.value);
    let artTerValor = Number(terceiroValor.value);
    let mediaAritmetica = (artPrimValor + artSegValor + artTerValor) / 3;
    valorMediaAritmetica.textContent = String(mediaAritmetica);
    
    //Media Ponderada
    let pondPrimValor = Number(primeiroValor.value);
    let pondSegValor = Number(segundoValor.value);
    let pondTerValor = Number(terceiroValor.value);
    let mediaPonderada = ((pondPrimValor * 3) + (pondSegValor * 2) + (pondTerValor * 5)) / (pondPrimValor + pondSegValor + pondTerValor);
    valorMediaPonderada.textContent = String(mediaPonderada);

    //Soma Medias
    let varSomaMedia = (mediaPonderada + mediaAritmetica);
    somaMedias.textContent = String(varSomaMedia);

    //Media das Medias
    let medDasMedias = (mediaPonderada + mediaAritmetica) / 2;
    mediaMedias.textContent = String(medDasMedias);
}







btCalcular.onclick=function(){
    calculoGeral();
}
