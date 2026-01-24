// This is a mock cordova.js file for browser-based development.
// It dispatches the 'deviceready' event so your app can start.
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed, firing deviceready event.');
  document.dispatchEvent(new Event('deviceready'));
});
