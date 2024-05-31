/*
window.onload = function() {
            window.location.href = 'http://120.224.112.30:8001/gpt_info.html';
        };
       */ 
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}
