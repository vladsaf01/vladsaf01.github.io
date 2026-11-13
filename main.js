// Василиса — прототип. Мобильное меню, тень шапки, галерея.

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
      burger.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        burger.textContent = '☰';
      });
    });
  }

  var header = document.getElementById('header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var main = document.getElementById('galleryMain');
  var thumbs = document.querySelectorAll('.gallery-thumbs button');
  if (main && thumbs.length) {
    thumbs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        thumbs.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        main.src = btn.getAttribute('data-src');
      });
    });
  }
});
