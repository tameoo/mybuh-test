import React from "react";
import "./style.css";

interface ITableInput {
  value: string;
  visible: boolean;
  setValue: (value: string) => void;
}

const TableInput: React.FC<ITableInput> = ({ value, visible, setValue }) => {
  return (
    <input
      id="fullname"
      type="text"
      name="fullname"
      value={value}
      autoComplete="off"
      className={`item-input ${visible ? "border" : ""}`}
      onChange={(e) => setValue(e.target.value)}
      readOnly={!visible}
    />
  );
};

export { TableInput };
