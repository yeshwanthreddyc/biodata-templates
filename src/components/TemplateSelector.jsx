import React from "react";

export default function TemplateSelector({ selected, onChange }) {
  return (
    <div className="selector-container">
      <h2>Select Template</h2>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="classic">Classic</option>
        <option value="modern">Modern</option>
        <option value="elegant">Elegant</option>
      </select>
    </div>
  );
}
