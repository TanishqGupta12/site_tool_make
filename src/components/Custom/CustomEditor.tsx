"use client"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';
import React, { useState, useEffect } from "react";validateHeaderValue
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import { validateHeaderValue } from 'node:http';

function CustomEditor() {
    console.log(`${process.env.Editer_URL_trail}`);
      const [text, setValue] = useState("");
    return (
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                licenseKey: `${process.env.REACT_APP_EDITOR_URL}`, // Or 'GPL'.
                plugins: [ Essentials, Paragraph, Bold, Italic, FormatPainter ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ],
                // initialData: '<p>Hello from CKEditor 5 in React!</p>',
            } }
            data={text}
            onReady={ ( editor ) => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor 2 is ready to use!', editor );
              } }
            onChange={ (event , editor) => {
                const data = editor.getData();
                setValue(data)
                
            } }
        />
    );
}

export default CustomEditor;