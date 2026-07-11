/**
 * Single source of truth for founder credentials shown on About and
 * Portfolio (EN + ZH). Update here — never inline in pages.
 */

export interface Publication {
  title: string;
  venue: string;
  venueZh?: string;
}

/** Newest first. */
export const publications: Publication[] = [
  {
    title:
      'A Multi-Protocol Adaptive Microtuning Architecture: Bridging MTS, MPE, and MIDI 2.0 for Struck-String Just Intonation',
    venue: 'Sound and Music Computing Conference (SMC 2026) — 2026',
    venueZh: '声音与音乐计算会议 (SMC 2026) — 2026年',
  },
  {
    title:
      'A Multi-Modal Adaptive Microtuning Architecture: Bridging MTS, MPE, and MIDI 2.0 for Real-Time Just Intonation in Ubiquitous Music',
    venue: 'GIM 2026 — International Graduate Residency in Ubiquitous Music — 2026',
    venueZh: 'GIM 2026 — 泛在音乐国际研究生驻留项目 — 2026年',
  },
  {
    title:
      'A Multi-Modal Adaptive Microtuning Architecture for Real-Time Just Intonation on the Web',
    venue: '3rd Symposium on Digital Art in Ireland, UCC & Sample-Studios — April 2026',
    venueZh: '第三届爱尔兰数字艺术研讨会，UCC & Sample-Studios — 2026年4月',
  },
  {
    title:
      'MIDI Adaptive Tuning Strategies by Means of AI-Based Struck-String Interaction in Ubimus',
    venue: 'Ubimus Journal — August 2025',
    venueZh: 'Ubimus期刊 — 2025年8月',
  },
  {
    title: 'Just Intonation and Inharmonicity in Struck-String Interaction',
    venue: 'Ubimus Journal — October 2024',
    venueZh: 'Ubimus期刊 — 2024年10月',
  },
];

/** Professional certificates (multi-course programmes). */
export const certifications: string[] = [
  'IBM Data Science',
  'IBM AI Developer',
  'IBM Machine Learning',
  'IBM AI Engineering',
  'IBM GenAI Engineering',
  'IBM RAG & Agentic AI',
  'IBM AI Product Manager',
  'IBM Deep Learning: PyTorch, Keras & TensorFlow',
  'IBM Data Warehouse',
  'IBM DevOps & Software Eng',
  'IBM Hybrid Cloud Architect',
  'AWS Cloud Solutions Architect',
  'AWS GenAI with Bedrock',
  'AWS GenAI Applications',
  'GCP Cloud Engineer',
];

/** University & vendor specialisations. */
export const specialisations: string[] = [
  'AWS Solutions Architect Pro — Exam Prep (SAP-C02)',
  'Deep Learning Engineering',
  'GenAI for Growth Marketing',
  'LLMOps (Duke)',
  'MLOps (Duke)',
  'Management Consulting (Emory)',
  'Digital Signal Processing (EPFL)',
  'Finance & Quant Modeling (UPenn)',
  'Financial Engineering (Columbia)',
  'Mathematics for ML (Imperial College)',
  'Audio Signal Processing (Stanford)',
];

/** Headline numbers derived from the lists above. */
export const stats = {
  credentials: `${Math.floor((certifications.length + specialisations.length) / 5) * 5}+`,
  publicationCount: String(publications.length),
};
