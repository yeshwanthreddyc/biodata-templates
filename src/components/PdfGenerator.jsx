// src/components/PdfGenerator.jsx
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PdfGenerator = ({ templateRef }) => {
  const downloadPDF = () => {
    const input = templateRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calculate image height to keep proportions
      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
      pdf.save("biodata.pdf");
    });
  };

  return (
    <button
      onClick={downloadPDF}
      style={{ padding: "8px 16px", background: "green", color: "white" }}
    >
      Download Pdf
    </button>
  );
};

export default PdfGenerator;
