(function () {
  function initReveal() {
    var groups = new Map();

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      var parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });

    groups.forEach(function (els) {
      els.forEach(function (el, i) {
        if (!el.style.getPropertyValue('--reveal-delay')) {
          el.style.setProperty('--reveal-delay', Math.min(i, 5) * 0.08 + 's');
        }
      });
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(function (el) {
      io.observe(el);
    });

    var io2 = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io2.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    document.querySelectorAll('.gallery-mosaic figure:not(.is-visible)').forEach(function (el) {
      io2.observe(el);
    });
  }

  document.addEventListener('astro:page-load', initReveal);
})();
