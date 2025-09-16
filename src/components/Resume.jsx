import React from 'react';
import './Resume.css';

export default function Resume() {
  const pdfUrl = `${window.location.origin}/resume-website/resume.pdf`;
  
  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }
      const blob = await response.blob();
      // Create a blob with explicit PDF MIME type
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      // Create a blob URL for the PDF
      const url = window.URL.createObjectURL(pdfBlob);
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Noah_Berry_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Clean up the blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // If download fails, open in new tab as fallback
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <p>Download my resume below:</p>
      <button 
        onClick={handleDownload}
        className="download-button">
        Download Resume (PDF)
      </button>
      <p className="view-note">
        <a 
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="view-link">
          View PDF in browser
        </a>
      </p>
    </section>
  );
}
