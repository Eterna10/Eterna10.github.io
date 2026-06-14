(function () {
  function typeEffect(el, text, speed) {
    el.textContent = '';
    var cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    el.appendChild(cursor);
    var i = 0;
    var timer = setInterval(function () {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text[i++]);
      } else {
        clearInterval(timer);
        setTimeout(function () { cursor.remove(); }, 1200);
      }
    }, speed);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('#blog-info .site-name');
    if (el) typeEffect(el, el.textContent.trim(), 100);
  });
})();
