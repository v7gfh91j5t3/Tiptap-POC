'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm m-5 focus:outline-none',
      },
    },
  })

  if (!editor) {
    return null
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
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded ${
            editor.isActive('underline') ? 'bg-blue-500 text-white' : 'bg-gray-400'
          }`}
        >
          <u>U</u>
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
      </div>

      <EditorContent
        editor={editor}
        className="editor-content focus:outline-none min-h-[200px] border-2 border-gray-300 p-2 text-gray-500"
      />
    </div>
  )
}

export default Editor
