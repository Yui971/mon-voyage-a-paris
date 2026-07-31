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

    // Native image/link drag would otherwise hijack the drag-to-rotate
    // gesture; disabling it here (rather than via preventDefault on
    // pointerdown, which also silently kills the synthesized click)
    // keeps normal link clicks working.
    track.querySelectorAll('img').forEach(function (img) {
      img.draggable = false;
    });

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
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      dragDistance = 0;
      dragStartX = e.clientX;
      dragStartRotation = rotation;
      lastInteraction = performance.now();
      viewport.classList.add('is-dragging');
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
      if (dragDistance > 10) {
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

    // Mobile fallback is a plain horizontal scroller; track which card is
    // centered so the dot progress indicator (and the prev/next arrows)
    // underneath can follow along.
    var progress = document.getElementById('lieu-carousel-progress');
    var dots = progress ? Array.from(progress.querySelectorAll('span')) : [];
    var progressObserver = null;
    var currentIndex = 0;

    if (dots.length === slots.length) {
      progressObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var idx = slots.indexOf(entry.target);
            if (idx === -1) return;
            currentIndex = idx;
            dots.forEach(function (dot, i) {
              dot.classList.toggle('is-active', i === idx);
            });
          });
        },
        { root: viewport, threshold: 0.6 }
      );
      slots.forEach(function (slot) {
        progressObserver.observe(slot);
      });
      dots[0].classList.add('is-active');
    }

    var prevBtn = document.getElementById('lieu-carousel-prev');
    var nextBtn = document.getElementById('lieu-carousel-next');

    function goToSlide(index) {
      var clamped = Math.max(0, Math.min(slots.length - 1, index));
      slots[clamped].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    function onPrevClick() {
      goToSlide(currentIndex - 1);
    }

    function onNextClick() {
      goToSlide(currentIndex + 1);
    }

    if (prevBtn) prevBtn.addEventListener('click', onPrevClick);
    if (nextBtn) nextBtn.addEventListener('click', onNextClick);

    viewport._carouselCleanup = function () {
      cancelAnimationFrame(rafId);
      viewport.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      viewport.removeEventListener('mouseenter', onEnter);
      viewport.removeEventListener('mouseleave', onLeave);
      if (progressObserver) progressObserver.disconnect();
      if (prevBtn) prevBtn.removeEventListener('click', onPrevClick);
      if (nextBtn) nextBtn.removeEventListener('click', onNextClick);
    };
  }

  document.addEventListener('astro:page-load', initCarousel);
})();
