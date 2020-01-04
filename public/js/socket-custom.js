var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Los on se utilizan para - Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el serviddor')
});


// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Edisson',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar informaación
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});