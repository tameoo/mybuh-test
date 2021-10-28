import React, { useState } from "react";
import "./style.css";

interface IToggleBtn {
  clicked: boolean;
}

const ToggleBtn: React.FC<IToggleBtn> = ({ clicked }) => {
  const [isChecked, setChecked] = useState<boolean>(clicked);
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
      />
      <span className="slider round"></span>
    </label>
  );
};

export { ToggleBtn };
