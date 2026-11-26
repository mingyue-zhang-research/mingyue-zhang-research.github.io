/* Draws the trip cards from window.TRIPS (assets/js/travel-data.js). */
(function () {
  "use strict";

  function cards(trips) {
    var grid = document.getElementById("trip-grid");
    if (!grid) return;
    grid.innerHTML = trips.map(function (t) {
      var img = t.photo ? '<img src="' + t.photo + '" alt="' + t.place + '" loading="lazy">' : "";
      /* No Conference / Workshop label (user, 11-26): short name and year on one line, the full name below. */
      var short = t.short ? '<p class="trip-short">' + t.short + "</p>" : "";
      var note = t.note ? '<p class="trip-note" style="color:var(--muted);margin-top:4px">' + t.note + "</p>" : "";
      return '<article class="trip">' + img + '<div class="trip-body">' +
        '<p class="trip-when">' + t.when + "</p>" +
        '<h3 class="trip-place">' + t.place + "</h3>" +
        short + '<p class="trip-note">' + t.title + "</p>" + note + "</div></article>";
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    cards(window.TRIPS || []);
  });
})();
