import React, { useState, useEffect } from "react";

export default function Form({ onChange }) {
  const [data, setData] = useState({
    name: "",
    age: "",
    gender: "",
    profession: "",
    hobbies: "",
    address: "",
  });

  useEffect(() => {
    onChange(data);
  }, [data, onChange]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Enter Details</h2>
      {Object.keys(data).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={data[key]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
