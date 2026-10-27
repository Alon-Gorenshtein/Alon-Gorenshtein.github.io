export const projectDetails = [
  {
    slug: "inspire",
    title: "INSPIRE: AI agents for nerve conduction studies and EMG",
    shortName: "INSPIRE",
    summary: "Alon Gorenshtein and collaborators developed INSPIRE, an agent-guided research system for interpreting and reporting nerve conduction studies and electromyography.",
    intro: "INSPIRE is a multi-agent AI framework developed by Alon Gorenshtein and colleagues to support interpretation and reporting of neuromuscular electrodiagnostic studies. It brings clinical context and electrophysiology information into a structured workflow for nerve conduction studies and EMG.",
    question: "How can AI agents help electrophysiologists interpret electrodiagnostic findings and produce consistent reports?",
    methods: ["The 2025 Clinical Neurophysiology paper describes a system that combines clinical information, electrophysiological data, and specialized agents to generate and evaluate interpretations. The development study compared the framework with a general-purpose language model.", "A separate randomized trial evaluated physician reporting with and without AI assistance in 200 patients. The combined approach did not significantly improve report quality, and feedback identified usability and workload challenges. Together, the studies show why clinical workflow and human evaluation matter alongside model performance."],
    role: "Alon Gorenshtein is first author of both the INSPIRE paper and the randomized trial. INSPIRE was developed with Moran Sorka, Mohamed Khateb, Dvir Aran, and Shahar Shelly.",
    limitation: "INSPIRE is research in clinical decision support. The published studies should be consulted for their methods, results, and limitations; AI-generated reports require clinical oversight.",
    links: [{label:"INSPIRE paper in Clinical Neurophysiology",url:"https://doi.org/10.1016/j.clinph.2025.2110792"},{label:"Randomized trial in Journal of Neurology",url:"https://doi.org/10.1007/s00415-025-13261-3"},{label:"Research in clinical neurophysiology",url:"/research/clinical-neurophysiology/"}]
  },
  {
    slug: "literas",
    title: "LITERAS: biomedical literature review and citation retrieval agents",
    shortName: "LITERAS",
    summary: "LITERAS is a multi-agent biomedical literature retrieval and review framework developed by Alon Gorenshtein and colleagues using PubMed-based search and citation validation.",
    intro: "LITERAS (Literature Review and Citation Retrieval Agents) is a research framework for finding biomedical publications and drafting literature reviews. Alon Gorenshtein and collaborators designed it to address an important problem in generative AI: references that are inaccurate, irrelevant, or fabricated.",
    question: "Can specialized AI agents retrieve biomedical evidence and generate literature reviews with more reliable references?",
    methods: ["The system divides the workflow among agents that plan a search, retrieve articles through the PubMed API, assess references, review the output, and synthesize a draft. Its public repository documents the architecture and setup.", "The 2025 paper in Computers in Biology and Medicine evaluates citation retrieval and literature-review generation. Reported performance applies to the study's particular questions, systems, and evaluation methods; reference accuracy is not a guarantee that every claim in a generated review is supported."],
    role: "Alon Gorenshtein is first author, with Kamel Shihada, Moran Sorka, Dvir Aran, and Shahar Shelly.",
    limitation: "LITERAS is a research tool. Researchers should verify the underlying articles, citations, and synthesized claims before using its output.",
    links: [{label:"Read the peer-reviewed LITERAS paper",url:"https://doi.org/10.1016/j.compbiomed.2025.110363"},{label:"Explore the LITERAS GitHub repository",url:"https://github.com/Alon-Gorenshtein/LITERAS"},{label:"LITERAS citation",url:"/publications/#literas"}]
  },
  {
    slug: "litbench",
    title: "LitBench: benchmarking evidence synthesis in epilepsy",
    shortName: "LitBench",
    summary: "LitBench is a research benchmark by Alon Gorenshtein and colleagues for retrieval-grounded, multi-paper evidence synthesis in epilepsy.",
    intro: "LitBench evaluates whether AI systems can find the right papers, identify supporting passages, combine evidence across studies, and recognize when the evidence needed to answer is absent. The benchmark focuses on epilepsy research.",
    question: "Can an AI research assistant find and synthesize the right evidence across a challenging medical literature corpus?",
    methods: ["The medRxiv preprint describes 1,980 open-access papers and 9,472 human-reviewed facts, with single-paper and two-paper questions and tests where the supporting source is deliberately removed.", "The authors report that no system was reliable across every tested dimension. More competing papers and cross-paper synthesis created challenges, and systems differed in their willingness to abstain when evidence was missing."],
    role: "Alon Gorenshtein is first author, with Tianyu Zhang, M. Brandon Westover, and Daniel M. Goldenholz. The code is maintained in the Goldenholz Lab repository.",
    limitation: "The linked 2026 manuscript is a preprint and has not been peer reviewed. Results reflect the models and conditions described in that manuscript.",
    links: [{label:"Read the LitBench preprint",url:"https://doi.org/10.64898/2026.09.17.26363288"},{label:"Explore the LitBench repository",url:"https://github.com/GoldenholzLab/LitBench"},{label:"LitBench citation",url:"/publications/#litbench"}]
  },
  {
    slug: "neuro-copilot",
    title: "Neuro-Copilot: AI for neurological decisions in the emergency department",
    shortName: "Neuro-Copilot",
    summary: "Neuro-Copilot is a clinical AI research framework studied by Alon Gorenshtein and colleagues for neurological decision support in the emergency department.",
    intro: "Neuro-Copilot is a research approach to supporting neurological care in the emergency department, bringing language models and predictive methods to clinical documentation and decision support.",
    question: "Can an AI-assisted approach help interpret clinical information and support decisions for patients presenting with neurological concerns?",
    methods: ["In a 2025 Journal of Clinical Medicine paper, Gorenshtein and colleagues studied an AI-based clinical decision-making tool for neurologists in the emergency department using a retrospective dataset.", "The study investigated predictions related to admission and agreement with expert decisions. Its authors describe the need for additional real-world and prospective evaluation of combined clinician–AI performance."],
    role: "Alon Gorenshtein is first author. The publication credits Gorenshtein and Shahar Shelly with conceptualization and methodology alongside a multidisciplinary research team.",
    limitation: "This was a retrospective research study, not evidence that the system independently provides safe clinical care. Consult the publication for study design and limitations.",
    links: [{label:"Read the Journal of Clinical Medicine paper",url:"https://doi.org/10.3390/jcm14176333"},{label:"Explore related clinical AI research",url:"/research/clinical-ai-safety/"}]
  }
];
