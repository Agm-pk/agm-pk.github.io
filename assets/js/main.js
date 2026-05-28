/* Aghosh-e-Gulzar-e-Madina — restored static site */
window.AGM = {
  toggleNav: function () {
    document.querySelector('.main-nav').classList.toggle('open');
  },
  submitForm: function (e) {
    e.preventDefault();
    alert('Thank you! This is a static restore — wire this form to a backend (or email service) to receive submissions.');
    return false;
  }
};

/* dropdown menus — explicit open/close so taps work on touch screens
   (CSS :hover is gated to pointer devices to avoid sticky-hover bugs).
   Only parents without a real destination ("#") are toggled here, so the
   Gallery link still navigates normally. */
(function () {
  function closeAll(except) {
    document.querySelectorAll('.has-sub.open').forEach(function (li) {
      if (li !== except) li.classList.remove('open');
    });
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest('.has-sub > a');
    if (link && (link.getAttribute('href') === '#' || link.classList.contains('nogo'))) {
      e.preventDefault();
      var li = link.parentElement;
      var willOpen = !li.classList.contains('open');
      closeAll(li);
      li.classList.toggle('open', willOpen);
    } else if (!e.target.closest('.submenu')) {
      closeAll(null);
    }
  });
  // close any open dropdown on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });
})();

/* hero slideshow */
(function () {
  var slides = document.querySelectorAll('.hero .slide');
  if (slides.length < 2) return;
  var i = 0;
  setInterval(function () {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 5000);
})();
