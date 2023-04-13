import { useRef } from 'react';
import React from 'react'





const Resume = () => {
    const linkRef = useRef(null)
    const handleDownload = () => {

       
        const fileURL = URL.createObjectURL(DEResume);
      
        linkRef.current.href = fileURL;
        linkRef.current.download = "DEresume.pdf"
        linkRef.current.click()
    };
    
    return (
    <>
    <div>
    <a ref={linkRef} style={{ display: 'none' }}>
      Download PDF
    </a>
    <button onClick={handleDownload}>Download PDF</button>
  </div>
  </>
  )
} 
export default Resume
