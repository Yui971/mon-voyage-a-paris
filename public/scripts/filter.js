document.addEventListener('astro:page-load', () => {
  const grid = document.getElementById('lieu-grid');
  const search = document.getElementById('lieu-search');
  const arrFilter = document.getElementById('lieu-arr-filter');
  const empty = document.getElementById('lieu-empty');
  if (!grid || !search || !arrFilter) return;

  const cards = Array.from(grid.querySelectorAll('.lieu-card'));

  function applyFilter() {
    const term = search.value.trim().toLowerCase();
    const arr = arrFilter.value;
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesTerm = !term || card.dataset.search.includes(term);
      const matchesArr = !arr || card.dataset.arr === arr;
      const show = matchesTerm && matchesArr;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  }

  search.value = '';
  arrFilter.value = '';
  search.addEventListener('input', applyFilter);
  arrFilter.addEventListener('change', applyFilter);
  applyFilter();
});
