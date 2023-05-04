//variables globales
const botonAceptar = document.getElementById("vista-previa");
botonAceptar.addEventListener("click", textoDeAro);

const btnIzquierda = document.getElementById("icono-izquierda");
btnIzquierda.addEventListener("click", moverModeloDeAro.bind(null, -1));

const btnDerecha = document.getElementById("icono-derecha");
btnDerecha.addEventListener("click", moverModeloDeAro.bind(null, 1));

const botonDescargar = document.getElementById("descargar");
botonDescargar.addEventListener("click", descargarImagen);

const botonEliminar = document.getElementById("icono-Eliminar");
botonEliminar.addEventListener("click", eliminar);

const botonMenosSpasing = document.getElementById("icono-Restar");
botonMenosSpasing.addEventListener("click", menosSpacing);

const botonMasSpasing = document.getElementById("icono-Sumar");
botonMasSpasing.addEventListener("click", masSpacing)

let inputListaDespegable = document.getElementById("aros");
let inputListaFuentes = document.getElementById("fuentes");

let modelo = document.getElementById("modelo");
let tamaño = document.getElementById("tamaño");
let costo = document.getElementById("costo");

let inputEscribaAqui1 = document.getElementById("texto-aro1").value;
let texto1 = new fabric.Text(inputEscribaAqui1, {
});

let valor = inputListaDespegable.value;

// Obtén una referencia al lienzo de Fabric.js
const lienzo = new fabric.Canvas('MyCanvas');
lienzo.setWidth(310);
lienzo.setHeight(310);

const contexto = lienzo.getContext('2d');

//añadir svg al fondo del lienzo
fabric.loadSVGFromURL('./pictures/aro1.svg', function(objects, options) {
    const svg = fabric.util.groupSVGElements(objects, options);
    svg.set({ 
        left: 10, 
        top: 10,
        selectable: false  // Desactivar la selección y edición
    });
    lienzo.add(svg);
});

//funcion para mover modelo de aro con Id izquierda & derecha
function moverModeloDeAro(incremento) {
    let indiceActual = inputListaDespegable.selectedIndex;
    let numOpciones = inputListaDespegable.options.length;
  
    // Mover a la izquierda o derecha
    indiceActual += incremento;
    if (indiceActual < 0) {
        indiceActual = numOpciones - 1;
    } else if (indiceActual >= numOpciones) {
        indiceActual = 0;
    }
    
    inputListaDespegable.selectedIndex = indiceActual;
    seleccionDeAro();
}

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
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro1.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 2":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro2.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 3":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro3.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 4":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro4.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 15,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 5":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro5.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 6":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro6.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 15,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 7":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro7.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 8":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro8.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 9":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro9.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 10":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro10.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 20, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 11":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro11.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 25,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 12":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro12.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 20, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 13":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro13.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 14":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro14.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 15":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro15.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 20, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 16":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro16.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 30, 
                    top: 20,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 17":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro17.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 18":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro18.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 10,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 19":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro19.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 20,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 20":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro20.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 30,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 21":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro21.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 30,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 22":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro22.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 10, 
                    top: 20,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 23":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro23.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 5, 
                    top: 50,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
        case "modelo 24":
            lienzo.clear();
            fabric.loadSVGFromURL('./pictures/aro24.svg', function(objects, options) {
                const svg = fabric.util.groupSVGElements(objects, options);
                svg.set({ 
                    left: 20, 
                    top: 30,
                    selectable: false  // Desactivar la selección y edición
                });
                lienzo.add(svg);
            });
            lienzo.add(texto1);
            break;
    }

    modelo.innerText = "Modelo de aro: " + valor;
}

//agregar textos fabric.js

function textoDeAro(){
    let inputEscribaAqui1 = document.getElementById("texto-aro1").value;

    texto1 = new fabric.Text(inputEscribaAqui1, {
        left: 100,
        top: 100,      
        fontFamily: 'Dulcelin',
        fontWeight: 'bold',
        fontSize: 38,
        fill: '#a56b31',
        charSpacing: 0
    });

    lienzo.add(texto1);

    inputListaFuentes.addEventListener("change", function() {
        var fuente = inputListaFuentes.value;
        texto1.set("fontFamily", fuente);
        lienzo.renderAll();
    })

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


function menosSpacing(){
    let valorActual = texto1.get("charSpacing");
    let nuevoValor = valorActual - 10;
    texto1.set("charSpacing", nuevoValor);
    lienzo.renderAll();
};

function masSpacing(){
    let valorrActual = texto1.get("charSpacing");
    let nuevooValor = valorrActual + 10;
    texto1.set("charSpacing", nuevooValor);
    lienzo.renderAll();
};

function eliminar(){
    lienzo.remove(lienzo.getActiveObject());
    lienzo.renderAll();
}

// Crea un enlace de descarga y asigna el código SVG generado al atributo href
const descargarBtn = document.getElementById('descargar');
descargarBtn.addEventListener('click', function() {
    let inputEscribaAqui1 = document.getElementById("texto-aro1").value;
    let valor = inputListaDespegable.value;
    let numero = aleatorio(1, 1000);
    const svg = lienzo.toSVG();
    const enlace = document.createElement('a');
    enlace.setAttribute('href', 'data:image/svg+xml;base64,' + btoa(svg));
    enlace.setAttribute('download', valor +"-"+ inputEscribaAqui1 +"-"+ numero + ".svg");
    enlace.click();
});

// Crea un enlace de descarga  png
function descargarImagen() {
    let inputEscribaAqui1 = document.getElementById("texto-aro1").value;
    let valor = inputListaDespegable.value;
    let numero = aleatorio(1, 1000);
    let link = document.createElement('a');
    link.href = lienzo.toDataURL({format: 'png', quality: 1});
    link.download = (valor +"-"+ inputEscribaAqui1 +"-"+ numero + ".png");
    link.click();
}

window.addEventListener("load", iniciarApp);
