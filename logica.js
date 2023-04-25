//variables globales
const botonAceptar = document.getElementById("vista-previa");
botonAceptar.addEventListener("click", textoDeAro);

const botonDescargar = document.getElementById("descargar");
botonDescargar.addEventListener("click", descargarImagen);

const botonEliminar = document.getElementById("icono-Eliminar");
botonEliminar.addEventListener("click", eliminar);

let inputListaDespegable = document.getElementById("aros");
let modelo = document.getElementById("modelo");
let tamaño = document.getElementById("tamaño");
let costo = document.getElementById("costo");
let inputEscribaAqui1 = document.getElementById("texto-aro1").value;
let valor = inputListaDespegable.value;


// Obtén una referencia al lienzo de Fabric.js
const lienzo = new fabric.Canvas('MyCanvas');
lienzo.setWidth(310);
lienzo.setHeight(310);

const contexto = lienzo.getContext('2d');

// Carga la imagen de fondo
const img = new Image();
img.src = "./pictures/aro 1.png"
// Dibuja la imagen de fondo en el lienzo fabric.js
img.onload = function() {
    lienzo.setBackgroundImage(img.src, lienzo.renderAll.bind(lienzo));{
    }
};

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

//inicio de app
function iniciarApp(){
    inputListaDespegable.addEventListener("change", seleccionDeAro);
}

function seleccionDeAro(){
    let valor = inputListaDespegable.value;

    //condicional switch del modelo de aros
    switch (valor){
        case "modelo 1":
            img.src="./pictures/aro 1.png"
            break;
        case "modelo 2":
            img.src="./pictures/aro 2.png"
            break;
        case "modelo 3":
            img.src="./pictures/aro 3.png"
            break;
        case "modelo 4":
            img.src="./pictures/aro 4.png"
            break;
        case "modelo 5":
            img.src="./pictures/aro 5.png"
            break;
        case "modelo 6":
            img.src="./pictures/aro 6.png"
            break;
        case "modelo 7":
            img.src="./pictures/aro 7.png"
            break;
        case "modelo 8":
            img.src="./pictures/aro 8.png"
            break;
        case "modelo 9":
            img.src="./pictures/aro 9.png"
            break;
        case "modelo 10":
            img.src="./pictures/aro 10.png"
            break;
        case "modelo 11":
            img.src="./pictures/aro 11.png"
            break;
        case "modelo 12":
            img.src="./pictures/aro 12.png"
            break;
        case "modelo 13":
            img.src="./pictures/aro 13.png"
            break;
        case "modelo 14":
            img.src="./pictures/aro 14.png"
            break;
        case "modelo 15":
            img.src="./pictures/aro 15.png"
            break;
        case "modelo 16":
            img.src="./pictures/aro 16.png"
            break;
        case "modelo 17":
            img.src="./pictures/aro 17.png"
            break;
        case "modelo 18":
            img.src="./pictures/aro 18.png"
            break;
        case "modelo 19":
            img.src="./pictures/aro 19.png"
            break;
        case "modelo 20":
            img.src="./pictures/aro 20.png"
            break;
        case "modelo 21":
            img.src="./pictures/aro 21.png"
            break;
        case "modelo 22":
            img.src="./pictures/aro 22.png"
            break;
        case "modelo 23":
            img.src="./pictures/aro 23.png"
            break;
    }

    modelo.innerText = "Modelo de aro: " + valor;
}

function textoDeAro(){
    //agregar textos fabric.js
    let inputEscribaAqui1 = document.getElementById("texto-aro1").value;

    let texto1 = new fabric.Text(inputEscribaAqui1, {
        left: 100,
        top: 100,
        fontSize: 38,
        fontFamily: 'Dulcelin',
        fontWeight: 'bold',
        fill: '#a56b31',
    });

    lienzo.add(texto1);

    //opcion de borrar con teclas del y supr fabric.js
    lienzo.on('selection:created', function(e) {
    document.addEventListener('keydown', function(evt) {
        if (evt.key === 'Backspace' || evt.key === 'Delete') {
        lienzo.remove(lienzo.getActiveObject());
        lienzo.renderAll();
        }
    });
        });   
}

function eliminar(){
    lienzo.remove(lienzo.getActiveObject());
    lienzo.renderAll();
}

function descargarImagen() {
    let inputEscribaAqui1 = document.getElementById("texto-aro1").value;
    let valor = inputListaDespegable.value;
    let numero = aleatorio(1, 1000);
    let link = document.createElement('a');
    link.href = lienzo.toDataURL({format: 'png', quality: 0.8});
    link.download = (valor +"-"+ inputEscribaAqui1 +"-"+ numero);
    link.click();
}


window.addEventListener("load", iniciarApp);
