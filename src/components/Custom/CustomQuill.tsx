"use client"
import React, { useRef, useState } from 'react';
// import Editor from './Editor';


import { CustomInputProps } from "@premieroctet/next-admin";

import "quill/dist/quill.core.css";

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3,4,5,false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image' , 'video' ,'table'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image' ,'video' ,'table', 
]



type Props = CustomInputProps;
const CustomQuill = ({  value, name, onChange, disabled, required }: Props) => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const [values, setValue] = useState(value);

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  return (
    <div className="ReactQuill">
     

    <ReactQuill theme="snow" value={values} onChange={setValue} modules={modules}
    formats={formats} />
    </div>

  );
};

export default CustomQuill;