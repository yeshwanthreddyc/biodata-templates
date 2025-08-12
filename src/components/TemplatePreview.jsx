import React from "react";
import TemplateClassic from "../templates/TemplateClassic";
import TemplateModern from "../templates/TemplateModern";
import TemplateElegant from "../templates/TemplateElegant";
//import  { useRef } from "react";
//import PdfGenerator from "./PdfGenerator";


export default function TemplatePreview({ formData, selectedTemplate }) {
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <TemplateModern data={formData} />;
      case "elegant":
        return <TemplateElegant data={formData} />;
      default:
        return <TemplateClassic data={formData} />;
    }
  };

  return (
    <div className="preview-container">
      <h2>Preview</h2>
      {renderTemplate()}
    </div>
  );
}