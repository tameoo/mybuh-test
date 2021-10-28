import React, { useState } from "react";
import "./style.css";

interface IInput {
  label: string;
  id: string;
  type: string;
  value?: string;
  showLabel?: boolean;
  onWrite?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  label,
  id,
  type,
  value = "",
  showLabel = true,
}) => {
  const [inputValue, setValue] = useState<string>(value);
  return (
    <div className="input-controll">
      <input
        id={id}
        type={type}
        name={id}
        value={inputValue}
        placeholder=" "
        autoComplete="off"
        className="text-input"
        onChange={(e) => setValue(e.target.value)}
      />
      {showLabel && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
    </div>
  );
};

export { Input };
