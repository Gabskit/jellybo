// Global variables
var money = 1000;
// Initialize Alpine.js data
document.addEventListener('alpine:init', function () {
    Alpine.data('mnpg', function () { return ({
        cash: "💵$: " + money,
        dev: true
    }); });
    setTimeout(function () {
        $.mobile.changePage("#main", { transition: "slideup" });
    }, 2000);
});
