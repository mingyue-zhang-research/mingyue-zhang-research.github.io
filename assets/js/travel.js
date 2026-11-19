/* Draws the trip cards from window.TRIPS (assets/js/travel-data.js). */
(function () {
  "use strict";

  function cards(trips) {
    var grid = document.getElementById("trip-grid");
    if (!grid) return;
    grid.innerHTML = trips.map(function (t) {
      var img = t.photo ? '<img src="' + t.photo + '" alt="' + t.place + '" loading="lazy">' : "";
      var label = { personal: "Personal", workshop: "Workshop" }[t.type] || "Conference";
      var tag = '<span class="tag ' + (t.type === "personal" ? "tag-award" : "tag-talk") + '">' + label + "</span>";
      var note = t.note ? '<p class="trip-note" style="color:var(--muted);margin-top:4px">' + t.note + "</p>" : "";
      return '<article class="trip">' + img + '<div class="trip-body">' +
        '<p class="trip-when">' + t.when + "</p>" +
        '<h3 class="trip-place">' + t.place + "</h3>" +
        '<p class="trip-note">' + tag + t.title + "</p>" + note + "</div></article>";
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    cards(window.TRIPS || []);
  });
})();
