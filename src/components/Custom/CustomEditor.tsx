"use client"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function CustomEditor() {
    console.log(`${process.env.Editer_URL_trail}`);
    
    return (
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                licenseKey: `${process.env.Editer_URL}`, // Or 'GPL'.
                plugins: [ Essentials, Paragraph, Bold, Italic, FormatPainter ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ],
                // initialData: '<p>Hello from CKEditor 5 in React!</p>',
            } }
            data='<p>Hello from the second editor working with the context!</p>'
            onReady={ ( editor ) => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor 2 is ready to use!', editor );
              } }
        />
    );
}

export default CustomEditor;