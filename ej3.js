function generador() {
    let contenedor = document.querySelectorAll("#lista")
    let n = Number(prompt("Ingrese el número de elementos"));
    
    if(n>0){
        contenedor[0].innerHTML = "";
        for (let i = 0; i < n; i++) {
            contenedor[0].innerHTML+=`<input type="text" class="dlista" onInput="recargar()">`
        }
    }
}

function recargar(){
    let lista = document.querySelectorAll(".dlista");
    let resultado = document.querySelectorAll("#ingresos");
    console.log(lista);
    console.log(resultado);
    let size = lista.length;
    resultado[0].innerHTML=`<h4>Datos ingresados:</h4>`;
    if(size>0){
        for(let i=0; i<size;i++){
            if(lista[i].value!=""){
            resultado[0].innerHTML+=`<p>${i+1}: ${lista[i].value}</p>`;
            }
        }
    }
}