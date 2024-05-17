inpCodigo = document.querySelector("#inpCodigo");
btBuscar = document.querySelector("#btBuscar");

function buscarCodigo(){
    let codigo = (inpCodigo.value);

    if (codigo == 1){
        alert("Produto: Parafuso");
    } else if(codigo == 2){
        alert("Produto: Porca");
    } else if(codigo == 3){
        alert("Produto: Prego");
    } else{
        alert("Produto: Diversos");
    }
}

btBuscar.onclick=function(){
    buscarCodigo();
}