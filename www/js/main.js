"use strict";
// Variables globales
var money = 1000;
var ww = $(window).width();
var wh = $(window).height();
document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$: " + money,
        dev: true
    }));
    setTimeout(() => {
        curtain();
    }, 3000);
});
function curtain() {
    $.mobile.changePage('#main', { transition: "slideup" });
    alert("Hola de nuevo");
}
// Inicialización de Stage y Eventos
const app = new Stage({
    canvas: document.getElementById("canva")
});
app.viewbox(ww, wh, (mode = "in-pad"));
