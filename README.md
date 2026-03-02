# Tech Blog

A minimal, fast personal technology blog built with Next.js 14 App Router, TypeScript, TailwindCSS, and MDX.

## Stack

- **Framework**: Next.js 14 (App Router, SSG)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS + `@tailwindcss/typography`
- **Content**: MDX via `next-mdx-remote` + `gray-matter`
- **Theme**: `next-themes` (dark/light/system)
- **Syntax Highlighting**: `rehype-highlight`
- **Fonts**: Inter + Fira Code (via `next/font`)

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file
cp .env.local.example .env.local
# Edit .env.local with your domain

# Run dev server
npm run dev
```

## Adding Posts

Create a new `.mdx` file in `src/content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2024-04-01"
tags: ["typescript", "nextjs"]
author: "Your Name"
authorTitle: "Your Role"
excerpt: "A one-sentence summary of the post."
draft: false
---

## Introduction

Your content here...
```

Set `draft: true` to exclude a post from the published list.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── blog/         # BlogCard, Tag, TOC, ShareButtons, AuthorCard
│   ├── layout/       # Navbar, Footer, ReadingProgressBar
│   ├── mdx/          # MDXComponents, CodeBlock, MDXRenderer
│   └── ui/           # ThemeProvider, ThemeToggle
├── content/posts/    # .mdx post files
├── lib/              # posts.ts, mdx.ts, metadata.ts, utils.ts
├── styles/           # globals.css
└── types/            # TypeScript interfaces
```

## Deployment

```bash
npm run build
npm start
```

Or deploy to Vercel with zero config.
