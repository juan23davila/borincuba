$(document).ready(function(){
    loadIni();

    $("#iniciobtn").click(function(){
        loadIni();
    });

    $("#bebidasbtn").click(function(){
        cargarBebidas();
    });

    $("#leyendasbtn").click(function(){
        cargarLeyendas();
    });

    $("#mapabtn").click(function(){
        preSetsMap();
    });

    $("#iniciarSesion").click(function(){
        alert("Esta función no se encuentra habilitada por el momento.")
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
    footer.textContent = "Todos los derechos reservados - Copyright © "+anio+" - @juan23davila";
}

