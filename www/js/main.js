"use strict";
// Global variables
var money = 1000;
// Initialize Alpine.js data
document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$: " + money,
        dev: true
    }));
    setTimeout(() => {
        $.mobile.changePage("#main", { transition: "slideup" });
    }, 2000);
});
