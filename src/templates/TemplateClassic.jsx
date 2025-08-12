import React from "react";

export default function TemplateClassic({ data }) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Marriage Biodata</h2>
      <p><b>Name:</b> {data.name}</p>
      <p><b>Age:</b> {data.age}</p>
      <p><b>Gender:</b> {data.gender}</p>
      <p><b>Profession:</b> {data.profession}</p>
      <p><b>Hobbies:</b> {data.hobbies}</p>
      <p><b>Address:</b> {data.address}</p>
    </div>
  );
}
