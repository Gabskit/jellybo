"use strict";
// Global variables
var money = 50;
var cupg = true;
// Initialize Alpine.js data
document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$: " + money,
        dev: true,
        curt: cupg
    }));
    setTimeout(() => {
        $.mobile.changePage("#main", { transition: "slideup" });
        cupg = false;
    }, 2000);
});
var sketch = (p) => {
    p.setup = () => {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent("canva");
    };
    p.draw = () => {
        p.background(30, 200, 230);
    };
};
window.sketch = new p5(sketch);
