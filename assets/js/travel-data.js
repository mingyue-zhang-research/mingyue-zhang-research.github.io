/* ==========================================================================
   TRAVEL: edit this one list. Each entry becomes a card on the Travel page.
   Trips are conferences, workshops and talks only (user, 2026-11-26).

   Fields
     place  "City, State" or "City, Country"
     when   text shown on the card, e.g. "Oct 2026"
     short  first line, the short name and year, e.g. "IUS 2026" (bold)
     title  second line, the full name, e.g. "IEEE International Ultrasonics Symposium"
     note   optional extra line
     photo  optional, e.g. "assets/img/travel/raleigh.jpg" (adds a photo to the card)
   (A "type" field is kept for reference only; the card no longer shows a Conference / Workshop label.)
   ========================================================================== */
window.TRIPS = [
  { place: "Cambridge, MA", when: "Oct 2026", type: "workshop",
    short: "MIT CEE Rising Star",
    title: "MIT Rising Stars in Civil and Environmental Engineering Workshop" },
  { place: "Raleigh, NC", when: "Oct 2026", type: "conference",
    short: "IUS 2026",
    title: "IEEE International Ultrasonics Symposium" },
  { place: "Madison, WI", when: "Sep 2026", type: "conference",
    short: "ASC 2026",
    title: "American Society for Composites 41st Annual Technical Conference" },
  { place: "Salt Lake City, UT", when: "Jul 2026", type: "conference",
    short: "ASNT Research Symposium 2026",
    title: "American Society for Nondestructive Testing Research Symposium" },
  { place: "Long Beach, CA", when: "Jun 2026", type: "conference",
    short: "SSDM 2026",
    title: "ASME Aerospace Structures, Structural Dynamics, and Materials Conference" },
  { place: "Stanford, CA", when: "Sep 2025", type: "conference",
    short: "IWSHM 2025",
    title: "International Workshop on Structural Health Monitoring" },
  /* Two San Diego conferences, one card each (user, 11-23; was one combined card) */
  { place: "San Diego, CA", when: "Oct 2024", type: "conference",
    short: "ASC 2024",
    title: "American Society for Composites 39th Annual Technical Conference" },
  { place: "San Diego, CA", when: "Jun 2023", type: "conference",
    short: "SSDM 2023",
    title: "ASME Aerospace Structures, Structural Dynamics, and Materials Conference" }
];
