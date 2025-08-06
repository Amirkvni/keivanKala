"use client";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function ProductAttributes({ attributes, setMainProduct, mainProduct }) {
  const removeHandler = (keyToRemove) => {
    const filteredAttributes = Object.fromEntries(
      Object.entries(mainProduct.attributes).filter(
        ([key]) => key !== keyToRemove
      )
    );

    setMainProduct({
      ...mainProduct,
      attributes: filteredAttributes,
    });
  };

  const handleChange = (oldKey, newKey, newValue) => {
    const updatedAttributes = { ...attributes };
    delete updatedAttributes[oldKey];
    updatedAttributes[newKey] = newValue;

    setMainProduct({
      ...mainProduct,
      attributes: updatedAttributes,
    });
  };
  const addAttribute = () => {
    const baseKey = "عنوان";
    const keys = Object.keys(mainProduct.attributes);

    let counter = 1;
    let newKey = baseKey;
    while (keys.includes(newKey)) {
      counter++;
      newKey = `${baseKey} ${counter}`;
    }

    const updatedAttributes = {
      ...mainProduct.attributes,
      [newKey]: "توضیحات",
    };

    setMainProduct({
      ...mainProduct,
      attributes: updatedAttributes,
    });
  };

  return (
    <div className="bg-white dashboard-box-shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="font-extrabold text-lg">ویژگی های محصول</span>
        <button
          className="bg-green-400 rounded-lg p-2 cursor-pointer text-white"
          onClick={() => addAttribute()}
        >
          افزودن
        </button>
      </div>

      <div className="flex flex-col gap-y-3">
        {Object.entries(attributes).map(([key, value], index) => (
          <div
            key={index}
            className="flex items-center gap-x-3 [&>input]:p-2 [&>input]:rounded-sm"
          >
            <input
              type="text"
              className="edit-profile-input"
              defaultValue={key}
              onChange={(e) => handleChange(key, e.target.value, value)}
              placeholder="عنوان"
            />
            <span>:</span>
            <input
              type="text"
              className="edit-profile-input"
              defaultValue={value}
              onChange={(e) => handleChange(key, key, e.target.value)}
              placeholder="توضیحات"
            />
            <button
              onClick={() => removeHandler(key)}
              className="text-xl text-red-600 cursor-pointer"
            >
              <MdDeleteOutline />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductAttributes;
