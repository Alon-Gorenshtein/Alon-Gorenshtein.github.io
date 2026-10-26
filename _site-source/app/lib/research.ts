export const researchPages = [
  {
    "slug": "clinical-ai-safety",
    "title": "Clinical AI safety and evaluation",
    "summary": "How clinical AI is tested, where benchmark results mislead, and what structured neurological reasoning can establish.",
    "intro": "Alon Gorenshtein’s work on clinical AI examines how evaluation design changes what we conclude about a model. It connects research on meaningful assessment with studies of AI agents for neurological reasoning.",
    "question": "What evidence tells us whether a clinical AI system is useful and reliable in the context where people will use it?",
    "findings": [
      "In a 2026 Nature Medicine correspondence, Gorenshtein and colleagues discuss why apparently conflicting evaluations can reflect differences in prompts, tasks, populations, and outcome definitions. The article argues for interpreting performance in its evaluation context; it is a methodological argument rather than a prospective clinical trial.",
      "A separate PLOS Digital Health study evaluated ten language models using 305 neurology board examination questions. It compared base models, retrieval augmentation, and a multi-agent reasoning framework, with additional evaluation on 155 neurological MedQA cases. The findings support further investigation of structured reasoning, while examination accuracy remains different from demonstrated benefit in patient care."
    ],
    "role": "Co-author of both publications. This page describes the published collaborative work; individual contribution statements are available in the original articles.",
    "papers": [
      {
        "title": "How to meaningfully evaluate AI in clinical medicine",
        "doi": "10.1038/s41591-026-04350-5",
        "journal": "Nature Medicine",
        "year": "2026",
        "authors": [
          "Mahmud Omar",
          "Reem Agbareia",
          "Alon Gorenshtein",
          "Ashwin Ramaswamy",
          "Ankit Sakhuja",
          "Yiftach Barash",
          "Daniel S. W. Ting",
          "Eyal Klang",
          "Girish N. Nadkarni"
        ]
      },
      {
        "title": "A multi-agent approach to neurological clinical reasoning",
        "doi": "10.1371/journal.pdig.0001106",
        "journal": "PLOS Digital Health",
        "year": "2025",
        "authors": [
          "Moran Sorka",
          "Alon Gorenshtein",
          "Dvir Aran",
          "Shahar Shelly"
        ]
      }
    ]
  },
  {
    "slug": "clinical-neurophysiology",
    "title": "AI in clinical neurophysiology",
    "summary": "INSPIRE, nerve conduction studies, EMG reporting, and the evidence from a randomized trial of physician–AI collaboration.",
    "intro": "Alon Gorenshtein’s neurophysiology research studies AI agents for electrodiagnostic interpretation and reporting. The work includes INSPIRE and a clinical trial testing how AI-generated drafts fit into physician workflows.",
    "question": "Can AI assistance improve the quality and practical usability of nerve conduction and electromyography reports?",
    "findings": [
      "The INSPIRE publication in Clinical Neurophysiology describes an agent-guided framework for interpreting and reporting nerve conduction studies and electromyography (EMG). It provides the system background for the subsequent clinical evaluation.",
      "A randomized trial in the Journal of Neurology enrolled 200 patients and compared physician-only reporting with physician–AI reporting. The combined approach did not significantly improve report quality. Physician feedback also identified problems with efficiency, ease of use, and workload reduction. These results make workflow integration and usability important research questions alongside the quality of generated text."
    ],
    "role": "First author of the INSPIRE publication and the randomized trial. The original papers provide the full author lists, methods, and contribution statements.",
    "papers": [
      {
        "title": "Agent-guided AI-powered interpretation and reporting of nerve conduction studies and EMG (INSPIRE)",
        "doi": "10.1016/j.clinph.2025.2110792",
        "journal": "Clinical Neurophysiology",
        "year": "2025",
        "authors": [
          "Alon Gorenshtein",
          "Moran Sorka",
          "Mohamed Khateb",
          "Dvir Aran",
          "Shahar Shelly"
        ]
      },
      {
        "title": "AI-Based EMG Reporting: A Randomized Controlled Trial",
        "doi": "10.1007/s00415-025-13261-3",
        "journal": "Journal of Neurology",
        "year": "2025",
        "authors": [
          "Alon Gorenshtein",
          "Yana Weisblat",
          "Mohamed Khateb",
          "Gilad Kenan",
          "Irina Tsirkin",
          "Galina Fayn",
          "Semion Geller",
          "Shahar Shelly"
        ]
      }
    ]
  },
  {
    "slug": "brain-computer-interfaces",
    "title": "Language models and brain–computer interfaces",
    "summary": "A systematic review of how language models support communication and control, and where clinical evidence is still missing.",
    "intro": "Alon Gorenshtein’s brain–computer interface research examines the role of language models in assistive communication and control. His published systematic review distinguishes proposed capabilities from results actually demonstrated in studies.",
    "question": "Where do language models enter a brain–computer interface pipeline, and what evidence supports each form of integration?",
    "findings": [
      "The review examined eleven studies using a PRISMA-based approach. It classified five ways of combining language models and BCIs: completing text, correcting decoded output, expanding intended messages, generating interfaces, and providing affective support. The analysis considered hardware, decoding, prompting, outcomes, and reporting of latency.",
      "The studies reported promising task-level results, but none enrolled people with motor impairments. Reporting of end-to-end delay and failure modes was limited. The review’s main outputs are a taxonomy and a reporting checklist; clinical benefit for the intended patient population remains an open question."
    ],
    "role": "First author of the systematic review, with Mahmud Omar, Yiftach Barash, Girish N. Nadkarni, and Eyal Klang.",
    "papers": [
      {
        "title": "Large language models integrated into brain–computer interfaces for communication and control: a systematic review",
        "doi": "10.1088/2057-1976/ae737b",
        "journal": "Biomedical Physics & Engineering Express",
        "year": "2026",
        "authors": [
          "Alon Gorenshtein",
          "Mahmud Omar",
          "Yiftach Barash",
          "Girish N. Nadkarni",
          "Eyal Klang"
        ]
      }
    ],
    "extraLink": {
      "label": "PubMed record (PMID 42202831)",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42202831/"
    }
  },
  {
    "slug": "neurocritical-care",
    "title": "Neurocritical care and consciousness",
    "summary": "A cohort study of when command-following returns after acute brain injury, how it fluctuates, and the role of sedation.",
    "intro": "Alon Gorenshtein’s neurocritical care research examines the interpretation of bedside signs of recovery after acute brain injury. The work focuses on how repeated observations change the picture offered by a single examination.",
    "question": "How soon does bedside command-following return after acute brain injury, and how stable is its first appearance?",
    "findings": [
      "The retrospective study used MIMIC-IV records from 13,900 patients with acute brain injury and repeated motor examinations. It analyzed recovery while accounting for competing events, measured repeated changes in command-following, and examined concurrent sedation. The principal findings were checked in the multicenter eICU database.",
      "Among patients who recovered command-following, the first observation was transient in 22.2%, and 62.4% crossed the threshold repeatedly. The external cohort showed similar patterns. The findings support interpreting the timing and stability of examinations in context. Because this is observational research, associations with sedation do not establish a causal effect."
    ],
    "role": "First author, with Yosef Adiniaev, Mahmud Omar, Yiftach Barash, Eyal Klang, and Oved Daniel.",
    "papers": [
      {
        "title": "The Unsteady Return of Bedside Motor Command-Following After Acute Brain Injury",
        "doi": "10.1007/s12028-026-02624-x",
        "journal": "Neurocritical Care",
        "year": "2026",
        "authors": [
          "Alon Gorenshtein",
          "Yosef Adiniaev",
          "Mahmud Omar",
          "Yiftach Barash",
          "Eyal Klang",
          "Oved Daniel"
        ]
      }
    ],
    "extraLink": {
      "label": "Institutional publication record at Mount Sinai",
      "url": "https://scholars.mssm.edu/en/publications/the-unsteady-return-of-bedside-motor-command-following-after-acut/"
    }
  }
];
