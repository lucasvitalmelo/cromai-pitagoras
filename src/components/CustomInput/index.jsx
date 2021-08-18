import React from "react";

function CustomInput({
  value,
  onChange,
  label,
  readOnly = false,
  isButton = false,
}) {
  return (
    <div className="input-group mt-3">
      {isButton && (
        <button
          className="bg-transparent btn btn-outline-light text-light"
          type="submit"
          id="button-addon1"
        >
          Calcular
        </button>
      )}
      <input
        value={value}
        onChange={onChange}
        type="number"
        className="inputCat bg-transparent form-control text-light text-center"
        placeholder={label}
        required
        readOnly={readOnly}
      />
    </div>
  );
}

export default CustomInput;
