/* favicon.js — centralised favicon management */
(function () {
  var link = document.createElement('link');
  link.rel  = 'icon';
  link.type = 'image/jpeg';
  link.href = 'assets/images/logokaironfavicon.jpg';
  document.head.appendChild(link);
})();
