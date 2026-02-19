// ========================================
// PROJECT DATA (EDIT THIS FILE)
// ========================================
function seqImages(dir, count, label, ext = "jpg") {
  return Array.from({ length: count }, (_, i) => ({
    src: `${dir}/${i + 1}.${ext}`,
    caption: `${label} — ${i + 1}`
  }));
}
window.PROJECTS = [
  {
    id: "p1",
    title: "Interior Execution – Tehransar",
    category: "interior",
    year: "2023–2024",
    role: "Site Execution + Coordination",
    tools: "On-site Execution",
    short: "Interior execution focused on precise detailing, large-format slab installation, and coordinated MEP integration.",
    description:
      "Execution of suspended slab steel substructure, installation of large-format slabs, electrical wiring, and installation of suspended cabinetry. The project required close coordination between structural and architectural detailing to achieve precise execution.",
    beforeImages: [
      { src: "../assets/img/p1-before-1.jpg", caption: "Before — existing condition" }
    ],
    afterImages: [
      { src: "../assets/img/p1-after-1.jpg", caption: "After — executed interior result" }
    ],
    finalImages: [],
    videoEmbed: "",
    videoFile: ""
  },
  {
  id: "p2",
  title: "Luxury Villa Renovation – Shahrak-e Gharb",
  category: "residential",
  year: "2024",
  role: "Execution + Site Supervision + Coordination",
  tools: "On-site Execution, Coordination, Detailing",
  short: "Complete renovation and modernization of a 570 sqm villa on a 1,000 sqm land.",
  description: "…",

  beforeImages: seqImages("../assets/projects/p2/before", 9, "Before", "jpeg"),
  afterImages:  seqImages("../assets/projects/p2/after",  2, "After"),
  finalImages:  seqImages("../assets/projects/p2/final",  2, "Final"),

  videoEmbed: "",
  videoFile: "../assets/projects/p2/video/walkthrough.mp4"
},


  {
    id: "p3",
    title: "Minimal Interior Renovation",
    category: "interior",
    year: "2023",
    role: "Concept + Drawings",
    tools: "AutoCAD, SketchUp, Enscape",
    short: "A minimal renovation focusing on storage, lighting, and better spatial flow.",
    description:
      "The design reorganizes key functions to remove bottlenecks and improve flow. A consistent material palette and integrated storage create calm, while layered lighting enhances usability at different times of day.",
    beforeImages: [
      { src: "../assets/img/p3-before-1.jpg", caption: "Before — existing living area (placeholder)" }
    ],
    afterImages: [
      { src: "../assets/img/p3-after-1.jpg", caption: "After — proposed living area (placeholder)" }
    ],
    finalImages: [
      { src: "../assets/img/p3-final-1.jpg", caption: "Final — lighting scene (placeholder)" }
    ],
    videoEmbed: "",
    videoFile: ""
  },
  {
    id: "p4",
    title: "Museum Concept",
    category: "concept",
    year: "2025",
    role: "Concept + Diagrams",
    tools: "Rhino, Illustrator",
    short: "A museum concept shaped by a promenade sequence and controlled natural light.",
    description:
      "This concept is driven by a promenade route that stages exhibits as a sequence of compressions and releases. Skylight strategies deliver diffuse light while protecting sensitive exhibits, supported by a simple structural logic.",
    beforeImages: [
      { src: "../assets/img/p4-before-1.jpg", caption: "Before — context study (placeholder)" }
    ],
    afterImages: [
      { src: "../assets/img/p4-after-1.jpg", caption: "After — massing proposal (placeholder)" }
    ],
    finalImages: [
      { src: "../assets/img/p4-final-1.jpg", caption: "Final — section concept (placeholder)" }
    ],
    videoEmbed: "",
    videoFile: ""
  }
];
