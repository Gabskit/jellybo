$(document).ready(function() {
  setTimeout(function() {
    $.mobile.changePage("#main", { transition: "slideup" });
  }, 2000);
});

document.addEventListener('alpine:init', () => {
  Alpine.data('mnpg', () => ({
    cash: '💵$: 1000',
    dev: true,
  }))
})
