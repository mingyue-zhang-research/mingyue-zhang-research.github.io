/* ==========================================================================
   TRAVEL: edit this one list. Each entry becomes a card on the Travel page.

   Fields
     place  "City, State" or "City, Country"
     when   text shown on the card, e.g. "Oct 2026"
     type   "conference", "workshop" or "personal" (sets the small label)
     title  what the trip was
     note   optional extra line
     photo  optional, e.g. "assets/img/travel/raleigh.jpg" (adds a photo to the card)

   TODO(Mingyue): add personal trips (and photos) in the same format, e.g.
   { place: "Banff, Canada", when: "Dec 2025", type: "personal",
     title: "Ski trip", photo: "assets/img/travel/banff.jpg" },
   ========================================================================== */
window.TRIPS = [
  { place: "Cambridge, MA", when: "Oct 2026", type: "workshop",
    title: "MIT Rising Stars in Civil and Environmental Engineering Workshop" },
  { place: "Raleigh, NC", when: "Oct 2026", type: "conference",
    title: "IEEE International Ultrasonics Symposium (IUS 2026)" },
  { place: "Madison, WI", when: "Sep 2026", type: "conference",
    title: "41st ASC Annual Technical Conference" },
  { place: "Salt Lake City, UT", when: "Jul 2026", type: "conference",
    title: "ASNT Research Symposium 2026" },
  { place: "Long Beach, CA", when: "Jun 2026", type: "conference",
    title: "ASME SSDM 2026" },
  { place: "Stanford, CA", when: "Sep 2025", type: "conference",
    title: "International Workshop on Structural Health Monitoring (IWSHM 2025)" },
  /* Two San Diego conferences, one card each (user, 11-23; was one combined card) */
  { place: "San Diego, CA", when: "Oct 2024", type: "conference",
    title: "39th ASC Annual Technical Conference", note: "My home base, UC San Diego and San Diego State University" },
  { place: "San Diego, CA", when: "Jun 2023", type: "conference",
    title: "ASME SSDM 2023" }
];
