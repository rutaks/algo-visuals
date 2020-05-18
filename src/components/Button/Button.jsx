import React from "react";

export default function Button({
  onClick = () => {},
  design = "primary",
  text = "Button",
  disabled = false,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${design}`}
    >
      {text}
    </button>
  );
}
