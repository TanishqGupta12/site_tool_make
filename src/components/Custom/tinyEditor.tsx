"use client";

import React from 'react';
import { useRef } from "react";
import { CustomInputProps } from "@premieroctet/next-admin";


type Props = CustomInputProps;

import { Editor } from '@tinymce/tinymce-react';

const TinyEditor = ({ value, name, onChange, disabled, required }: Props) => {
    const editorRef = useRef(null);
  
    return (
      <Editor
        id={name}
        apiKey="zw3dva9625gy6dxfc9btmomsyw0oca26i6mw8jnc35fiamfd" // Replace with your TinyMCE API key if needed
        initialValue={value}
        onEditorChange={(content) => onChange?.(content)}
        disabled={disabled} // Controls whether the editor is read-only
        init={{
          menubar: true,
          plugins: "link table lists code",
          toolbar: "undo redo | bold italic | alignleft aligncenter alignright | link table",
          setup: (editor) => {
            editor.on("init", () => {
              if (disabled) {
                editor.mode.set("readonly"); // Set editor to readonly when disabled
              } else {
                editor.mode.set("design"); // Ensure editor is in editable mode
              }
            });
          },
        }}
      />
    );
  };
  
  export default TinyEditor;

// const TinyEditor = ({ value, name, onChange, disabled, required }: Props) => {
//   return (
//     <Editor
//       apiKey='zw3dva9625gy6dxfc9btmomsyw0oca26i6mw8jnc35fiamfd'
//       init={{
//         plugins: [
//           // Core editing features
//           'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
//           // Your account includes a free trial of TinyMCE premium features
//           // Try the most popular premium features until Mar 21, 2025:
//           'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
//         ],
//         toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//         tinycomments_mode: 'embedded',
//         tinycomments_author: 'Author name',
//         mergetags_list: [
//           { value: 'First.Name', title: 'First Name' },
//           { value: 'Email', title: 'Email' },
//         ],
        
//       }}
//       initialValue="Welcome to TinyMCE!"
//     />
//   );
// }
// export default TinyEditor;