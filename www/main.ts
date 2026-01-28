// Variables globales
var money: number = 1000;
var ww: number = $(window).width()
var wh: number = $(window).height();
// Declaraciones para evitar errores de TS
declare var $: any;
declare var Alpine: any;
declare var Stage: any;
declare var mode: any;
declare var transition: any;

document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$: " + money,
        dev: true
    }));
    setTimeout(() => {
        curtain()
    }, 3000)
});

function curtain(){
    $.mobile.changePage('#main',{transition: "slideup"})
    alert("Hola de nuevo")
}

// Inicialización de Stage y Eventos
const app = new Stage({
    canvas: document.getElementById("canva")
});
app.viewbox(ww,wh, (mode = "in-pad"))
