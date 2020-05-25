var map;

//Preestablece lo que hace el mapa
function preSetsMap(){
    let $contenido = $("#contenido");
    $contenido.css({"margin": "0", "padding": "0"});
    $contenido.html("");
    let $mapa = $("#map");
    $mapa.css("height", "85%");
    $('.container').css({"height": "100%"});
}


function initMap() {
    console.log("entra");
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 4.4211579, lng: -75.18477349999999},
      zoom: 18
    });
}

function primeraPeticion(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = 
        xhttp.responseText;
        }
    };
    // se asume que hay una variable con una url
    xhttp.open("GET", url , true); 
    xhttp.send();
}