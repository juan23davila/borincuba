/**
 * Administra todo el contenido de la página de leyendas
 */


//Función diseñada para cargar los artistas que interpretan salsa
function cargarLeyendas(){
    interfaceContent = "";
    $("#contenido").css({"height": "", "margin": "", "padding": "2%"});
    $('.container').css({"height": ""});

    let artistas = [
                    "Héctor Lavoe", "Frankie Ruiz", 
                    "Rubén Blades", "Willie Colón", 
                    "Oscar D’ León", "Gilberto Santa Rosa",
                    "Eddie Santiago", "Luis Enrique",
                    "Víctor Manuel", "Jerry Rivera"
                   ]

    addContent('<h1><span class="badge badge-secondary">Leyendas de la Salsa</span></h1>');
    addContent('<div id="areaArtistas">');              
    for (let index = 0; index < artistas.length; index++) {
        addContent('<div class="areaArtista">');
        addContent('    <div class="artistTitle"><h4>'+artistas[index]+'</h4></div>');
        addContent('    <img src="images/page/emptyArtist.png" alt="artist"></img>');
        addContent('    <p>Aquí irá una pequeña descripción del artista</p>');
        addContent('</div>');
    }
    addContent('</div><!-- id="areaArtistas" -->');
    document.getElementById("contenido").innerHTML = interfaceContent;
}