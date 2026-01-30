
// Global variables
var money: number = 1000;

// TypeScript declarations for libraries
declare var $: any; // Declaration for jQuery
declare var Alpine: any;
declare var Stage: any;
declare var mode: any;

// Initialize Alpine.js data
document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$: " + money,
        dev: true
    }));
    setTimeout(() => {
        $.mobile.changePage("#main",{transition: "slideup"})
    }, 2000)
});
