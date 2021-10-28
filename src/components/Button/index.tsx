import React from "react";
import "./style.css";

interface IModal {
  text: string;
  clazz: string;
  onSave?: () => void;
}

const Button: React.FC<IModal> = ({ text, clazz, onSave }) => {
  return (
    <button className={`btn ${clazz}`} onClick={onSave}>
      {text}
    </button>
  );
};

export { Button };
