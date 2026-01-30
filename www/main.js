// Global variables
var money = 1000;
/**
 * Shows a page and hides all other pages.
 * This is the modern replacement for jQuery Mobile's changePage function.
 * @param pageId The ID of the page to show (e.g., '#main').
 */
function showPage(pageId) {
    // Hide all elements with the class 'page'
    document.querySelectorAll('.page').forEach(function (page) {
        page.style.display = 'none';
    });
    // Show the single target page
    var targetPage = document.querySelector(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
    }
}
// Initialize Alpine.js data
document.addEventListener('alpine:init', function () {
    Alpine.data('mnpg', function () { return ({
        cash: "💵$: " + money,
        dev: true
    }); });
});
// Handle initial page load and set up navigation listeners
document.addEventListener('DOMContentLoaded', function () {
    // 1. Show the initial splash screen
    showPage('#curtain');
    // 2. After 2 seconds, transition to the main page
    setTimeout(function () {
        showPage('#main');
    }, 2000);
    // 3. Set up a single event listener for all navigation links
    document.body.addEventListener('click', function (event) {
        // Find the closest ancestor `<a>` tag with an href starting with '#'
        var anchor = event.target.closest('a[href^="#"]');
        if (anchor) {
            event.preventDefault(); // Stop the browser's default link behavior
            var pageId = anchor.getAttribute('href');
            if (pageId) {
                showPage(pageId); // Navigate to the page
            }
        }
    });
    // 4. Initialize the Stage.js canvas element only after the DOM is ready
    var canvasElement = document.getElementById("canva");
    if (canvasElement) {
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        var app = new Stage({
            canvas: canvasElement
        });
        app.viewbox(ww, wh, (mode = "in-pad"));
    }
});
