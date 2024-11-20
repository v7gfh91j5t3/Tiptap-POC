'use client'

import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../components/Editor'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <h1 className="text-3xl text-gray-400 font-bold mb-6">TipTap Editor POC</h1>
      <Editor />

    </main>
  )
}
