$(document).ready(function(){
    cargarInicio();

    $("#iniciobtn").click(function(){
        cargarInicio();
    });

    $("#bebidasbtn").click(function(){
        $("#contenido").load("views/bebidas.html");
    });

    $("#leyendasbtn").click(function(){
        cargarLeyendas();
    });

    $("#mapabtn").click(function(){
        $("#contenido").load("views/mapa.html");
    });

    $("#iniciarSesion").click(function(){
        alert("Esta función no se encuentra habilitada por el momento.")
    });

    showFooter();
});

/**
 * Se carga contenido de la primera page
 */
function cargarInicio(){
    //js/views/
    loadIni();
}


/**
 * Muestra el contenido del footer
 */
function showFooter(){
//Se obtiene año actual
    let fecha = new Date();
    let anio = fecha.getFullYear();

    let footer = document.getElementById("footer");
    footer.textContent = "Todos los derechos reservados - Copyright © "+anio+" - @juan23davila";
}

