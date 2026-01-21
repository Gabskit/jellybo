// NO USAR: import Alpine from 'alpinejs'
var money: number = 50
// Definimos las variables para que TS no se queje de que no existen
declare var $: any;
declare var Alpine: any;

document.addEventListener('alpine:init', () => {
  Alpine.data('mnpg', () => ({
    cash: "💵$:" + money
  }))
})