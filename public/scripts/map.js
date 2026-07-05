(function () {
  function initMap() {
    var container = document.getElementById('lieu-map');
    if (!container || typeof L === 'undefined') return;

    if (container._leafletMap) {
      container._leafletMap.remove();
      container._leafletMap = null;
    }

    var points;
    try {
      points = JSON.parse(container.dataset.points || '[]');
    } catch (e) {
      points = [];
    }
    if (!points.length) return;

    var map = L.map(container, { scrollWheelZoom: false });
    container._leafletMap = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    var bounds = [];
    var markers = {};

    points.forEach(function (point) {
      var latlng = [point.coords[0], point.coords[1]];
      bounds.push(latlng);

      var marker = L.marker(latlng).addTo(map);
      var directionsUrl =
        'https://www.google.com/maps/dir/?api=1&destination=' + point.coords[0] + ',' + point.coords[1];

      var popupHtml =
        '<div class="map-popup">' +
        '<img src="/assets/' + point.cover + '.jpg" alt="' + point.title + '" />' +
        '<h4>' + point.title + '</h4>' +
        '<p>' + point.tagline + '</p>' +
        '<a class="btn btn-small btn-gold" href="' + directionsUrl + '" target="_blank" rel="noopener">Itinéraire <span class="btn-arrow">→</span></a>' +
        '</div>';

      marker.bindPopup(popupHtml);
      markers[point.slug] = marker;
    });

    if (bounds.length) {
      map.fitBounds(bounds, { padding: [32, 32] });
    }

    var listItems = document.querySelectorAll('#lieu-map-list .map-list-item');
    listItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var slug = item.dataset.slug;
        var marker = markers[slug];
        if (!marker) return;

        listItems.forEach(function (el) {
          el.classList.remove('is-active');
        });
        item.classList.add('is-active');

        map.flyTo(marker.getLatLng(), 13, { duration: 0.75 });
        marker.openPopup();
      });
    });
  }

  document.addEventListener('astro:page-load', initMap);
})();
