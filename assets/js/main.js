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
