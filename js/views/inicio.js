/**
 * Administra todo el contenido de la página de inicio
 */

var interfaceContent;

//Concatena contenido
function addContent(content){
    interfaceContent = interfaceContent + content + "\n";
}

//Carga contenido
function loadIni(){
    interfaceContent = "";

    addContent('<h1 class="font-weight-bold"><span class="badge badge-secondary">Nos veremos pronto</span></h1>');
    addContent('<time id="fecha"><i class="far fa-clock"></i> 15 Marzo, 2020</time>');
    addContent('<hr>');
    addContent('<div class="inicioNoti">');
    addContent('    <img src="images/salsoteca/cerramosPuertas.jpg" alt="dicoteca cerrada">');
    addContent('</div>');
    addContent('<p class="text-justify enunciado">Lastimosamente por las circunstancias que estamos viviendo');
    addContent('    relacionadas con la pandemia del COVID-19 declarada por la Organización Mundial de la Salud (OMS)');
    addContent('    el 11 de marzo del 2020 y de acuerdo con el Decreto 531, mediante el cual se imparten instrucciones');
    addContent('    para el cumplimiento del Aislamiento Preventivo Obligatorioen todo el territorio colombiano, nos ');
    addContent('    hemos visto en la obligación de cerrar nuestras puertas a nuestros queridos clientes, pero más que');
    addContent('    una obligación para nosotros, se trata de darle prioridad a su salud, la de su familia y la nuestra ');
    addContent('    por supuesto.</p>');
    addContent('');
    addContent('<h4>No todo son malas noticias</h4>');
    addContent('');
    addContent('<p class="text-justify enunciado">Pero la diversión no para, seguiremos dándote lo mejor de nuestra');
    addContent('    salsa por este medio, nuestra radio virtual RADIO BORINCUBA. Esperamos contar con el apoyo de');
    addContent('    ustedes para que nos sintonicen y nos recomienden, nosotros estaremos dándole a ustedes una ');
    addContent('    excelente programación y algunas excelentes historias de este gran género musical.</p>');
    addContent('');
    addContent('<p class="text-justify enunciado">Estamos abiertos a recibir todo tipo de comentarios y sugerencias');
    addContent('    para mejorar nuestra plataforma virtual, los cuales pueden ser enviados a nuestro correo ');
    addContent('    <i class="far fa-envelope-open"></i>');
    addContent('    <a href="mailto:sugerencias@borincuba.com" class="font-italic" title="Enviar email">sugerencias@borincuba.com</a>,');
    addContent('    pronto estaremos comunicando muy pronto, cómo puedes seguir apoyándonos como proyecto salsero por');
    addContent('    este medio.</p>');
    addContent('');
    addContent('    <p class="text-center">Agradeciendo su comprensión y apoyo SALSOTECA BORINCUBA.</p>');

    document.getElementById("contenido").innerHTML = interfaceContent;
}