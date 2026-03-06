import React from "react";

function DynamicList({ title, list, setList }) {

  const addRow = () => {
    setList([...list, ""]);
  };

  const removeRow = (index) => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
  };

  const updateRow = (value, index) => {
    const updated = [...list];
    updated[index] = value;
    setList(updated);
  };

  return (
    <div>

      <h3>{title}</h3>

      {list.map((item, index) => (
        <div key={index} className="dynamic-row">

          <input
            type="text"
            value={item}
            onChange={(e) => updateRow(e.target.value, index)}
          />

          <button
            type="button"
            onClick={() => removeRow(index)}
            className="remove-btn"
          >
            ✕
          </button>

        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="add-btn"
      >
        + Add
      </button>

    </div>
  );
}

export default DynamicList;