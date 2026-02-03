
// Global variables
var money: number = 50;
var cupg: boolean = true;
// TypeScript declarations for libraries
declare var $: any; // Declaration for jQuery
declare var Alpine: any;
declare var Stage: any;
declare var mode: any;
declare var p5: any

// Initialize Alpine.js data
document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$: " + money,
        dev: true,
        curt: cupg
    }));
    setTimeout(() => {
        $.mobile.changePage("#main",{transition: "slideup"})
        cupg = false
    }, 2000)
});
var sketch = (p: any) => {
  p.setup = () => {
    var canvas = p.createCanvas(p.windowWidth,p.windowHeight)
    canvas.parent("canva")
  }
  p.draw = () => {
    p.background(30,200,230)
  }
}

window.sketch = new p5(sketch)