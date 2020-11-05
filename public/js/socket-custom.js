var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'

}, function(resp) {
    console.log('respuesta: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

})