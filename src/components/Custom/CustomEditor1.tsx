"use client";
import 'ckeditor5/ckeditor5.css';
import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';

import { ClassicEditor, Essentials, Paragraph, Bold, Italic, Underline, FontSize, Image, Table, ImageToolbar, Link, BlockQuote, Heading } from 'ckeditor5';



// Secret token and CKEditor license key
const secret: string = process.env.REACT_APP_SECRET || ""; // Ensure you use the appropriate secret token
const licenseKey: string = `eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDM4OTc1OTksImp0aSI6IjMxNDhjMTY2LWFhNzEtNDU5NS04OGM2LTQ3MTJlZjNhNTZmMyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjU5ODBjYTA2In0.hIAbFg3WHszuYAhtBRH4WrMF23fBEevLMIXP95zgdhlFv1r2ECK771jWtywvQy-hiZoGT7tEGUL8iDEqJCL6mg`; // Replace this with your actual license key if necessary

function CustomEditor() {

  const [text, setValue] = useState("");

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        licenseKey: licenseKey, // Your CKEditor license key
        plugins: [
            Essentials,
            Paragraph,
            Bold,
            Italic,
            Underline,
            FontSize,
            Image,
            Table,
            ImageToolbar,
            Link,
            BlockQuote,
            Heading,
        ],
        toolbar: [
            'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'strikethrough', '|',
            'fontSize', '|',
            'alignment', '|',
            'numberedList', 'bulletedList', '|',
            'insertTable', 'link', '|',
            'blockQuote', 'imageUpload', '|', 
            'heading', '|',
        ],
        fontSize: {
          options: [
            9, 11, 13, 16, 18, 24, 36
          ]
        },
        // You can configure the toolbar with more buttons
        // Feel free to add or remove more toolbar items depending on your needs.
      }}
      data={text}
      onReady={(editor) => {
        // Initialization logic if needed
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setValue(data); // Updating the editor data
      }}
    />
  );
}

export default CustomEditor;