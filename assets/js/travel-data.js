/* ==========================================================================
   TRAVEL: edit this one list. Each entry becomes a card on the Travel page.

   Fields
     place  "City, State" or "City, Country"
     when   text shown on the card, e.g. "Oct 2026"
     type   "conference", "workshop" or "personal" (sets the small label)
     title  what the trip was: full conference name, then the short name and year in parentheses, in bold,
            e.g. "IEEE International Ultrasonics Symposium (<strong>IUS 2026</strong>)" (user, 11-23)
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
    title: "IEEE International Ultrasonics Symposium (<strong>IUS 2026</strong>)" },
  { place: "Madison, WI", when: "Sep 2026", type: "conference",
    title: "American Society for Composites 41st Annual Technical Conference (<strong>ASC 2026</strong>)" },
  { place: "Salt Lake City, UT", when: "Jul 2026", type: "conference",
    title: "American Society for Nondestructive Testing (<strong>ASNT Research Symposium 2026</strong>)" },
  { place: "Long Beach, CA", when: "Jun 2026", type: "conference",
    title: "ASME Aerospace Structures, Structural Dynamics, and Materials Conference (<strong>SSDM 2026</strong>)" },
  { place: "Stanford, CA", when: "Sep 2025", type: "conference",
    title: "International Workshop on Structural Health Monitoring (<strong>IWSHM 2025</strong>)" },
  /* Two San Diego conferences, one card each (user, 11-23; was one combined card) */
  { place: "San Diego, CA", when: "Oct 2024", type: "conference",
    title: "American Society for Composites 39th Annual Technical Conference (<strong>ASC 2024</strong>)" },
  { place: "San Diego, CA", when: "Jun 2023", type: "conference",
    title: "ASME Aerospace Structures, Structural Dynamics, and Materials Conference (<strong>SSDM 2023</strong>)" }
];
