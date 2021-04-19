function constructor() {
    let matrizHtml = document.getElementsByClassName('tablero');
    return matrizHtml
}

function results(){
    matrizHtml = constructor();
    console.log(matrizHtml)
    let sumaFilas = [0, 0, 0];
    let sumacolumnas = [0, 0, 0];
    let cFilas = 0;

    for(let i = 0 ; i < 9 ; i++){
        if(i == 3 || i == 6){
            cFilas++;
        }
        sumaFilas [cFilas] += Number(matrizHtml[i].value);

        if(i==0 || i==3 || i==6){
            sumacolumnas[0] += Number(matrizHtml[i].value);
        }else if(i==1 || i==4 || i==7){
            sumacolumnas[1] += Number(matrizHtml[i].value);
        }else{
            sumacolumnas[2] += Number(matrizHtml[i].value);
        }
    }
    sumaFilas.forEach(element => console.log(element));
    sumacolumnas.forEach(element => console.log(element));
    showResults(sumaFilas,sumacolumnas);
}

function showResults(sumaFilas, sumaColumnas){
    let filas = document.getElementsByClassName('rFilas');
    let columnas = document.getElementsByClassName('rColumnas');
    console.log(filas);
    filas[0].innerHTML = "";
    filas[0].innerHTML = `<h4>Filas:</h4>`;
    filas[0].innerHTML += `<p class="datos">Fila 1: ${sumaFilas[0]}</p>` ;
    filas[0].innerHTML += `<p class="datos">Fila 2: ${sumaFilas[1]}</p>` ;
    filas[0].innerHTML += `<p class="datos">Fila 3: ${sumaFilas[2]}</p>` ;

    columnas[0].innerHTML = "";
    columnas[0].innerHTML += `<h4>Columnas:</h4>`
    columnas[0].innerHTML += `<p class="datos">Columna 1: ${sumaColumnas[0]}</p>` ;
    columnas[0].innerHTML += `<p class="datos">Columna 2: ${sumaColumnas[1]}</p>` ;
    columnas[0].innerHTML += `<p class="datos">Columna 3: ${sumaColumnas[2]}</p>` ;
}