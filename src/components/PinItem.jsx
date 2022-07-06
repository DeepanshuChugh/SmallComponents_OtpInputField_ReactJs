import React from "react";
import { forwardRef } from "react";
import "../App.css";

const PinItem = forwardRef(({ onChange, onBackSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      onBackSpaceHandler();
    } else {
      onChange(e);
    }
  };
  return (
    <div>
      <input
        className="inputDesign"
        maxLength={1}
        onChange={onChange}
        ref={ref}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
});

export default PinItem;
