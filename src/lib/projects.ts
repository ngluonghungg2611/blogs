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
