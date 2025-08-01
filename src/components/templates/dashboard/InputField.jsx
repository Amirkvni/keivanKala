import React from "react";

function InputField({ label, name, value, type = "text", onChange }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="edit-profile-input p-2 rounded-md outline-none"
      />
    </div>
  );
}

export default InputField;
