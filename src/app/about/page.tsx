import { generateSeoMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generateSeoMetadata({
  title: 'About',
  description:
    'AI Engineer with experience in RAG/GraphRAG/AgenticRAG, Chatbot Development, Computer Vision, and Edge AI deployment across retail, e-commerce, manufacturing, and recruitment sectors.',
})

const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Cypher'],
  },
  {
    label: 'LLM',
    items: ['LLaMA', 'Mistral', 'Qwen', 'Whisper'],
  },
  {
    label: 'LLM / GenAI',
    items: ['RAG', 'GraphRAG', 'AgenticRAG', 'LangGraph', 'MCP', 'FastMCP', 'Hybrid Search', 'Reciprocal Rank Fusion', 'Long/Short-term Memory', 'Prompt Engineering', 'Fine-tuning'],
  },
  {
    label: 'Deep Learning',
    items: ['CNN', 'RNN', 'LSTM', 'Transformer', 'YOLO'],
  },
  {
    label: 'Computer Vision',
    items: ['Object Detection', 'OCR (PaddleOCR)', 'Image Classification', 'Face Recognition', 'Segmentation', 'Keypoint Detection', 'Pose Estimation'],
  },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'TensorFlow', 'FastAPI', 'Pybind'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'Neo4j (Graph DB)', 'Milvus', 'Pinecone', 'Minio'],
  },
  {
    label: 'Infrastructure',
    items: ['Kubernetes (K8S)', 'Triton Inference Server', 'vLLM', 'TensorRT', 'TensorRT LLM','Prometheus', 'Grafana'],
  },
  {
    label: 'Cloud / Third-party',
    items: ['AWS', 'Azure', 'Gemini', 'OpenAI'],
  },
  {
    label: 'Edge Devices',
    items: ['RKNN', 'Rockchip', 'Jetson Nano', 'Jetson Xavier NX'],
  },
  {
    label: 'Design Patterns',
    items: ['Microservices', 'Strategy', 'Factory'],
  },
  {
    label: 'Languages (Human)',
    items: ['English — Intermediate', 'Korean — Beginner'],
  },
]

const certifications = [
  { year: '2023', name: 'Machine Learning Specialization', detail: 'Coursera / DeepLearning.AI' },
  { year: '2025', name: 'Neo4j Certified Professional', detail: 'Graph Database design and Cypher query language' },
]

const blogSeries = [
  { title: 'LangGraph Series (Part 1–3)', href: '/blog/langgraph-series-part-1', desc: 'From basic agent design to Human-in-the-loop and AI advisor systems' },
  { title: 'From ML/DL to LLM Series', href: '/blog/from-ml-dl-to-llm-part-1', desc: 'A comprehensive series covering ML foundations to Large Language Models' },
  { title: 'TensorRT Deep Dive', href: '/blog/tensorrt', desc: 'Model optimization techniques for production deployment' },
  { title: 'MLOps Lifecycle', href: '/blog/mlops-lifecycle', desc: 'Designing and operating end-to-end ML systems' },
  { title: 'Attention & Transformer', href: '/blog/attention-transformer', desc: 'Deep dive into the attention mechanism and Transformer model formation' },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-5 flex items-center gap-2">
      <span className="inline-block w-4 h-px bg-blue-500 dark:bg-blue-400" />
      {children}
    </h2>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-14 pb-10 border-b border-border">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-md">
            H
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Nguyen Luong Hung</h1>
            <p className="text-muted-foreground text-sm mt-0.5">AI Engineer · Hanoi, Vietnam</p>
            <p className="text-muted-foreground text-sm">benu.aidev@gmail.com · 0904 063 064</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {[
            { label: 'Blog', href: 'https://bentech-blogs.vercel.app' },
            { label: 'Viblo', href: 'https://viblo.asia/u/isBenU' },
            { label: 'Email', href: 'mailto:benu.aidev@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg border border-border text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Objective ── */}
      <div className="mb-14">
        <SectionTitle>Objective</SectionTitle>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            With experience in Object Detection, Face Recognition, OCR, and deployment on edge devices. Recently expanded into{' '}
            <strong className="text-foreground">Chatbot Development, RAG/GraphRAG/AgenticRAG</strong>, and Graph Databases.
            Worked with clients across retail, e-commerce, manufacturing, and recruitment sectors.
          </p>
          <p>
            As a Team Leader, I lead cross-functional AI engineering teams, overseeing project planning, system architecture design, and technical execution. I mentor engineers, review technical designs, and ensure best practices in AI development, code quality, and deployment pipelines. I also collaborate closely with stakeholders and clients to translate business requirements into effective AI solutions.
          </p>
          <p>
            Skilled in designing microservices, logging/monitoring, and mentoring teams. Seeking a dynamic environment to
            contribute to innovative AI projects, while growing alongside the organization.
          </p>
          <p>
            In the future, I aspire to gain international experience and achieve higher professional goals. Collaboration and
            mutual growth are key to creating meaningful success.
          </p>
        </div>
      </div>

      {/* ── Skills ── */}
      <div className="mb-14">
        <SectionTitle>Skills</SectionTitle>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:gap-4">
              <span className="text-xs font-semibold text-muted-foreground w-40 shrink-0 pt-0.5 mb-1 sm:mb-0">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Work Experience ── */}
      <div className="mb-14">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-12">

          {/* Sun* */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-base font-semibold text-foreground">Sun*</h3>
              <span className="text-xs text-muted-foreground font-mono">04/2024 — Present</span>
            </div>
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3">AI Engineer</p>
            <BulletList items={[
              'Team Leader on projects — led scoping, estimation, and collaborated closely with clients',
              'Researched and implemented advanced AI techniques: RAG, GraphRAG, AgenticRAG',
              'Experience fine-tuning and deploying open-source LLMs (LLaMA, Mistral, Qwen) using instruction tuning and LoRA/PEFT for domain-specific AI applications.',
              'Developed and integrated chatbots (e.g., on Slack), enhancing real-time communication and automation',
              'Designed and implemented microservices architecture ensuring scalability, maintainability, and efficiency',
              'Used Kubernetes (K8S) to deploy projects to production-ready environments',
              'Built and managed databases for data storage, retrieval, and synchronization across systems',
              'Implemented logging and monitoring systems to track performance, errors, and system health',
              'Mentored new members, providing technical guidance and career support',
            ]} />
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['LangGraph', 'MCP / FastMCP', 'Cypher', 'PostgresCheckpointSaver', 'Graphity', 'FastAPI', 'Docker', 'K8S', 'Minio', 'Hybrid Search', 'Reciprocal Rank Fusion', 'Long/Short-term Memory', 'Design Pattern', 'Strategy', 'Factory'].map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* VTI Corporation */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-base font-semibold text-foreground">VTI Corporation</h3>
              <span className="text-xs text-muted-foreground font-mono">08/2021 — 04/2024</span>
            </div>
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3">AI Engineer</p>
            <BulletList items={[
              'Built, developed, and optimized AI models on edge devices',
              'Fine-tuned models on specific domains (PaddleOCR, detection models)',
              'Defined monitoring flows for model performance in production',
              'Built Python packages for C++ inference via Pybind',
              'Implemented multi-model management and deployment pipelines',
              'Shared knowledge and mentored team members',
            ]} />
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['Triton Inference Server', 'Pybind', 'RKNN', 'Rockchip', 'Jetson Nano', 'Jetson Xavier NX', 'PaddleOCR'].map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Projects ── */}
      <div className="mb-14">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-8">

          {/* Sun* projects */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">Sun* · 04/2024 — Present</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: 'Chat with Database', role: 'Team Leader', team: '7 AIE',
                  desc: 'Developed a natural language interface for querying structured databases, enabling non-technical users to retrieve insights using conversational queries.',
                  bullets: [
                    'Designed Text2SQL / Text2GraphQL pipeline using LLMs to convert natural language queries into optimized SQL queries.',
                    'Implemented schema-aware prompting and context retrieval to improve query accuracy.',
                    'Built query validation and error-correction mechanisms to reduce hallucinated SQL queries.',
                    'Integrated the system with PostgreSQL databases and internal analytics tools.',
                    'Led architecture design, task allocation, and technical mentoring for the team.',
                  ],
                },
                { 
                  name: 'E-commerce Chatbot', role: 'Team Leader', team: '5 AIE', 
                  desc: 'Developed an AI-powered chatbot for e-commerce platforms that assists users in discovering and recommending products based on their needs and preferences.' ,
                  bullets: [
                    'Designed product recommendation workflows using conversational AI.',
                    'Integrated product catalog search and semantic retrieval for better matching of user intent.',
                    'Implemented context-aware dialogue management to refine recommendations across turns.',
                    'Built a user intent classification system for product search, comparison, and purchase assistance.',
                    'Coordinated development and ensured system scalability for real-time interactions.',
                  ]
                },
                { name: 'Internal Knowledge Chatbot', role: 'Team Leader', team: '5 AIE', 
                  desc: 'Developed an enterprise knowledge chatbot that enables employees to query internal documents and knowledge bases through natural language.',
                  bullets: [
                    'Built a RAG (Retrieval-Augmented Generation) pipeline to retrieve relevant internal documents.',
                    'Implemented document ingestion pipelines supporting multiple formats (PDF, DOCX, EXCEL, PPTX).',
                    'Designed chunking and embedding strategies to improve retrieval quality.',
                    'Developed evaluation pipelines to measure response accuracy and knowledge coverage.',
                    'Led a sub-team responsible for the retrieval and indexing architecture.',
                  ] 
                },
                { name: 'Document Information Extraction', role: 'AI Engineer', team: '3 AIE', 
                  desc: 'Developed a system to automatically extract structured information from various document types such as invoices, forms, and reports.',
                  bullets: [
                    'Implemented OCR pipelines to convert scanned documents into machine-readable text.',
                    'Designed information extraction models to identify key fields such as names, dates, IDs, and financial values.',
                    'Built post-processing logic for normalization and validation of extracted data.',
                    'Supported integration with downstream business systems.',
                  ]
                },
                { name: 'Multi-type Document Translation', role: 'AI Engineer', team: '5 AIE', 
                  desc: 'Developed a document translation pipeline supporting multiple formats while preserving layout and structure.',
                  bullets: [
                    'Built preprocessing pipelines for PDF, DOCX, PPT, and HTML documents.',
                    'Implemented segmentation and alignment strategies to maintain document structure.',
                    'Integrated machine translation models for multilingual support.',
                    'Developed post-processing steps to restore original formatting and layout.',
                  ]
                },
                { name: 'Ad Image Information Extraction', role: 'AI Engineer', team: '10 members', 
                  desc: 'Extract structured information from advertising images for downstream analytics.',
                  bullets: [
                    'Implemented layout analysis to identify key sections such as brand names, promotions, and pricing.',
                    'Structured extracted data for downstream analytics and reporting systems.',
                    'Evaluated the ads image based on policy compliance and content quality metrics.',
                  ]
                },
              ].map((p) => (
                <div key={p.name} className="pl-4 border-l-2 border-border">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{p.name}</span>
                    <span className="text-xs text-blue-500 dark:text-blue-400">{p.role}</span>
                    <span className="text-xs text-muted-foreground">· team: {p.team}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  {'bullets' in p && p.bullets && (
                    <ul className="mt-2 space-y-1">
                      {(p.bullets as string[]).map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* VTI projects */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">VTI Corporation · 08/2021 — 04/2024</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: 'LLM Inference Service', role: 'AI Engineer', team: null, desc: 'Researched and deployed an internal LLM inference service with multi-model management, monitoring, and scalable API integration for chatbot and AI applications.' },
                { name: 'AI-OCR — Car Inspection Certificate', role: 'AI Engineer', team: '13', desc: 'Developed an OCR pipeline to extract structured information from car inspection certificates, including skew correction, field segmentation, and domain fine-tuning of PaddleOCR models.' },
                { name: 'Retail Customer Tracking & Auto Payment', role: 'AI Engineer', team: '10', desc: 'Implemented multi-object tracking and customer behavior analysis for automatic payment systems deployed on Rockchip edge devices with optimized AI inference.' },
                { name: 'Auto-Training Pipeline (Retail)', role: 'AI Engineer', team: '5', desc: 'Built an automated training pipeline using YOLOv5/v8 and CLIP to detect new retail objects and trigger model retraining, reducing manual dataset preparation by ~60%.' },
                { name: 'Billboard Audience Analytics', role: 'AI Engineer', team: '15', desc: 'Developed edge-based analytics to estimate audience age, gender, and dwell time using computer vision models, enabling real-time marketing insights.' },
                { name: 'Japanese Driving License OCR', role: 'AI Engineer', team: '15', desc: 'Built a key-field extraction system for Japanese driving licenses using PaddleOCR with domain-specific fine-tuning and custom post-processing, deployed as a REST API service.' },
                { name: 'eKYC Identity Verification', role: 'AI Engineer', team: null, desc: 'Implemented an identity verification pipeline combining face detection, liveness detection, and ID card OCR with optimized inference and monitoring for production systems.' },
              ].map((p) => (
                <div key={p.name} className="pl-4 border-l-2 border-border">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{p.name}</span>
                    <span className="text-xs text-blue-500 dark:text-blue-400">{p.role}</span>
                    {p.team && <span className="text-xs text-muted-foreground">· team: {p.team}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Freelancer projects */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">Freelancer · 2023 — Present</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: 'AI Fire & Injured Person Detection',
                  period: '2023 — 2024',
                  role: 'AI Engineer / PM',
                  team: null,
                  desc: 'Web service to detect fire, smoke, and injured persons with real-time alerts. Packaged with Docker Compose and tested with Triton Inference Server.',
                },
                {
                  name: 'AI Face Check-In System',
                  period: '2023 — Present',
                  role: 'AI Engineer / PM',
                  team: '10 members',
                  desc: 'Web-based face recognition check-in supporting single-image enrollment, multi-face real-time identification, classroom attendance tracking, and person management dashboard (FastAPI + Docker Compose).',
                },
              ].map((p) => (
                <div key={p.name} className="pl-4 border-l-2 border-border">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{p.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{p.period}</span>
                    <span className="text-xs text-blue-500 dark:text-blue-400">{p.role}</span>
                    {p.team && <span className="text-xs text-muted-foreground">· team: {p.team}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Education ── */}
      <div className="mb-14">
        <SectionTitle>Education</SectionTitle>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
          <h3 className="text-base font-semibold text-foreground">Hanoi University of Industry</h3>
          <span className="text-xs text-muted-foreground font-mono">2019 — 2023</span>
        </div>
        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">Bachelor of Engineering — Software Engineering · GPA: Very Good</p>
      </div>

      {/* ── Certifications ── */}
      <div className="mb-14">
        <SectionTitle>Certifications</SectionTitle>
        <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
          {certifications.map((c) => (
            <div key={c.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3">
              <span className="text-xs text-muted-foreground font-mono w-12 shrink-0">{c.year}</span>
              <span className="text-sm font-semibold text-foreground w-64 shrink-0">{c.name}</span>
              <span className="text-sm text-muted-foreground">{c.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Blog Series ── */}
      <div className="mb-14">
        <SectionTitle>Blog Series</SectionTitle>
        <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
          {blogSeries.map((s) => (
            <div key={s.title} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3">
              <a
                href={s.href}
                className="text-sm font-semibold text-blue-500 hover:underline w-56 shrink-0"
              >
                {s.title}
              </a>
              <span className="text-sm text-muted-foreground">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
