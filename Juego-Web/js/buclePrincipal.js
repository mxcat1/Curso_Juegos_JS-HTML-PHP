// NAMESPACE utilizar el nombre del namespace para llamar a sus
//           atributos o metodos
// Main Loop bucle principal
// aps actualizaciones por segundo
// fps frames por segundo
// callback

var buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function (registroTemporal) {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);

        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();

        if (registroTemporal - buclePrincipal.ultimoRegistro > 999){
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps=0;
            buclePrincipal.fps=0;
        }
    },
    detener: function () {

    },
    actualizar: function (registroTemporal) {
        buclePrincipal.aps++;
    },
    dibujar: function (registroTemporal) {
        buclePrincipal.fps++;
    }

};