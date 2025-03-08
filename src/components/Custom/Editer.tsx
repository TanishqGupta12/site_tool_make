"use client";


import { useEditor,  EditorContent, FloatingMenu, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { CustomInputProps } from "@premieroctet/next-admin";

type Props = CustomInputProps;

function Editer( { value, name, onChange, disabled, required }: Props ) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
      })

      return (
        <>
          <EditorContent editor={editor} />
          <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
          <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </>
      )
}

export default Editer;
