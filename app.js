// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];
let nombresYaSorteados = [];

function mostrarTextoEnElemento(elemento, listaNombres) {
    let nuevoNombre = document.querySelector(elemento);
    nuevoNombre.innerHTML = listaNombres;
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
    let nuevoNombre = document.querySelector("#amigo").value;
    if (nuevoNombre != "") {
        listaNombres.push(nuevoNombre);
    } else {
        alert("Por favor, inserte un nombre.");
    }
    limpiarCaja();
    mostrarListaAmigos();
    console.log(listaNombres);
}

function sortearAmigo() {
    if (listaNombres.length > 0) {
        let nombreAleatorio = Math.floor(Math.random() * listaNombres.length);
        let nombreSeleccionado = listaNombres[nombreAleatorio];
        console.log(nombreSeleccionado);
        mostrarTextoEnElemento('#resultado', nombreSeleccionado);
        mostrarTextoEnElemento('#listaAmigos', '');
        listaNombres = [];
        return;
    } else{
        mostrarTextoEnElemento('#listaAmigos', 'La lista de amigos esta vacia, agregue un registro');
    }
}

function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpia la lista
    
    for(let i = 0; i < listaNombres.length; i++){
        let amigo = listaNombres[i];
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}