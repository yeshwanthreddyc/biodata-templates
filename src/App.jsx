import React, { useState } from "react";
import Form from "./components/Form";
import TemplateSelector from "./components/TemplateSelector";
import TemplatePreview from "./components/TemplatePreview";
import PdfGenerator from "./components/PdfGenerator";
import "./styles.css";

function App() {
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  return (
    <div className="app-container">
      <h1>Marriage Biodata Maker</h1>
      <Form onChange={setFormData} />
      <TemplateSelector selected={selectedTemplate} onChange={setSelectedTemplate} />
      <TemplatePreview formData={formData} selectedTemplate={selectedTemplate} />
      <PdfGenerator formData={formData} selectedTemplate={selectedTemplate} />
    </div>
  );
}

export default App;
