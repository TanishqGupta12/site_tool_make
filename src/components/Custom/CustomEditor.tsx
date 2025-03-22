"use client"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';

import React, { useState } from "react";
import 'ckeditor5/ckeditor5.css';


function CustomEditor() {
    console.log(`${process.env.Editer_URL_trail}`);
      const [text, setValue] = useState("");
    return (
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                licenseKey: `eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDM1NTE5OTksImp0aSI6IjJlZTc4NDRkLWU1N2ItNDFjMC1hN2E1LTIzYWFjZDcwNmY1OSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImIyZWM3ZmMzIn0.NP5or-UZG6xxJCnxsZq2DzCSLL7D-LWAeMofpkaf4zWMKtRhZT4YzzBnaWFc7A2OPUE0c9RtRCeIhoO3m-EkAA`, // Or 'GPL'.
                plugins: [ Essentials, Paragraph, Bold, Italic,  ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|' ],
                // initialData: '<p>Hello from CKEditor 5 in React!</p>',
            } }
            data={text}
            onReady={ ( editor ) => {
   
              } }
            onChange={ (event , editor) => {
                const data = editor.getData();
                setValue(data)
                
            } }
        />
    );
}

export default CustomEditor;