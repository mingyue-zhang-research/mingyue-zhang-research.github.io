/* ==========================================================================
   NEWS: edit this one list. Newest first.
   The News page shows every item. The Home page shows the items marked home: true.

   Fields
     date   "YYYY-MM" (shows as "Oct 2026")
     label  optional, overrides the date text
     tag    Award | Talk | Paper | Teaching   (sets the icon and the headline color)
     title  short headline, e.g. "ASC PhD Scholarship, 2026–2027"
     where  optional small gray line under the headline (who gives the honor, place).
            Used for awards only (user, 2026-11-20): talks, papers and teaching have no venue line.
     text   optional detail line(s), HTML allowed (links: <a href="...">...</a>);
            use a list ["line 1", "line 2"] for several lines.
            For a talk that has a paper, write the link as <a class="paper" href="...">
            and a small page icon is added in front of the title automatically.
     home   true to also show the item on the Home page

   Month sources: award notices in PhD_Work\Awards_Honors, the 2026 symposium
   book of abstracts (Nov 6, 2026), and the Ultrasonics paper (online Nov 25, 2025).
   ========================================================================== */
window.NEWS = [
  {
    date: "2026-11", tag: "Paper", home: true,
    title: "Final report delivered to the Federal Railroad Administration",
    text: "<a href=\"publications.html#fra-final\">Towards Rail Inspection at Track Speed</a>."
  },
  {
    date: "2026-11", tag: "Award", home: true,
    title: "<a href=\"https://www.linkedin.com/posts/mingyue-zhang-research_im-delighted-to-share-that-i-received-the-activity-7524720454859796480-xIyo/\">First Place Department Poster Award</a>",
    where: "Engineering Graduate Research Symposium, San Diego State University"
  },
  {
    date: "2026-10", tag: "Award", home: true,
    title: "<a href=\"https://cee.mit.edu/community/rising-stars-workshop/\">MIT CEE Rising Star</a>",
    where: "Massachusetts Institute of Technology, Cambridge, MA",
    text: "One of 16 recipients worldwide."
  },
  {
    date: "2026-10", tag: "Talk", home: true,
    title: "Talk at IEEE IUS 2026",
    text: "<i>&ldquo;Defect-Structure Effects in Ultrasonic Guided Waves Coupling to Local Resonances.&rdquo;</i>"
  },
  {
    date: "2026-09", tag: "Talk", home: true,
    title: "Talk at ASC 2026",
    text: "<a class=\"paper\" href=\"publications.html#asc2026\"><i>&ldquo;Comparative Study of Single Damage Modes in Composite Panels via Ultrasonic Guided Waves: Global&ndash;Local Modeling and Experiments.&rdquo;</i></a>"
  },
  {
    date: "2026-08", tag: "Award", home: true,
    title: "<a href=\"https://www.asc-composites.org/phd-research-scholarships\">ASC PhD Scholarship, 2026&ndash;2027</a>",
    where: "American Society for Composites",
    text: "One of 3 recipients nationwide."
  },
  {
    date: "2026-08", tag: "Award", home: true,
    title: "<a href=\"https://www.asc-composites.org/4%20minute\">Winner, Doctoral Research Impact Competition</a>",
    where: "American Society for Composites"
  },
  {
    date: "2026-07", tag: "Talk", home: true,
    title: "Talk at the ASNT Research Symposium 2026",
    text: "<a class=\"paper\" href=\"publications.html#asnt2026\"><i>&ldquo;Local Defect Resonance in Ultrasonic Guided Waves: Mechanism, Modeling, and Experimental Validation for Remote NDE of Damages in Plates.&rdquo;</i></a>"
  },
  {
    date: "2026-06", tag: "Talk",
    title: "Co-authored talk at ASME SSDM 2026",
    text: [
      "<i>&ldquo;Local Defect Resonance in Ultrasonic Guided Wave Scattering: Numerical and Experimental Investigation.&rdquo;</i>",
      "Presented by Prof. Margherita Capriotti."
    ]
  },
  {
    date: "2026-04", tag: "Award", home: true,
    title: "<a href=\"https://today.ucsd.edu/story/mri-and-augmented-reality-for-better-spinal-surgery-wins-at-research-expo-2026\">Best Department Poster</a>",
    where: "44th Annual Research Expo, UC San Diego"
  },
  {
    date: "2025-11", tag: "Paper", home: true,
    title: "Paper published in <i>Ultrasonics</i>",
    text: "<a href=\"https://doi.org/10.1016/j.ultras.2025.107912\">On the Existence of Local Defect Resonance in Ultrasonic Guided Waves Interaction with Horizontal Defects in Plates</a>."
  },
  {
    date: "2025-09", tag: "Talk",
    title: "Talk at IWSHM 2025",
    text: "<a class=\"paper\" href=\"https://doi.org/10.12783/shm2025/37432\"><i>&ldquo;Time-Frequency Analysis on Numerical and Experimental Ultrasonic Guided Wave Scattering for Quantitative Damage Characterization in Plates.&rdquo;</i></a>"
  },
  {
    date: "2025-08", tag: "Teaching",
    title: "Instructor of Record, AE 200 Statics"
  },
  {
    date: "2025-06", tag: "Award", home: true,
    title: "<a href=\"https://foundation.asnt.org/funding/ndt-fellowships\">ASNT Foundation Fellowship Award, 2025&ndash;2026</a>",
    where: "American Society for Nondestructive Testing",
    text: "One of 5 recipients nationwide."
  },
  {
    date: "2024-10", tag: "Talk",
    title: "Talk at ASC 2024",
    text: "<a class=\"paper\" href=\"https://doi.org/10.1007/978-3-032-05212-4_9\"><i>&ldquo;Time-Frequency Analysis for Interlaminar Defect Characterization in Composite Plates through Ultrasonic Guided Waves.&rdquo;</i></a>"
  },
  {
    date: "2024-10", tag: "Talk",
    title: "Co-authored talk at ASC 2024",
    text: [
      "<i>&ldquo;Quantitative Analysis of Ultrasonic Guided Wave Interactions with Single-Mode Damage in Composite Laminates.&rdquo;</i>",
      "Presented by Janelle Dela Cueva."
    ]
  },
  {
    date: "2024-08", tag: "Paper",
    title: "Paper published in <i>ASME JNDE</i>",
    text: "<a href=\"https://doi.org/10.1115/1.4065152\">Ultrasonic Guided Wave Scattering Spectra by Hybrid Global&ndash;Local Modeling for Nondestructive Evaluation in Composites with Varying Defect Features</a>."
  },
  {
    date: "2023-04", tag: "Paper",
    title: "Paper published in the <i>Journal of Vibration and Control</i>",
    text: "<a href=\"https://doi.org/10.1177/10775463231168926\">The Role of Evanescent Modes in Global&ndash;Local Analysis of Ultrasonic Guided Waves in Plates with Varying Local Zone&ndash;Scatterer Relations</a>."
  }
];
