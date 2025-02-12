$(document).ready(function() {
    $('#archivoDatos').on('change', function() {
        var file = this.files[0];
        var allowedExtensions = /(\.pdf|\.png|\.jpg|\.docx|\.doc|\.xlsx|\.zip)$/i;
        var maxSize = 60 * 1024 * 1024; // 60MB

        if (file) {
            // Validación de extensión
            if (!allowedExtensions.exec(file.name)) {
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'Solo se aceptan archivos con las extensiones: .pdf, .png, .jpg, .docx, .doc, .xlsx, .zip',
                });
                $('#archivoDatos').val(''); // Limpiar el campo
                return false;
            }

            // Validación de tamaño
            if (file.size > maxSize) {
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'El archivo es demasiado grande. El tamaño máximo permitido es de 60 MB.',
                });
                $('#archivoDatos').val(''); // Limpiar el campo
                return false;
            }
        }
    });
});
