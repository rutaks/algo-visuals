import React from "react";

export default function Button({
  onClick,
  design = "primary",
  text = "Button",
}) {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${design}`}>
      {text}
    </button>
  );
}
