// NO USAR: import Alpine from 'alpinejs'
var money = 50;
document.addEventListener('alpine:init', function () {
    Alpine.data('mnpg', function () { return ({
        cash: "💵$:" + money
    }); });
});
