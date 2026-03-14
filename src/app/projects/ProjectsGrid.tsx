'use client'

import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'

/* ── Types ────────────────────────────────────────── */
interface TechBadge { label: string; color: string }
interface ProjectFeature { icon: string; text: string }

type PreviewType =
  | 'chatbot-db'
  | 'ecommerce-chatbot'
  | 'knowledge-chatbot'
  | 'ai-ocr'
  | 'retail-tracking'
  | 'billboard-analytics'
  | 'facetracking-edge'

interface Project {
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
}

/* ── Data ─────────────────────────────────────────── */
const projects: Project[] = [
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
  },
  {
    id: 7,
    company: 'VTI Corporation · AI Engineer · Edge Devices',
    title: 'Face Tracking on Edge Devices',
    tagline: 'Real-time face detection & tracking on resource-constrained hardware',
    description:
      'Deployed face detection, recognition, and tracking pipelines on Jetson Nano, Jetson Xavier NX, and Rockchip RV1126 edge devices. Built Python-C++ bindings via Pybind and optimised models with TensorRT & RKNN for sub-20ms inference.',
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
  },
]

/* ── Status styles ────────────────────────────────── */
const statusStyle: Record<Project['status'], string> = {
  Live: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Archived: 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
}

/* ── Card theme per project ───────────────────────── */
const cardTheme: Record<number, { gradient: string; icon: string }> = {
  1: { gradient: 'from-blue-600 via-blue-500 to-indigo-600',   icon: '💬' },
  2: { gradient: 'from-orange-500 via-pink-500 to-rose-500',   icon: '🛍️' },
  3: { gradient: 'from-purple-600 via-violet-500 to-indigo-600', icon: '📚' },
  4: { gradient: 'from-teal-500 via-cyan-500 to-blue-500',     icon: '🔎' },
  5: { gradient: 'from-green-600 via-emerald-500 to-teal-500', icon: '🛒' },
  6: { gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',  icon: '📊' },
  7: { gradient: 'from-emerald-500 via-cyan-500 to-sky-500',   icon: '👁️' },
}

/* ── Browser frame wrapper ────────────────────────── */
function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-neutral-50 dark:bg-neutral-900">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-200 dark:bg-neutral-800 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-white dark:bg-neutral-700 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono truncate">
          {url}
        </div>
      </div>
      <div className="h-72 sm:h-80">{children}</div>
    </div>
  )
}

/* ── Preview components ───────────────────────────── */
function ChatbotDBPreview() {
  return (
    <BrowserFrame url="localhost:3000 / chat">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col bg-white dark:bg-neutral-950 border-r border-border overflow-hidden">
          <div className="px-3 py-2 border-b border-border flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">AI</span>
            </div>
            <span className="text-[10px] font-semibold text-foreground">DataBot</span>
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 overflow-hidden px-2.5 py-2 space-y-2">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white text-[9px] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[80%] leading-relaxed">Show me monthly revenue for 2024</div>
            </div>
            <div className="flex items-end gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
              <div className="bg-neutral-100 dark:bg-neutral-800 text-[9px] rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[80%] text-muted-foreground">Sure! Let me query the database…</div>
            </div>
            <div className="flex items-end gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg px-2 py-1.5 max-w-[85%]">
                <p className="text-[8px] text-blue-500 font-mono mb-1">SQL generated:</p>
                <code className="text-[7.5px] text-neutral-500 dark:text-neutral-400 font-mono block">
                  SELECT month, SUM(amount)<br />FROM orders<br />WHERE YEAR(date)=2024<br />GROUP BY month
                </code>
              </div>
            </div>
            <div className="flex items-end gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
              <div className="bg-neutral-100 dark:bg-neutral-800 text-[9px] rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[80%] text-muted-foreground">Here&apos;s the line chart →</div>
            </div>
          </div>
          <div className="px-2.5 py-2 border-t border-border">
            <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg px-2.5 py-1.5">
              <span className="text-[9px] text-muted-foreground flex-1">Ask about your data…</span>
              <div className="w-4 h-4 rounded-md bg-blue-500 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-border flex items-center justify-between">
            <span className="text-[10px] font-semibold text-foreground">Visualisation</span>
            <div className="flex gap-1">
              {['Bar','Line','Pie'].map((t) => (
                <span key={t} className={`text-[8px] px-1.5 py-0.5 rounded-md cursor-pointer ${t==='Line' ? 'bg-blue-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-muted-foreground'}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col p-3 gap-1">
            <span className="text-[9px] text-muted-foreground font-medium">Monthly Revenue — 2024</span>
            <div className="flex-1 relative">
              <svg viewBox="0 0 280 150" className="w-full h-full">
                {[0,37,74,111,148].map((y) => <line key={y} x1="30" y1={y+1} x2="275" y2={y+1} stroke="currentColor" strokeOpacity="0.08" strokeWidth="1"/>)}
                {['50k','37k','25k','12k','0'].map((l,i) => <text key={l} x="26" y={i*37+5} textAnchor="end" fontSize="7" fill="currentColor" fillOpacity="0.4">{l}</text>)}
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m,i) => <text key={m} x={30+i*20.5} y="155" textAnchor="middle" fontSize="6" fill="currentColor" fillOpacity="0.4">{m}</text>)}
                <defs><linearGradient id="ag1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/><stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02"/></linearGradient></defs>
                <path d="M30,120 L50,105 L71,90 L91,95 L112,75 L132,60 L153,55 L173,40 L194,50 L214,35 L235,25 L255,20 L255,149 L30,149 Z" fill="url(#ag1)"/>
                <polyline points="30,120 50,105 71,90 91,95 112,75 132,60 153,55 173,40 194,50 214,35 235,25 255,20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                {[[30,120],[50,105],[71,90],[91,95],[112,75],[132,60],[153,55],[173,40],[194,50],[214,35],[235,25],[255,20]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="2.5" fill="#3b82f6" stroke="white" strokeWidth="1.5"/>)}
                <rect x="238" y="5" width="32" height="14" rx="3" fill="#3b82f6"/>
                <text x="254" y="14.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">$48.2k</text>
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-1 mt-1">
              {[{label:'Total',value:'$342k'},{label:'Peak',value:'$48.2k'},{label:'Growth',value:'+24%'}].map((s) => (
                <div key={s.label} className="bg-white dark:bg-neutral-800 rounded-lg px-2 py-1.5 text-center border border-border">
                  <p className="text-[9px] font-bold text-foreground">{s.value}</p>
                  <p className="text-[7px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function EcommerceChatbotPreview() {
  return (
    <BrowserFrame url="localhost:3000 / shop-assistant">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col bg-white dark:bg-neutral-950 border-r border-border overflow-hidden">
          <div className="px-3 py-2 border-b border-border flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-[8px]">🛍</div>
            <span className="text-[10px] font-semibold text-foreground">ShopBot</span>
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 overflow-hidden px-2.5 py-2 space-y-2">
            <div className="flex justify-end">
              <div className="bg-orange-500 text-white text-[9px] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[80%]">Running shoes under $100, size 10</div>
            </div>
            <div className="flex items-end gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 shrink-0" />
              <div className="bg-neutral-100 dark:bg-neutral-800 text-[9px] rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[80%] text-muted-foreground">Found 3 great matches for you!</div>
            </div>
            {[{name:'Nike Air Zoom',price:'$89.99',score:'98%'},{name:'Adidas Ultraboost',price:'$94.99',score:'95%'},{name:'New Balance 880',price:'$84.99',score:'91%'}].map((p) => (
              <div key={p.name} className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg px-2 py-1.5 ml-5">
                <div className="w-5 h-5 rounded bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-[8px]">👟</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[8px] font-semibold text-foreground truncate">{p.name}</p>
                  <p className="text-[7px] text-orange-500">{p.price}</p>
                </div>
                <span className="text-[7px] text-emerald-600 dark:text-emerald-400 font-mono">{p.score}</span>
              </div>
            ))}
          </div>
          <div className="px-2.5 py-2 border-t border-border">
            <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg px-2.5 py-1.5">
              <span className="text-[9px] text-muted-foreground flex-1">What are you looking for?</span>
              <div className="w-4 h-4 rounded-md bg-orange-500 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-border">
            <span className="text-[10px] font-semibold text-foreground">Catalogue</span>
            <p className="text-[8px] text-muted-foreground">247 items · filtered by AI</p>
          </div>
          <div className="flex-1 p-2 grid grid-cols-2 gap-1.5 content-start">
            {[{emoji:'👟',name:'Nike Air Zoom',price:'$89.99',tag:'Best Match'},{emoji:'👟',name:'Adidas Ultra',price:'$94.99',tag:'Popular'},{emoji:'🥾',name:'New Balance',price:'$84.99',tag:'Value'},{emoji:'👟',name:'ASICS Gel',price:'$99.00',tag:''}].map((item) => (
              <div key={item.name} className="bg-white dark:bg-neutral-800 rounded-lg p-2 border border-border">
                <div className="w-full aspect-square bg-neutral-100 dark:bg-neutral-700 rounded-md mb-1.5 flex items-center justify-center text-2xl">{item.emoji}</div>
                <p className="text-[8px] font-semibold text-foreground truncate">{item.name}</p>
                <p className="text-[8px] text-orange-500 font-mono">{item.price}</p>
                {item.tag && <span className="text-[6px] bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1 py-0.5 rounded-full">{item.tag}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function KnowledgeChatbotPreview() {
  return (
    <BrowserFrame url="localhost:3000 / knowledge-base">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col bg-white dark:bg-neutral-950 border-r border-border overflow-hidden">
          <div className="px-3 py-2 border-b border-border flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">K</span>
            </div>
            <span className="text-[10px] font-semibold text-foreground">KnowledgeBot</span>
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 overflow-hidden px-2.5 py-2 space-y-2">
            <div className="flex justify-end">
              <div className="bg-purple-500 text-white text-[9px] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[80%]">What is our annual leave policy?</div>
            </div>
            <div className="flex items-start gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shrink-0 mt-0.5" />
              <div className="space-y-1.5 flex-1">
                <div className="bg-neutral-100 dark:bg-neutral-800 text-[9px] rounded-xl rounded-tl-sm px-2.5 py-1.5 text-muted-foreground">
                  Employees get <strong className="text-foreground">14 days</strong> annual leave, increasing to 16 after 5 years of service.
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg px-2 py-1 border border-purple-200 dark:border-purple-800/50">
                  <p className="text-[7px] text-purple-600 dark:text-purple-400 font-semibold mb-0.5">Sources</p>
                  {['HR_Policy_2024.pdf · p.3','Employee_Handbook.docx · p.12'].map((src) => (
                    <p key={src} className="text-[7px] text-muted-foreground truncate">📄 {src}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-2.5 py-2 border-t border-border">
            <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg px-2.5 py-1.5">
              <span className="text-[9px] text-muted-foreground flex-1">Ask anything about company…</span>
              <div className="w-4 h-4 rounded-md bg-purple-500 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-border flex items-center justify-between">
            <span className="text-[10px] font-semibold text-foreground">Knowledge Base</span>
            <span className="text-[8px] text-emerald-600 dark:text-emerald-400">● synced</span>
          </div>
          <div className="flex-1 p-2.5 space-y-2 overflow-hidden">
            {[{name:'HR_Policy_2024.pdf',score:94},{name:'Employee_Handbook.docx',score:71},{name:'Benefits_Guide.pdf',score:58},{name:'IT_Security_Policy.pdf',score:34},{name:'Onboarding_Kit.pptx',score:22}].map((doc) => (
              <div key={doc.name} className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">{doc.name.endsWith('.pdf') ? '📕' : doc.name.endsWith('.docx') ? '📘' : '📊'}</span>
                    <span className="text-[8px] text-foreground font-medium truncate max-w-[110px]">{doc.name}</span>
                  </div>
                  <span className="text-[7px] text-muted-foreground font-mono shrink-0">{doc.score}%</span>
                </div>
                <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${doc.score>80?'bg-purple-500':doc.score>50?'bg-purple-400':'bg-neutral-400'}`} style={{width:`${doc.score}%`}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function AiOcrPreview() {
  return (
    <BrowserFrame url="localhost:8000 / ocr / certificate">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col bg-neutral-100 dark:bg-neutral-800 border-r border-border overflow-hidden p-3">
          <p className="text-[9px] font-semibold text-muted-foreground mb-2">Input Document</p>
          <div className="flex-1 bg-white dark:bg-neutral-900 rounded-lg border border-border p-2 relative overflow-hidden">
            <div className="text-center mb-2">
              <div className="text-[7px] font-bold text-foreground">GIẤY CHỨNG NHẬN KIỂM ĐỊNH</div>
              <div className="text-[6px] text-muted-foreground">Car Inspection Certificate</div>
            </div>
            <svg viewBox="0 0 160 140" className="w-full h-full">
              {[{y:10,w:140,label:'Biển số / Plate'},{y:28,w:120,label:'Chủ xe / Owner'},{y:46,w:100,label:'Số khung / VIN'},{y:64,w:110,label:'Số máy / Engine'},{y:82,w:90,label:'Ngày HH / Expiry'}].map((field,i) => (
                <g key={field.label}>
                  <rect x="10" y={field.y} width={field.w} height="13" rx="2" fill="none" stroke={i<3?'#3b82f6':'#10b981'} strokeWidth="1.5" strokeDasharray={i<3?'0':'3,2'}/>
                  <text x="14" y={field.y+5} fontSize="5" fill="currentColor" fillOpacity="0.4">{field.label}</text>
                  <rect x="14" y={field.y+7} width={field.w-30} height="4" rx="1" fill={i<3?'#3b82f6':'#10b981'} fillOpacity="0.15"/>
                </g>
              ))}
              <circle cx="148" cy="16" r="4" fill="#3b82f6"/>
              <text x="148" y="18.5" textAnchor="middle" fontSize="5.5" fill="white">✓</text>
            </svg>
          </div>
          <div className="mt-2 flex gap-1">
            <span className="text-[7px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-full">Detected: 5</span>
            <span className="text-[7px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-full">Conf: 97.4%</span>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-border">
            <span className="text-[10px] font-semibold text-foreground">Extracted Fields</span>
          </div>
          <div className="flex-1 p-2.5 space-y-1.5 overflow-hidden">
            {[{key:'Plate Number',val:'51F-123.45',conf:99},{key:'Owner Name',val:'Nguyen Van A',conf:97},{key:'VIN',val:'VN123456789012',conf:96},{key:'Engine No',val:'ABC123456',conf:98},{key:'Expiry Date',val:'12/2025',conf:95}].map((field) => (
              <div key={field.key} className="bg-white dark:bg-neutral-800 rounded-lg px-2.5 py-1.5 border border-border">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-[7.5px] text-muted-foreground">{field.key}</p>
                  <span className={`text-[7px] font-mono ${field.conf>97?'text-emerald-600 dark:text-emerald-400':'text-amber-600 dark:text-amber-400'}`}>{field.conf}%</span>
                </div>
                <p className="text-[9px] font-semibold text-foreground font-mono">{field.val}</p>
              </div>
            ))}
          </div>
          <div className="px-2.5 pb-2">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg px-2.5 py-1.5 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <div>
                <p className="text-[8px] font-semibold text-emerald-700 dark:text-emerald-300">Validation passed</p>
                <p className="text-[7px] text-muted-foreground">All fields extracted · 18ms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function RetailTrackingPreview() {
  return (
    <BrowserFrame url="localhost:3000 / retail / track">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col bg-neutral-900 border-r border-border overflow-hidden">
          <div className="px-3 py-1.5 border-b border-neutral-700 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-neutral-300">Camera 01 — Store A</span>
            <span className="text-[7px] text-red-400 font-mono">● REC</span>
          </div>
          <div className="flex-1 relative p-2">
            <svg viewBox="0 0 160 170" className="w-full h-full">
              <rect x="10" y="10" width="60" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
              <rect x="90" y="10" width="60" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
              <rect x="10" y="40" width="60" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
              <rect x="90" y="40" width="60" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
              <rect x="10" y="70" width="60" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
              <rect x="90" y="70" width="60" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
              <rect x="50" y="140" width="60" height="22" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="80" y="153" textAnchor="middle" fontSize="6" fill="#60a5fa">CHECKOUT</text>
              <polyline points="75,30 78,55 72,85 75,120 75,145" fill="none" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,2"/>
              <polyline points="40,100 50,120 65,140 75,145" fill="none" stroke="#f97316" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,2"/>
              <circle cx="75" cy="145" r="7" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5"/>
              <text x="75" y="147.5" textAnchor="middle" fontSize="5.5" fill="#22c55e" fontWeight="bold">#1</text>
              <circle cx="40" cy="100" r="7" fill="#f97316" fillOpacity="0.3" stroke="#f97316" strokeWidth="1.5"/>
              <text x="40" y="102.5" textAnchor="middle" fontSize="5.5" fill="#f97316" fontWeight="bold">#2</text>
              <circle cx="115" cy="60" r="7" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1.5"/>
              <text x="115" y="62.5" textAnchor="middle" fontSize="5.5" fill="#a78bfa" fontWeight="bold">#3</text>
            </svg>
          </div>
          <div className="px-2.5 pb-2 flex gap-1.5">
            <span className="text-[7px] bg-neutral-700 text-neutral-300 px-2 py-0.5 rounded-full">3 active</span>
            <span className="text-[7px] bg-emerald-900/50 text-emerald-400 px-2 py-0.5 rounded-full">30 FPS</span>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-border">
            <span className="text-[10px] font-semibold text-foreground">Auto Checkout</span>
            <p className="text-[8px] text-muted-foreground">Customer #1 · detected items</p>
          </div>
          <div className="flex-1 p-2.5 space-y-1.5 overflow-hidden">
            {[{name:'Whole Milk 1L',qty:1,price:'$1.80'},{name:'Sourdough Bread',qty:2,price:'$5.60'},{name:'Orange Juice',qty:1,price:'$2.40'},{name:'Greek Yogurt',qty:1,price:'$2.70'}].map((item) => (
              <div key={item.name} className="flex items-center justify-between bg-white dark:bg-neutral-800 rounded-lg px-2.5 py-1.5 border border-border">
                <div>
                  <p className="text-[8.5px] font-medium text-foreground">{item.name}</p>
                  <p className="text-[7px] text-muted-foreground">Qty: {item.qty}</p>
                </div>
                <p className="text-[9px] font-mono font-semibold text-foreground">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="px-2.5 pb-2.5 space-y-1.5">
            <div className="flex justify-between px-0.5">
              <span className="text-[9px] font-semibold text-foreground">Total</span>
              <span className="text-[9px] font-bold text-foreground font-mono">$12.50</span>
            </div>
            <div className="bg-blue-500 rounded-lg px-3 py-2 flex items-center gap-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <p className="text-[9px] font-semibold text-white">Processing payment…</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function BillboardAnalyticsPreview() {
  return (
    <BrowserFrame url="localhost:3000 / billboard / dashboard">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col bg-neutral-900 border-r border-border overflow-hidden">
          <div className="px-3 py-1.5 border-b border-neutral-700 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-neutral-300">Billboard Cam — Hanoi CBD</span>
            <span className="text-[7px] text-red-400 font-mono">● LIVE</span>
          </div>
          <div className="flex-1 relative p-2">
            <svg viewBox="0 0 160 180" className="w-full h-full">
              <rect x="0" y="0" width="160" height="180" fill="#111827"/>
              <rect x="20" y="120" width="120" height="60" fill="#1f2937"/>
              <rect x="30" y="10" width="100" height="55" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
              <text x="80" y="35" textAnchor="middle" fontSize="8" fill="#3b82f6" fontWeight="bold">ADVERTISEMENT</text>
              <text x="80" y="47" textAnchor="middle" fontSize="6" fill="#60a5fa">BrandName™</text>
              {[{x:20,y:125,label:'M/35y',color:'#3b82f6'},{x:62,y:122,label:'F/28y',color:'#ec4899'},{x:105,y:128,label:'M/42y',color:'#3b82f6'},{x:138,y:126,label:'F/31y',color:'#ec4899'}].map((person) => (
                <g key={person.label}>
                  <rect x={person.x} y={person.y} width="16" height="20" rx="1" fill="none" stroke={person.color} strokeWidth="1.5"/>
                  <rect x={person.x} y={person.y-9} width="28" height="9" rx="1.5" fill={person.color}/>
                  <text x={person.x+14} y={person.y-2} textAnchor="middle" fontSize="5.5" fill="white" fontWeight="bold">{person.label}</text>
                  <circle cx={person.x+8} cy={person.y+8} r="5" fill={`${person.color}40`}/>
                </g>
              ))}
              {[28,70,113,146].map((x) => <rect key={x} x={x} y="146" width="16" height="30" rx="4" fill="#374151"/>)}
            </svg>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          <div className="px-3 py-2 border-b border-border">
            <span className="text-[10px] font-semibold text-foreground">Audience Insights</span>
            <p className="text-[8px] text-muted-foreground">Today · real-time</p>
          </div>
          <div className="flex-1 p-2.5 space-y-2 overflow-hidden">
            <div className="grid grid-cols-2 gap-1.5">
              {[{label:'Impressions',value:'1,247'},{label:'Avg Dwell',value:'4.2s'}].map((s) => (
                <div key={s.label} className="bg-white dark:bg-neutral-800 rounded-lg px-2 py-1.5 border border-border text-center">
                  <p className="text-[10px] font-bold text-foreground">{s.value}</p>
                  <p className="text-[7px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-2 border border-border">
              <p className="text-[8px] font-semibold text-foreground mb-1.5">Gender Split</p>
              <div className="flex gap-1 h-2 w-full rounded-full overflow-hidden">
                <div className="bg-blue-500" style={{width:'58%'}}/>
                <div className="bg-pink-400" style={{width:'42%'}}/>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[7px] text-blue-500">Male 58%</span>
                <span className="text-[7px] text-pink-400">Female 42%</span>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-2 border border-border">
              <p className="text-[8px] font-semibold text-foreground mb-2">Age Groups</p>
              <div className="space-y-1">
                {[{range:'18-24',pct:22},{range:'25-34',pct:38},{range:'35-44',pct:28},{range:'45+',pct:12}].map((ag) => (
                  <div key={ag.range} className="flex items-center gap-1.5">
                    <span className="text-[7px] text-muted-foreground w-8 shrink-0">{ag.range}</span>
                    <div className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-400 rounded-full" style={{width:`${ag.pct}%`}}/>
                    </div>
                    <span className="text-[7px] font-mono text-muted-foreground w-5 text-right">{ag.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function FacetrackingEdgePreview() {
  return (
    <BrowserFrame url="192.168.1.100 / edge / monitor">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col bg-neutral-900 border-r border-border overflow-hidden">
          <div className="px-3 py-1.5 border-b border-neutral-700 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] font-semibold text-neutral-300">Jetson Xavier NX</span>
          </div>
          <div className="flex-1 p-2.5 space-y-2 overflow-hidden">
            <div className="space-y-1.5">
              {[{label:'GPU',val:'Volta 384-core',pct:72,color:'bg-green-500'},{label:'CPU',val:'6-core Carmel',pct:45,color:'bg-blue-500'},{label:'RAM',val:'7.4 / 8.0 GB',pct:88,color:'bg-yellow-500'}].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[7.5px] text-neutral-400">{r.label}</span>
                    <span className="text-[7px] text-neutral-500 font-mono">{r.val}</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                    <div className={`h-full ${r.color} rounded-full`} style={{width:`${r.pct}%`}}/>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-neutral-800 rounded-lg p-2 space-y-1 border border-neutral-700">
              <p className="text-[7.5px] text-neutral-400 font-semibold uppercase tracking-wide">Pipeline</p>
              {[{label:'Detector',val:'RetinaFace'},{label:'Embedder',val:'FaceNet-512'},{label:'Backend',val:'TensorRT FP16'},{label:'Latency',val:'18 ms/frame'}].map((m) => (
                <div key={m.label} className="flex justify-between">
                  <span className="text-[7px] text-neutral-500">{m.label}</span>
                  <span className="text-[7px] text-neutral-300 font-mono">{m.val}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1">
              {[{label:'Tracked',value:'4'},{label:'FPS',value:'30'}].map((s) => (
                <div key={s.label} className="bg-neutral-800 rounded-lg p-1.5 text-center border border-neutral-700">
                  <p className="text-[10px] font-bold text-emerald-400">{s.value}</p>
                  <p className="text-[6px] text-neutral-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-800 overflow-hidden">
          <div className="px-3 py-1.5 border-b border-neutral-700">
            <span className="text-[9px] font-semibold text-neutral-300">Camera Grid</span>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-0.5 p-1">
            {[{id:'CAM01',faceId:'042',status:'TRACKING'},{id:'CAM02',faceId:'017',status:'TRACKING'},{id:'CAM03',faceId:null,status:'IDLE'},{id:'CAM04',faceId:'091',status:'TRACKING'}].map((cam) => (
              <div key={cam.id} className="relative bg-neutral-900 rounded overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 80 70" className="w-full h-full">
                  <rect width="80" height="70" fill="#111827"/>
                  {cam.faceId ? (
                    <>
                      <ellipse cx="40" cy="30" rx="14" ry="18" fill="#374151"/>
                      <ellipse cx="40" cy="55" rx="20" ry="12" fill="#374151"/>
                      <rect x="22" y="10" width="36" height="42" rx="2" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
                      <path d="M22,14 L22,10 L26,10" fill="none" stroke="#22c55e" strokeWidth="2"/>
                      <path d="M54,14 L54,10 L50,10" fill="none" stroke="#22c55e" strokeWidth="2"/>
                      <path d="M22,48 L22,52 L26,52" fill="none" stroke="#22c55e" strokeWidth="2"/>
                      <path d="M54,48 L54,52 L50,52" fill="none" stroke="#22c55e" strokeWidth="2"/>
                      <rect x="22" y="2" width="20" height="8" rx="1" fill="#22c55e"/>
                      <text x="32" y="8" textAnchor="middle" fontSize="5" fill="black" fontWeight="bold">ID:{cam.faceId}</text>
                    </>
                  ) : (
                    <text x="40" y="38" textAnchor="middle" fontSize="7" fill="#4b5563">No Face</text>
                  )}
                  <text x="4" y="65" fontSize="5" fill="#6b7280">{cam.id}</text>
                  <circle cx="74" cy="64" r="3" fill={cam.status==='TRACKING'?'#22c55e':'#6b7280'}/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function ProjectPreview({ type }: { type: PreviewType }) {
  switch (type) {
    case 'chatbot-db':          return <ChatbotDBPreview />
    case 'ecommerce-chatbot':   return <EcommerceChatbotPreview />
    case 'knowledge-chatbot':   return <KnowledgeChatbotPreview />
    case 'ai-ocr':              return <AiOcrPreview />
    case 'retail-tracking':     return <RetailTrackingPreview />
    case 'billboard-analytics': return <BillboardAnalyticsPreview />
    case 'facetracking-edge':   return <FacetrackingEdgePreview />
  }
}

/* ── Icons ────────────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.909-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

/* ── Status badge ─────────────────────────────────── */
const statusStyle: Record<Project['status'], string> = {
  Live: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Archived: 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
}

/* ── Compact grid card ────────────────────────────── */
function CompactCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const theme = cardTheme[project.id]
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-border bg-background overflow-hidden cursor-pointer
                 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-700
                 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {/* Gradient header */}
      <div className={`relative h-40 bg-gradient-to-br ${theme.gradient} overflow-hidden flex flex-col items-center justify-center gap-3`}>
        {/* Subtle dot-grid pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`dots-${project.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${project.id})`}/>
        </svg>

        {/* Icon */}
        <span className="text-4xl drop-shadow-lg relative z-10">{theme.icon}</span>

        {/* Status pill */}
        <span className="relative z-10 text-[9px] font-semibold px-2.5 py-1 rounded-full bg-black/20 text-white border border-white/20 backdrop-blur-sm">
          {project.status}
        </span>

        {/* "Click to expand" hint on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-end justify-end p-3">
          <span className="text-[8px] text-white/0 group-hover:text-white/80 transition-colors duration-200 font-medium">
            View details →
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[9px] font-semibold text-blue-500 dark:text-blue-400 mb-1.5 truncate">{project.company}</p>
        <h3 className="text-sm font-bold text-foreground leading-snug mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t.label} className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${t.color}`}>{t.label}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[9px] text-muted-foreground px-1 self-center">+{project.tech.length - 3}</span>
          )}
        </div>
      </div>
    </button>
  )
}

/* ── Expanded modal ───────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true))
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 250)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-250 ${visible ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div
        className={`relative bg-background rounded-2xl border border-border w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl
                    transition-all duration-250 ${visible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Preview */}
        <div className="p-5 pb-0 bg-gradient-to-b from-blue-50/60 dark:from-blue-950/20 to-transparent">
          <ProjectPreview type={project.preview} />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Company */}
          <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-2 flex items-center gap-1.5">
            <span className="inline-block w-3 h-px bg-blue-500 dark:bg-blue-400" />
            {project.company}
          </p>

          {/* Title + status */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-xl font-bold text-foreground leading-snug">{project.title}</h2>
            <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${statusStyle[project.status]}`}>
              {project.status}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mb-4">{project.tagline}</p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          {/* Features */}
          <div className="mb-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Key Features</p>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
              {project.features.map((f) => (
                <li key={f.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 shrink-0">{f.icon}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className={project.demoUrl || project.githubUrl ? 'mb-6' : ''}>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t.label} className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${t.color}`}>{t.label}</span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          {(project.demoUrl || project.githubUrl) && (
            <div className="flex gap-2.5 pt-4 border-t border-border">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                  <ExternalLinkIcon />Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-border hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <GithubIcon />Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Main export ──────────────────────────────────── */
export function ProjectsGrid() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      {/* 3-column responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <CompactCard key={project.id} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      {/* Coming soon placeholder */}
      <div className="mt-10 rounded-2xl border border-dashed border-border p-10 flex flex-col items-center justify-center text-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
        <p className="text-sm font-medium text-foreground">More projects coming soon</p>
        <p className="text-xs text-muted-foreground max-w-xs">
          Working on GraphRAG visualizer, Edge AI deployment toolkit, and more. Stay tuned.
        </p>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
