# Home Portfolio Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the existing blog-listing Home page to `/blog`, and build a new scroll-reveal portfolio landing page at `/` (Hero → Skills/Experience → Projects → Blog → Contact).

**Architecture:** Two hardcoded data arrays (`projects`, `skillGroups`) are extracted from their current page files into `src/lib/` so both the new Home page and the existing About/Projects pages can share them. Five new components under `src/components/home/` compose the Home page; a shared `RevealSection` client component handles the scroll-reveal animation via `IntersectionObserver`.

**Tech Stack:** Next.js 14 App Router, React 18 Server Components, TailwindCSS. No new dependencies. No test runner exists in this repo — verification uses `npx tsc --noEmit`, `npm run lint`, and `npm run build` (which itself type-checks) instead of a unit-test suite.

---

## Task 1: Install dependencies and confirm baseline build

**Files:** none

- [ ] **Step 1: Install dependencies if missing**

Run: `[ -d node_modules ] || npm install`
Expected: exits 0 (either already installed, or installs successfully)

- [ ] **Step 2: Confirm the project builds before making changes**

Run: `npm run build`
Expected: `Compiled successfully` — this is the baseline; if it fails here, stop and investigate before continuing (pre-existing breakage is not part of this plan).

---

## Task 2: Extract `projects` data to `src/lib/projects.ts`

**Files:**
- Create: `src/lib/projects.ts`
- Modify: `src/app/projects/ProjectsGrid.tsx:1-227`

`src/app/projects/ProjectsGrid.tsx` currently declares `TechBadge`, `ProjectFeature`, `PreviewType`, `Project`, and the `projects` data array inline (lines 1-227). The Home page's Projects-highlight section needs the same `projects` array, so it moves to a shared module.

- [ ] **Step 1: Create `src/lib/projects.ts`**

```typescript
export interface TechBadge { label: string; color: string }
export interface ProjectFeature { icon: string; text: string }

export type PreviewType =
  | 'chatbot-db'
  | 'ecommerce-chatbot'
  | 'knowledge-chatbot'
  | 'ai-ocr'
  | 'retail-tracking'
  | 'billboard-analytics'
  | 'facetracking-edge'

export interface Project {
  id: number
  company: string
  title: string
  tagline: string
  description: string
  status: 'Live' | 'In Progress' | 'Archived'
  tech: TechBadge[]
  features: ProjectFeature[]
  demoUrl?: string
  githubUrl?: string
  preview: PreviewType
  coverImage?: string
}

export const projects: Project[] = [
  {
    id: 1,
    company: 'Sun* · Team Leader · 7 AI Engineers',
    title: 'Chat with Database & Chart Visualisation',
    tagline: 'Ask your data — get instant insights with visual charts',
    description:
      'A conversational AI assistant that translates natural-language questions into SQL queries, executes them against a relational database, and renders the results as interactive charts. Powered by an LLM + LangGraph pipeline with full conversation memory.',
    status: 'In Progress',
    tech: [
      { label: 'LangGraph', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' },
      { label: 'PostgreSQL', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
      { label: 'FastAPI', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'Next.js', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' },
      { label: 'Recharts', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300' },
      { label: 'OpenAI', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300' },
    ],
    features: [
      { icon: '💬', text: 'Natural-language → SQL query generation' },
      { icon: '📊', text: 'Auto-select chart type: bar, line, pie, scatter' },
      { icon: '🧠', text: 'Long-term conversation memory with PostgreSQL checkpointer' },
      { icon: '🔄', text: 'Streaming responses via Server-Sent Events' },
      { icon: '🛡️', text: 'SQL injection prevention & query validation layer' },
      { icon: '📁', text: 'Multi-datasource support (upload CSV or connect DB)' },
    ],
    preview: 'chatbot-db',
    coverImage: '/images/cover_projects/Chat with Database & Chart Visualisation.png',
  },
  {
    id: 2,
    company: 'Sun* · Team Leader · 5 AI Engineers',
    title: 'E-commerce Chatbot',
    tagline: 'AI shopping assistant that understands what you need',
    description:
      'An AI-powered chatbot for e-commerce platforms that assists users in discovering and recommending products based on their needs. Features context-aware dialogue management and semantic product retrieval.',
    status: 'Live',
    tech: [
      { label: 'LangGraph', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' },
      { label: 'Semantic Search', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300' },
      { label: 'PostgreSQL', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
      { label: 'FastAPI', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'Milvus', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
      { label: 'K8S', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200' },
    ],
    features: [
      { icon: '🛍️', text: 'Product recommendation via conversational AI' },
      { icon: '🔍', text: 'Semantic catalog retrieval matching user intent' },
      { icon: '🔁', text: 'Multi-turn context refinement across dialogue' },
      { icon: '🎯', text: 'Intent classification: search, compare, purchase' },
      { icon: '⚡', text: 'Real-time interactions at scale with K8S' },
      { icon: '💬', text: 'Slack integration for team notifications' },
    ],
    preview: 'ecommerce-chatbot',
    coverImage: '/images/cover_projects/E-commerce Chatbot.png',
  },
  {
    id: 3,
    company: 'Sun* · Team Leader · 5 AI Engineers',
    title: 'Internal Knowledge Chatbot',
    tagline: 'Query your company knowledge base in plain English',
    description:
      'An enterprise knowledge chatbot enabling employees to query internal documents through natural language. Built on a RAG pipeline with hybrid search, multi-format document ingestion, and automated evaluation.',
    status: 'Live',
    tech: [
      { label: 'RAG', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300' },
      { label: 'LangGraph', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' },
      { label: 'Hybrid Search', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' },
      { label: 'Milvus', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
      { label: 'FastAPI', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'Minio', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300' },
    ],
    features: [
      { icon: '📄', text: 'Multi-format ingestion: PDF, DOCX, XLSX, PPTX' },
      { icon: '🔎', text: 'Hybrid search with Reciprocal Rank Fusion' },
      { icon: '📐', text: 'Optimised chunking & embedding strategies' },
      { icon: '📌', text: 'Source citations with page-level references' },
      { icon: '📈', text: 'Automated evaluation pipeline for accuracy' },
      { icon: '🔒', text: 'Role-based document access control' },
    ],
    preview: 'knowledge-chatbot',
    coverImage: '/images/cover_projects/Internal Knowledge Chatbot.png',
  },
  {
    id: 4,
    company: 'VTI Corporation · AI Engineer · Team of 13',
    title: 'AI-OCR — Car Inspection Certificate',
    tagline: 'Automated field extraction from car inspection certificates',
    description:
      'An OCR pipeline to extract structured information from car inspection certificates. Includes skew correction, field segmentation, and domain-specific fine-tuning of PaddleOCR models, deployed as a production REST API.',
    status: 'Live',
    tech: [
      { label: 'PaddleOCR', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
      { label: 'TensorRT', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'Triton', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300' },
      { label: 'FastAPI', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200' },
      { label: 'Fine-tuning', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' },
      { label: 'Docker', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' },
    ],
    features: [
      { icon: '📷', text: 'Automatic skew correction & image preprocessing' },
      { icon: '🔲', text: 'Field segmentation for key certificate regions' },
      { icon: '🧠', text: 'Domain fine-tuned PaddleOCR for Vietnamese text' },
      { icon: '✅', text: 'Post-processing: normalisation & validation logic' },
      { icon: '🚀', text: 'Triton Inference Server for high-throughput serving' },
      { icon: '🔗', text: 'REST API integration with downstream business systems' },
    ],
    preview: 'ai-ocr',
    coverImage: '/images/cover_projects/AI-OCR — Car Inspection Certificate.png',
  },
  {
    id: 5,
    company: 'VTI Corporation · AI Engineer · Team of 10',
    title: 'Retail Customer Tracking & Auto Payment',
    tagline: 'Vision-powered checkout — track customers, automate payments',
    description:
      'Multi-object tracking and customer behaviour analysis system for automatic payment, deployed on Rockchip edge devices. Detects product pick-ups and automatically generates payment receipts without manual checkout.',
    status: 'Live',
    tech: [
      { label: 'YOLO', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
      { label: 'MOT', color: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' },
      { label: 'RKNN', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300' },
      { label: 'Rockchip', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' },
      { label: 'TensorRT', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'FastAPI', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200' },
    ],
    features: [
      { icon: '👁️', text: 'Multi-object tracking with persistent customer IDs' },
      { icon: '🛒', text: 'Product pick-up & put-back detection' },
      { icon: '💳', text: 'Automatic payment receipt generation' },
      { icon: '⚡', text: 'Real-time inference on Rockchip edge devices' },
      { icon: '📊', text: 'Customer behaviour analytics & heatmaps' },
      { icon: '🔧', text: 'RKNN-optimised model for low-latency inference' },
    ],
    preview: 'retail-tracking',
    coverImage: '/images/cover_projects/Retail Customer Tracking & Auto Payment.png',
  },
  {
    id: 6,
    company: 'VTI Corporation · AI Engineer · Team of 15',
    title: 'Billboard Audience Analytics',
    tagline: 'Real-time audience insights from billboards using Edge AI',
    description:
      'Edge-based analytics system to estimate audience age, gender, and dwell time for digital billboards using computer vision. Delivers real-time marketing insights to clients without storing personal data.',
    status: 'Live',
    tech: [
      { label: 'Age/Gender Est.', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300' },
      { label: 'YOLO', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
      { label: 'TensorRT', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'Rockchip', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' },
      { label: 'Prometheus', color: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' },
      { label: 'Grafana', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200' },
    ],
    features: [
      { icon: '👥', text: 'Real-time audience counting from camera feeds' },
      { icon: '🎂', text: 'Age & gender estimation per detected face' },
      { icon: '⏱️', text: 'Dwell time measurement per viewer' },
      { icon: '🔒', text: 'Privacy-preserving: no biometric data stored' },
      { icon: '📡', text: 'Live dashboard via Prometheus + Grafana' },
      { icon: '⚡', text: 'Optimised inference on Rockchip edge hardware' },
    ],
    preview: 'billboard-analytics',
    coverImage: '/images/cover_projects/Billboard Audience Analytics.png',
  },
  {
    id: 7,
    company: 'VTI Corporation · AI Engineer · Edge Devices',
    title: 'Face Tracking on Edge Devices',
    tagline: 'Real-time face detection & tracking on resource-constrained hardware',
    description:
      'Deployed face detection, recognition, and tracking pipelines on Jetson Nano, Jetson Xavier NX, and Rockchip Rk3588 edge devices. Built Python-C++ bindings via Pybind and optimised models with TensorRT & RKNN for sub-20ms inference.',
    status: 'Live',
    tech: [
      { label: 'Jetson Nano', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
      { label: 'Jetson Xavier NX', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200' },
      { label: 'Rockchip', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' },
      { label: 'TensorRT', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'RKNN', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300' },
      { label: 'Pybind', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300' },
      { label: 'C++', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
    ],
    features: [
      { icon: '🔬', text: 'RetinaFace + FaceNet pipeline on edge hardware' },
      { icon: '⚡', text: 'Sub-20ms inference with TensorRT & RKNN backends' },
      { icon: '🐍', text: 'Python-C++ bindings via Pybind for custom ops' },
      { icon: '📹', text: 'Multi-camera tracking with persistent face IDs' },
      { icon: '🔧', text: 'Model quantisation (INT8/FP16) for memory efficiency' },
      { icon: '📊', text: 'Performance monitoring with latency & FPS metrics' },
    ],
    preview: 'facetracking-edge',
    coverImage: '/images/cover_projects/Face Tracking on Edge Devices.png',
  },
]
```

- [ ] **Step 2: Delete the now-duplicated data block (lines 6-228) from `ProjectsGrid.tsx`**

First confirm the boundaries haven't shifted:

Run: `sed -n '5,7p;227,229p' src/app/projects/ProjectsGrid.tsx`
Expected output:
```
import Image from 'next/image'

/* ── Types ────────────────────────────────────────── */
]

/* ── Status styles ────────────────────────────────── */
```
If this doesn't match, stop and locate the correct line numbers before continuing (the array may have shifted).

Delete lines 6 (the blank line after the `Image` import) through 228 (the blank line after the array's closing `]`) — this removes the `/* ── Types ── */` comment, the four type/interface declarations, the `/* ── Data ── */` comment, and the whole `projects` array:

Run (macOS/BSD sed): `sed -i '' '6,228d' src/app/projects/ProjectsGrid.tsx`

- [ ] **Step 3: Insert the import for the extracted data**

Use the Edit tool on `src/app/projects/ProjectsGrid.tsx` with `old_string`:
```
import Image from 'next/image'
/* ── Status styles
```
new_string:
```
import Image from 'next/image'
import { projects, type Project, type PreviewType } from '@/lib/projects'

/* ── Status styles
```

- [ ] **Step 4: Verify no leftover references and the project type-checks**

Run: `grep -n "^const projects\|^interface Project \|^interface TechBadge\|^interface ProjectFeature\|^type PreviewType" src/app/projects/ProjectsGrid.tsx`
Expected: no output (all declarations now live only in `src/lib/projects.ts`)

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add src/lib/projects.ts src/app/projects/ProjectsGrid.tsx
git commit -m "refactor: extract projects data to src/lib/projects.ts"
```

---

## Task 3: Extract `skillGroups` data to `src/lib/profile.ts`

**Files:**
- Create: `src/lib/profile.ts`
- Modify: `src/app/about/page.tsx:1-59`

- [ ] **Step 1: Create `src/lib/profile.ts`**

```typescript
export const skillGroups = [
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
```

- [ ] **Step 2: Import `skillGroups` in `about/page.tsx` instead of declaring it locally**

Use the Edit tool on `src/app/about/page.tsx` with this exact `old_string`:
```
import { generateSeoMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
```
new_string:
```
import { generateSeoMetadata } from '@/lib/metadata'
import { skillGroups } from '@/lib/profile'
import type { Metadata } from 'next'
```

- [ ] **Step 3: Remove the now-duplicate local `skillGroups` declaration**

Use the Edit tool on `src/app/about/page.tsx` with this exact `old_string` (the `)` closing the `metadata` call, the blank line, the full `skillGroups` const, the blank line, and the start of `certifications`):
```
)

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
```
new_string:
```
)

const certifications = [
```

- [ ] **Step 4: Verify**

Run: `grep -n "^const skillGroups" src/app/about/page.tsx`
Expected: no output

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add src/lib/profile.ts src/app/about/page.tsx
git commit -m "refactor: extract skillGroups data to src/lib/profile.ts"
```

---

## Task 4: Move blog listing from `/` to `/blog`

**Files:**
- Create: `src/app/blog/page.tsx`
- Delete (temporarily, recreated in Task 10): `src/app/page.tsx`

- [ ] **Step 1: Move the file**

Run: `git mv src/app/page.tsx src/app/blog/page.tsx`

- [ ] **Step 2: Update the metadata title so it doesn't collide with the future home page title**

Read `src/app/blog/page.tsx`. Its content is unchanged from the old `src/app/page.tsx` — the `generateSeoMetadata` call, the `HomePage` function (rename it — see Step 3), and the JSX are identical. No content changes needed for the metadata itself; `title: 'BenTech Blog'` stays as-is.

- [ ] **Step 3: Rename the exported component from `HomePage` to `BlogPage`**

Use the Edit tool on `src/app/blog/page.tsx` with `old_string`:
```
export default async function HomePage({ searchParams }: PageProps) {
```
new_string:
```
export default async function BlogPage({ searchParams }: PageProps) {
```

- [ ] **Step 4: Verify the route compiles**

Run: `npx tsc --noEmit`
Expected: no errors (note: `src/app/page.tsx` no longer exists at this point — that's expected, Task 10 recreates it. If your toolchain complains about a missing root page during a `next build` at this intermediate step, that's fine; `tsc --noEmit` alone doesn't require it.)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "refactor: move blog listing page from / to /blog"
```

---

## Task 5: `RevealSection` component

**Files:**
- Create: `src/components/home/RevealSection.tsx`

- [ ] **Step 1: Create the component**

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface RevealSectionProps {
  children: ReactNode
  className?: string
}

export function RevealSection({ children, className = '' }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/RevealSection.tsx
git commit -m "feat: add RevealSection scroll-reveal wrapper for home page"
```

---

## Task 6: `Hero` component

**Files:**
- Create: `src/components/home/Hero.tsx`

- [ ] **Step 1: Create the component**

```tsx
import Link from 'next/link'

export function Hero() {
  return (
    <div className="bg-neutral-900 dark:bg-neutral-950 px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg mb-6">
          H
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3">
          Nguyen Luong Hung
        </h1>
        <p className="text-neutral-400 text-lg mb-6">AI Engineer · Hanoi, Vietnam</p>
        <p className="text-neutral-300 text-base max-w-2xl leading-relaxed mb-10">
          I build production-grade LLM systems — from legal knowledge-base platforms and
          GraphRAG retrieval to agentic summarization, fine-tuning, and self-hosted model
          serving for enterprise, on-premise deployments.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/blog"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            View Blog
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-white text-sm font-semibold transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-white text-sm font-semibold transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "feat: add Hero component for home page"
```

---

## Task 7: `SkillsHighlight` component

**Files:**
- Create: `src/components/home/SkillsHighlight.tsx`

- [ ] **Step 1: Create the component**

```tsx
import Link from 'next/link'
import { skillGroups } from '@/lib/profile'

const highlightLabels = ['LLM / GenAI', 'Deep Learning', 'Infrastructure', 'Databases']

export function SkillsHighlight() {
  const highlighted = skillGroups.filter((group) => highlightLabels.includes(group.label))

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3 flex items-center gap-2">
        <span className="inline-block w-4 h-px bg-blue-500 dark:bg-blue-400" />
        Skills & Experience
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
        AI Engineer focused on production LLM systems
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        Years of hands-on experience across GraphRAG retrieval, agentic pipelines, fine-tuning,
        and self-hosted LLM serving for enterprise and legal-domain applications.
      </p>
      <div className="space-y-4 mb-8">
        {highlighted.map((group) => (
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
      <Link href="/about" className="text-sm font-semibold text-blue-500 hover:underline">
        Xem thêm →
      </Link>
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/SkillsHighlight.tsx
git commit -m "feat: add SkillsHighlight component for home page"
```

---

## Task 8: `ProjectsHighlight` component

**Files:**
- Create: `src/components/home/ProjectsHighlight.tsx`

- [ ] **Step 1: Create the component**

```tsx
import Link from 'next/link'
import { projects } from '@/lib/projects'

export function ProjectsHighlight() {
  const featured = projects.filter((p) => p.status !== 'Archived').slice(0, 3)

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900/50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-blue-500 dark:bg-blue-400" />
          Portfolio
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {featured.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group flex flex-col rounded-2xl border border-border bg-background p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t.label} className={`text-xs px-2 py-0.5 rounded ${t.color}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <Link href="/projects" className="text-sm font-semibold text-blue-500 hover:underline">
          Xem thêm →
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/ProjectsHighlight.tsx
git commit -m "feat: add ProjectsHighlight component for home page"
```

---

## Task 9: `BlogHighlight` component

**Files:**
- Create: `src/components/home/BlogHighlight.tsx`

- [ ] **Step 1: Create the component**

```tsx
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'

export async function BlogHighlight() {
  const posts = (await getAllPosts()).slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3 flex items-center gap-2">
        <span className="inline-block w-4 h-px bg-blue-500 dark:bg-blue-400" />
        Blog
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        Latest Writing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <Link href="/blog" className="text-sm font-semibold text-blue-500 hover:underline">
        Xem thêm →
      </Link>
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/BlogHighlight.tsx
git commit -m "feat: add BlogHighlight component for home page"
```

---

## Task 10: `ContactCTA` component and the new Home page

**Files:**
- Create: `src/components/home/ContactCTA.tsx`
- Create: `src/app/page.tsx`

- [ ] **Step 1: Create `ContactCTA`**

```tsx
export function ContactCTA() {
  const links = [
    { label: 'Email', href: 'mailto:benu.aidev@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/ngluonghungg2611' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ben-aidev/' },
    { label: 'Viblo', href: 'https://viblo.asia/u/isBenU' },
  ]

  return (
    <div className="bg-neutral-900 dark:bg-neutral-950 py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Let&apos;s build something together
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
          Open to discussing production LLM systems, RAG architectures, and AI engineering
          collaboration.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-neutral-700 text-white text-sm hover:bg-neutral-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/app/page.tsx`**

```tsx
import { generateSeoMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { RevealSection } from '@/components/home/RevealSection'
import { SkillsHighlight } from '@/components/home/SkillsHighlight'
import { ProjectsHighlight } from '@/components/home/ProjectsHighlight'
import { BlogHighlight } from '@/components/home/BlogHighlight'
import { ContactCTA } from '@/components/home/ContactCTA'

export const metadata: Metadata = generateSeoMetadata({
  title: 'Nguyen Luong Hung — AI Engineer',
  description:
    'AI Engineer focused on production LLM systems, knowledge-base platforms, fine-tuning, and self-hosted/on-premise LLM deployments for enterprise and legal-domain applications.',
})

export default function HomePage() {
  return (
    <div>
      <Hero />
      <RevealSection>
        <SkillsHighlight />
      </RevealSection>
      <RevealSection>
        <ProjectsHighlight />
      </RevealSection>
      <RevealSection>
        <BlogHighlight />
      </RevealSection>
      <RevealSection>
        <ContactCTA />
      </RevealSection>
    </div>
  )
}
```

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/home/ContactCTA.tsx src/app/page.tsx
git commit -m "feat: add ContactCTA and compose new portfolio home page"
```

---

## Task 11: Update navigation (Navbar, Footer)

**Files:**
- Modify: `src/components/layout/Navbar.tsx:4-8`
- Modify: `src/components/layout/Footer.tsx:3-6`

- [ ] **Step 1: Add Blog to the Navbar**

Use the Edit tool on `src/components/layout/Navbar.tsx` with `old_string`:
```
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
]
```
new_string:
```
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
]
```

- [ ] **Step 2: Add Blog and Projects to the Footer navigation list**

Use the Edit tool on `src/components/layout/Footer.tsx` with `old_string`:
```
  Navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ],
```
new_string:
```
  Navigation: [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ],
```

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Navbar.tsx src/components/layout/Footer.tsx
git commit -m "feat: add Blog link to Navbar and Footer navigation"
```

---

## Task 12: Update sitemap

**Files:**
- Modify: `src/app/sitemap.ts:8-19`

- [ ] **Step 1: Add a `/blog` entry to the sitemap**

Use the Edit tool on `src/app/sitemap.ts` with `old_string`:
```
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
```
new_string:
```
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: add /blog to sitemap"
```

---

## Task 13: Full verification

**Files:** none

- [ ] **Step 1: Lint**

Run: `npm run lint`
Expected: no errors

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: `Compiled successfully`, and the route list printed by the build output includes `/`, `/blog`, `/about`, `/projects`, and `/blog/[slug]`.

- [ ] **Step 3: Manual smoke check with the dev server**

Run: `npm run dev` (in the background)

Then check both routes render the expected content:
```bash
curl -s http://localhost:3000/ | grep -o "Nguyen Luong Hung" | head -1
curl -s http://localhost:3000/blog | grep -o "BenTech Blog\|Isben" | head -1
```
Expected: first command prints `Nguyen Luong Hung`, second prints a match — confirming `/` now serves the portfolio Home page and `/blog` still serves the post listing.

Also open `http://localhost:3000/` in a browser and confirm: Hero renders, scrolling down triggers each section to fade/slide in once, and the "Xem thêm" links on Skills/Projects/Blog sections navigate to `/about`, `/projects`, and `/blog` respectively. Stop the dev server when done.

- [ ] **Step 4: No commit needed for this task** (verification only — if any check fails, fix the issue in the relevant earlier task and re-commit there).
