import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme

const Texteditor = () => {
    const placeholder = 'Type body here...';
    const formats = ['size']
    const {quillRef} = useQuill({placeholder, formats});
    return (
        <div style={{ width: 1000, 
        height: 450,
        }} >
            <div ref={quillRef} />
        </div>
    );
};

export default Texteditor;