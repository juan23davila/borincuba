$(document).ready(function(){
    $("#contenido").load("views/inicio.html");

    $("#iniciobtn").click(function(){
        $("#contenido").load("views/inicio.html");
    });

    $("#bebidasbtn").click(function(){
        $("#contenido").load("views/bebidas.html");
    });

    $("#leyendasbtn").click(function(){
        $("#contenido").load("views/leyendas.html");
    });

    $("#mapabtn").click(function(){
        $("#contenido").load("views/mapa.html");
    });

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