    // 创建一个新窗口
    var newWindow = window.open('', '_blank', 'width=300,height=200');
    
    // 向新窗口写入 HTML 内容
    newWindow.document.write('<html><body><p>Hello World</p></body></html>');
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}
