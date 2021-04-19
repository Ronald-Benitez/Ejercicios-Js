function constructor(){
    let matriz= document.getElementsByClassName("tablero");
    let resultado=[];
    for (let i = 0; i < 4; i++) {
        let arreglo =[];
        for (let j = 0; j < 4; j++) {
            arreglo.push(Number(matriz[4*i +j].value));
        }
       resultado.push(arreglo);
    }
    return resultado;
}

function results(){
    let matriz = constructor();
    let resultado = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            resultado += matriz[i][j];
            
        }
    }
    console.log(resultado);
    showResults(resultado);
}

function showResults(resultado){
    let contenedor = document.querySelector('.resultado');
    console.log(contenedor);
    contenedor.innerText = "Resultado: "+resultado;
}