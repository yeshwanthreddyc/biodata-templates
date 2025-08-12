import React from "react";

export default function TemplateElegant({ data }) {
  return (
    <div style={{ padding: "20px", fontFamily: "serif", border: "1px dashed gray" }}>
      <h1 style={{ textAlign: "center", fontStyle: "italic" }}>Marriage Biodata</h1>
      <p><em>Name:</em> {data.name}</p>
      <p><em>Age:</em> {data.age}</p>
      <p><em>Gender:</em> {data.gender}</p>
      <p><em>Profession:</em> {data.profession}</p>
      <p><em>Hobbies:</em> {data.hobbies}</p>
      <p><em>Address:</em> {data.address}</p>
    </div>
  );
}
