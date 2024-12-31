// Array para almacenar usuarios
let usuarios = [];

// Array para almacenar publicaciones
let publicaciones = [];

// Función para agregar un nuevo usuario
function agregarUsuario(nombre) {
    const usuario = {
        id: usuarios.length + 1,
        nombre: nombre
    };
    usuarios.push(usuario);
    console.log(`Usuario ${nombre} agregado.`);
}

// Función para crear una publicación
function crearPublicacion(usuarioId, contenido) {
    const publicacion = {
        id: publicaciones.length + 1,
        usuarioId: usuarioId,
        contenido: contenido,
        fecha: new Date()
    };
    publicaciones.push(publicacion);
    console.log(`Publicación creada por el usuario ${usuarioId}: ${contenido}`);
}

// Función para mostrar todas las publicaciones
function mostrarPublicaciones() {
    publicaciones.forEach(pub => {
        const usuario = usuarios.find(u => u.id === pub.usuarioId);
        console.log(`[${pub.fecha.toLocaleString()}] ${usuario.nombre}: ${pub.contenido}`);
    });
}