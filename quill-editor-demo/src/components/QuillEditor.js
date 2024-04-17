import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({ initialContent, onSubmit }) => {
  const [content, setContent] = useState(initialContent || "");

  const handleInputChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    onSubmit(content);
  };

  // Define prop types
  QuillEditor.propTypes = {
    initialContent: PropTypes.string,
    onSubmit: PropTypes.func.isRequired, // onSubmit is required
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  

  // Override Quill's paste module to preserve classes
  const customModules = {
    toolbar: toolbarOptions,
    
  };

  return (
    <div className="">
      <div>
        <ReactQuill
          value={content}
          theme="snow"
          className="custom-quill"
          modules={customModules}
          onChange={handleInputChange}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default QuillEditor