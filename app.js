let listAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigoIngresado = inputAmigo.value.trim();

    if (!amigoIngresado) {
        alert("Ingresa amigo para continuar");
        return;
    }

    if (listAmigos.includes(amigoIngresado)) {
        alert(`El nombre "${amigoIngresado}" ya esta en la lista. Ingresa otro nombre.`);
        return;
    }

    listAmigos.push(amigoIngresado);
    inputAmigo.value = "";
    inputAmigo.focus();
    actualizarLista();
}

function actualizarLista() {
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";

    for (let i = 0; i < listAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listAmigos[i];
        listaElementos.appendChild(item);
    }
}

function sortearAmigo() {
    if (listAmigos.length === 0) {
        alert("No hay amigos, ingrese nombres");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listAmigos.length);
    let amigoSorteado = listAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}