$(document).ready(function() {
    $('.btnAbrirModal').click(function() {
        let imagenProducto = $(this).data('imagen');
        let nombreProducto = $(this).data('nombre');
        let descripcionProducto = $(this).data('descripcion');
        
        $('#myModal').find('.modal-body').html($('#modalContent').html());        
        $('#myModal').find('.modal-body img').attr('src', imagenProducto).attr('alt', nombreProducto);
        $('#myModal').find('.modal-body h4').text(nombreProducto);
        $('#myModal').find('.modal-body p').text(descripcionProducto);

        $('#myModal').modal('show');
    });

    $('.btnCerrarModal').click(function() {
        $('#myModal').modal('hide');
    });
});