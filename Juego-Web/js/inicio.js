// DOMContentLoaded cuando carga el html
document.addEventListener('DOMContentLoaded', function(){
    inicio.inciarJuegos();
},false);

var inicio = {
    inciarJuegos: function () {
        console.log("juego Iniciado");
        buclePrincipal.iterar();
    }
};

