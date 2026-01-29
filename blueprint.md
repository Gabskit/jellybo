# Bubblebox Application Blueprint

## Overview

Bubblebox is an interactive web application built with modern, framework-less web technologies. It features a central canvas element for dynamic content (powered by Stage.js) and a simple UI managed by Alpine.js. The goal is to provide a clean, playful, and responsive user experience.

## Design and Features (v1 - "Bubble" Theme)

### Visual Design
*   **Theme:** Modern, clean, and playful, inspired by soap bubbles.
*   **Color Palette:**
    *   `--background-color`: `#f0f2f5` (Light Gray)
    *   `--text-color`: `#333` (Dark Gray)
    *   `--primary-color`: `#007bff` (Bright Blue)
    *   `--accent-gradient`: `linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)` (Iridescent Blue)
    *   `--shadow-color`: `rgba(102, 166, 255, 0.3)`
*   **Typography:** 'Lato' and 'Helvetica Neue', falling back to system sans-serif fonts. The UI will use clear headings and readable paragraph text.
*   **Layout:** A simple, single-page layout with a header and a main content area.
*   **Iconography:** The design uses a simple emoji "💵" for currency.

### Components
*   **Header (`<header-component>`):**
    *   A custom Web Component that displays the application title ("Bubblebox") and the user's current cash amount.
    *   It's styled with the accent gradient and a soft drop shadow to make it "pop".
    *   The cash amount is reactive and is managed by Alpine.js.
*   **Canvas Container (`.canva-conta`):**
    *   A flexible container that holds the main `<canvas>` element.
    *   It's designed to fill the remaining vertical space of the viewport.
*   **Canvas (`#canva`):**
    *   The main interactive area, powered by Stage.js.

### Features
*   **Reactive Data:** Uses Alpine.js to manage and display the user's cash.
*   **Dynamic Canvas:** Uses Stage.js to render graphics in the main canvas area.
*   **Responsive Design:** The layout adapts to different screen sizes.

## Current Plan: Initial Redesign

*   **Goal:** Replace the old, jQuery Mobile-based design with a new, modern "Bubblebox" theme.
*   **Steps:**
    1.  **Structure HTML:** Update `index.html` to use a modern structure with the `<header-component>`.
    2.  **Create Web Component:** Build the `<header-component>` in a new `components/Header.js` file.
    3.  **Implement New Styles:** Replace all content in `www/css/style.css` with the new theme styles using modern CSS properties.
    4.  **Refactor JavaScript:** Convert `www/main.ts` to `www/main.js`, removing jQuery Mobile dependencies and integrating the new Web Component.
    5.  **Cleanup:** Remove the old `main.ts` file.
