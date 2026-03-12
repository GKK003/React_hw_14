import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.active ? props.color : undefined }}
      className="flex items-center gap-4 px-4 py-2 border-[rgba(255,255,255,0.2)] border w-full h-[48px] hover:bg-[rgba(216,216,216,0.2)] cursor-pointer sm:border-none sm:justify-center"
    >
      <span className="sm:hidden">{props.num}</span>
      <span>
        <span className="sm:hidden">{props.span}</span>
        {props.text}
      </span>
    </button>
  );
}

export default Button;
