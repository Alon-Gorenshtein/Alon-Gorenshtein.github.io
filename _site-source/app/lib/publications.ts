import records from "./publications.json";
import { PERSON_ID, SITE_URL } from "./identity";
export const publications = records;
export function articleSchema(p: typeof records[number]) {
  return {
    "@type": "ScholarlyArticle", "@id": `https://doi.org/${p.doi}`, url: `https://doi.org/${p.doi}`,
    headline: p.title, identifier: p.doi, datePublished: p.date, creativeWorkStatus: p.status,
    author: p.authors.map(a => ({ "@type": "Person", name: `${a.given} ${a.family}`, ...(a.given === "Alon" && a.family === "Gorenshtein" ? { "@id": PERSON_ID, url: `${SITE_URL}/`, sameAs: "https://orcid.org/0009-0000-7542-8608" } : {}) })),
    ...(p.status === "Preprint" ? { publisher: { "@type": "Organization", name: p.journal } } : { isPartOf: { "@type": "Periodical", name: p.journal } }),
  };
}
