// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validación del nombre
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista. Intenta con otro.');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para hacer el sorteo.');
        return;
    }

    // Filtrar amigos que no han sido sorteados
    let amigosDisponibles = amigos.filter(amigo => !amigosSorteados.includes(amigo));
    
    if (amigosDisponibles.length === 0) {
        alert('Todos los amigos ya han sido sorteados.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    let amigoSecreto = amigosDisponibles[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    
    // Mostrar el resultado
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
    
    // Mover el amigo sorteado al array de amigos sorteados
    amigosSorteados.push(amigoSecreto);
}
