
// Global variables
var money: number = 1000;
var ww: number = window.innerWidth;
var wh: number = window.innerHeight;

// TypeScript declarations for libraries
declare var $: any; // Declaration for jQuery
declare var Alpine: any;
declare var Stage: any;
declare var mode: any;

/**
 * Shows a page and hides all other pages.
 * This is the modern replacement for jQuery Mobile's changePage function.
 * @param pageId The ID of the page to show (e.g., '#main').
 */
function showPage(pageId: string): void {
    // Hide all elements with the class 'page'
    document.querySelectorAll('.page').forEach((page) => {
        (page as HTMLElement).style.display = 'none';
    });

    // Show the single target page
    const targetPage = document.querySelector(pageId);
    if (targetPage) {
        (targetPage as HTMLElement).style.display = 'block';
    }
}

// Initialize Alpine.js data
document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$: " + money,
        dev: true
    }));
});

// Handle initial page load and set up navigation listeners
document.addEventListener('DOMContentLoaded', () => {
    // 1. Show the initial splash screen
    showPage('#curtain');

    // 2. After 2 seconds, transition to the main page
    setTimeout(() => {
        showPage('#main');
    }, 2000);

    // 3. Set up a single event listener for all navigation links
    document.body.addEventListener('click', (event) => {
        // Find the closest ancestor `<a>` tag with an href starting with '#'
        const anchor = (event.target as HTMLElement).closest('a[href^="#"]');

        if (anchor) {
            event.preventDefault(); // Stop the browser's default link behavior
            const pageId = anchor.getAttribute('href');
            if (pageId) {
                showPage(pageId); // Navigate to the page
            }
        }
    });

    // 4. Initialize the Stage.js canvas element
    const canvasElement = document.getElementById("canva");
    if (canvasElement) {
      const app = new Stage({
          canvas: canvasElement
      });
      app.viewbox(ww, wh, (mode = "in-pad"));
    }
});
