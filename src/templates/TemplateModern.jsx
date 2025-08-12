import React from "react";

export default function TemplateModern({ data }) {
  return (
    <div style={{ background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Marriage Biodata</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><b>Name:</b> {data.name}</li>
        <li><b>Age:</b> {data.age}</li>
        <li><b>Gender:</b> {data.gender}</li>
        <li><b>Profession:</b> {data.profession}</li>
        <li><b>Hobbies:</b> {data.hobbies}</li>
        <li><b>Address:</b> {data.address}</li>
      </ul>
    </div>
  );
}
