$(document).ready(function(){
    $("#contenido").load("views/inicio.html");
    showFooter();
});

/**
 * Muestra el contenido del footer
 */
function showFooter(){
//Se obtiene año actual
    let fecha = new Date();
    let anio = fecha.getFullYear();

    let footer = document.getElementById("footer");
    footer.textContent = "Todos los derechos Reservados - Copyright © "+anio+" - @juan23davila";
}