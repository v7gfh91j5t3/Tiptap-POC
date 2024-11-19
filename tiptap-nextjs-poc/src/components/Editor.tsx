'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import { Link } from '@tiptap/extension-link'  // Correção: importação correta do Link
import { Image } from '@tiptap/extension-image'  // Correção: importação correta da Image
import { useState } from 'react'

const Editor = () => {
  const [url, setUrl] = useState('')

  const editor = useEditor({
    content: '',
    autofocus: true,
    extensions: [
      StarterKit,
      Document,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
      OrderedList,
      ListItem,
      Link.configure({
        openOnClick: true,
      }),
      Image.configure({
        inline: true,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  })

  if (!editor) {
    return null
  }

  const handleInsertLink = () => {
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
      setUrl('')
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 bg-gray-300 p-4 rounded-t-lg">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${
            editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-gray-400'
          }`}
        >
          <b>B</b>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${
            editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-gray-400'
          }`}
        >
          <i>I</i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded ${
            editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-gray-400'
          }`}
        >
          <s>S</s>
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 bg-gray-400 rounded hover:bg-gray-400"
        >
          ↺ Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 bg-gray-400 rounded hover:bg-gray-400"
        >
          ↻ Redo
        </button>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Link URL"
          className="p-2 rounded text-sm text-gray-500 border border-gray-300"
        />
        <button
          onClick={handleInsertLink}
          className="p-2 bg-gray-400 rounded hover:bg-gray-400"
        >
          Insert Link
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="editor-content focus:outline-none min-h-[200px] border-2 border-gray-300 p-2 text-gray-500"
      />
    </div>
  )
}

export default Editor
