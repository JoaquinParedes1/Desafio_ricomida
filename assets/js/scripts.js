$(document).ready(function () {
    // Tooltip
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Evento click para el botón "Enviar por correo"
    $('#enviarCorreo').click(function () {
        alert('El correo fue enviado correctamente...');
    });

    // Evento dblclick para cambiar color de texto
    $('.dblclick-text').on('dblclick', function () {
        $(this).css('color', '#dc3545');
    });

    // Toggle para tarjetas
    $('.toggle-card').click(function () {
        $(this).find('.card-body').toggle();
    });
});
