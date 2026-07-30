(function () {
  function initCarousel() {
    var viewport = document.getElementById('lieu-carousel');
    var track = document.getElementById('lieu-carousel-track');
    if (!viewport || !track) return;
    if (viewport._carouselCleanup) {
      viewport._carouselCleanup();
    }

    var slots = Array.from(track.querySelectorAll('.lieu-carousel-slot'));
    if (!slots.length) return;

    var rotation = 0;
    var dragging = false;
    var dragStartX = 0;
    var dragStartRotation = 0;
    var dragDistance = 0;
    var lastInteraction = 0;
    var rafId = null;
    var mq = window.matchMedia('(max-width: 860px)');

    function applyOpacities() {
      slots.forEach(function (slot) {
        var angle = parseFloat(slot.dataset.angle || '0');
        var relative = ((angle + rotation) % 360 + 360) % 360;
        var normalized = relative > 180 ? 360 - relative : relative;
        var opacity = Math.max(0.32, 1 - normalized / 180);
        slot.style.opacity = String(opacity);
        slot.style.zIndex = String(Math.round((1 - normalized / 180) * 100));
      });
    }

    function render() {
      track.style.transform = 'rotateY(' + rotation + 'deg)';
      applyOpacities();
    }

    function tick(time) {
      if (!document.body.contains(viewport)) {
        return;
      }
      if (mq.matches) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      var idleFor = time - lastInteraction;
      if (!dragging && idleFor > 900) {
        rotation += 0.035;
        render();
      }
      rafId = requestAnimationFrame(tick);
    }

    function onPointerDown(e) {
      if (mq.matches) return;
      dragging = true;
      dragDistance = 0;
      dragStartX = e.clientX;
      dragStartRotation = rotation;
      lastInteraction = performance.now();
      viewport.classList.add('is-dragging');
      viewport.setPointerCapture && e.pointerId != null && viewport.setPointerCapture(e.pointerId);
    }

    function onPointerMove(e) {
      if (!dragging) return;
      var delta = e.clientX - dragStartX;
      dragDistance = Math.max(dragDistance, Math.abs(delta));
      rotation = dragStartRotation - delta * 0.35;
      lastInteraction = performance.now();
      render();
    }

    function onPointerUp() {
      if (!dragging) return;
      dragging = false;
      lastInteraction = performance.now();
      viewport.classList.remove('is-dragging');
    }

    function onCardClick(e) {
      if (dragDistance > 6) {
        e.preventDefault();
      }
    }

    function onEnter() {
      lastInteraction = performance.now();
      viewport.classList.add('is-paused');
    }

    function onLeave() {
      lastInteraction = performance.now();
      viewport.classList.remove('is-paused');
    }

    viewport.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    viewport.addEventListener('mouseenter', onEnter);
    viewport.addEventListener('mouseleave', onLeave);
    slots.forEach(function (slot) {
      var link = slot.querySelector('a');
      if (link) link.addEventListener('click', onCardClick);
    });

    render();
    rafId = requestAnimationFrame(tick);

    viewport._carouselCleanup = function () {
      cancelAnimationFrame(rafId);
      viewport.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      viewport.removeEventListener('mouseenter', onEnter);
      viewport.removeEventListener('mouseleave', onLeave);
    };
  }

  function applyFilterVisibility() {
    var track = document.getElementById('lieu-carousel-track');
    if (!track) return;
    var slots = Array.from(track.querySelectorAll('.lieu-carousel-slot'));
    slots.forEach(function (slot) {
      var card = slot.querySelector('.lieu-card');
      slot.classList.toggle('is-filtered-out', !!(card && card.hidden));
    });
  }

  document.addEventListener('astro:page-load', function () {
    initCarousel();
    var search = document.getElementById('lieu-search');
    var arrFilter = document.getElementById('lieu-arr-filter');
    if (search) search.addEventListener('input', applyFilterVisibility);
    if (arrFilter) arrFilter.addEventListener('change', applyFilterVisibility);
    applyFilterVisibility();
  });
})();
