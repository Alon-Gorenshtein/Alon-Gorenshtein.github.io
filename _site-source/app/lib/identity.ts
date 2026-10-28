export const SITE_URL = "https://alon-gorenshtein.github.io";
export const PERSON_ID = `${SITE_URL}/#person`;
export const biography = "Alon Gorenshtein, MD, is a physician-scientist and AI engineer affiliated with Beth Israel Deaconess Medical Center and Harvard Medical School. He is Head of AI Engineering at BRIDGE GenAI Lab and a postdoctoral fellow in the BIDMC Epilepsy + Data Science Lab. His research spans clinical AI safety and evaluation, neurophysiology, brain–computer interfaces, and neurocritical care.";
export const person = {
  "@type": "Person", "@id": PERSON_ID,
  name: "Alon Gorenshtein", alternateName: "אלון גורנשטיין", givenName: "Alon", familyName: "Gorenshtein", honorificSuffix: "MD",
  url: `${SITE_URL}/`, image: `${SITE_URL}/alon-portrait.png`, description: biography,
  jobTitle: "Physician-scientist and AI engineer",
  affiliation: [
    { "@type": "Organization", name: "Beth Israel Deaconess Medical Center", url: "https://www.bidmc.org/" },
    { "@type": "Organization", name: "Harvard Medical School", url: "https://hms.harvard.edu/" },
    { "@type": "Organization", name: "BRIDGE GenAI Lab", url: "https://bridgegenai.org/" }
  ],
  knowsAbout: ["Clinical artificial intelligence", "AI safety and alignment", "Clinical neurophysiology", "Brain–computer interfaces", "Neurocritical care", "Biomedical literature retrieval", "Electromyography", "AI agents in medicine"],
  sameAs: [
    "https://orcid.org/0009-0000-7542-8608",
    "https://www.linkedin.com/in/alon-gorenshtein/",
    "https://github.com/Alon-Gorenshtein",
    "https://scholar.google.com/citations?user=jwe8TyoAAAAJ",
    "https://connects.catalyst.harvard.edu/Profiles/display/Person/227389"
  ]
};
export function jsonLd(value: unknown) { return JSON.stringify(value).replace(/</g, "\\u003c"); }
