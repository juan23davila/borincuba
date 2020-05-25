function cargarBebidas(){
    interfaceContent = "";
    $("#contenido").css({"padding": "2%"});
    $('.container').css({"height": ""});
    createContent();
    
}

function createContent(){
    addContent('<h1><span class="badge badge-secondary">Lista bebidas</span></h1><br>');
    addContent('<h3>Aguardiente</h3>');
    addContent('<ul>');
    addContent('    <li>Aguartiente Taparoja botella</li>');
    addContent('    <li>Aguartiente Taparoja media</li>');
    addContent('</ul>');
    addContent('<h3>Cerveza</h3>');
    addContent('<ul>');
    addContent('    <li>Águila</li>');
    addContent('    <li>Poker</li>');
    addContent('    <li>Club Colombia</li>');
    addContent('</ul>');
    addContent('<h3>Ron</h3>');
    addContent('<ul>');
    addContent('    <li>Ron Viejo de Caldas botella</li>');
    addContent('    <li>Ron Viejo de Caldas media</li>');
    addContent('</ul>');

    document.getElementById("contenido").innerHTML = interfaceContent;
}